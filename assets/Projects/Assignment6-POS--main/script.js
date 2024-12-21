//customer db
let customer_array = [];
console.log("lenght ", customer_array.length);

//load customer table
const loadCustomerTable = () => {
    $("#customerTableBody").empty();
    //create table row
    customer_array.map((item, index) => {
        // To clear the entire table body using jQuery
        let data = `<tr><td>${item.firstName}</td><td>${item.lastName}</td><td>${item.mobile}</td><td>${item.email}</td><td>${item.address}</td>`
        $("#customerTableBody").append(data);
    })
}
let clear = function(){
    $('#firstName').val("");
    $('#lastName').val("");
    $('#mobile').val("");
    $('#email').val("");
    $('#address').val("");
}
//add customer button
$("#customer_add_button").on("click", function () {
    let firstName = $("#firstName").val();
    let lastName = $("#lastName").val();
    let mobile = $("#mobile").val();
    let email = $("#email").val();
    let address = $("#address").val();
    console.log(firstName);
    console.log(lastName);
    console.log(mobile);
    console.log(email);
    console.log(address);

    if($("#firstName").val().length===0){
        alert("please set first name");
        return;
    } else if($("#lastName").val().length===0){
        alert("please set last name");
        return;
    } else if(testEmail(email)){
    }if($("#address").val().length===0){
        alert("please set address");
        return;
    }

    let Customer = {
        id: customer_array.length + 1,
        firstName: firstName,
        lastName: lastName,
        mobile: mobile,
        email: email,
        address: address
    }
    clear();
    customer_array.push(Customer);
    console.log(customer_array);
    loadCustomerTable();
});

// item save page 
let itemArr = [];
const loadItemTable = ()=>{
    $("#itemTableBody").empty();
    itemArr.map((item,index)=>{
        let data = `<tr><td>${item.item_name}</td><td>${item.desc}</td><td>${item.qty}</td><td>${item.price}</td></tr>`
        $("#itemTableBody").append(data);
    });
}
$("#item-add-button").on('click',function(){
   
    alert("ebenoo");
    let item_name = $("#itemName").val();
    let qty = $("#qty").val();
    let desc = $("#desitemDescription").val();
    let price = $("#price").val();

    const Item = {
        id: itemArr+1,
        item_name: item_name,
        qty:qty,
        desc:desc,
        price:price
    }
    
    itemArr.push(Item);
    console.log(itemArr);
    loadItemTable();
    Swal.fire({
        title: "Submit your Github username",
        input: "text",
        inputAttributes: {
          autocapitalize: "off"
        },
        showCancelButton: true,
        confirmButtonText: "Look up",
        showLoaderOnConfirm: true,
        preConfirm: async (login) => {
          try {
            const githubUrl = `
              https://api.github.com/users/${login}
            `;
            const response = await fetch(githubUrl);
            if (!response.ok) {
              return Swal.showValidationMessage(`
                ${JSON.stringify(await response.json())}
              `);
            }
            return response.json();
          } catch (error) {
            Swal.showValidationMessage(`
              Request failed: ${error}
            `);
          }
        },
        allowOutsideClick: () => !Swal.isLoading()
      }).then((result) => {
        if (result.isConfirmed) {
          Swal.fire({
            title: `${result.value.login}'s avatar`,
            imageUrl: result.value.avatar_url
          });
        }
      });
});
let index ;
$("#customerTableBody").on('click','tr',function(){
    index = $(this).index();
    console.log("clecked",index);
    let customer = customer_array[index];
    $('#firstName').val(customer.firstName);
    $('#lastName').val(customer.lastName);
    $('#mobile').val(customer.mobile);
    $('#email').val(customer.email);
    $('#address').val(customer.address);
    
    console.log('id: ',customer.id);
    console.log('fname: ',customer.firstName);
    console.log('lname: ',customer.lastName);
    console.log('address: ',customer.address);
    console.log('mobile: ',customer.mobile);
    console.log('email: ',customer.email);

});
$("#customer_update_button").on("click",function(){

    alert("updated")
    let firstName = $("#firstName").val();
    let lastName = $("#lastName").val();
    let mobile = $("#mobile").val();
    let email = $("#email").val();
    let address = $("#address").val();
    
    let Customer = {
        id: customer_array[index].id,
        firstName: firstName,
        lastName: lastName,
        mobile: mobile,
        email: email,
        address: address
    }

    clear();
    customer_array[index]=Customer;
    loadCustomerTable();
});

$("#customer_delete_button").on("click",function(){
    alert("deleted")
    customer_array.pop(index);
    clear();
    loadCustomerTable();
})
if($("firstName").empty){
    $("")
}
// const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

// const sriLankanMobileRegex = /^(?:\+94|0)?7[0-9]{8}$/;