//get id value
function getInputValue(id) {
    const getInputId = document.getElementById(id)
    const getInputText = getInputId.value;
    const getInputAmount = parseFloat(getInputText);
    getInputId.value = '';
    return getInputAmount;
}

//get innerText
function getInnerTextValue(id) {
    const IdText = document.getElementById(id).innerText;
    const idValue = parseFloat(IdText);
    return idValue;
}

//set value in the total feild
function setAmountTotalFeild(feild, amount) {
    const priviusAmount = getInnerTextValue(feild)
    const newAmount = priviusAmount + amount;
    document.getElementById(feild).innerText = newAmount;
}

//update Blance
function updateTotalBlance(amount, isAdd) {
    const priviusTotal = getInnerTextValue('total-blance');
    let updatetotal;
    if (isAdd == true) {
        updatetotal = priviusTotal + amount;
    }
    else {
        updatetotal = priviusTotal - amount;
    }
    document.getElementById('total-blance').innerText = updatetotal;
}

document.getElementById('diposit-btn').addEventListener('click', function () {
    const amount = getInputValue('diposit-feild');
    if (amount > 0) {

        updateTotalBlance(amount, true)
        setAmountTotalFeild('diposit-feild-amount', amount)
    }

})
document.getElementById('withdraw-btn').addEventListener('click', function () {
    const amount = getInputValue('withdraw-feild');
    const Total = getInnerTextValue('total-blance');
    if (amount > 0 && amount <= Total) {
        updateTotalBlance(amount, false)
        setAmountTotalFeild('total-withdraw-amount', amount)
    }

})