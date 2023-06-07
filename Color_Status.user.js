// ==UserScript==
// @name         Color Status
// @description  Adds color to the status column of SFDC case list
// @match      https://nutanix.my.salesforce.com/*
// @version      1.2
// @updateURL https://github.com/cpr5855/userscripts/raw/main/Color_Status.user.js
// @downloadURL https://github.com/cpr5855/userscripts/raw/main/Color_Status.user.js
// ==/UserScript==

/*
This script works with the SFDC.
It's not pretty.  But it works
*/
var c = "#";
setTimeout(function(){
    if (document.getElementsByClassName("btn refreshListButton")[0]){
    var links = document.getElementsByClassName("x-grid3-cell-inner x-grid3-col-CASES_STATUS");
    for (var i=0,imax=links.length; i<imax; i++) {
          var original = links[i].innerHTML;
          var re = new RegExp("Waiting\ for\ Customer");
          var re1 = new RegExp("Resolved\ -\ Waiting\ for\ SRE");
          var re2 = new RegExp("P3");
          var re3 = new RegExp("P4");
          var re4 = new RegExp("Customer\ Response\ Provided");
          if (re.test(original)) {c = "#20B65D";}
           else if (re1.test(original)) {c = "#EE150A";}
           else if (re2.test(original)) {c = "#FFB233";}
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
    var links = document.getElementsByClassName("x-grid3-cell-inner x-grid3-col-CASES_STATUS");
    for (var i=0,imax=links.length; i<imax; i++) {
          var original = links[i].innerHTML;
          var re = new RegExp("Waiting\ for\ Customer");
          var re1 = new RegExp("Resolved\ -\ Waiting\ for\ SRE");
          var re2 = new RegExp("P3");
          var re3 = new RegExp("P4");
          var re4 = new RegExp("Customer\ Response\ Provided");
          if (re.test(original)) {c = "#20B65D";}
           else if (re1.test(original)) {c = "#EE150A";}
           else if (re2.test(original)) {c = "#FFB233";}
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
            var links = document.getElementsByClassName("x-grid3-cell-inner x-grid3-col-CASES_STATUS");
            for (var i=0,imax=links.length; i<imax; i++) {
                var original = links[i].innerHTML;
                var re = new RegExp("Waiting\ for\ Customer");
                var re1 = new RegExp("Resolved\ -\ Waiting\ for\ SRE");
                var re2 = new RegExp("P3");
                var re3 = new RegExp("P4");
                var re4 = new RegExp("Customer\ Response\ Provided");
                if (re.test(original)) {c = "#20B65D";}
                else if (re1.test(original)) {c = "#EE150A";}
                else if (re2.test(original)) {c = "#FFB233";}
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
