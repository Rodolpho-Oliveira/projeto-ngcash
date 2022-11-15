import { User } from "@prisma/client"
import { Request, Response } from "express"
import { signUpService, singInService } from "../services/userService.js"

export type CreateUserData = Omit<User, "id" | "accountId">

export async function signUp(req: Request, res: Response) {
    const {name, password}: CreateUserData = req.body
    await signUpService({password, name})
    res.sendStatus(201)
}

export async function signIn(req: Request, res: Response) {
    const {name, password}: {name: string, password: string} = req.body
    const token = await singInService({name, password})
    res.status(200).send(token)
}