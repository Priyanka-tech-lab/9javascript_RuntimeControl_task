window.onload=function()
{
    /************1 sub1-hindi********************/

     /*label-1 create--->sub name (hindi)*/
     var lbl1 = document.createElement("label");
     lbl1.innerHTML = "hindi :- ";
     document.getElementById("box").appendChild(lbl1)
 
      // 1txt box ------> sub marks add
    var txt1 = document.createElement("input");
    txt1.id = txt1;
    txt1.type = Text;
    document.getElementById("box").appendChild(txt1)

    /*label-7 create--->for grace marks (hindi)*/
    var lbl7 = document.createElement("label");
    lbl7.innerHTML = "label";
    document.getElementById("box").appendChild(lbl7)
    
    //  br
    for (let i = 1; i < 3; i++) {
        var br = document.createElement("br")  
      document.getElementById("box").appendChild(br);  
     }

      /*********************2 sub2-english********************/
      
     /*label-2 create--->sub name (english)*/
     var lbl2 = document.createElement("label");
     lbl2.innerHTML = "english :- ";
     document.getElementById("box").appendChild(lbl2)
 
      // 2txt box ------>sub marks add
    var txt2 = document.createElement("input");
    txt2.id = txt2;
    txt2.type = Text;
    document.getElementById("box").appendChild(txt2)

     /*label-8 create--->for grace marks (english)*/
     var lbl8 = document.createElement("label");
     lbl8.innerHTML = "label";
     document.getElementById("box").appendChild(lbl8)

      //  br
      for (let i = 1; i < 3; i++) {
        var br = document.createElement("br")  
      document.getElementById("box").appendChild(br);  
     }

      /* **************** 3.sub3-maths ***********************/
     /*label-3 create--->marks name*/
     var lbl3 = document.createElement("label");
     lbl3.innerHTML = "maths :- ";
     document.getElementById("box").appendChild(lbl3)
 
      // 3txt box ------>sub marks add
    var txt3 = document.createElement("input");
    txt3.id = txt3;
    txt3.type = Text;
    document.getElementById("box").appendChild(txt3)

     /*label-9 create--->for grace marks (maths)*/
     var lbl9 = document.createElement("label");
     lbl9.innerHTML = "label :- ";
     document.getElementById("box").appendChild(lbl9)


    //  br
    for (let i = 1; i < 3; i++) {
        var br = document.createElement("br")  
      document.getElementById("box").appendChild(br);  
     }

      /* **************** 4.sub4-science ***********************/

     /*label-4 create--->sub name (science)*/
     var lbl4 = document.createElement("label");
     lbl4.innerHTML = "science";
     document.getElementById("box").appendChild(lbl4)
 
      // 4txt box ------>sub marks add
    var txt4 = document.createElement("input");
    txt4.id = txt4;
    txt4.type = Text;
    document.getElementById("box").appendChild(txt4)

     /*label-10 create--->for grace marks (science)*/
     var lbl10 = document.createElement("label");
     lbl10.innerHTML = "label :- ";
     document.getElementById("box").appendChild(lbl10)


     //  br
     for (let i = 1; i < 4; i++) {
        var br = document.createElement("br")  
      document.getElementById("box").appendChild(br);  
     }

      /* *******************5.sub5-english *********************/

     /*label-5 create--->sub name (english)*/
     var lbl5 = document.createElement("label");
     lbl5.innerHTML = "english";
     document.getElementById("box").appendChild(lbl5)
 
      // 5txt box ------>sub marks add
    var txt5 = document.createElement("input");
    txt5.id = txt5;
    txt5.type = Text;
    document.getElementById("box").appendChild(txt5)

     /*label-11 create--->for grace marks (english)*/
     var lbl11 = document.createElement("label");
     lbl11.innerHTML = "label";
     document.getElementById("box").appendChild(lbl11)

     //  br
     for (let i = 1; i < 4; i++) {
        var br = document.createElement("br")  
      document.getElementById("box").appendChild(br);  
     }

     /************************* button *************************/
      //  btn1----
    var btn1 = document.createElement("button")
    btn1.innerHTML = "Result";
    document.getElementById("box").appendChild(btn1);

      //  br
      for (let i = 1; i < 3; i++) {
        var br = document.createElement("br")  
      document.getElementById("box").appendChild(br);  
     }

     /************************* total ********************/

     /*label-6 create---> total*/

     var lbl6 = document.createElement("label");
     lbl6.innerHTML = "total :- ";
     document.getElementById("box").appendChild(lbl6)

     
     var lbl77 = document.createElement("label");
     lbl77.innerHTML = "label :- ";
     document.getElementById("box").appendChild(lbl77)

      //  br
      for (let i = 1; i < 3; i++) {
        var br = document.createElement("br")  
      document.getElementById("box").appendChild(br);  
     }

     var lbl12 = document.createElement("label");
     lbl12.innerHTML = "label :- ";
     document.getElementById("box").appendChild(lbl12)

      //  br
      for (let i = 1; i < 3; i++) {
        var br = document.createElement("br")  
      document.getElementById("box").appendChild(br);  
     }

     



     /*********************** btn click event ******************/

     btn1.onclick = function()
     {
        var total= parseInt(txt1.value) + parseInt(txt2.value) + parseInt(txt3.value) + parseInt(txt4.value) + parseInt(txt5.value)
        lbl77.innerHTML = total;


         /********************for gracing marks*********************************/
        if (txt1.value < 35 || txt2.value < 35 || txt3.value < 35 || txt4.value < 35 || txt5.value < 35)
          {

              var g1 = 0, g2 = 0, g3 = 0, g4 = 0, g5 = 0, grace = 0;

              if (txt1.value < 35)
              {
                  g1 = 35 - txt1.value;
              }
              if (txt2.value < 35)
              {
                  g2 = 35 - txt2.value;
              } 
              if (txt3.value < 35)
              {
                  g3 = 35 - txt3.value;
              } 
              if (txt4.value < 35)
              {
                  g4 = 35 - txt4.value;
              } 
              if (txt5.value < 35)
              {
                  g1 = 35 - txt5.value;
              }

              grace = g1 + g2 + g3 + g4 + g5;
              if (grace <= 8)
              {
                  lbl12.innerHTML = "YOu are pass with geace";
              }
              else
              {
                  lbl12.innerHTML = "Fail";
              }

              /*for gracing print in label*/


              lbl7.innerHTML = g1
              lbl8.innerHTML = g2
              lbl9.innerHTML = g3
              lbl10.innerHTML = g4
              lbl11.innerHTML = g5


             
          }




     }






}