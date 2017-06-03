var today = new Date(); 
var datetime = "Last Sync: " + today.getDate() + "/" + (today.getMonth()+1)  + "/" + today.getFullYear() + " @ "  
    + today.getHours() + ":"   + today.getMinutes() + ":" + today.getSeconds();

var inaugurationDay = new Date(2020, 1, 20, 12, 00, 1, 1);

function isTrumpPresident(){
    if (today > inaugurationDay){
        return "No.";
    }
    else{
        return "Yes."
    }
}

function daysLeft(){
    return Math.round(Math.abs((inaugurationDay.getTime() - today.getTime())/(86400000)));
}

document.getElementById('wellIsHe').innerHTML = isTrumpPresident();
//document.getElementById('daysLeft').innerHTML = daysLeft();
document.body.innerHTML = document.body.innerHTML.replace('#number', daysLeft());