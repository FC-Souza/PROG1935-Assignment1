/* 
    Fernando Carvalho de Souza
    Fcarvalhodesouz1115@conestogac.on.ca
    #8911115 
*/



//Global Variables
let selectedProduct = "";
let selectedPrice = 0;
let selectedQty = 1;
let total = 0;
let totalPlusTax = 0;
let bagList = "";
let customerName = "";
let taxHST = 0;


//Function to show the quantity popUp
//Get the product and price when clicking the button
function showPopupQty(product, price){
    //Global receiving the arguments received
    selectedProduct = product;
    selectedPrice = price;

    //Reseting the value
    selectedQty = 1;

    //Geting the qty selected
    document.getElementById('qty').value = selectedQty;

    //Shoowing the modal
    document.getElementById('popupqty').showModal();
}

//Funtion to add the product and qty to the bag
function addToBag(){
    //Update the selectedQty with thu user input. Parse to int
    selectedQty = parseInt(document.getElementById('qty').value, 10);

    //Calc the subTotal of each product. Total before tax
    let subTotal = selectedPrice * selectedQty;

    //Geting the id bagList to the element bagList
    bagList = document.getElementById('bagList');
    
    //Creating the element to show the list
    let listItem = document.createElement('li');
    
    //Adding the itens to the list. Formating the subTotal to .00
    listItem.textContent = `${selectedProduct} x${selectedQty} - $${subTotal.toFixed(2)}`;

    //Found on the internet
    //Add the listItem to bagList
    bagList.appendChild(listItem);

    //Update the total before tax
    total += subTotal;

    //Show the total in the bag
    document.getElementById('total').textContent = total.toFixed(2);

    //Calc the tax
    taxHST = total * 0.13;
    totalPlusTax = total + taxHST;

    //Show the tax in the bag
    document.getElementById('taxHST').textContent = taxHST.toFixed(2);

    //Show the total with tax in the bag
    document.getElementById('totalplustax').textContent = totalPlusTax.toFixed(2);

    //Closing the modal
    document.getElementById('popupqty').close();
}

//Functin to increase qty
function incQty(){
    let qtyInput = document.getElementById('qty');
    qtyInput.value = parseInt(qtyInput.value, 10) + 1;
}

//Função para diminuir a quantidade (com mínimo de 1)
function decQty(){
    let qtyInput = document.getElementById('qty');
    let currentQty = parseInt(qtyInput.value, 10);
    //Found on internet
    //Check if currentQty is > 1. If yes, decrease -1. If not, keep 1.
    qtyInput.value = currentQty > 1 ? currentQty - 1 : 1;
}

//Function to show the Name modal
function showPopupName(){
    //Checking if the shopping bag is empty before show the popup name
    if (bagList.childNodes.length === 0) {
        alert("Shopping Bag is empty!");
    } else{
        document.getElementById('popupName').showModal();
    }
}

//Function to get the name
//Checks if a name was inputed
function getName(){
    //Get the name inputed
    customerName = document.getElementById('customerName').value;

    //Checks if has any input. Removing blank spaces with trim
    if (customerName.trim() !== "") {
        showPopupReceipt();
    }
    //If customerName is null 
    else {
        //Show message to insert a valid name
        alert("Please, insert a valid name! TRY AGAIN.");
    }
}

// //Function to show the Receipt as a Modal
function showPopupReceipt() {


    //Reseting the list
    document.getElementById('receiptList').innerHTML = "";

    //Get each item from the bagList and insert into listItem
    for (let i = 0; i < bagList.childNodes.length; i++) {
        let listItem = document.createElement('li');
        listItem.textContent = bagList.childNodes[i].textContent;
        document.getElementById('receiptList').appendChild(listItem);
    }

    // console.log(taxHST);
    // console.log(total);
    // console.log(totalPlusTax);

    //Show the subtotal before tax
    //document.getElementById('total').textContent = total.toFixed(2);
    // document.getElementById('total').textContent = Number(total).toFixed(2);

    //Show the tax in the bag
    // document.getElementById('taxHST').textContent = taxHST.toFixed(2);
    //document.getElementById('taxHST').innerHTML = taxHST.toFixed(2);
    // let taxHST = document.getElementById('taxHST');
    // taxHST.getElementById('taxHST').innerHTML = taxHST.toFixed(2);
    //Show the total with tax
    // document.getElementById('totalPlusTax').textContent = totalPlusTax.toFixed(2);

    //Show total values
    document.getElementById('receiptTotal').textContent = total.toFixed(2);
    document.getElementById('receiptTaxHST').textContent = taxHST.toFixed(2);
    document.getElementById('receiptTotalPlusTax').textContent = totalPlusTax.toFixed(2);

    //Show the message with name
    let msgReceipt = document.getElementById('msgReceipt');
    msgReceipt.innerHTML = "Thanks " + customerName + "!";

    document.getElementById('popupReceipt').showModal();

    //closePopupReceipt();
}

// Function to update values in the Receipt modal

function closePopupReceipt() {
    resetShoppingBag();
    document.getElementById('popupReceipt').close();
}

//Functioon to clean the shopping bag
function resetShoppingBag() {
    selectedProduct = "";
    selectedPrice = 0;
    selectedQty = 1;
    taxHST = 0;
    total = 0;
    totalPlusTax = 0;
    // bagList = "";
    customerName = "";


    //Reseting the bagList
    bagList = document.getElementById('bagList');
    bagList.innerHTML = "";

    //Reseting the total, HST and Total+HST from bag
    document.getElementById('total').textContent = total.toFixed(2);
    document.getElementById('taxHST').textContent = total.toFixed(2);
    document.getElementById('totalplustax').textContent = totalPlusTax.toFixed(2);
}




