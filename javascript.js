window.onload = function(){ 
    


var paragraphs = document.getElementsByTagName("p");
var header = document.getElementsByTagName("h1");
var sections = document.getElementsByTagName("section");



for(var p=0;p<paragraphs.length;p++) {
	var para = paragraphs[p];

	para.onclick = function() {
	demo.innerHTML = demo.innerHTML + "hola!";
	}
}


};
