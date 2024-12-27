document.querySelectorAll("li").forEach(function(e){if(e.childNodes.length>0){var t=e.childNodes[0],n=t.textContent;t.textContent="";var o=document.createElement("span");o.textContent=n,e.insertAdjacentElement("afterbegin",o),o.addEventListener("click",function(t){t.stopPropagation();var n=e.querySelector("ul");n&&(n.hidden=!n.hidden)})}});
//# sourceMappingURL=index.78955c64.js.map
