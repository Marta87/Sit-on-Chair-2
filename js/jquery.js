$(function () {

  //Hamburger menu
  var hamburger = $(".hamburger_menu img");
  var menu = $(".menu");

  hamburger.on("click", function () {
      menu.slideToggle();
    })
    //Formularz zamówien
    //Rodzaj krzesła
  $("#chair_type").on("change", function () {
    var text = $("#chair_type option:selected").text();
    var priceChair = $("#chair_type").prop("value") + "ZØ";
    var price = parseFloat(priceChair)
    $("#chair_choice").html(text)
    $("#price").html(price)
  })

  //Kolor
  $("#chair_color").on("change", function () {
    var text = $("#chair_color option:selected").text();
    $("#chairColorTxt").html(text)
  })

  //Materiał
  $("#fabric").on("change", function () {
    var text = $("#fabric option:selected").text();
    $("#choice_fabrics").html(text)
  })

  //Transport
  $(".trans input").on("change", function () {
    if ($(".trans input").is(":checked")) {
      $("#transport_text").html("Transport")
      $("#transport_price").html(200.00)
    } else {
      $("#transport_price").html(0)
    }
  })

  //Sumowanie
  $(".form").on("change", function () {
    var suma1 = parseFloat($("#price").html());
    var suma2 = parseFloat($("#transport_price").html());
    var suma = suma1 + suma2;
    console.log(typeof suma)
    $("#amount").html(suma1 + suma2)
  })
})