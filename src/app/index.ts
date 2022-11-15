import express, {json} from 'express'
import "express-async-errors"
import cors from 'cors'
import router from '../routers/generalRouter.js'
import { errorHandler } from '../middlewares/ErrorHandlerMiddleware.js'

const app = express()
app.use(cors())
app.use(json())

app.use(router)
app.use(errorHandler)


export default app