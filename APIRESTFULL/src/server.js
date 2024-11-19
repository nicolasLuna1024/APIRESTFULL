// Requerir los módulos
import express from 'express'
import morgan from 'morgan'
import routerTour from './routers/tour_routes.js'

// Inicializaciones
const app = express()
app.use(morgan('dev'))


// Variables
app.set('port',process.env.port || 3000)


// Middlewares 
app.use(express.json())


// Rutas 
app.use('/api',routerTour)

// Manejo de una ruta que no sea encontrada
app.use((req,res)=>res.status(404).send("Endpoint no encontrado - 404"))



// Exportar la instancia de express por medio de app
export default  app