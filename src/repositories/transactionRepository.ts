import { db } from "../app/database.js"

export async function insertTransaction(value: number, creditedAccountId: number, debitedAccount: number){
    await db.transaction.create({
        data:{
            value: value,
            creditedAccountId: creditedAccountId,
            debitedAccountId: debitedAccount
        }
    })

    await db.accounts.update({
        where: {
            id: creditedAccountId
        },
        data: {
            balance: {
                increment: value
            }
        }})

    await db.accounts.update({
        where: {
            id: debitedAccount
        },
        data: {
            balance: {
                decrement: value
            }
        }})
}

export async function getTransactionByAccountId(id: number){
    return await db.transaction.findMany({
        where: {
            OR: [
                {creditedAccountId: id},
                {debitedAccountId: id}
            ]
        }
    })
}