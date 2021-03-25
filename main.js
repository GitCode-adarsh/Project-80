function getparagraph1(){
    var inputs = [];
    for(i = 1 ; i <= 6 ; i++){
        inputs.push(document.getElementById("para1_input_box_" + i).value);
    }
        document.getElementById("ShowParagraph1").innerHTML = inputs.join(". ");
}

function getparagraph2(){
    var inputs =[];
    for(j = 1 ; j <= 6 ; j++){
        inputs.push(document.getElementById("para2_input_box_" + j).value);
    }
        document.getElementById("ShowParagraph2").innerHTML = inputs.join(". ");
}