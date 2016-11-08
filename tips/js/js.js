


function calculateTips(event){
  event.preventDefault();
  var tipAmounts = document.querySelector(".tip-amount");
  tipAmounts.classList.remove('hide');
  var amount = document.querySelector(".form-control");
  amount = amount.value;
  var tip5 = document.querySelector(".tip5");
  tip5.textContent = (amount * 0.05).toFixed(2);
  var tip10 = document.querySelector(".tip10");
  tip10.textContent = (amount * 0.10).toFixed(2);
  var tip15 = document.querySelector(".tip15");
  tip15.textContent = (amount * 0.15).toFixed(2);
  var tip20 = document.querySelector(".tip20");
  tip20.textContent = (amount * 0.20).toFixed(2);
  var tip25 = document.querySelector(".tip25");
  tip25.textContent = (amount * 0.25).toFixed(2);

  activateTips();

  function activateTips() {
    var tipdivs = document.querySelectorAll(".tipdiv");

    for (var i = 0; i < tipdivs.length; i++) {
      tipdivs[i].addEventListener("click", setTipAMT);

      }

  }

  function setTipAMT(event) {
    var tipsplit = document.querySelector(".tip-split");
    tipsplit.classList.remove('hide');
    if ($(event.target).hasClass('tipdiv5')) {
    }
    else if ($(event.target).hasClass('tipdiv10')) {
    }
    else if ($(event.target).hasClass('tipdiv15')) {
    }
    else if ($(event.target).hasClass('tipdiv20')) {
    }
    else if ($(event.target).hasClass('tipdiv25')) {
    }
  }
}



document.querySelector(".bill-btn").addEventListener("click", calculateTips);
