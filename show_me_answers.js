var parent = document.querySelector(".sg-layout__box");
var elements = document.querySelectorAll(".sg-text.js-answer-content.brn-rich-content");
elements.forEach(function(elem, i){
	console.log(elem.innerHTML);	
	elem.style.border = "3px dashed black";
	elem.style.padding = "20px";
	elem.style.margin = "15px";
	parent.append(elem)
});