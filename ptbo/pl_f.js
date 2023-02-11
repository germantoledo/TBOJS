$(document).ready(function () {
    $('#accederCuenta').on('click', function () {
      var correo = $('#correo').val()
      var contrasena = $('#contrasena').val()
  
      if (correo != '' && contrasena != '') {
        $.ajax({
          url: 'pages/login/functions/acceder.php',
          type: 'post',
          dataType: 'text',
          data: {
            correo: correo,
            contrasena: contrasena
          },
          cache: false,
          success: function (dataResult) {
            dataResult == 'conectado'
              ? (window.location.href = 'index.php')
              : $('.alerta').append(alertaB('danger',dataResult));
          }
        })
      } else {
        $('.alerta').append(alertaB('danger','No debe haber espacios vacios'));
      }
    })
  
  })
  