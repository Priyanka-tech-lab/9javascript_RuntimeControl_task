window.onload=function()
{
    /*customer name*/
     /*label-1 create--->cusmor name*/
     var lbl1 = document.createElement("label");
     lbl1.innerHTML = "customer name";
     document.getElementById("box").appendChild(lbl1)
 
      // 1txt box ------>custome name add
    var txt1 = document.createElement("input");
    txt1.id = txt1;
    txt1.type = Text;
    document.getElementById("box").appendChild(txt1)
    
    //  br
    for (let i = 1; i < 3; i++) {
        var br = document.createElement("br")  
      document.getElementById("box").appendChild(br);  
     }

      /*product name*/
     /*label-2 create--->product name*/
     var lbl2 = document.createElement("label");
     lbl2.innerHTML = "product name";
     document.getElementById("box").appendChild(lbl2)
 
      // 2txt box ------>custome name add
    var txt2 = document.createElement("input");
    txt2.id = txt2;
    txt2.type = Text;
    document.getElementById("box").appendChild(txt2)


      //  br
      for (let i = 1; i < 3; i++) {
        var br = document.createElement("br")  
      document.getElementById("box").appendChild(br);  
     }

      /*product price*/
     /*label-3 create--->product price*/
     var lbl3 = document.createElement("label");
     lbl3.innerHTML = "product price";
     document.getElementById("box").appendChild(lbl3)
 
      // 3txt box ------>product price add
    var txt3 = document.createElement("input");
    txt3.id = txt3;
    txt3.type = Text;
    document.getElementById("box").appendChild(txt3)


    //  br
    for (let i = 1; i < 3; i++) {
        var br = document.createElement("br")  
      document.getElementById("box").appendChild(br);  
     }

      /*product QTY*/
     /*label-4 create--->product price*/
     var lbl4 = document.createElement("label");
     lbl4.innerHTML = "product QTY";
     document.getElementById("box").appendChild(lbl4)
 
      // 4txt box ------>product price add
    var txt4 = document.createElement("input");
    txt4.id = txt4;
    txt4.type = Text;
    document.getElementById("box").appendChild(txt4)


     //  br
     for (let i = 1; i < 4; i++) {
        var br = document.createElement("br")  
      document.getElementById("box").appendChild(br);  
     }
    
    //  btn1----
    var btn1 = document.createElement("button")
    btn1.innerHTML = "click here";
    document.getElementById("box").appendChild(btn1);

      //  br
      for (let i = 1; i < 3; i++) {
        var br = document.createElement("br")  
      document.getElementById("box").appendChild(br);  
     }

     /************* output ****************/

      /*label-5 create---> total*/
      var lbl5 = document.createElement("label");
      lbl5.innerHTML = "total :-";
      document.getElementById("box").appendChild(lbl5)

       /*label-6 create---> total amount */
       var lbl6 = document.createElement("label");
       lbl6.innerHTML = "lable";
       document.getElementById("box").appendChild(lbl6)


       //  br
      for (let i = 1; i < 3; i++) {
        var br = document.createElement("br")  
      document.getElementById("box").appendChild(br);  
     }


       /*label-7 create---> discount print*/
      var lbl7 = document.createElement("label");
      lbl7.innerHTML = "discount :-";
      document.getElementById("box").appendChild(lbl7)

       /*label-8 create---> discount amount */
       var lbl8 = document.createElement("label");
       lbl8.innerHTML = "lable";
       document.getElementById("box").appendChild(lbl8)


       //  br
      for (let i = 1; i < 3; i++) {
        var br = document.createElement("br")  
      document.getElementById("box").appendChild(br);  
     }

      /*label-9 create---> discount amount print*/
      var lbl9 = document.createElement("label");
      lbl9.innerHTML = "discount amount :-";
      document.getElementById("box").appendChild(lbl9)

       /*label-10 create---> discount amount print */
       var lbl10 = document.createElement("label");
       lbl10.innerHTML = "lable";
       document.getElementById("box").appendChild(lbl10)


        //  br
      for (let i = 1; i < 3; i++) {
        var br = document.createElement("br")  
      document.getElementById("box").appendChild(br);  
     }
        /*label-11 create---> thank you */
        var lbl11 = document.createElement("label");
        lbl11.innerHTML = "lable";
        document.getElementById("box").appendChild(lbl11)


       /********** button click event **********/

       btn1.onclick = function()
       {
        let result = parseInt(txt3.value) * parseInt(txt4.value);


           lbl6.innerHTML = result

           if (result >= 1000) {

            let discountresult =   result*10 /100 ;
            lbl8.innerHTML = discountresult;


           let  discountamount = result - discountresult;
           lbl10.innerHTML = discountamount;

           lbl11.innerHTML = "thanks " + txt1.value +  "&nbsp; for shipping &nbsp;" + txt2.value



            
           }
       }


     


  






}
