function Method(x) {
    if(x == "Tues"){
        console.log(x);
        document.getElementById('QR').src = "lib/image.png";
        document.getElementById('QR').style.boxShadow = "5px 5px rgb(255, 158, 158)"
        document.getElementById('myfile').style.visibility = "visible"
    }
    else if(x == "Fri"){
        console.log(x);
        document.getElementById('QR').src="lib/image.png";
        document.getElementById('QR').style.boxShadow = "5px 5px rgb(58, 183, 255)"
        document.getElementById('myfile').style.visibility = "visible"
    }  
}