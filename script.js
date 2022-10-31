const bill = document.querySelector('#bill');
const numberPeople = document.querySelector("#numberPeople");
const tipAmount = document.querySelector("#tipAmount");
const total = document.querySelector('#total');
const textError = document.querySelector('.textError');
const btn5 = document.querySelector('#btn5');
const btn10 = document.querySelector('#btn10');
const btn15 = document.querySelector('#btn15');
const btn25 = document.querySelector('#btn25');
const btn50 = document.querySelector('#btn50');
const btnCustom = document.querySelector('#btnCustom');
const buttons = document.querySelectorAll(".buttons");
const reset = document.querySelector('#reset');
let buttonSelected = 0;
let spanTotal = 0;
let spanTipAmount = 0;


buttons.forEach((button) => {
  button.addEventListener('click', () => {
    switch (button) {
      case btn5:
        buttonSelected = +btn5.value;
        spanTipAmount = (+bill.value.replace(',', '.') * buttonSelected).toFixed(2);
        tipAmount.innerHTML = `$${spanTipAmount}`;
        spanTotal = ((+bill.value.replace(',', '.') * buttonSelected + +bill.value.replace(',', '.')) / +numberPeople.value).toFixed(2);
        if (spanTotal === "Infinity" || spanTotal === "NaN") {
          spanTotal = "0.00";
        }
        total.innerHTML = `$${spanTotal}`;
        resetDisabled();
        if (!btn5.classList.contains('btnSelected')) {
          btn5.classList.add("btnSelected");
          btn10.classList.remove("btnSelected");
          btn15.classList.remove("btnSelected");
          btn25.classList.remove("btnSelected");
          btn50.classList.remove("btnSelected");
          btnCustom.value = "";
        } else {
          btn5.classList.remove("btnSelected");
          tipAmount.innerHTML = "$0.00";
          total.innerHTML = "$0.00";
          reset.setAttribute("disabled", "");
        }
        break;
      case btn10:
        buttonSelected = +btn10.value;
        spanTipAmount = (+bill.value.replace(',', '.') * buttonSelected).toFixed(2);
        tipAmount.innerHTML = `$${spanTipAmount}`;
        spanTotal = ((+bill.value.replace(',', '.') * buttonSelected + +bill.value.replace(',', '.')) / +numberPeople.value).toFixed(2);
        if (spanTotal === "Infinity" || spanTotal === "NaN") {
          spanTotal = "0.00";
        }
        total.innerHTML = `$${spanTotal}`;
        resetDisabled();
        if (!btn10.classList.contains('btnSelected')) {
          btn10.classList.add("btnSelected");
          btn5.classList.remove("btnSelected");
          btn15.classList.remove("btnSelected");
          btn25.classList.remove("btnSelected");
          btn50.classList.remove("btnSelected");
          btnCustom.value = "";
        } else {
          btn10.classList.remove("btnSelected");
          tipAmount.innerHTML = "$0.00";
          total.innerHTML = "$0.00";
          reset.setAttribute("disabled", "");
        }
        break;
      case btn15:
        buttonSelected = +btn15.value;
        spanTipAmount = (+bill.value.replace(',', '.') * buttonSelected).toFixed(2);
        tipAmount.innerHTML = `$${spanTipAmount}`;
        spanTotal = ((+bill.value.replace(',', '.') * buttonSelected + +bill.value.replace(',', '.')) / +numberPeople.value).toFixed(2);
        if (spanTotal === "Infinity" || spanTotal === "NaN") {
          spanTotal = "0.00";
        }
        total.innerHTML = `$${spanTotal}`;
        resetDisabled();
        if (!btn15.classList.contains('btnSelected')) {
          btn15.classList.add("btnSelected");
          btn5.classList.remove("btnSelected");
          btn10.classList.remove("btnSelected");
          btn25.classList.remove("btnSelected");
          btn50.classList.remove("btnSelected");
          btnCustom.value = "";
        } else {
          btn15.classList.remove("btnSelected");
          tipAmount.innerHTML = "$0.00";
          total.innerHTML = "$0.00";
          reset.setAttribute("disabled", "");
        }
        break;
      case btn25:
        buttonSelected = +btn25.value;
        spanTipAmount = (+bill.value.replace(',', '.') * buttonSelected).toFixed(2);
        tipAmount.innerHTML = `$${spanTipAmount}`;
        spanTotal = ((+bill.value.replace(',', '.') * buttonSelected + +bill.value.replace(',', '.')) / +numberPeople.value).toFixed(2);
        if (spanTotal === "Infinity" || spanTotal === "NaN") {
          spanTotal = "0.00";
        }
        total.innerHTML = `$${spanTotal}`;
        resetDisabled();
        if (!btn25.classList.contains('btnSelected')) {
          btn25.classList.add("btnSelected");
          btn5.classList.remove("btnSelected");
          btn10.classList.remove("btnSelected");
          btn15.classList.remove("btnSelected");
          btn50.classList.remove("btnSelected");
          btnCustom.value = "";
        } else {
          btn25.classList.remove("btnSelected");
          tipAmount.innerHTML = "$0.00";
          total.innerHTML = "$0.00";
          reset.setAttribute("disabled", "");
        }
        break;
      case btn50:
        buttonSelected = +btn50.value;
        spanTipAmount = (+bill.value.replace(',', '.') * buttonSelected).toFixed(2);
        tipAmount.innerHTML = `$${spanTipAmount}`;
        spanTotal = ((+bill.value.replace(',', '.') * buttonSelected + +bill.value.replace(',', '.')) / +numberPeople.value).toFixed(2);
        if (spanTotal === "Infinity" || spanTotal === "NaN") {
          spanTotal = "0.00";
        }
        total.innerHTML = `$${spanTotal}`;
        resetDisabled();
        if (!btn50.classList.contains('btnSelected')) {
          btn50.classList.add("btnSelected");
          btn5.classList.remove("btnSelected");
          btn10.classList.remove("btnSelected");
          btn15.classList.remove("btnSelected");
          btn25.classList.remove("btnSelected");
          btnCustom.value = '';
        } else {
          btn50.classList.remove("btnSelected");
          tipAmount.innerHTML = "$0.00";
          total.innerHTML = "$0.00";
          reset.setAttribute("disabled", '');
        }
        break;
    }  
  })
})

