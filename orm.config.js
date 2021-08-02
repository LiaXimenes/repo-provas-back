require ('dotenv').config();

module.export = {
    type:"postgres",
    url: process.env.DATABASE_URL,
    entities:["dist/entities/*.js"],
    ssl: {
        rejectUnauthorized: false,
    }, cli: {
        entitiesDir:"dist/entities/*.js"
    }
    
};