import { db } from "../app/database.js";

export async function createNewAccount() {
    const {id} = await db.accounts.create({
        data: {
            balance: 100,
        },
    })
    return id
}