import 'babel-polyfill';
import express from 'express';

const HOST = process.env.HOST;
const PORT = process.env.PORT || 8080;

console.log(`Server running in ${process.env.NODE_ENV} mode`);

const app = express();

app.use(express.static(process.env.CLIENT_PATH));
        var cheeses=    [
                    "Bath Blue",
                    "Barkham Blue",
                    "Buxton Blue",
                    "Cheshire Blue",
                    "Devon Blue",
                    "Dorset Blue Vinney",
                    "Dovedale",
                    "Exmoor Blue",
                    "Harbourne Blue",
                    "Lanark Blue",
                    "Lymeswold",
                    "Oxford Blue",
                    "Shropshire Blue",
                    "Stichelton",
                    "Stilton",
                    "Blue Wensleydale",
                    "Yorkshire Blue"
                ];

app.get('/cheeses' , function(req,res){
    res.status(200).json(cheeses);
});



function runServer() {
    return new Promise((resolve, reject) => {
        app.listen(PORT, HOST, (err) => {
            if (err) {
                console.error(err);
                reject(err);
            }

            const host = HOST || 'localhost';
            console.log(`Listening on ${host}:${PORT}`);
        });
    });
}

if (require.main === module) {
    runServer();
}

exports.app = app;