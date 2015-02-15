$( document ).ready(function(){
	$(".button-collapse").sideNav();
});

$(document).ajaxError(function (e, xhr, options) {
  var errors = xhr.responseJSON;
  for (errorField in errors) {
    if (errors.hasOwnProperty(errorField)) {
        var inputField = $("#"+ errorField);
        inputField.removeClass("valid");
        inputField.addClass("invalid");
        var fieldErrors = inputField.siblings(".errors");
        fieldErrors.text(errors[errorField]);
    }
  }
});