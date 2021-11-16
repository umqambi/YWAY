// A $( document ).ready() block.
$( document ).ready(function() {
    console.log( "ready!" );
});

$( document ).ready(function() {
    $('#play-btn').click(function(){

        $('.main-content').show();
        $('.welcome').slideToggle(300);      

        return false;

    });
});