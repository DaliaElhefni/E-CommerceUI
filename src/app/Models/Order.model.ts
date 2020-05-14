export class Order {
    _id: string;
    date : Date ;
    address : string ;
    status : string ; 
    totalprice : number ; 
    user: string ;
    products: Array<any>;
}