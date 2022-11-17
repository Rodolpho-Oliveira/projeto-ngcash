import bcrypt from "bcrypt"
import jwt from "jsonwebtoken"
import { checkUserName, createNewUser } from "../repositories/userRepository.js";
import { CreateUserData } from "../controllers/userController.js";
import { createNewAccount } from "../repositories/accountRepository.js";

export async function signUpService({password, name}: CreateUserData) {
    const check = await checkUserName(name)
    if(check){
        throw {type: "Name already in use", status: 403}
    }
    password = bcrypt.hashSync(password, 10)

    const accountId = await createNewAccount()
    await createNewUser({password, name}, accountId)
}

export async function singInService({name, password}: {name: string, password: string}) {
    const check = await checkUserName(name)
    if(!check){
        throw {type: "Wrong name", status: 401}
    }

    const passwordCheck = await bcrypt.compare(password, check.password)
    if(!passwordCheck){
        throw {type: "Wrong password", status: 401}
    }

    const JWT = process.env.JWT_TOKEN

    const token = jwt.sign({ name: check.name }, JWT)
    return [token, check.id]
}