import { NextFunction, Request, Response } from "express"
import jwt from "jsonwebtoken"
import Joi from "joi"
import { checkUserName } from "../repositories/userRepository.js"

export async function signUpValidation(req: Request, res: Response, next: NextFunction) {
    const signUpValidation = Joi.object({
        password: Joi.string().min(8).regex(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/).required(),
        name: Joi.string().min(3).required()
    })
    const validation = signUpValidation.validate(req.body)
    if(validation.error){
        throw {type: "Wrong infomartion", status: 401}
    }

    next()
}

export async function validateToken(req: Request, res: Response, next: NextFunction) {
    const {authorization} = req.headers
    const JWT = process.env.JWT_TOKEN
    const token = authorization?.replace("Bearer", "").trim()

    if(!token){
        throw {type: "Authorization token not found", status: 401}
    }

    const tokenData = JSON.stringify(jwt.verify(token, JWT))
    const userData: { name: string } = JSON.parse(tokenData)
    if(!userData){
        throw {type: "Authorization token error", status: 401}
    }

    const accountId = await checkUserName(userData.name)
    if(!accountId){
        throw {type: "User not found", status: 401}
    }
    
    res.locals.user = accountId

    next()
}

export async function validateAccountId(req: Request, res: Response, next: NextFunction) {
    const {accountId} = res.locals.user
    const {id} = req.params
    if(accountId !== parseInt(id)){
        throw {type: "Wrong account", status: 401}
    }

    next()
}