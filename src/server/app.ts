import env from "@app/common/config/env"
import express from "express"
import mongoose from "mongoose"


export default  class App{
    public app: express.Application
    private port: number
    private db: string
    constructor(){
        this.app = express()
        this.configure()
    }

    public configure  = () => {
        this.port = Number(env.port);
        this.db = env.mongodb_url;
        const limiter = rateLimit({
            windowMs: 60 * 60 * 1000,
            max: 100
        })
        this.app.use(express.urlencoded({ extended: false }));
        this.app.use(express.json());
        this.app.use('/v1/',limiter, appRoutes);
    }

    public start = () => {
        mongoose.connect(this.db).then(() => {
            console.log('connected to the database')
        }).catch((error: any) => {
            console.log('something went wrong', error)
        })

        this.app.listen(this.port || process.env.PORT)
        console.log(`app running at ${this.port}`)

    }
}