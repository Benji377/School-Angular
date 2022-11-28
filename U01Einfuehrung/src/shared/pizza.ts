import { ExpirationInterface } from "./expiration-interface";
import { Food } from "./food";

export class Pizza extends Food implements ExpirationInterface {
   constructor(
        public name:string,
        public description:string,
        public expirationDate: Date,
        public price:number,
        public ingredients?:Array<string>
   ) {super(name, description)}

    isExpired(): boolean {
        let currentDate = new Date();
        return this.expirationDate < currentDate;
    }

}
