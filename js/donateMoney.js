// Noakhali Donation of Bangladesh
document.getElementById('btn-donate-noakhali').addEventListener('click', function () {
    const donateNoakhali = getInputValueById('take-donate-noakhali');
    const balance = getTextFieldValueById("balance");
    const balanceNoakhali = getTextFieldValueById('balance-noakhali');

    if (isNaN(donateNoakhali)) {
        alert("Please give correct input value");
        return;
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
             <span>${donateNoakhali}</span> Taka is Donated for famine-2024 at Feni, Bangladesh 
         </h4>
         <p class="font-light text-sm text-gray-500">Time</p>
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

    if (isNaN(donateFeni)) {
        alert("Please give correct input value");
        return;
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
             <span>${donateFeni}</span> Taka is Donated for famine-2024 at Feni, Bangladesh 
         </h4>
         <p class="font-light text-sm text-gray-500">Time</p>
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

    if (isNaN(donateQuota)) {
        alert("Please give correct input value");
        return;
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
             <span>${donateQuota}</span> Taka is Donated for famine-2024 at Feni, Bangladesh 
         </h4>
         <p class="font-light text-sm text-gray-500">Time</p>
     `;
    document.getElementById('show-history').appendChild(div);

    document.getElementById('balance').innerText = newBalance;
    document.getElementById('balance-quota').innerText = newBalanceQuota;
})