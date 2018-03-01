$(function() {
    var current
    var screen
    var output
    var limit
    var zero
    var operator

    // screen = document.getElementById("result")
    screen = $("#result")[0]
    // var elem = document.querySelector(".num")
    var elem = $(".num")
    var len = elem.length
        for(var i = 0; i < len; i++) {
            elem[i].addEventListener("click", function() {
                if(limit > 10) {
                    alert("Your number is too big")
                } else {
                    num = this.value
                    output = screen.innerHTML += num
                    limit = output.length
             }
        }, false)
    }

    var elem1 = document.querySelectorAll(".operator")
    var len1 = elem1.length
    for (var i = 0; i < len1; i++) {
        elem1[i].addEventListener("click", function() {
            operator = this.value
            if(screen.innerHTML === "") {
                screen.innerHTML = screen.innerHTML.concat("")
            }
            else if(output) {
                screen.innerHTML = output.concat(operator)
            }
       }, false)
    }

    // document.querySelector("#delete").addEventListener("click", function() {
        // $("#delete")[0].addEventListener("click", function(){
           
            $("#delete").click(function(){
            screen.innerHTML = ""
            limit = 0
            })


    // document.querySelector("#equals").addEventListener("click", function() {
     $("#equals").click(function() {
        if(screen.innerHTML === output) {
            screen.innerHTML = eval(ouput)
        } else {
            screen.innerHTML = ""
        }
    })