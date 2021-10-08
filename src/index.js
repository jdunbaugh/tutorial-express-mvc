import 'dotenv/config';
 
console.log('Hello Node.js project.');
 
console.log(process.env.MY_SECRET);

//express stuff//
import cors from 'cors';
import express from 'express';
 
const app = express();
app.use(cors());

app.get('/', (req, res) => {
  res.send('Hello World!');
});
 
app.listen(process.env.PORT, () =>
  console.log(`Example app listening on port ${process.env.PORT}!`),
);