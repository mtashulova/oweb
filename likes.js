function Toggle(button){
    var btn = button;
if(btn.classList.contains("far")){
    btn.classList.remove("far");
    btn.classList.add("fas");
}
else{
    btn.classList.remove("fas");
        btn.classList.add("far");

}
}