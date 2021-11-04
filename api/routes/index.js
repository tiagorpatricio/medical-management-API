const dotenv = require('dotenv');
dotenv.config({ path: './.env' });
const express = require('express');

const app = express();
const server = process.env.PORT || '3000'


app.listen(3000, () => {
    console.log(`I'm up and running on port: ${server}`)
})

app.get('/', (req, res) => {
    res.send('Welcome to Medical management (MM), a helpfull tool to manage a medical service.')
})

/*Including the files in the routes folder 
and redirecting requests to them. */

const patientsRoutes = require('../routes/patients')
app.use('/patients', patientsRoutes)



