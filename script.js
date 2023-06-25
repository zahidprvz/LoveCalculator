(function() {
  emailjs.init('RzkdNka2Z1Gf5hVrt'); // Replace with your actual EmailJS user ID
})();

window.onload = function() {
  document.getElementById('calculate').addEventListener('click', function(event) {
    event.preventDefault();

    var yourName = document.getElementById('your-name').value;
    var crushName = document.getElementById('crush-name').value;

    if (yourName !== "" && crushName !== "") {
      var percentage = Math.floor(Math.random() * 101); // Generates a random number between 0 and 100
      
      var templateParams = {
        yourName: yourName,
        crushName: crushName,
        percentage: percentage
      };

      emailjs.send('service_dnx139j', 'template_2lrxcpn', templateParams)
        .then(function(response) {
          console.log('SUCCESS!', response.status, response.text);
          // Display a success message to the user
          document.getElementById('result-message').innerText = 'Love compatibility between ' + yourName + ' and ' + crushName + ' is \n';
          document.getElementById('result-percentage').innerText =   + percentage + '%';
        }, function(error) {
          console.log('FAILED...', error);
          // Display an error message to the user
          document.getElementById('result-message').innerText = 'Failed to send email.';
          document.getElementById('result-percentage').innerText = '';
        });
    } else {
      // Display an error message if either name is not entered
      document.getElementById('result-message').innerText = 'Please enter both names.';
      document.getElementById('result-percentage').innerText = '';
    }
  });
}
