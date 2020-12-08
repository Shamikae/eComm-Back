const Pool = require('pg').Pool;
const pool = new Pool({
    user: 'postgres',
    host: 'react-crud.cmsd404txic7.us-east-1.rds.amazonaws.com',
    database: 'ecommsite',
    password: 'testpass',
    port: '5432'
});

const getAllUsers = (request, response) => {
    pool.query('SELECT * FROM users', (error, results) => {
        if (error) {
            throw error;
        }
        response.status(200).json(results.rows)
    });
}

// const getUsersById = (request, response) => {
//     const id = parseInt(request.params.id);

//     pool.query('SELECT * FROM users WHERE id = $1', [id], (error, results) => {
//         if (error){
//             throw error;
//         }
//         response.status(200).json(results.rows)
//     });
// }

const addUsers = (request, response) => {
    const { name, email, cart } = request.body;

    pool.query('INSERT INTO users (name, email, cart) VALUES ($1, $2, $3) RETURNING *', [ name, email, cart ], (error, results) => {
        if (error){
            throw error;
        }
        response.status(200).json(results.rows);
        
      
    });
}

// const updateUsersById = (request, response) => {
//     const { name, email, cart[] } = request.body;
//     const id = parseInt(request.params.id);
    
//     pool.query(`
//     UPDATE users SET name = $1, email = $2, cart[] = $3 WHERE id = $4 RETURNING *`,
//     [first_name, last_name, image, email, major, gpa, id], 
//     (error, results) => {
//         if (error){
//             console.log(`User ${id} has been updated.`)
//             throw error;
//         }
//         response.status(200).send(`User ${id} has been updated.`);

//     });
// }

// const deleteUsersById = (request, response) => {
//     const id = parseInt (request.params.id);

//     pool.query('DELETE FROM users WHERE id = $1', [id],(error, results) => {
//         if (error){
//             throw error;
//         }
//         response.status(200).json(results.rows);
//         console.log(`User with id:${id} was deleted.`);
    
//     });
// }

module.exports = {
    getAllUsers,
    addUsers
}
