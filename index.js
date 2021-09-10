const express = require ('express')
    , app = express()
    , dotenv = require('dotenv')
    , router = require('./routes/index');

app.use('', router);

dotenv.config();
const port = process.env.PORT || 5050
    , env = process.env.NODE_ENV || 'development' 

app.get('/', (req, res) => {
    res.status(200).json({
        success: true,
        message: "Welcome to Playground API"
    });
});

app.get('*', function(req, res){
    res.status(404).send('Page not found! wkwkwk');
});

try{
    app.listen(port, () => {
        console.log(`Server is started at ${Date()} in ${env} and listening on port ${port}`)
    });
} catch(e){
    const errorMessage = `Failed to connect to port, error: ${e.message}`;
    console.error(errorMessage);
}