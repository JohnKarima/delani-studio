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
  $('.hoverClass').mouseover(function () {
    $(this).css('opacity', '.7');
  }).mouseout(function () {
    $(this).css('opacity', '1');
  });
});