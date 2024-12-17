var count = 1;
window.onload = function () {
    var btn1 = document.createElement("button")
    btn1.innerHTML = "add";
    document.getElementById("main").appendChild(btn1)

    /*click event--onclick create*/
    btn1.onclick = function () {

        /* create tr*/
        var tr = document.createElement("tr")
        document.getElementById("addrow").appendChild(tr)

        /*create td and uppend in tr */
        var td1 = document.createElement("td")
        tr.appendChild(td1)
        var td2 = document.createElement("td")
        tr.appendChild(td2)
        var td3 = document.createElement("td")
        tr.appendChild(td3)
        var td4 = document.createElement("td")
        tr.appendChild(td4)
        var td5 = document.createElement("td")
        tr.appendChild(td5)
        var td6 = document.createElement("td")
        tr.appendChild(td6)

        /******************** t-body ******************/
        /*label-1 create ---no*/
        var lbl1 = document.createElement("label");
        lbl1.innerHTML = count++;
        td1.appendChild(lbl1)

        /*txt1 create ---product*/
        var txt1 = document.createElement("input");
        txt1.type = "text";
        txt1.id = "txt1" + count;
        td2.appendChild(txt1)

        /*txt2 create ---price*/
        var txt2 = document.createElement("input");
        txt2.type = "text";
        txt2.id = "txt2" + count;
        txt2.onkeyup = function () {
            if (txt2.value != null && txt3.value != null) {
                lbl2.innerHTML = parseInt(txt2.value) * parseInt(txt3.value)
            }
        }
        td3.appendChild(txt2)

        /*txt3 create ---Qty*/

        var txt3 = document.createElement("input");
        txt3.type = "text";
        txt3.id = "txt3" + count;
        txt3.onkeyup = function () {
            if (txt2.value != null && txt3.value != null) {
                lbl2.innerHTML = parseInt(txt2.value) * parseInt(txt3.value)
                GrandTotal()

            }
        }
        td4.appendChild(txt3)

        /*label-2 create----total*/
        var lbl2 = document.createElement("label");
        lbl2.id = "lbl2" + count
        td5.appendChild(lbl2)


        /*button-2 create----remove*/
        var btn2 = document.createElement("button")
        btn2.innerHTML = "remove";
        btn2.id = "btn2" + count;
        td6.appendChild(btn2);
        btn2.onclick = function () {
            document.getElementById("addrow").removeChild(tr);
            GrandTotal();
        }

        /********** t-foot *******/

        /* create tr*/
        var tr11 = document.createElement("tr11")
        document.getElementById("tfoot").appendChild(tr11)

        /*create td and uppend in tr */
        var td11 = document.createElement("td11")
        tr11.appendChild(td11)


        /*label-3 create---- total*/
        var lbl3 = document.createElement("label");
        lbl3.id = "lbl3" + count
        result.appendChild(lbl3)







       

    }

     /*grand total of  all lbl2 id and print in lbl3*/
    function GrandTotal() {
        var grandtotal = 0;
        var singlrlbl = document.querySelectorAll("#addrow>tr>td:nth-child(5)>label")
        console.log(singlrlbl)
        for (let i = 0; i < singlrlbl.length; i++) {
            grandtotal = grandtotal + parseInt(singlrlbl[i].innerHTML)
        }
        console.log(grandtotal)  /*console.log--->check karva run thayel result ma console ma value chech karva*/
        result.innerHTML = grandtotal;
        var Discount=0;
        debugger;
        if (grandtotal >= 15000) {
            Discount = grandtotal * 15 / 100;
        }
        else if (grandtotal <= 15000 || grandtotal >= 10000) {
            Discount = grandtotal * 10 / 100;
        }
        else if (grandtotal <= 10000 || grandtotal >= 5000) {
            Discount = grandtotal * 5 / 100;
        }
        else if (grandtotal <= 1500) {
            Discount = grandtotal * 2 / 100;
        }


        /*--------discount,grandtotal print--------*/ 
        Resultdiscount.innerHTML = Discount;
        netamunt.innerHTML = grandtotal - Discount;




    }










}
