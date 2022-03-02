const http = require('http');
const app = require('./app');
const {loadPlanetData} = require('./models/planets.model');

const server = http.createServer(app);
const PORT = process.env.PORT || 8000;

async function startServer() {
    await loadPlanetData();

    server.listen(PORT, () => {
        console.log(`Listening on PORT ${PORT}`);
    });
}

startServer();
