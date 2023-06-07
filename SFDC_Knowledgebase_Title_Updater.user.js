// ==UserScript==
// @name           SFDC Knowledgebase Title Updater
// @description    Update Title and Article Title to be more helpful.
// @match        https://nutanix.my.salesforce.com/articles/Knowledge_Base/*
// @version      1.2
// @downloadURL https://github.com/cpr5855/userscripts/raw/main/SFDC_Knowledgebase_Title_Updater.user.js
// ==/UserScript==

/*
This script works on KB articles opened from https://nutanix.my.salesforce.com/_ui/knowledge/ui/KnowledgeHome

It will update the tab name with a prefix of KBxxx

Updates the article title to include the KB article number and includes a portal link.  (Useful for sharing with customers)
*/

var otitle;
otitle = document.title;

var articleNum = document.getElementById("j_id0:j_id8:j_id9:j_id52:j_id53:articleNumber").innerText;
//var articleNum = document.getElementById("j_id0:j_id8:j_id9:j_id253:j_id255:0:j_id256:j_id257").innerText;


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
