document.addEventListener("DOMContentLoaded", function () {

  // Znikanie napisów ze zdjęć 
  var img = $("figure").find("img")
  console.log(img)
  img.on("mouseenter", function () {

    $(this).siblings().hide();
    img.on("mouseleave", function () {
      $(this).siblings().show();
    })
  });

  //Slider
  var next = document.querySelector(".arrowG");
  var prev = document.querySelector(".arrowL");
  var galeriLi = document.querySelectorAll('.slider li');
  var imgIndex = 0;

  galeriLi[imgIndex].classList.add("visible");

  next.addEventListener('click', function (event) {
    galeriLi[imgIndex].classList.remove("visible");
    imgIndex++;
    if (imgIndex >= galeriLi.length) {
      imgIndex = 0;
    }
    galeriLi[imgIndex].classList.add("visible");
  });


  prev.addEventListener('click', function (event) {
    galeriLi[imgIndex].classList.remove("visible");
    imgIndex--;
    if (imgIndex < 0) {
      imgIndex = galeriLi.length - 1;
    }
    galeriLi[imgIndex].classList.add("visible");
  });
})