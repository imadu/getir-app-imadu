import dotenv  from 'dotenv'

dotenv.config()

const requiredVariables = [ 
    'port',
    'mongodb_url'
]

const env = {
    port: Number(process.env.PORT),
    mongodb_url: process.env.MONGODB_URL
}

const missingVariables = requiredVariables.reduce((acc, variable) => {
    const isVariableMissing = !env[variable];
    return isVariableMissing ? acc.concat(variable.toUpperCase()) : acc;
  }, []);
  
  if (!!missingVariables.length)
    throw new Error(
      `The following required variables are missing: ${missingVariables}}`
    );
  
  export default env;