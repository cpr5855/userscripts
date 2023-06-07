// ==UserScript==
// @name         Color Priority
// @description  Adds color to priority column in SFDC case list
// @match      https://nutanix.my.salesforce.com/*
// @version      1.1
// ==/UserScript==

/*
This script works with the SFDC.
It's not pretty.  But it works.

Eventually this will get rolled up into the "Status color" script.
*/

var c = "#";
setTimeout(function(){
    if (document.getElementsByClassName("btn refreshListButton")[0]){
    var links = document.getElementsByClassName("x-grid3-cell-inner x-grid3-col-CASES_PRIORITY");
    for (var i=0,imax=links.length; i<imax; i++) {
          var original = links[i].innerHTML;
          var re = new RegExp("P1");
          var re1 = new RegExp("P2");
          var re2 = new RegExp("P3");
          var re3 = new RegExp("P4");
          var re4 = new RegExp("Customer\ Response\ Provided");
          if (re.test(original)) {c = "#FF0000";}
           else if (re1.test(original)) {c = "#FFB233";}
           else if (re2.test(original)) {c = "#20B65D";}
           else if (re3.test(original)) {c = "#33FF3C";}
           else if (re4.test(original)) {c = "#FF0000";}
          else c = "#000000";
          links[i].innerHTML = "<font color=\"" + c + "\">" + original + "</font>";
          }
        document.getElementsByClassName("btn refreshListButton")[0].addEventListener("click", clickFunctionC);
        document.getElementsByClassName("title")[0].addEventListener("click", clickFunctionC2);
    }
    }, 2000);
function clickFunctionC(){
    setTimeout(function(){
    if (document.getElementsByClassName("btn refreshListButton")[0]){
    var links = document.getElementsByClassName("x-grid3-cell-inner x-grid3-col-CASES_PRIORITY");
    for (var i=0,imax=links.length; i<imax; i++) {
          var original = links[i].innerHTML;
          var re = new RegExp("P1");
          var re1 = new RegExp("P2");
          var re2 = new RegExp("P3");
          var re3 = new RegExp("P4");
          var re4 = new RegExp("Customer\ Response\ Provided");
          if (re.test(original)) {c = "#FF0000";}
           else if (re1.test(original)) {c = "#FFB233";}
           else if (re2.test(original)) {c = "#20B65D";}
           else if (re3.test(original)) {c = "#33FF3C";}
           else if (re4.test(original)) {c = "#FF0000";}
          else c = "#000000";
          links[i].innerHTML = "<font color=\"" + c + "\">" + original + "</font>";
          }
        document.getElementsByClassName("btn refreshListButton")[0].addEventListener("click", clickFunctionC);
        document.getElementsByClassName("title")[0].addEventListener("click", clickFunctionC2);
    }
    }, 2000);
}
function clickFunctionC2(){
    var e = document.getElementsByClassName("title")[0];
    if(e.selectedIndex > 0){
            setTimeout(function(){
            var links = document.getElementsByClassName("x-grid3-cell-inner x-grid3-col-CASES_PRIORITY");
            for (var i=0,imax=links.length; i<imax; i++) {
                var original = links[i].innerHTML;
                var re = new RegExp("P1");
                var re1 = new RegExp("P2");
                var re2 = new RegExp("P3");
                var re3 = new RegExp("P4");
                var re4 = new RegExp("Customer\ Response\ Provided");
                if (re.test(original)) {c = "#FF0000";}
                else if (re1.test(original)) {c = "#FFB233";}
                else if (re2.test(original)) {c = "#20B65D";}
                else if (re3.test(original)) {c = "#33FF3C";}
                else if (re4.test(original)) {c = "#FF0000";}
                else c = "#000000";
                links[i].innerHTML = "<font color=\"" + c + "\">" + original + "</font>";
          }
                document.getElementsByClassName("btn refreshListButton")[0].addEventListener("click", clickFunctionC);
                document.getElementsByClassName("title")[0].addEventListener("click", clickFunctionC2);
    }, 4000);
   }
}
