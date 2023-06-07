// ==UserScript==
// @name           Portal Knowledgebase Title Updater
// @description    Update Title and Article Title to be more helpful.
// @match        https://portal.nutanix.com/page/documents/kbs*
// @version      0.1
// ==/UserScript==


///THIS DOES NOT WORK YET!!!

/*
This script works on KB articles opened from https://nutanix.my.salesforce.com/_ui/knowledge/ui/KnowledgeHome

It will update the tab name with a prefix of KBxxx

Updates the article title to include the KB article number and includes a portal link.  (Useful for sharing with customers)
*/
alert("loading...");

var otitle;
otitle = document.title;


const nodeList = document.querySelectorAll(".d518cbf630 ntnx-text-label ntnx");
for (let i = 0; i < nodeList.length; i++) {
  alert(nodeList[i]);
  nodeList[i].style.backgroundColor = "red";
}
/*
var artclass = document.querySelector("d518cbf630 ntnx-text-label ntnx").innerText;
alert("artclass: " + artclass);
*/
/*
const collection = document.getElementsByClassName("d518cbf630 ntnx-text-label ntnx");
//collection[0].innerHTML = "Hello World!";
var classname;
for (let classname of collection) {
  alert(classname);
}
*/
var articleNum = document.querySelectorAll("d518cbf630 ntnx-text-label ntnx");
alert("articleNum: " + articleNum);
//alert(articleNum[0].innerText);
//var articleNum = document.getElementsByTagName("d518cbf630 ntnx-text-label ntnx").innerText;
articleNum = articleNum.replace(/^0+/, '');

if(!articleNum){
    //#myElementID element DOES NOT exist

    articleNum = "##";
}
// pageType noSecondHeader

if(articleNum){
    //#myElementID element DOES exists
    //alert("articleNumber " + myElement.innerText + " does exist");
}

let ntitle = otitle.replace(/Knowledge Base:/, "KB" + articleNum + " - ");
document.title = ntitle;


const nodeList = document.querySelectorAll(".noSecondHeader");
for (let i = 0; i < nodeList.length; i++) {
  //nodeList[i].style.backgroundColor = "red";
  var articleTitle = nodeList[i].innerText;
  var re = /(.*)/;
  //var newArticleTitle = articleTitle.replace(re, "KB: " + articleNum + " ($1) https://portal.nutanix.com/kb/" + articleNum);
  var newArticleTitle = articleTitle.replace(re, "KB:" + articleNum + " - $1 - https://portal.nutanix.com/kb/" + articleNum);
  //var newArticleTitle = articleTitle.replace(re, "KB: " + articleNum + " - $1 (https://portal.nutanix.com/kb/" + articleNum + ")");
  nodeList[i].textContent = newArticleTitle;
  //var newArticleTitle = articleTitle.replace("KB " + articleTitle + " " + articleNum);
    //articleTitle = newArticleTitle;
}
