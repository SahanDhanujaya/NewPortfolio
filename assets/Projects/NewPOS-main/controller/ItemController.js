import ItemModel from "../model/ItemModel.js";
import { item_array } from "../db/database.js";

let item;
const fillCorrectionFields = ()=>{
    $('#correctionItem').val(item.item);
    $('#correctionPrice').val(item.price);
    $('#correctionQTY').val(item.qty);
    $('#correctionDescription').val(item.desc);
}

$('#item-add-btn').on('click',function(){
    let item = $('#item').val();
    let price = $('#price').val();
    let qty = $('#qty').val();
    let desc = $('#description').val();

    item = new ItemModel(item_array.length+1,item,price,qty,desc);
    fillCorrectionFields();
});

$('#item-save-btn').on('click',function(){
    item_array.push(item);
    clearFields();
    loadItemTable();
});
const clearFields = ()=>{
    $('#item').val("");
    $('#price').val("");
    $('#qty').val("");
    $('#description').val("");
}
const loadItemTable = ()=>{
    let itemId = 0;
    $('#item-table-body').empty();
    item_array.map((item,index)=>{
        let data = `<tr><td>${++itemId}</td><td>${item.item}</td><td>${item.price}</td><td>${item.qty}</td><td>${item.desc}</td></tr>`;
        $('#item-table-body').append(data);
    });
}
let index;
$('#item-table-body').on('click','tr',function(){
    index = $(this).index();
    let item = item_array[index];
    $('#item').val(item.item);
    $('#price').val(item.price);
    $('#qty').val(item.qty);
    $('#description').val(item.desc);

});
$('#item-update-btn').on('click',function(){
    item_array[index] = item;
    clearCorrectionFields();
    loadItemTable();
});

const clearCorrectionFields = ()=>{
    $('#correctionItem').val("");
    $('#correctionPrice').val("");
    $('#correctionQTY').val("");
    $('#correctionDescription').val("");
}
$('#item-delete-btn').on('click',function(){
    item_array.pop(item_array[index]);
    clearCorrectionFields();
    loadItemTable();
});


