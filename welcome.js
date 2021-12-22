function welcome()
{
    var ime=window.prompt("Please enter your name: ");
    var wel="<p>Hello "+ime+"!</p>";
    output=document.getElementById("ime");
    output.innerHTML=wel;

}
window.addEventListener("load",welcome,false);