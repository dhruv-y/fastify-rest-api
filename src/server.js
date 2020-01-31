// Require external mongoose modules
const mongoose = require('mongoose')

// Connect to DB
mongoose.connect("mongodb://localhost/mycargarage")
    .then(() => console.log("MongoDB connected…"))
    .catch(err => console.log(err))

// Require the fastify framework and instantiate it
const fastify = require('fastify')({ logger: true })

// Import routes
const routes = require('./routes')
routes.forEach((route, index) => {
    fastify.route(route)
})

// Decalaring a route 
fastify.get('/', async (req, res) => {
    return { hello: 'world' }
})

// Import Swagger Options
const swagger = require("./config/swagger")
// Register Swagger
fastify.register(require("fastify-swagger"), swagger.options)

// Running the server 
const start = async () => {
    try {
        await fastify.listen(3000)
        fastify.swagger()
        fastify.log.info(`listening on ${fastify.server.address().port}`)
    } catch (err) {
        fastify.log.console.error(err);
        process.exit(1)
    }
}
start()