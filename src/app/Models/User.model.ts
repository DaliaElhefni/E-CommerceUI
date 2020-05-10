import { Order } from './Order.model';

export class User {
    username : string ;
    role : string ;
    email : string ; 
    password : string ; 
    phone: string ;
    gender : string ; 
    profileimage : string ;
    products: Array<any>;
    orders: Array<Order>;
}