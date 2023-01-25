$(document).ready(function () {
    $("button").click(function () {
        const e = $('#email').val()
        const p = $("#pass").val()

        if (e == "" && p == "") {
            alert("plz enter email and pass")

        }
        else if (e == "nadim.bd62@gmail.com" && p == "123") {
            window.location.href = "next.html"
        }
        else {
            alert("login faild")
        }

        // if (e === "nadim.bd62@gmail.com" && p === "123") {
        //     alert("login sussesfully")
        // }
        // else {
        //     alert("login faild")
        // }

        // if ($('#email').val() == "nadim.bd62@gmail.com" && $("#pass").val() == "123") {
        //     alert("login sussesfully")
        // }
        // else {
        //     alert("faild")
        // }

        // alert($("#email").val() + $("#pass").val())

    })
});





// alert("The paragraph is now hidden");