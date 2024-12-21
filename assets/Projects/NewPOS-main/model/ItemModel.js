export default class ItemModel{
    constructor(id,item,price,qty,desc){
        this._id = id;
        this._item = item;
        this._price = price;
        this._qty = qty;
        this._desc = desc;
    }
    get id(){
        return this._id;
    }
    set id(id){
        this._id = id;
    }
    get item(){
        return this._item;
    }
    set item(item){
        this._item = item;
    }
    get price(){
        return this._price;
    }
    set price(price){
        this._price = price;
    }
    get qty(){
        return this._qty;
    }
    set qty(qty){
        this._qty = qty;
    }
    get desc(){
        return this._desc;
    }
    set desc(desc){
        this._desc = desc;
    }
}