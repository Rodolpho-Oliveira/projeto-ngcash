import { getAccountByuserId } from "../repositories/accountRepository.js"
import { insertTransaction } from "../repositories/transactionRepository.js"
import { checkUserName } from "../repositories/userRepository.js"

export async function checkTransactionInfo(value: number, id: number, name: string) {
    if(!value || !id || !name){
        throw {status: 400, type: "Missing information"}
    }

    const {account} = await getAccountByuserId(id)

    console.log(account)
    if(value < 0 || value > account.balance){
        throw {status: 403, type: "Invalid value"}
    }

    const contact = await checkUserName(name)

    if(!contact){
        throw {status: 404, type: "Contact not found"}
    }

    if(contact.id === id){
        throw {status: 403, type: "You can't make a transaction with yourself"}
    }

    await insertTransaction(value, contact.id, account.id)
}