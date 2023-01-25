$(document).ready(function () {

    $("#Btn-Deposit").click(function () {
        var depositAmount = $("#deposit-field").val();
        var cureentValue = $("#deposit-id").text();
        var updetedValue = Number(depositAmount) + Number(cureentValue);
        // total deposit add
        $("#deposit-id").text(updetedValue);
        // add total balance --
        var cureentValues = $("#balance-id").text();
        var totaladd = Number(depositAmount) + Number(cureentValues);
        $("#balance-id").text(totaladd);
        // reset all 
        $("#deposit-field").val("");
    })

    // ------------------------------------------------------------------

    $("#Btn-withdrow").click(function () {
        var withaddFild = $("#withdrow-field").val();
        var cureentWithFild = $("#withdrow-id").text();
        var totalWithDrowAm = Number(withaddFild) + Number(cureentWithFild);
        // total withdro add balance
        var setValue = $("#withdrow-id").text(totalWithDrowAm);

        // total cut balance
        var presentValu = $("#balance-id").text();
        var Totalcut = Number(presentValu) - Number(withaddFild);
        $("#balance-id").text(Totalcut);

        // reset
        $("#withdrow-field").val("")
    });



});


