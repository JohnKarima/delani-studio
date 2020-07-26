$(document).ready(function () {
  $(".designDo").click(function () {
    $("#designPic").toggle();
    $(".designDes").toggle();
  });
  $(".developmentDo").click(function () {
    $("#developmentPic").toggle();
    $(".developmentDes").toggle();
  });
  $(".productDo").click(function () {
    $("#productPic").toggle();
    $(".productDes").toggle();
  });
  $('.containerB').mouseover(function () {
    $(this).css('opacity', '.85');
  }).mouseout(function () {
    $(this).css('opacity', '1');
  });
  $("#mc-embedded-subscribe-form").submit(function (event) {
    var name = $("input#mce-FNAME").val();
    var email = $("input#mce-EMAIL").val();
    var message = $("textarea#text-area").val();
    if ($("input#mce-FNAME").val() && $("input#mce-EMAIL").val()) {
      alert(name + ", we have received your message. Thank you for your feedback.");
    }
    else {
      alert("Please enter your name and email address");
    }
  });
  });