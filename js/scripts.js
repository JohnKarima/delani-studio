$(document).ready(function () {
  $(".designDo").click(function () {
    $(".designDes").fadeToggle();
  });
  $(".developmentDo").click(function () {
    $(".developmentDes").fadeToggle();
  });
  $(".productDo").click(function () {
    $(".productDes").fadeToggle();
  });
  $(".hoverClass").hover(function(){
    $(this).css("background-color", "yellow");
    }, function(){
    $(this).css("background-color", "");
  });
});