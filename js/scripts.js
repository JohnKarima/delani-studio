$(document).ready(function () {
  $(".designDo").click(function () {
    $("#designPic").toggle();
    $(".designDes").toggle();

  });
  $(".developmentDo").click(function () {
    $("#developmentPic").toggle();

    $(".developmentDes").fadeToggle();
  });
  $(".productDo").click(function () {
    $("#productPic").toggle();

    $(".productDes").fadeToggle();
  });
  $('.hoverClass').mouseover(function () {
    $(this).css('opacity', '.7');
  }).mouseout(function () {
    $(this).css('opacity', '1');
  });
});