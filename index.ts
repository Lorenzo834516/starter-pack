import 'dotenv/config';
import express from 'express';

const app = express();
const puerto = process.env.PORT || 3000;


app.get('/', (req, res) => {
    res.send('<h1>¡Mi Starter Pack de TypeScript está funcionando! </h1>');
});

app.listen(puerto, () => {
    console.log(`Servidor en línea en: http://localhost:${puerto}`);
});