import { User } from './user.model';

export class Order {
    date : Date ;
    address : string ;
    status : string ; 
    totalprice : number ; 
    user: User ;
    products: Array<any>;
}