$('#enviar').on('click', function() {
  var templateParams = {
    from_name : document.getElementById("fullName").value,
    email_id : document.getElementById("email_id").value,
    phone : document.getElementById("phone").value,
    message : document.getElementById("message").value
  }
  emailjs.send('service_v6kwn69', 'template_xl61ztd', templateParams).then(function(response) {
    alert('Mensaje Enviado')
    $('#myModal form')[0].reset();
  }, function(error) {
      alert('FAILED...', error);
      console.log('FAILED...', error);
  });
});

function vision() {
  document.getElementById("vision").style.display = "block";
}

function valores() {
  document.getElementById("valores").style.display = "block";
}

function servicios() {
  location.href='/services/services.html';
  document.getElementById("conclusion").style.display = "block";
}


