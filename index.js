import express from 'express';
import bodyParser from 'body-parser';
import BookRoute from './controllers/book.js';
import cors from "cors"

import './db.js'

const app = express();

app.use(express.json())
app.use(cors())

// app.use(bodyParser.urlencoded({
//     extended:true
// }))

app.use(bodyParser.json())


app.use('/api/nasa/booking', BookRoute);
app.listen(9000, () => {
    console.log(`Server is running on port 9000`);
})