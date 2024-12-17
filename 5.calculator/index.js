window.onload=function()
{
    /******************* text-box 1 create ********************/
    // 1txt box
    var txt1 = document.createElement("input");
    txt1.id = txt1;
    txt1.type = Text;
    document.getElementById("box").appendChild(txt1)
    
     // 2txt box
     var txt2 = document.createElement("input");
     txt2.id = txt2;
     txt2.type = Text;
     document.getElementById("box").appendChild(txt2)
     
    //  br
     for (let i = 1; i < 4; i++) {
        var br = document.createElement("br")  
      document.getElementById("box").appendChild(br);  
     }
    
    //  btn1----plus
    var btn1 = document.createElement("button")
    btn1.innerHTML = "+";
    document.getElementById("box").appendChild(btn1);

    // btn2-----minus
    var btn2 = document.createElement("button")
    btn2.innerHTML = "-";
    document.getElementById("box").appendChild(btn2);

    // btn3----multiplication
    var btn3 = document.createElement("button")
    btn3.innerHTML = "*";
    document.getElementById("box").appendChild(btn3);

    // btn4----devide
    var btn4 = document.createElement("button")
    btn4.innerHTML = "/";
    document.getElementById("box").appendChild(btn4);
     
    //  br
    for (let i = 1; i < 4; i++) {
        var br = document.createElement("br")  
      document.getElementById("box").appendChild(br);  
     }

      /*label-1 create*/
    var lbl1 = document.createElement("label");
    lbl1.innerHTML = "label";
    document.getElementById("box").appendChild(lbl1)

    /* ********************* click event button ************************ */

    // btn1
    btn1.onclick = function()
    {
        lbl1.innerHTML = parseInt(txt1.value) + parseInt(txt2.value);
    }

     // btn2
     btn2.onclick = function()
     {
         lbl1.innerHTML = parseInt(txt1.value) - parseInt(txt2.value);
     }

      // btn3
    btn3.onclick = function()
    {
        lbl1.innerHTML = parseInt(txt1.value) * parseInt(txt2.value);
    }

     // btn4
     btn4.onclick = function()
     {
         lbl1.innerHTML = parseInt(txt1.value) / parseInt(txt2.value);
     }


}