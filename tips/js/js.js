

var tip = 0;

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
      function setTipAMT(event) {
        var tipsplit = document.querySelector(".tip-split");
        tipsplit.classList.remove('hide');
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
        activateSplits();

        function activateSplits() {
          var splitDivs = document.querySelectorAll(".splitdiv");
          for (var i = 0; i < splitDivs.length; i++) {
            splitDivs[i].addEventListener("click", setSplit);
        }
        function setSplit(event) {
          var totals = document.querySelector(".totals");
          totals.classList.remove('hide');
          var totalBill = document.querySelector(".total-bill");
          if ($(event.target).hasClass('splitdiv1')) {
            totalBill.textContent = tip;
            console.log(totalBill);
          }
          else if ($(event.target).hasClass('tipdiv10')) {
            var tip = tip10.textContent;
            console.log(tip);
          }

        }
      }
    }


  }}




document.querySelector(".bill-btn").addEventListener("click", calculateTips);
