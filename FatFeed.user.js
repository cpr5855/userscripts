// ==UserScript==
// @name         FatFeed
// @description  Makes Feed Width larger
// @match      *nutanix.my.salesforce.com*
// @version      1.2
// @downloadURL https://github.com/cpr5855/userscripts/raw/main/FatFeed.user.js
// ==/UserScript==

/*
I'm not sure this works any more.
I'm not sure if this is required any more.
*/


    if (document.getElementsByClassName("feeditembody")[0]){
    var links = document.getElementsByClassName("feeditembody");
    for (var i=0,imax=links.length; i<imax; i++) {
          var replace = "class=\"feeditembody\" style=\"width:1000px\"";
          links[i].outerHTML = links[i].outerHTML.replace(/class=\"feeditembody\"/i, replace);
          }
    }

    if (document.getElementsByClassName("caseEventBody")[0]){
    var links = document.getElementsByClassName("caseEventBody");
    for (var i=0,imax=links.length; i<imax; i++) {
          var replace = "class=\"caseEventBody\" style=\"background-color:powderblue;\"";
          links[i].outerHTML = links[i].outerHTML.replace(/class=\"caseEventBody\"/i, replace);
          }
    }

    if (document.getElementsByClassName("cxfeeditemtextadditional")[0]){
    var links = document.getElementsByClassName("cxfeeditemtextadditional");
    for (var i=0,imax=links.length; i<imax; i++) {
          var replace = "class=\"cxfeeditemtextadditional\" style=\"background-color:powderblue;\"";
          links[i].outerHTML = links[i].outerHTML.replace(/class=\"cxfeeditemtextadditional\"/i, replace);
          }
    }

    if (document.getElementsByClassName("cxfeeditemtextwrapper")[0]){
    var links = document.getElementsByClassName("cxfeeditemtextwrapper");
    for (var i=0,imax=links.length; i<imax; i++) {
          var replace = "class=\"cxfeeditemtextwrapper\" style=\"background-color:powderblue;\"";
          links[i].outerHTML = links[i].outerHTML.replace(/class=\"cxfeeditemtextwrapper\"/i, replace);
          }
    }

    if (document.getElementsByClassName("preamblecontainer displayblock")[0]){
    var links = document.getElementsByClassName("preamblecontainer displayblock");
    for (var i=0,imax=links.length; i<imax; i++) {
          var replace = "class=\"preamblecontainer displayblock\" style=\"opacity:0.4;background-color:powderblue;\"";
          links[i].outerHTML = links[i].outerHTML.replace(/class=\"preamblecontainer\ displayblock"/i, replace);
          }
    }

    if (document.getElementsByClassName("preamblecontainer ")[0]){
    var links = document.getElementsByClassName("preamblecontainer ");
    for (var i=0,imax=links.length; i<imax; i++) {
          var replace = "class=\"preamblecontainer \" style=\"opacity:0.4;background-color:powderblue;\"";
          links[i].outerHTML = links[i].outerHTML.replace(/class=\"preamblecontainer\ "/i, replace);
          }
    }
