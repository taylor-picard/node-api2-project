// require your server and launch it here
const server = require('./api/server');

server.listen(3000, ()=> {
    console.log('server running!')
})