// https://www.omnicalculator.com/finance/interest-only-mortgage

const v1 =  document.getElementById('v1');
const v2 = document.getElementById('v2');
const v3 = document.getElementById('v3');
const btn = document.getElementById('btn');
const result = document.getElementById('result');

// radio buttons
const paymentRadio = document.getElementById('paymentRadio');
const loanamountRadio = document.getElementById('loanamountRadio');
const annualinterestrateRadio = document.getElementById('annualinterestrateRadio');

let payment;
let loanamount = v1;
let annualinterestrate = v2;

// labels of the inpust
const variable1 = document.getElementById('variable1');
const variable2 = document.getElementById('variable2');

paymentRadio.addEventListener('click', function() {
  variable1.textContent = 'Loan amount';
  variable2.textContent = 'Annual interest rate';
  loanamount = v1;
  annualinterestrate = v2;
  result.textContent = '';
});

loanamountRadio.addEventListener('click', function() {
  variable1.textContent = 'Payment';
  variable2.textContent = 'Annual interest rate';
  payment = v1;
  annualinterestrate = v2;
  result.textContent = '';
});

annualinterestrateRadio.addEventListener('click', function() {
  variable1.textContent = 'Payment';
  variable2.textContent = 'Loan amount';
  payment = v1;
  loanamount = v2;
  result.textContent = '';
});

btn.addEventListener('click', function() {
  
  if(paymentRadio.checked)
    result.textContent = `Payment = ${computepayment().toFixed(2)}`;

  else if(loanamountRadio.checked)
    result.textContent = `Loan amount = ${computeloanamount().toFixed(2)}`;

  else if(annualinterestrateRadio.checked)
    result.textContent = `Annual interest rate = ${computeannualinterestrate().toFixed(2)}`;
})

// calculation

function computepayment() {
  return Number(loanamount.value) * (Number(annualinterestrate.value) / 100);
}

function computeloanamount() {
  return Number(payment.value) / (Number(annualinterestrate.value) / 100);
}

function computeannualinterestrate() {
  return (Number(payment.value) / Number(loanamount.value)) * 100;
}