function akan(){
    var DD = parseInt(document.getElementById('day').value);
    var MM = parseInt(document.getElementById('month').value);
    var YY = parseInt(document.getElementById('year').value);
    var CC = (YY - 1) / 100 + 1;
    var daysoftheweek = (CC / 4 - 2 * CC -1 + 5 * YY / 4 + 26 * (MM + 1) / 10 + DD) % 7;
    
    console.log(daysoftheweek);
    document.getElementById('display').innerHTML = Math.round(daysoftheweek);

    if( DD <= 0 || DD >31 ){

        alert("Please enter number from 1-31");

    }else if( MM <= 0 || MM > 12){
        alert("Please enter valid month");

    }

    var gar = ["Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"];
    var fille = ["Akosua", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama"];

    var select= document.querySelector('input[name="gender"]:checked').value;
    // console.log(gender);

    // var select = document.getElementById('choose').value;

    if(select === "male" ){
        alert(gar[Math.round(daysoftheweek)]);

    }else if (select === "female"){
        alert(fille[Math.round(daysoftheweek)]);

    }else {
        alert("ERROR! Please verify your data inputs");
    }

}