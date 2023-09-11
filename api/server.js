
// require your posts router and connect it here
const express = require('express');
const postRoutes = require('./posts/posts-router');
// invoke
const server = express();
// use
server.use(express.json());
server.use('/api/posts', postRoutes)

// export
module.exports = server;