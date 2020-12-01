const Pool = require('pg').Pool;
const pool = new Pool({
    user: 'postgres',
    host: 'react-crud.cmsd404txic7.us-east-1.rds.amazonaws.com',
    database: 'ecommsite',
    password: 'testpass',
    port: '5432'
});

const getAllUsers = (request, response) => {
    pool.query('SELECT * FROM users', (error, results) =>{
    if(error) {
        throw error
    }
    response.status(200).json(results.rows)
})
}

module.exports = {
    getAllUsers
}
