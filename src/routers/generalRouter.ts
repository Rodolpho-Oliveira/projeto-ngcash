import { Router } from "express"
import accountRouter from "./accountRouter.js"
import userRouter from "./userRouter.js"

const router = Router()

router.use(userRouter)
router.use(accountRouter)

export default router