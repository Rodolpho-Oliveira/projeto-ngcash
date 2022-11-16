import { Request, Response } from 'express'
import { checkTransactionInfo, getTransactionByUser } from '../services/transactionServices.js'

export async function makeTransaction(req: Request, res: Response){
    const { value, name } = req.body
    const { id } = req.params

    await checkTransactionInfo(value, parseInt(id), name)

    res.sendStatus(201)
}

export async function getTransactionById(req: Request, res: Response){
    const { id } = req.params
    const transactions = await getTransactionByUser(parseInt(id))

    res.status(200).send(transactions)
}