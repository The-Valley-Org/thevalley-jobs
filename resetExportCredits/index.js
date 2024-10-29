const mysql = require('mysql2')
const knex = require('knex')

// Configure connections to both staging and production db
// ENVs are on aws lambda
const devDBConnection = {
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE
}

const prodDBConnection = {
    host: process.env.PROD_DB_HOST,
    user: process.env.PROD_DB_USER,
    password: process.env.DB_PASSWORD, // same password as staging db
    database: process.env.PROD_DB_DATABASE
}

const devDB = knex({
    client: 'mysql2',
    connection: devDBConnection,
});

const prodDB = knex({
    client: 'mysql2',
    connection: prodDBConnection,
});

module.exports.handler = async (event) => {
    try {
        console.log("Resetting export credits...")

        // update export credits in both staging and production
        await devDB('directory_export_credits').where('credits', '<', 10).update({credits: 10});
        await prodDB('directory_export_credits').where('credits', '<', 10).update({credits: 10});

        const response = {
          success: true
        };
        console.log(response);
        return response;
    } catch (error) {
        console.log("error: ", error)
    }
};