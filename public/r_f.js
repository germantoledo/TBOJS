$(document).ready(function () {
    $('#guardarEmpleador').on('click', function () {
      var nombreEmpresa = $('#nombreEmpresa').val()
      var telefono = $('#telefono').val()
      var correoEmpresa = $('#correoEmpresa').val()
      var contrasena = $('#contrasena').val()
      var contrasenaConfirm = $('#contrasenaConfirm').val()
  
      var checkEmpleador = $('#checkEmpleador').is(':checked')
  
      var pattern = /^\b[A-Z0-9._%-]+@[A-Z0-9.-]+\.[A-Z]{2,4}\b$/i
  
      if (
        nombreEmpresa != '' &&
        telefono != '' &&
        correoEmpresa != '' &&
        contrasena != '' &&
        contrasenaConfirm != ''
      ) {
        if (pattern.test(correoEmpresa)) {
          if (contrasena == contrasenaConfirm) {
            if (checkEmpleador) {
            mostrarSpinner();
            $.ajax({
              url: 'pages/register/functions/registrarUsuario.php',
              type: 'post',
              dataType: 'text',
              data: {
                nombreEmpresa: nombreEmpresa,
                telefono: telefono,
                correoEmpresa: correoEmpresa,
                contrasena: contrasena,
                tipo: 'empresa'
              },
              cache: false,
              success: function (dataResult) {
                quitarSpinner();
                if (dataResult == 'Registrado correctamente!') {
                  $('#nombreEmpresa').val('')
                  $('#telefono').val('')
                  $('#correoEmpresa').val('')
                  $('#contrasena').val('')
                  $('#contrasenaConfirm').val('')
                  window.location.href = 'login.php'
                } else {
                  $('.alerta').append(alertaB('danger', dataResult))
                  ocultarAlerta()
                }
              }
            })
            } else {
              $('.alerta').append(alertaB('danger','Debe aceptar los términos y condiciones.'));
              ocultarAlerta()
            }
          } else {
            $('.alerta').append(
              alertaB('danger', 'Las contraseñas no coinciden.')
            )
            ocultarAlerta()
          }
        } else {
          $('.alerta').append(alertaB('danger', 'El correo no es válido.'))
          ocultarAlerta()
        }
      } else {
        $('.alerta').append(alertaB('danger', 'No debe haber espacios vacíos.'))
        ocultarAlerta()
      }
    })
  
    $('#guardarPostulante').on('click', function () {
      var nombrePostulante = $('#nombrePostulante').val()
      var apellidosPostulante = $('#apellidosPostulante').val()
      var telefonoPostulante = $('#telefonoPostulante').val()
      var correoPostulante = $('#correoPostulante').val()
      var contrasenaPostulante = $('#contrasenaPostulante').val()
      var contrasenaPostulanteConfirm = $('#contrasenaPostulanteConfirm').val()
  
      var checkPostulante = $('#checkPostulante').is(':checked')
  
      var pattern = /^\b[A-Z0-9._%-]+@[A-Z0-9.-]+\.[A-Z]{2,4}\b$/i
  
      if (
        nombrePostulante != '' &&
        apellidosPostulante != '' &&
        telefonoPostulante != '' &&
        correoPostulante != '' &&
        contrasenaPostulante != '' &&
        contrasenaPostulanteConfirm != ''
      ) {
        if (pattern.test(correoPostulante)) {
          if (contrasenaPostulante == contrasenaPostulanteConfirm) {
            if (checkPostulante) {
            mostrarSpinner();
            $.ajax({
              url: 'pages/register/functions/registrarUsuario.php',
              type: 'post',
              dataType: 'text',
              data: {
                nombrePostulante: nombrePostulante,
                apellidosPostulante: apellidosPostulante,
                telefonoPostulante: telefonoPostulante,
                correoPostulante: correoPostulante,
                contrasenaPostulante: contrasenaPostulante,
                tipo: 'postulante'
              },
              cache: false,
              success: function (dataResult) {
                quitarSpinner();
                if (dataResult == 'Registrado correctamente!') {
                  $('#nombrePostulante').val('')
                  $('#apellidosPostulante').val('')
                  $('#telefonoPostulante').val('')
                  $('#correoPostulante').val('')
                  $('#contrasenaPostulante').val('')
                  $('#contrasenaPostulanteConfirm').val('')
                  //  $('.alerta').append(alertaB('success',dataResult));
                  window.location.href = 'login.php'
                } else {
                  $('.alerta').append(alertaB('danger', dataResult))
                  ocultarAlerta()
                }
              }
            })
            } else {
              $('.alerta').append(alertaB('danger','Debe aceptar los términos y condiciones'));
              ocultarAlerta()
            }
          } else {
            $('.alerta').append(alertaB('danger', 'Las contraseñas no coinciden'))
            ocultarAlerta()
          }
        } else {
          $('.alerta').append(alertaB('danger', 'El correo no es válido'))
          ocultarAlerta()
        }
      } else {
        $('.alerta').append(alertaB('danger', 'No debe haber espacios vacíos'))
        ocultarAlerta()
      }
    })
  })
  