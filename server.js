const express = require('express');
const app = express();
const cors = require('cors')
const routerProducts = require('./server/routes/product.route');

require('./server/config/mongoose.config');

app.use(cors())
app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use('/', routerProducts);

app.listen(8080, () => {
    console.log('El servidor ya está encendido en el puerto 8080.');
});