function correction(){
var d=document.getElementById("valeur");
d.innerHTML = "$x = {-b \\\pm \\sqrt{b^2-4ac} \\\over 2a}.$";
MathJax.Hub.Queue(["Typeset",MathJax.Hub]);
}

//MathJax.Hub.Queue(["Typeset",MathJax.Hub,"valeur"]);