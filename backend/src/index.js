import express from 'express';
import {db} from './config/db.js';
const app = express();

//test de conexion railway
app. get('/', async (req, res) => {
    try {
        const [result] = await db.query('SELECT 1 +1 AS result');
        res.json(result[0]);
    } catch (error) {
        console.error(error);
    }
});

app.listen(3000)