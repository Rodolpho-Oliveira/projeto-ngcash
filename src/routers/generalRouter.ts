import { Router } from "express"
import accountRouter from "./accountRouter.js"
import transactionRouter from "./transactionRouter.js"
import userRouter from "./userRouter.js"

const router = Router()

router.use(userRouter)
router.use(accountRouter)
router.use(transactionRouter)

export default router