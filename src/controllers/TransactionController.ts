import { Request, Response } from 'express'
import { checkTransactionInfo } from '../services/transactionServices.js'

export async function makeTransaction(req: Request, res: Response){
    const { value, name } = req.body
    const { id } = req.params

    await checkTransactionInfo(value, parseInt(id), name)

    res.sendStatus(201)
}