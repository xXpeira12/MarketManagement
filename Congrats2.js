function Method(x) {
    if(x == "CASH"){
        console.log(x);
        document.getElementById('QR').src = "";
        document.getElementById('myfile').style.visibility = "hidden"
        document.getElementById('Cash').style.visibility = "visible";

    }
    else if(x == "QR"){
        console.log(x);
        document.getElementById('QR').src= "lib/image.png";
        document.getElementById('myfile').style.visibility = "visible"
        document.getElementById('Cash').style.visibility = "hidden";
    }  
}