import { Request, Response } from "express"
import { getAccountByuserId } from "../repositories/accountRepository.js"

export async function getBalance(req: Request, res: Response) {
    const id = req.params.id
    const balance = await getAccountByuserId(parseInt(id))
    res.status(200).send(balance)
}