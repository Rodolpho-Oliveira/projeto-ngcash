import { Router } from "express"
import { getBalance } from "../controllers/accountController.js"
import { validateAccountId, validateToken } from "../middlewares/authMiddleware.js"

const accountRouter = Router()

accountRouter.get("/home/:id", validateToken, validateAccountId, getBalance)

export default accountRouter