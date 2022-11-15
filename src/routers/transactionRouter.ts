import { Router } from "express"
import { makeTransaction } from "../controllers/TransactionController.js"
import { validateToken } from "../middlewares/authMiddleware.js"

const transactionRouter = Router()

transactionRouter.post("/transaction/:id", validateToken, makeTransaction)

export default transactionRouter