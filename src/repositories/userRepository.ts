import { db } from "../app/database.js";
import { CreateUserData } from "../controllers/userController.js";

export async function checkUserName(name: string) {
    return await db.user.findUnique({
        where: {name}
    })
}

export async function createNewUser(createUserData: CreateUserData, accountId: number) {
    return await db.user.create({
        data: {
            ...createUserData,
            accountId,
        }
    })
}