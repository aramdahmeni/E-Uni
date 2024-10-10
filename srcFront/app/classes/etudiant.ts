import { User } from "./user";

export class Etudiant extends User {
    constructor(
        id:Number,
        nom: string,
        prenom: string,
        email: string,
        numtel: number,
        type: string,
        password: string,
        private typeEt: string,
        private specialite: string,
        dtype: string,
    ){
        super(id,nom, prenom, email, numtel, type, password,dtype);
    }
}