const buttonCustom = () => {
  btnCustom.addEventListener('click', () => {
    btn5.classList.remove("btnSelected");
    btn10.classList.remove("btnSelected");
    btn15.classList.remove("btnSelected");
    btn25.classList.remove("btnSelected");
    btn50.classList.remove("btnSelected");
    btnCustom.value = '';
    tipAmount.innerHTML = '$0.00';
    total.innerHTML = '$0.00';
    reset.setAttribute("disabled", "");
  });
  btnCustom.addEventListener("input", () => {
    buttonSelected = +btnCustom.value / 100;
    spanTipAmount = (+bill.value.replace(',', '.') * buttonSelected).toFixed(2);
    tipAmount.innerHTML = `$${spanTipAmount}`;
    spanTotal = ((+bill.value.replace(',', '.') * buttonSelected + +bill.value.replace(',', '.')) / +numberPeople.value).toFixed(2);
    if (spanTotal === "Infinity" || spanTotal === "NaN") {
      spanTotal = "0.00";
    }
    total.innerHTML = `$${spanTotal}`;
    resetDisabled();
  });
}

buttonCustom();

// função criada para executar quando o usuario selecionar a tip antes de digitar o valor no input Bill
const calculateTipAmount = () => {
  bill.addEventListener('input', () => {
    spanTipAmount = (+bill.value.replace(',', '.') * buttonSelected).toFixed(2);
    tipAmount.innerHTML = `$${spanTipAmount}`;
// codigo inserido dentro dessa função para quando o usuario selecionar primeiro o Number of People e por ultimo o input Bill
    spanTotal = ((+bill.value.replace(',', '.') * buttonSelected + +bill.value.replace(',', '.')) / +numberPeople.value).toFixed(2);
    if (spanTotal === "Infinity" || spanTotal === "NaN") {
      spanTotal = "0.00";
    }
    total.innerHTML = `$${spanTotal}`;
    resetDisabled();
  })
}

calculateTipAmount();

// função criada para executar quando o usuario selecionar a tip antes de digitar o valor no input Number of People
const calculateTotal = () => {
  numberPeople.addEventListener('input', () => {
    // validação do input
    if (numberPeople.value.slice(0,1) === '0') {
    textError.removeAttribute("hidden");
    numberPeople.classList.add("inputError");
  } else if (!numberPeople.value) {
    textError.setAttribute("hidden", "");
    numberPeople.classList.remove("inputError");
  } else {
    textError.setAttribute("hidden", "");
    numberPeople.classList.remove("inputError");
  }

    spanTotal = ((+bill.value.replace(',', '.') * buttonSelected + +bill.value.replace(',', '.')) / +numberPeople.value).toFixed(2);
    if (spanTotal === "Infinity" || spanTotal === "NaN") {
      spanTotal = "0.00";
    }
    total.innerHTML = `$${spanTotal}`;

    resetDisabled();
  })
}

calculateTotal();

const resetDisabled = () => {
  if (bill.value !== "" && buttonSelected !== 0 && numberPeople.value !== "") {
    reset.removeAttribute("disabled");
  } else {
    reset.setAttribute('disabled', '');
  }
}



reset.addEventListener('click', () => {
  bill.value = '';
  numberPeople.value = '';
  btn5.classList.remove("btnSelected");
  btn10.classList.remove("btnSelected");
  btn15.classList.remove("btnSelected");
  btn25.classList.remove("btnSelected");
  btn50.classList.remove("btnSelected");
  btnCustom.value = "";
  buttonSelected = 0;
  spanTotal = "0.00";
  total.innerHTML = '$0.00';
  tipAmount.innerHTML = '$0.00';
  reset.setAttribute('disabled', '');
})