function akan(){
    var DD = parseInt(document.getElementsByClassName('day').value);
    var MM = parseInt(document.getElementsByClassName('month').value);
    var YY = parseInt(document.getElementsByClassName('year').value);
    var CC = (YY - 1) / 100 + 1;
    var daysoftheweek = (CC / 4 - 2 * CC -1 + 5 * YY / 4 + 26 * (MM + 1) / 10 + DD) % 7;
    
    document.getElementById('display').innerHTML = Math.round(daysoftheweek);
    console.log(daysoftheweek);

    var fille = [];
    var gar = [];
    var select = document.getElementById('choose').value;

    if(select === "male" ){
        alert(gar[Math.round(daysoftheweek)]);

    }else if (select === "female"){
        alert(fille[Math.round(daysoftheweek)]);

    }else {
        alert("ERROR! Please verify your data inputs");
    }

}