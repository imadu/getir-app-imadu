import env from "../common/config/env"
import express from "express"
import mongoose from "mongoose"
import { appRoutes } from "./routes"


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
        this.app.use(express.urlencoded({ extended: false }));
        this.app.use(express.json());
        this.app.use('/', appRoutes);
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