// Require the fastify framework and instantiate it
const fastify = require('fastify')({ logger: true })

// Decalaring a route 
fastify.get('/', async (req, res) => {
    return { hello: 'world' }
})

// Running the server 
const start = async () => {
    try {
        await fastify.listen(3000)
        fastify.log.info(`server listening on ${fastify.server.address().port}`)
    } catch (err) {
        fastify.log.console.error(err);
        process.exit(1)
    }
}

start()