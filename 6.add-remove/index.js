var count = 0;
window.onload = function () {
    var btn1 = document.createElement("button")
    btn1.innerHTML = "add";
    document.getElementById("box").appendChild(btn1)

    /*br point*/

    for (let i = 1; i < 4; i++) {
        var br = document.createElement("br");
        document.getElementById("box").appendChild(br);
    }


    /*click event--onclick create*/


    btn1.onclick = function () {

        /* create tr*/
        var tr = document.createElement("tr")
        document.getElementById("box").appendChild(tr)

        /*create td and uppend in tr */
        var td1 = document.createElement("td")
        tr.appendChild(td1)
        var td2 = document.createElement("td")
        tr.appendChild(td2)
        var td3 = document.createElement("td")
        tr.appendChild(td3)
        var td4 = document.createElement("td")
        tr.appendChild(td4)


        /*label-1 create*/
        var lbl1 = document.createElement("label");
        lbl1.innerHTML = ++count;
        td1.appendChild(lbl1)


        var txt1 = document.createElement("input");
        txt1.type = "text";
        txt1.id = "txt1" + count;
        td2.appendChild(txt1)

        var txt2 = document.createElement("input");
        txt2.type = "text";
        txt2.id = "txt2" + count;
        td3.appendChild(txt2)


        /*button-2 create*/
        var btn2 = document.createElement("button")
        btn2.innerHTML = "Click here";
        btn2.id = "btn2" + count;
        td4.appendChild(btn2);
        btn2.onclick = function () {
            document.getElementById("box").removeChild(tr);
        }

        /*br point*/

        for (let i = 1; i < 4; i++) {
            var br = document.createElement("br");
            document.getElementById("box").appendChild(br);
        }


    }




}
