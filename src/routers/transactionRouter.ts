import { Router } from "express"
import { getTransactionById, makeTransaction } from "../controllers/TransactionController.js"
import { validateToken } from "../middlewares/authMiddleware.js"

const transactionRouter = Router()

transactionRouter.post("/transaction/:id", validateToken, makeTransaction)
transactionRouter.get("/transaction/:id", validateToken, getTransactionById)

export default transactionRouter