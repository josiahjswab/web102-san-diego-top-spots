$(document).ready(function (data) {
  $.getJSON("data.json", function (data) {
    $.each(data, function (index, value) {
        $("table").append("<tr><td>" 
        + value.name + "</td><td>" 
        + value.description + "</td><td><a href=https://www.google.com/maps?q=" 
        + value.location +  " target='_blank'><button id='google-button'>Google Maps</button></a></td></tr>")
    });
  }); 
});
