export class User {
    _id: string;
    username : string ;
    role : string ;
    email : string ; 
    password : string ; 
    phone: string ;
    gender : string ; 
    profileimage : string ;
    products: Array<any>;
    orders: Array<any>;
}