export default class CustomerModel{
    constructor(id,firstName,lastName,mobile,email,address){
        this._id = id;
        this._firstName = firstName;
        this._lastName = lastName;
        this._mobile = mobile;
        this._email = email;
        this._addrss = address;
    }
    get id(){
        return this._id;
    }
    set id(id){
        this._id = id;
    }
    get firstName(){
        return this._firstName;
    }
    set firstName(firstName){
        this._firstName = firstName;
    }
    get lastName(){
        return this._lastName;
    }
    set lastName(lastName){
        this._lastName = lastName;
    }
    get mobile(){
        return this._mobile;
    }
    set mobile(mobile){
        this._mobile = mobile;
    }
    get email(){
        return this._email;
    }
    set email(email){
        this._email = email;
    }
    get address(){
        return this._addrss;
    }
    set address(address){
        this._addrss = address;
    }
}