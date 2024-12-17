window.onload=function ()
{
    // text box
    var txt1 = document.createElement("input");  /*create input*/
    txt1.type = "text"; /*define type*/
    txt1.id = "txt1"; 
    document.getElementById("box").appendChild(txt1); /*value get karai ---> box ma*/

    
    // break point-br tage
    for (let i = 1; i < 4; i++) {
        var br = document.createElement("br");
        document.getElementById("box").appendChild(br);
    }
   
    // button-1 create
    var btn1 = document.createElement("button");
    btn1.innerHTML = "Click";
    document.getElementById("box").appendChild(btn1);

    // br tage
    for (let i = 1; i < 4; i++) {
        var br = document.createElement("br");
        document.getElementById("box").appendChild(br);
    }

    // label-1 create 
    var lbl1 = document.createElement("label");
    lbl1.innerHTML = "label";
    document.getElementById("box").appendChild(lbl1);
    btn1.onclick = function ()
    {
        lbl1.innerHTML = txt1.value;
    }

    /* ******************Radio button*****************************/

    // br point
    for (let i = 1; i < 4; i++) {
        var br = document.createElement("br");
        document.getElementById("box").appendChild(br);
    }
    // 1rdo create
    var rdo1 = document.createElement("input");
    rdo1.type = "radio";
    rdo1.id = "GenMale";
    rdo1.name = "Gender";
    document.getElementById("box").appendChild(rdo1);


    // craete label-2
    var lbl2 = document.createElement("label");
    lbl2.innerHTML = "Male";
    document.getElementById("box").appendChild(lbl2);

    // 2rdo craete
    var rdo2 = document.createElement("input");
    rdo2.type = "radio";
    rdo2.id = "GenFemale";
    rdo2.name = "Gender";
    document.getElementById("box").appendChild(rdo2);


    var lbl2 = document.createElement("label");
    lbl2.innerHTML = "Female";
    document.getElementById("box").appendChild(lbl2);

    for (let i = 1; i < 4; i++) {
        var br = document.createElement("br");
        document.getElementById("box").appendChild(br);
    }

    // button-2
    var btn2 = document.createElement("button");
    btn2.innerHTML = "Click";
    document.getElementById("box").appendChild(btn2);


    for (let i = 1; i < 4; i++) {
        var br = document.createElement("br");
        document.getElementById("box").appendChild(br);
    }

    var lbl3 = document.createElement("label");
    lbl3.innerHTML = "label";
    document.getElementById("box").appendChild(lbl3);

    btn2.onclick = function () {
        // var Gen = "";
        lbl3.innerHTML = "";

        if (rdo1.checked == true) {
            lbl3.innerHTML = "Male";
        }

        else if (rdo2.checked == true) {
            lbl3.innerHTML = "Female";
        }
    }

   

    /* *************************DropDown********************************* */

    for (let i = 1; i < 4; i++) {
        var br = document.createElement("br");
        document.getElementById("box").appendChild(br);
    }
    /*drop down 1----->date*/ 
    var Drop1 = document.createElement("select");
    Drop1.id = "Date";
    
    for (let i = 1; i <= 30; i++){
        var option = document.createElement("option");
        option.value = i;
        option.innerHTML = i;
       Drop1.appendChild(option);
    }
    document.getElementById("box").appendChild(Drop1);

     /*drop down----->2*/
    var Drop2 = document.createElement("select");
    Drop2.id = "Month";
    for (let i = 1; i <= 12; i++){
        var option = document.createElement("option");
        option.value = i;
        option.innerHTML = i;
       Drop2.appendChild(option);
    }
    document.getElementById("box").appendChild(Drop2);

     /*drop down----->3*/
    var Drop3 = document.createElement("select");
    Drop3.id = "Year";
    for (let i = 2000; i <= 2014; i++){
        var option = document.createElement("option");
        option.value = i;
        option.innerHTML = i;
       Drop3.appendChild(option);
    }
    document.getElementById("box").appendChild(Drop3);

    for (let i = 1; i < 4; i++) {
        var br = document.createElement("br");
        document.getElementById("box").appendChild(br);
    }

    // btn3 create
    var btn3 = document.createElement("button");
    btn3.innerHTML = "Click";
    document.getElementById("box").appendChild(btn3);


    for (let i = 1; i < 4; i++) {
        var br = document.createElement("br");
        document.getElementById("box").appendChild(br);
    }

    // label create 
    var lbl4 = document.createElement("label");
    lbl4.innerHTML = "label";
    document.getElementById("box").appendChild(lbl4);

    btn3.onclick = function () {
        lbl4.innerHTML = Drop1.value  + "/" + Drop2.value + "/" + Drop3.value; 
    }
}