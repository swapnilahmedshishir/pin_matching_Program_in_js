function genaretBtn(){
    let randomNumber = Math.floor(1000 + Math.random() * 9000);
    let inputFile = document.getElementById('genaretInputFiled');
    inputFile.value = randomNumber;
    document.getElementById("calc_input").value = "";
}
function validInputDigit(num){
     num = Number(num);
    let inputFile = document.getElementById("calc_input");
    inputFile.value += num;
}
function allClearBtn(){
    document.getElementById("calc_input").value = "";
}
function oneByOneClear(){
    var val = document.getElementById("calc_input").value.slice(0, -1);
    document.getElementById("calc_input").value = val;
}
function submiteBtn(){
    var calValue= document.getElementById("calc_input")
    var calValueNum = calValue.value
    var genaretValue = document.getElementById("genaretInputFiled");
    var genaretValueNum = genaretValue.value;
    let notifyTrue = document.getElementById("notify_true");
    let notifyflase = document.getElementById("notify_false");
    if(calValueNum == genaretValueNum){
        notifyTrue.style.display="block";
        notifyflase.style.display ="none";
        
    }else if (calValueNum !== genaretValueNum){
        notifyflase.style.display ="block";
        notifyTrue.style.display="none";
        
        
    }
}





