import { Request, Response } from "express"
import { getAccountByUserId } from "../repositories/accountRepository.js"

export async function getBalance(req: Request, res: Response) {
    const id = req.params.id
    const balance = await getAccountByUserId(parseInt(id))
    res.status(200).send(balance)
}