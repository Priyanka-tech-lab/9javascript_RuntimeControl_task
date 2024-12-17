window.onload=Function()
{
    /************************************** text-box-1 **************************************/ 
    var txt1 = document.createElement("input");
    txt1.type = "text";
    txt1.id = "txt1";
    document.getElementById("box").appendChild(txt1)

    /*br point*/ 
    for (let i = 1; i < 4; i++)
    {
     var br = document.createElement("br");
     document.getElementById("box").appendChild(br);        
    }

    /*button-1 create*/ 
    var btn1 = document.createElement("button")
    btn1.innerHTML = "Click here";
    document.getElementById("box").appendChild(btn1);

    /*br point*/ 

    for (let i = 1; i < 4; i++) {
        var br = document.createElement("br");
        document.getElementById("box").appendChild(br);  
    }

    /*label-1 create*/
    var lbl1 = document.createElement("label");
    lbl1.innerHTML = "label";
    document.getElementById("box").appendChild(lbl1)

    /*On-click create*/ 

   btn1.onclick = function()
   {
    lbl1.innerHTML = txt1.value;
   }

   /************************************** radio-button **************************************/ 

   for (let i = 1; i < 4; i++) {
    var br = document.createElement("br");
    document.getElementById("box").appendChild(br);
   }

  //   rdo1-create for---male
  var rdo1 = document.createElement("input");
  rdo1.type = "radio";
  rdo1.id = "genmale";
  rdo1.name = "gender";
  document.getElementById("box").appendChild(rdo1);
  
 //   label2 crate for---male label

 var lbl2 = document.createElement("label");
 lbl2.innerHTML = "male";
 document.getElementById("box").appendChild(lbl2);

//  rdo2-create for---female
var rdo2 = document.createElement("input");
rdo2.type = "radio";
rdo2.id = "genfemale";
rdo2.name = "gender";
document.getElementById("box").appendChild(rdo2);

//   label3 crate for---female label

var lbl3 = document.createElement("label");
lbl3.innerHTML = "female";
document.getElementById("box").appendChild(lbl3);

// button-2 create for radiobutton-selection

var btn2 = document.createElement("button");
btn2.innerHTML = "Click";
document.getElementById("box").appendChild(btn2);

for (let i = 1; i < 4; i++) {
    var br = document.createElement("br");
    document.getElementById("box").appendChild(br);
}

//label-4 for rdo value print 
var lbl4 = document.createElement("label");
lbl4.innerHTML = "label";
document.getElementById("box").appendChild(lbl4);

btn2.onclick = function()
{
    if (rdo1.checked==true) {
        lbl4.innerHTML = "male";  
    }

    else if (rdo2.checked ==true) {
        lbl4.innerHTML = "female";  
    }
}

// br point

for (let i = 1; i < 4; i++) {
    var br = document.createElement("br");
    document.getElementById("box").appendChild(br);
}

 /************************************** drop-down *************************************/ 



//  drop-down 1---->date

var drop1 = document.createElement("select");
drop1.id = "date";

for (let i = 1; i <= 31;i++){
    var option = document.createElement("option");
    option.value = i;
    option.innerHTML = i;
   drop1.appendChild(option);
}
document.getElementById("box").appendChild(drop1);

// drop-down 2-------->month
var drop2 = document.createElement("select")
drop2.id = "month";

for (let i = 1; i <= 12; i++) {
   var option = document.createElement("option");
   option.value = i;
   option.innerHTML = i;
   drop2.appendChild(option);
}
document.getElementById("box").appendChild(drop2);

// drop-down 3-------->year
var drop3 = document.createElement("select")
drop3.id = "year";

for (let i = 2000; i <= 2024; i++) {
   var option = document.createElement("option");
   option.value = i;
   option.innerHTML = i;
   drop3.appendChild(option);
}
document.getElementById("box").appendChild(drop3);


for (let i = 1; i < 4; i++) {
    var br = document.createElement("br");
    document.getElementById("box").appendChild(br);
}
// btn3 craete for dropdown
var btn3 = document.createElement("button");
btn3.innerHTML = "click";
document.getElementById("box").appendChild(btn3);

for (let i = 1; i < 4; i++) {
    var br = document.createElement("br");
    document.getElementById("box").appendChild(br);
}

// label create 
var lbl5 = document.createElement("label");
lbl5.innerHTML = "label";
document.getElementById("box").appendChild(lbl5);

btn3.onclick = function () {
    lbl5.innerHTML = drop1.value  + "/" + drop2.value + "/" + drop3.value; 
}

   














    
}