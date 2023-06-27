import express from 'express';
import dotenv from 'dotenv';

dotenv.config();

const port = process.env.PORT
const app = express();

app.get('/', (req, res) => res.send('Hello gift.io!'))

app.listen(port || 3000, () => `🚀 Server running on port ${port}`)