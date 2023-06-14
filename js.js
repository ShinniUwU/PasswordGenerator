document.addEventListener("DOMContentLoaded", function() {
    var generateBtn = document.getElementById("generateBtn");
    if (generateBtn) {
      generateBtn.addEventListener("click", function() {
        var length = 12; // Length of the generated password
        var charset = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()"; // Characters to include in the password
        var password = "";
  
        for (var i = 0; i < length; i++) {
          var randomIndex = Math.floor(Math.random() * charset.length);
          password += charset.charAt(randomIndex);
        }
  
        // Display the generated password in an input field with ID "passwordInput"
        document.getElementById("passwordInput").value = password;
      });
    }
    var audio = new Audio('kurukuru.mp3');

  var topDiv = document.querySelector('.top');
  var xTouchDiv = document.querySelector('.x-touch');

  if (xTouchDiv) {
    xTouchDiv.addEventListener('click', function() {
      audio.pause();
      audio.currentTime = 0;
    });
  }

  if (xTouchDiv) {
    topDiv.addEventListener('click', function() {
      if (audio.paused) {
        audio.loop = true;
        audio.play();
      } else {
        audio.loop = false;
        audio.pause();
        audio.currentTime = 0;
      }
    });
  }
});