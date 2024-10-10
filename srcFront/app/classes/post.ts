import { Comments } from "./comments";
import { Like } from "./like";

export class Post {
    constructor( 
        public contenu: string,
        public published: Date,
        public likes: any[],
        public comments: any[]
    ){

    }
}
