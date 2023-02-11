$(document).ready(function () {
    $('#accederCuenta').on('click', function () {
      var correo = $('#correo').val()
      var contrasena = $('#contrasena').val()
  
      if (correo.trim() != '' && contrasena != '') {
        $.ajax({
          url: 'pages/login/functions/acceder.php',
          type: 'post',
          dataType: 'text',
          data: {
            correo: correo.trim(),
            contrasena: contrasena
          },
          cache: false,
          success: function (dataResult) {
            dataResult == 'conectado'
              ? (window.location.href = 'perfil.php')
              : $('.alerta').append(alertaB('danger', dataResult))
              ocultarAlerta()
          }
        })
      } else {
        $('.alerta').append(alertaB('danger', 'No debe haber espacios vacios'))
        ocultarAlerta()
      }
    })
  
    $('#btnRecuperarContrasenha').on('click', function () {
      var correoRec = $('#correoRec').val().trim();
      var re =
        /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      var valido = re.test(String(correoRec).toLowerCase())
      if (!valido) {
        $('.alerta').append(alertaB('danger', 'El correo no es válido.'))
        ocultarAlerta()
      } else {
        mostrarSpinner();
        $.ajax({
          url: 'pages/login/functions/functions.php',
          type: 'post',
          dataType: 'text',
          data: {
            correoRec: correoRec,
            tipo: 'enviarContrasena'
          },
          cache: false,
          success: function (dataResult) {
            quitarSpinner();
            if (dataResult == 'Correo enviado correctamente') {
              $('.alerta').append(alertaB('success', dataResult))
              ocultarAlerta()
            } else {
              $('.alerta').append(alertaB('danger', dataResult))
              ocultarAlerta()
            }
          }
        })
      }
    })
  })
  