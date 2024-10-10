import { User } from './user';


export class Administrateur extends User{
    constructor(
        id:Number,
        nom: string,
        prenom: string,
        email: string,
        numtel: number,
        type: string,
        password: string,
        typeAd:String,
        role:String,
        dtype:string,
    ) {
        super(id,nom, prenom, email, numtel, type, password,dtype);
    }
}
