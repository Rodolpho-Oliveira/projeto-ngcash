import { db } from "../app/database.js";

export async function createNewAccount() {
    const {id} = await db.accounts.create({
        data: {
            balance: 100,
        },
    })
    return id
}

export async function getAccountByuserId(id: number) {
    return await db.user.findUnique({
        where: {id},
        select: {
            id: true,
            name: true,
            account: {
                select: {
                    id: true,
                    balance: true
                }
            }
        }
    })
}