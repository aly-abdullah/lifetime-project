$(() => {
  $("#js-q1-btn").click(function () {
    var qInput = $("#js-q1-input");
    var qInputValue = qInput.val();

    if (qInputValue != "شيماء") {
      $("#js-q1-span").removeClass("d-none").text("غلط ..");
    } else {
      qInput.parents(".question-div").addClass("d-none");
      $("#js-q2-div").removeClass("d-none");
    }
  });

  $("#js-q2-btn").click(function () {
    var qInput = $("#js-q2-input");
    var qInputValue = qInput.val();

    if (qInputValue != "عيونها") {
      $("#js-q2-span").removeClass("d-none").text("غلط ..");
    } else {
      qInput.parents(".question-div").addClass("d-none");
      $("#js-q3-div").removeClass("d-none");
    }
  });

  $("#js-q3-btn").click(function () {
    var qInput = $("#js-q3-input");
    var qInputValue = qInput.val();

    if (qInputValue != "تومى") {
      $("#js-q3-span").removeClass("d-none").text("غلط ..");
    } else {
      qInput.parents(".question-div").addClass("d-none");
      $("#js-q4-div").removeClass("d-none");
    }
  });

  $("#js-q4-btn").click(function () {
    var qInput = $("#js-q4-input");
    var qInputValue = qInput.val();

    if (qInputValue != "شيماء") {
      $("#js-q4-span").removeClass("d-none").text("غلط ..");
    } else {
      qInput.parents(".question-div").addClass("d-none");
      $("#js-q5-div").removeClass("d-none");
    }
  });

  $("#js-q5-btn").click(function () {
    var qInput = $("#js-q5-input");
    var qInputValue = qInput.val();

    if (qInputValue != "دعاء شيماء") {
      $("#js-q5-span").removeClass("d-none").text("غلط ..");
    } else {
      qInput.parents(".question-div").addClass("d-none");
      $("#js-q6-div").removeClass("d-none");
    }
  });

  $("#js-q6-btn").click(function () {
    var qInput = $("#js-q6-input");
    var qInputValue = qInput.val();

    if (qInputValue != "شيماء") {
      $("#js-q6-span").removeClass("d-none").text("غلط ..");
    } else {
      qInput.parents(".question-div").addClass("d-none");
      $("#js-q7-div").removeClass("d-none");
    }
  });

  $("#js-q7-btn").click(function () {
    var qInput = $("#js-q7-input");
    var qInputValue = qInput.val();

    if (qInputValue != "شيماء") {
      $("#js-q7-span").removeClass("d-none").text("غلط ..");
    } else {
      qInput.parents(".question-div").addClass("d-none");
      $("#js-q8-div").removeClass("d-none");
    }
  });

  $("#js-q8-btn").click(function () {
    var qInput = $("#js-q8-input");
    var qInputValue = qInput.val();

    if (qInputValue != "ذقنها") {
      $("#js-q8-span").removeClass("d-none").text("غلط ..");
    } else {
      qInput.parents(".question-div").addClass("d-none");
      $("#js-q9-div").removeClass("d-none");
    }
  });

  $("#js-q9-btn").click(function () {
    var qInput = $("#js-q9-input");
    var qInputValue = qInput.val();

    if (qInputValue != "بيت شيماء") {
      $("#js-q9-span").removeClass("d-none").text("غلط ..");
    } else {
      qInput.parents(".question-div").addClass("d-none");
      $("#js-complete").removeClass("d-none");
    }
  });
});
