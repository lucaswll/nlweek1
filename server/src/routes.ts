import express from 'express'
import PointsController from './controllers/PointsController'
import ItemsController from './controllers/ItemsController'

const routes = express.Router()
const pointsController = new PointsController()
const itemsController = new ItemsController()

routes.post('/points', pointsController.create)
routes.get('/points/:id', pointsController.show) //show - listar 1
routes.get('/points', pointsController.index) //index - listar varios

routes.get('/items', itemsController.index)

export default routes