document.addEventListener("DOMContentLoaded", function () {

    // Signature pictures 
    var photo = document.querySelectorAll("figure img");

    for (var i = 0; i < photo.length; i++) {
        photo[i].addEventListener("mouseover", function (event) {

            this.nextElementSibling.style.display = "none";
        });
        photo[i].addEventListener("mouseout", function (event) {

            this.nextElementSibling.style.display = "inline";
        });
    }


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

    //Form 
    var form = document.querySelectorAll(".form")[0];
    var chairTypeSelect = document.querySelectorAll("#chair_type");
    var chairChoice = document.getElementById("chair_choice")
    var chairPrice = document.getElementById("price");
    var chairColorSelect = document.querySelectorAll("#chair_color");
    var chairColor = document.getElementById("chairColorTxt");
    var chairPrice1 = document.getElementById("price1");
    var chairFabricSelect = document.querySelectorAll("#fabric");
    var chairFabric = document.getElementById("choice_fabrics")
    var chairPrice2 = document.getElementById("price2");
    var checkbox = document.getElementById("transport");
    var transport = document.getElementById("transport_text");
    var transportPrice = document.getElementById("transport_price");
    var amount = document.getElementById("amount");

    for (var i = 0; i < chairTypeSelect.length; i++) {
        chairTypeSelect[i].addEventListener("change", function (event) {

            chairChoice.innerHTML = this.children[this.selectedIndex].dataset.name;
            chairPrice.innerHTML = this.value;
        });
    }

    for (var i = 0; i < chairColorSelect.length; i++) {
        chairColorSelect[i].addEventListener("change", function (event) {

            chairColor.innerHTML = this.children[this.selectedIndex].dataset.name;
            chairPrice1.innerHTML = this.value;
        });
    }

    for (var i = 0; i < chairFabricSelect.length; i++) {
        chairFabricSelect[i].addEventListener("change", function (event) {

            chairFabric.innerHTML = this.children[this.selectedIndex].dataset.name;
            chairPrice2.innerHTML = this.value;
        });
    }

    checkbox.addEventListener("change", function (event) {
        if (this.checked === true) {
            transport.innerHTML = this.dataset.name;
            transportPrice.innerHTML = this.value;
        }
    })

    form.addEventListener("change", function (event) {

        var price = chairPrice.innerHTML == "" ? 0 : chairPrice.innerHTML;
        var price1 = chairPrice1.innerHTML == "" ? 0 : chairPrice1.innerHTML;
        var price2 = chairPrice2.innerHTML == "" ? 0 : chairPrice2.innerHTML;
        var transport = transportPrice.innerHTML == "" ? 0 : transportPrice.innerHTML;


        amount.innerHTML = parseFloat(price) + parseFloat(price1) + parseFloat(price2) + parseFloat(transport);
    });

});