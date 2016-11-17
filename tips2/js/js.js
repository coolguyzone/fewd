var tip = 0;
var tip5 = document.querySelector(".tip5");
  var tip10 = document.querySelector(".tip10");
  var tip15 = document.querySelector(".tip15");
  var tip20 = document.querySelector(".tip20");
  var tip25 = document.querySelector(".tip25");
var tipDiv5 = document.querySelectorAll(".tipdiv5");
var tipDiv10 = document.querySelectorAll(".tipdiv10");
var tipDiv15 = document.querySelectorAll(".tipdiv15");
var tipDiv20 = document.querySelectorAll(".tipdiv20");
var tipDiv25 = document.querySelectorAll(".tipdiv25");
var splitDiv1 = document.querySelectorAll(".splitdiv1");
var splitDiv2 = document.querySelectorAll(".splitdiv2");
var splitDiv3 = document.querySelectorAll(".splitdiv3");
var splitDiv4 = document.querySelectorAll(".splitdiv4");
var splitDiv5 = document.querySelectorAll(".splitdiv5");
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

        if ($(event.target).hasClass('tipdiv5')) {
          for (var i = 0; i < tipDiv5.length; i++) {
            tipDiv5[i].setAttribute('style', 'background-color: crimson;');
          }
          tip = tip5.textContent;
          console.log(tip);

        }
        else if ($(event.target).hasClass('tipdiv10')) {
          for (var i = 0; i < tipDiv10.length; i++) {
            tipDiv10[i].setAttribute('style', 'background-color: crimson;');
          }
          tip = tip10.textContent;
          console.log(tip);
        }
        else if ($(event.target).hasClass('tipdiv15')) {
          for (var i = 0; i < tipDiv15.length; i++) {
            tipDiv15[i].setAttribute('style', 'background-color: crimson;');
          }
          tip = tip15.textContent;
          console.log(tip);
        }
        else if ($(event.target).hasClass('tipdiv20')) {
          for (var i = 0; i < tipDiv20.length; i++) {
            tipDiv20[i].setAttribute('style', 'background-color: crimson;');
          }
          tip = tip20.textContent;
          console.log(tip);
        }
        else if ($(event.target).hasClass('tipdiv25')) {
          for (var i = 0; i < tipDiv25.length; i++) {
            tipDiv25[i].setAttribute('style', 'background-color: crimson;');
          }
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
      for (var i = 0; i < splitDiv1.length; i++) {
        splitDiv1[i].setAttribute('style', 'background-color: crimson;');
      }
      $(splitH2).addClass('hide');

      console.log(totalBill);
    }
    else if ($(event.target).hasClass('splitdiv2')) {
      for (var i = 0; i < splitDiv2.length; i++) {
        splitDiv2[i].setAttribute('style', 'background-color: crimson;');
      }
      totalPer.textContent = ((amount + tip) / 2).toFixed(2);
      console.log(tip);
    }

    else if ($(event.target).hasClass('splitdiv3')) {
      for (var i = 0; i < splitDiv3.length; i++) {
        splitDiv3[i].setAttribute('style', 'background-color: crimson;');
      }
      totalPer.textContent = ((amount + tip) / 3).toFixed(2);
      console.log(tip);
    }

    else if ($(event.target).hasClass('splitdiv4')) {
      for (var i = 0; i < splitDiv4.length; i++) {
        splitDiv4[i].setAttribute('style', 'background-color: crimson;');
      }
      totalPer.textContent = ((amount + tip) / 4).toFixed(2);
      console.log(tip);
    }

    else if ($(event.target).hasClass('splitdiv5')) {
      for (var i = 0; i < splitDiv5.length; i++) {
        splitDiv5[i].setAttribute('style', 'background-color: crimson;');
      }
      totalPer.textContent = ((amount + tip) / 5).toFixed(2);
      console.log(tip);
    }

  }
}
}



document.querySelector(".amt-btn").addEventListener("click", calculateTips);

// To Fix:
// Make buttons turn red when clicked anywhere, and turn blue again when another button is selected. Make sure space between buttons does NOT turn red.
// *fixed with a shit ton more variables and fixed loops. how can my code be simplified?
