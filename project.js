$( document ).ready(function() {
    $( "input[name='lists[stg-upgrade-OXO-tot]']" ).click(function() {
        if ($(this).is(':checked')) {
         $(".oxoTot").addClass("card-selected");
        }
        else {
         $(".oxoTot").removeClass("card-selected");
        }
       });
    $( "input[name='lists[stg-upgrade-OXO-updates]']" ).click(function() {
        if ($(this).is(':checked')) {
         $(".oxoUpdates").addClass("card-selected");
        }
        else {
         $(".oxoUpdates").removeClass("card-selected");
        }
       });

    $( "input[name='lists[stg-upgrade-OXO-Sales-and-Promotions]']" ).click(function() {
        if ($(this).is(':checked')) {
         $(".oxoSales").addClass("card-selected");
        }
        else {
         $(".oxoSales").removeClass("card-selected");
        }
       });
    });
