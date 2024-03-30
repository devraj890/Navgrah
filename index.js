function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
  }

  // for the map CSS
  <script src="https://maps.googleapis.com/maps/api/js?key=YOUR_API_KEY&callback=initMap" async defer></script>
 
      function initMap() {
          // Create a map object and specify the DOM element for display.
          var map = new google.maps.Map(document.getElementById('map'), {
              center: { lat: -34.397, lng: 150.644 }, // Adjust the coordinates as per your location
              zoom: 8 // Adjust the zoom level as needed
          });
      }


       // Function to toggle between English and Hindi content
  function toggleLanguage() {
    var contentEnglish = document.getElementById('content-english');
    var contentHindi = document.getElementById('content-hindi');

    if (contentEnglish.style.display === 'block') {
      contentEnglish.style.display = 'none';
      contentHindi.style.display = 'block';
    } else {
      contentEnglish.style.display = 'block';
      contentHindi.style.display = 'none';
    }
  }

  // function for mav tonggle
  function toggleNavbar() {
    var navbar = document.getElementById("navbar");
    if (navbar.className === "navbar") {
      navbar.className += " responsive";
    } else {
      navbar.className = "navbar";
    }
  }