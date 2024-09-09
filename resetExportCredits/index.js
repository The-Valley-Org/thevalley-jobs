const mysql = require('mysql2')
const knex = require('knex')

const connection = {
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE
}

const db = knex({
    client: 'mysql2',
    connection,
});

module.exports.handler = async (event) => {
    try {
        console.log("Resetting export credits...")
        await db('directory_export_credits').where('credits', '<', 10).update({credits: 10});
        const response = {
          success: true
        };
        console.log(response);
        return response;
    } catch (error) {
        console.log("error: ", error)
    }
};