import CustomerModel from "../model/CustomerModel.js";
import { customer_array } from "../db/database.js";

function clearFields(){
    $('#first-name').val("");
    $('#second-name').val("");
    $('#mobile').val("");
    $('#email').val("");
    $('#address').val("");
    
}
function clearCorrectionFields(){
    $('#correctionName').val("");
    $('#correctionMobile').val("");
    $('#correctionEmail').val("");
    $('#correctionAddress').val("");
}
function setCorrectionFields(customer,fullName){
    $('#correctionName').val(fullName);
    $('#correctionMobile').val(customer.mobile);
    $('#correctionEmail').val(customer.email);
    $('#correctionAddress').val(customer.address);
    return true;
}
let customer;
$('#addbtn').on('click',()=>{
    
    let firstName = $('#first-name').val();
    let lastName = $('#second-name').val();
    let mobile = $('#mobile').val();
    let email = $('#email').val();
    let address = $('#address').val();

    customer = new CustomerModel(customer_array.length+1,firstName,lastName,mobile,email,address);
    let fullName = customer.firstName + " " + customer.lastName;
    setCorrectionFields(customer,fullName);
    clearFields();
    
});

const loadCustomerTable = ()=>{
    $('#customer-table-body').empty();
    let id = 0;
    customer_array.map((item,index) =>{
        let data = `<tr><td>${++id}</td><td>${item.firstName}</td><td>${item.address}</td><td>${item.mobile}</td><td>${item.email}</td></tr>`;
        $('#customer-table-body').append(data);
    });
}

$('#savebtn').on('click',()=>{
    customer_array.push(customer);
    clearCorrectionFields();
    console.log(customer_array);
    loadCustomerTable();
    alert('customer saved successfully!');
});

let index;
$('#customer-table-body').on('click','tr',function(){
    index = $(this).index();
    console.log("clicked",index)
    let customer = customer_array[index];
    console.log(customer);
    $('#first-name').val(customer.firstName);
    $('#second-name').val(customer.lastName);
    $('#mobile').val(customer.mobile);
    $('#email').val(customer.email);
    $('#address').val(customer.address);
    
});
$('#updatebtn').on('click',function(){
    console.log("awooooo");
    let updatedCustomer = new CustomerModel(customer_array[index].id,customer.firstName,customer.lastName,customer.mobile,customer.email,customer.address);
    customer_array[index] = updatedCustomer;
    console.log(customer_array[index]);
    clearCorrectionFields();
    loadCustomerTable();
});
$('#deletebtn').on('click',function(){
    customer_array.pop(customer_array[index]);
    loadCustomerTable();
    clearCorrectionFields();
    alert("delete successfully!!");
});


