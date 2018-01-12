var colors = ['yellow','blue', 'green'];
var count = 0;

$("#container div").each(function(i, elem) {
  $(this).on('click', function () {
    $(this).appendTo("#container");
  });
});


$('#colorblocks div').each(function(i, elem) {
  $(this).on('click', function () {
    count++
    if (count === colors.length){
    count = 0;
    };
    $(this).css("background-color", colors[count]);
  });
});
