import { User } from "./user";

export class Enseignant extends User {
    constructor(
        id:Number,
        nom: string,
        prenom: string,
        email: string,
        numtel: number,
        type: string,
        password: string,
        dtype:string,
        private TypeEns: string,
        private CodeEns: string
    ){
        super(id,nom, prenom, email, numtel, type, password,dtype)
    }
}
