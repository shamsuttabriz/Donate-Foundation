// Noakhali Donation of Bangladesh
document.getElementById('btn-donate-noakhali').addEventListener('click', function () {
    const donateNoakhali = getInputValueById('take-donate-noakhali');
    const balance = getTextFieldValueById("balance");
    const balanceNoakhali = getTextFieldValueById('balance-noakhali');

    const time = new Date();

    if (isNaN(donateNoakhali) || donateNoakhali < 0) {
        alert("Please give correct input value");
        return;
    } else {
        my_modal_1.showModal();
    }

    const newBalance = balance + donateNoakhali;
    const newBalanceNoakhali = balanceNoakhali + donateNoakhali;

    // Donation to Transaction History
    const div = document.createElement('div');
    div.classList.add('border-2');
    div.classList.add('border-gray-200');
    div.classList.add('rounded');
    div.classList.add('my-4');
    div.classList.add('p-5');
    div.innerHTML = `
         <h4 class="text-xl font-bold text-black py-2">
             <span>${donateNoakhali}</span> Taka is Donate for Flood at Noakhali, Bangladesh 
         </h4>
         <p class="font-light text-sm text-gray-500">${time}</p>
     `;
    document.getElementById('show-history').appendChild(div);

    document.getElementById('balance').innerText = newBalance;
    document.getElementById('balance-noakhali').innerText = newBalanceNoakhali;
});

// Feni Donation of Bangladesh
document.getElementById('btn-donate-feni').addEventListener('click', function () {
    const donateFeni = getInputValueById('take-donate-feni');
    const balance = getTextFieldValueById("balance");
    const balanceFeni = getTextFieldValueById('balance-feni');

    if (isNaN(donateFeni) || donateFeni < 0) {
        alert("Please give correct input value");
        return;
    } else {
        my_modal_1.showModal();
    }

    const newBalance = balance + donateFeni;
    const newBalanceFeni = balanceFeni + donateFeni;

    // Donation to Transaction History
    const div = document.createElement('div');
    div.classList.add('border-2');
    div.classList.add('border-gray-200');
    div.classList.add('rounded');
    div.classList.add('my-4');
    div.classList.add('p-5');
    div.innerHTML = `
         <h4 class="text-xl font-bold text-black py-2">
             <span>${donateFeni}</span> Taka is Donate for Flood at Noakhali, Bangladesh 
         </h4>
         <p class="font-light text-sm text-gray-500">${time}</p>
     `;
    document.getElementById('show-history').appendChild(div);

    document.getElementById('balance').innerText = newBalance;
    document.getElementById('balance-feni').innerText = newBalanceFeni;
})

// Injured in the Quota Movement of Bangladesh
document.getElementById('btn-donate-quota').addEventListener('click', function () {
    const donateQuota = getInputValueById('take-donate-quota');
    const balance = getTextFieldValueById("balance");
    const balanceQuota = getTextFieldValueById('balance-quota');

    if (isNaN(donateQuota) || donateQuota < 0) {
        alert("Please give correct input value");
        return;
    } else {
        my_modal_1.showModal();
    }

    const newBalance = balance + donateQuota;
    const newBalanceQuota = balanceQuota + donateQuota;

    // Donation to Transaction History
    const div = document.createElement('div');
    div.classList.add('border-2');
    div.classList.add('border-gray-200');
    div.classList.add('rounded');
    div.classList.add('my-4');
    div.classList.add('p-5');
    div.innerHTML = `
         <h4 class="text-xl font-bold text-black py-2">
             <span>${donateQuota}</span> Taka is Aid for Injured in the Quota Movement 
         </h4>
         <p class="font-light text-sm text-gray-500">${time}</p>
     `;
    document.getElementById('show-history').appendChild(div);

    document.getElementById('balance').innerText = newBalance;
    document.getElementById('balance-quota').innerText = newBalanceQuota;
})