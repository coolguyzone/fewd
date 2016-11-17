var tip = 0;
var tip5 = document.querySelector(".tip5");
  var tip10 = document.querySelector(".tip10");
  var tip15 = document.querySelector(".tip15");
  var tip20 = document.querySelector(".tip20");
  var tip25 = document.querySelector(".tip25");
  // var tipDiv5 = document.querySelector(".tipdiv5")




  var tipAmounts = document.querySelector(".tip-amount");
  var amount = document.querySelector("input");
  var tipdivs = document.querySelectorAll(".tip-buttons");
  var tipsplit = document.querySelector(".tip-split");
  var totals = document.querySelector(".totals");
  var splitDivs = document.querySelectorAll(".split-buttons");
  var totalBill = document.querySelector(".total-bill");
  var totalTip = document.querySelector(".total-tip");
  var totalPer = document.querySelector(".total-per");
  var splitH2 = document.querySelector(".splith2");

function calculateTips(event){
  event.preventDefault();

  tipAmounts.classList.remove('hide');
;
  amount = amount.value;

  tip5.textContent = (amount * 0.05).toFixed(2);
  tip10.textContent = (amount * 0.10).toFixed(2);
  tip15.textContent = (amount * 0.15).toFixed(2);
  tip20.textContent = (amount * 0.20).toFixed(2);
  tip25.textContent = (amount * 0.25).toFixed(2);

  activateTips();



  function activateTips() {


    for (var i = 0; i < tipdivs.length; i++) {
      tipdivs[i].addEventListener("click", setTipAMT);

      }


      function setTipAMT(event) {

        tipsplit.classList.remove('hide');
        event.target.setAttribute('style', 'background-color: crimson;');

        if ($(event.target).hasClass('tipdiv5')) {
          tip = tip5.textContent;
          console.log(tip);

        }
        else if ($(event.target).hasClass('tipdiv10')) {
          tip = tip10.textContent;
          console.log(tip);
        }
        else if ($(event.target).hasClass('tipdiv15')) {
          tip = tip15.textContent;
          console.log(tip);
        }
        else if ($(event.target).hasClass('tipdiv20')) {
          tip = tip20.textContent;
          console.log(tip);
        }
        else if ($(event.target).hasClass('tipdiv25')) {
          tip = tip25.textContent;
          console.log(tip);
        }
        console.log(tip);

        }

        activateSplits();





  }

  function activateSplits() {


    for (var i = 0; i < splitDivs.length; i++) {
      splitDivs[i].addEventListener("click", setSplit);
  }

  function setSplit(event) {

    amount = parseFloat(amount);
    tip = parseFloat(tip);

    totals.classList.remove('hide');
    totalBill.textContent = amount;
    totalTip.textContent = tip;
    event.target.setAttribute('style', 'background-color: crimson;');

    if ($(event.target).hasClass('splitdiv1')) {
      $(splitH2).addClass('hide');

      console.log(totalBill);
    }
    else if ($(event.target).hasClass('splitdiv2')) {
      totalPer.textContent = ((amount + tip) / 2).toFixed(2);
      console.log(tip);
    }

    else if ($(event.target).hasClass('splitdiv3')) {
      totalPer.textContent = ((amount + tip) / 3).toFixed(2);
      console.log(tip);
    }

    else if ($(event.target).hasClass('splitdiv4')) {
      totalPer.textContent = ((amount + tip) / 4).toFixed(2);
      console.log(tip);
    }

    else if ($(event.target).hasClass('splitdiv5')) {
      totalPer.textContent = ((amount + tip) / 5).toFixed(2);
      console.log(tip);
    }

  }
}
}



document.querySelector(".amt-btn").addEventListener("click", calculateTips);
