let selectedPackage = "";
let selectedPrice = "";

// INIT EMAILJS
(function(){
  emailjs.init("zapb-UJGiOWVCrczr");
})();

function goToCheckout(pkg, price) {
  selectedPackage = pkg;
  selectedPrice = price;

  document.getElementById("mainPage").style.display = "none";
  document.getElementById("checkoutPage").style.display = "block";

  document.getElementById("checkoutPackage").innerText = "Package: " + pkg;
  document.getElementById("checkoutPrice").innerText = "Price: " + price;
}

// Wait until page loads (prevents errors)
window.onload = function () {

  document.getElementById("sendEmailBtn").onclick = function () {

    const params = {
      package: selectedPackage,
      price: selectedPrice,
      name: document.getElementById("name").value,
      phone: document.getElementById("phone").value,
      preferred_date: document.getElementById("date").value,
      preferred_time: document.getElementById("time").value
    };

    emailjs.send("service_jso7x04", "template_t6t5c4j", params)
      .then(function(response) {
        alert("Booking request sent!");
      }, function(error) {
        alert("Failed to send. Check console.");
        console.log(error);
      });

  };

};

function goBack() {
  document.getElementById("checkoutPage").style.display = "none";
  document.getElementById("mainPage").style.display = "block";
}
