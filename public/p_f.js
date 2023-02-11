$(document).ready(function () {
    var tipoUsuario = $('#tipoUsuario').val()
  
    if (tipoUsuario == 'postulante') {
      $(
        '#mi-perfil-e, #mi-cuenta-e, #mis-anuncios, #mis-postulantes,#mi-cuenta-p,#mis-postulaciones,#paga-tus-anuncios,#todos-postulantes,#profesion-habilidades'
      ).hide()
      $('#mi-perfil-p').show()
  
      $('#perfilP').addClass('active')
      $(
        '#miCuentaP,#misPostulaciones,#todosLosPostulantes,#profesionHabilidades'
      ).removeClass('active')
    }
  
    $('#perfilP').on('click', function () {
      $('#mi-cuenta-p,#mis-postulaciones, #profesion-habilidades').hide()
      $('#mi-perfil-p').show()
  
      $('#perfilP').addClass('active')
      $('#miCuentaP,#misPostulaciones,#profesionHabilidades').removeClass(
        'active'
      )
    })
    $('#profesionHabilidades').on('click', function () {
      $('#mi-cuenta-p,#mis-postulaciones,#mi-perfil-p').hide()
      $('#profesion-habilidades').show()
  
      $('#profesionHabilidades').addClass('active')
      $('#miCuentaP,#misPostulaciones,#perfilP').removeClass('active')
    })
    $('#miCuentaP').on('click', function () {
      $('#mi-perfil-p,#mis-postulaciones,#profesion-habilidades').hide()
      $('#mi-cuenta-p').show()
  
      $('#miCuentaP').addClass('active')
      $('#misPostulaciones,#perfilP,#profesionHabilidades').removeClass('active')
    })
    $('#misPostulaciones').on('click', function () {
      $('#mi-perfil-p,#mi-cuenta-p,#profesion-habilidades').hide()
      $('#mis-postulaciones').show()
  
      $('#misPostulaciones').addClass('active')
      $('#perfilP,#miCuentaP,#profesionHabilidades').removeClass('active')
    })
  
    if (tipoUsuario == 'empresa') {
      $(
        '#mi-cuenta-e,#mis-anuncios,#mis-postulantes,#mi-perfil-p,#mi-cuenta-p,#mis-postulaciones,#paga-tus-anuncios,#todos-postulantes,#profesion-habilidades'
      ).hide()
      $('#mi-perfil-e').show()
  
      $('#perfilE').addClass('active')
      $(
        '#miCuentaE,#misPostulantes,#misAnuncios,#pagaTuAnuncio,#todosLosPostulantes'
      ).removeClass('active')
    }
  
    $('#perfilE').on('click', function () {
      $(
        '#mis-anuncios,#mi-cuenta-e,#mis-postulantes,#paga-tus-anuncios,#todos-postulantes'
      ).hide()
      $('#mi-perfil-e').show()
  
      $('#perfilE').addClass('active')
      $(
        '#miCuentaE,#misPostulantes,#misAnuncios,#pagaTuAnuncio,#todosLosPostulantes'
      ).removeClass('active')
    })
    $('#miCuentaE').on('click', function () {
      $(
        '#mi-perfil-e,#mis-anuncios,#mis-postulantes,#paga-tus-anuncios,#todos-postulantes'
      ).hide()
      $('#mi-cuenta-e').show()
  
      $(
        '#perfilE,#misPostulantes,#misAnuncios,#pagaTuAnuncio,#todosLosPostulantes'
      ).removeClass('active')
      $('#miCuentaE').addClass('active')
    })
    $('#misPostulantes').on('click', function () {
      $(
        '#mi-perfil-e, #mi-cuenta-e,#mis-anuncios,#paga-tus-anuncios,#todos-postulantes'
      ).hide()
      $('#mis-postulantes').show()
  
      $(
        '#perfilE,#miCuentaE,#misAnuncios,#pagaTuAnuncio,#todosLosPostulantes'
      ).removeClass('active')
      $('#misPostulantes').addClass('active')
    })
    $('#misAnuncios').on('click', function () {
      $(
        '#mi-perfil-e,#mi-cuenta-e,#mis-postulantes,#paga-tus-anuncios,#todos-postulantes'
      ).hide()
      $('#mis-anuncios').show()
  
      $(
        '#perfilE,#miCuentaE,#misPostulantes,#pagaTuAnuncio,#todosLosPostulantes'
      ).removeClass('active')
      $('#misAnuncios').addClass('active')
    })
    $('#pagaTuAnuncio').on('click', function () {
      $(
        '#mi-perfil-e, #mi-cuenta-e,#mis-postulantes,#mis-anuncios,#todos-postulantes'
      ).hide()
      $('#paga-tus-anuncios').show()
  
      $(
        '#perfilE,#miCuentaE,#misPostulantes,#misAnuncios,#todosLosPostulantes'
      ).removeClass('active')
      $('#pagaTuAnuncio').addClass('active')
    })
  
    $('#todosLosPostulantes').on('click', function () {
      $(
        '#mi-perfil-e, #mi-cuenta-e,#mis-postulantes,#mis-anuncios,#paga-tus-anuncios'
      ).hide()
      $('#todos-postulantes').show()
  
      $(
        '#perfilE,#miCuentaE,#misPostulantes,#misAnuncios,#pagaTuAnuncio'
      ).removeClass('active')
      $('#todosLosPostulantes').addClass('active')
    })
    // extraer pdf de postulante y guardar
    if (tipoUsuario == 'postulante') {
      $('#pdfCV').on('change', function () {
        var archivo = $('#pdfCV').val()
        var extensiones = archivo.substring(archivo.lastIndexOf('.'))
        if (extensiones != '.pdf') {
          $('.alerta').append(
            alertaB(
              'danger',
              'El archivo de tipo ' + extensiones + ' no es válido'
            )
          )
          ocultarAlerta()
          $('#pdfCV').val('')
        } else {
          mostrarSpinner();
          var filename = $('#pdfCV').val().split('\\').pop()
          var file = $('#pdfCV')[0].files[0]
  
          var formData = new FormData()
          formData.append('filename', filename)
          formData.append('file', file)
          formData.append('tipo', 'pdf')
  
          $.ajax({
            url: 'pages/perfil/functions/functions.php',
            type: 'post',
            dataType: 'text',
            data: formData,
            processData: false,
            contentType: false,
            cache: false,
            success: function (dataResult) {
              quitarSpinner();
              var obj = $.parseJSON(dataResult)
              if (obj.respuesta == 200) {
                $('#hojaVida').attr({
                  href: '.' + obj.direccion,
                  download: obj.nombre
                })
                $('#hojaVida').text(obj.nombre)
                $('.alerta').append(alertaB('success', 'PDF guardado.'))
                ocultarAlerta()
              } else {
                $('.alerta').append(alertaB('danger', dataResult))
                ocultarAlerta()
              }
            }
          })
        }
      })
  
      // actualizar datos de postulante
      $('#actualizarPostulante').on('click', function () {
        var nombrePostulante = $('#nombrePostulante').val()
        var apellidosPostulante = $('#apellidosPostulante').val()
        var celularPostulante = $('#celularPostulante').val()
  
        if (
          nombrePostulante != '' &&
          apellidosPostulante != '' &&
          celularPostulante != ''
        ) {
          $.ajax({
            url: 'pages/perfil/functions/functions.php',
            type: 'post',
            dataType: 'text',
            data: {
              nombrePostulante: nombrePostulante,
              apellidosPostulante: apellidosPostulante,
              celularPostulante: celularPostulante,
              tipo: 'actualizarDatosPostulante'
            },
            cache: false,
            success: function (dataResult) {
              var obj = $.parseJSON(dataResult)
              if (obj.respuesta == 200) {
                $('#nombrePostulante').val(obj.nombrePostulante)
                $('#apellidosPostulante').val(obj.apellidosPostulante)
                $('#celularPostulante').val(obj.celularPostulante)
                $('.alerta').append(alertaB('success', 'Datos actualizados'))
                ocultarAlerta()
              } else {
                $('.alerta').append(alertaB('danger', dataResult))
                ocultarAlerta()
              }
            }
          })
        } else {
          $('.alerta').append(
            alertaB('danger', 'Por favor no deje campos vacíos')
          )
          ocultarAlerta()
        }
      })
  
      $('#btnAgregarProfesion').on('click', function () {
        var tituloProfesional = $('#tituloProfesional').val()
        if (tituloProfesional.trim() != '') {
          $.ajax({
            url: 'pages/perfil/functions/functions.php',
            type: 'post',
            dataType: 'text',
            data: {
              tituloProfesional: tituloProfesional,
              tipo: 'guardarTituloProfesional'
            },
            cache: false,
            success: function (dataResult) {
              if (dataResult == 'Esa profesión ya existe') {
                $('.alerta').append(alertaB('danger', dataResult))
                ocultarAlerta()
              } else if (dataResult == 'No se pudo añadir') {
                $('.alerta').append(alertaB('danger', dataResult))
                ocultarAlerta()
              } else if (
                dataResult == 'Ya alcanzó el límite de profesiones permitidas.'
              ) {
                $('.alerta').append(alertaB('warning', dataResult))
                ocultarAlerta()
              } else {
                $('.pills-profesion').html(dataResult)
                $('.alerta').append(
                  alertaB('success', 'Profesión añadida correctamente.')
                )
                ocultarAlerta()
                $('#tituloProfesional').val('')
              }
            }
          })
        }
      })
  
      $('#btnAgregarHabilidades').on('click', function () {
        var habilidades = $('#habilidades').val()
        if (habilidades.trim() != '') {
          $.ajax({
            url: 'pages/perfil/functions/functions.php',
            type: 'post',
            dataType: 'text',
            data: {
              habilidades: habilidades,
              tipo: 'guardarHabilidades'
            },
            cache: false,
            success: function (dataResult) {
              if (dataResult == 'Esa habilidad ya existe') {
                $('.alerta').append(alertaB('danger', dataResult))
                ocultarAlerta()
              } else if (dataResult == 'No se pudo añadir') {
                $('.alerta').append(alertaB('danger', dataResult))
                ocultarAlerta()
              } else if (
                dataResult == 'Ya alcanzó el límite de habilidades permitidas.'
              ) {
                $('.alerta').append(alertaB('warning', dataResult))
                ocultarAlerta()
              } else {
                $('.pills-habilidades').html(dataResult)
                $('.alerta').append(
                  alertaB('success', 'Habilidad añadida correctamente.')
                )
                ocultarAlerta()
                $('#habilidades').val('')
              }
            }
          })
        }
      })
  
      $('#actualizarCuentaPostulante').on('click', function () {
        var correoCuentaPostulante = $('#correoCuentaPostulante').val()
        var contrasenaActualCuentaPostulante = $(
          '#contrasenaActualCuentaPostulante'
        ).val()
        var contrasenaNuevaCuentaPostulante = $(
          '#contrasenaNuevaCuentaPostulante'
        ).val()
        var contrasenaConfirmarCuentaPostulante = $(
          '#contrasenaConfirmarCuentaPostulante'
        ).val()
  
        if (
          correoCuentaPostulante != '' &&
          contrasenaActualCuentaPostulante != '' &&
          contrasenaNuevaCuentaPostulante != '' &&
          contrasenaConfirmarCuentaPostulante != ''
        ) {
          if (
            contrasenaNuevaCuentaPostulante == contrasenaConfirmarCuentaPostulante
          ) {
            $.ajax({
              url: 'pages/perfil/functions/functions.php',
              type: 'post',
              dataType: 'text',
              data: {
                correoCuentaPostulante: correoCuentaPostulante,
                contrasenaActualCuentaPostulante:
                  contrasenaActualCuentaPostulante,
                contrasenaNuevaCuentaPostulante: contrasenaNuevaCuentaPostulante,
                tipo: 'actualizarDatosCuentaPostulante'
              },
              cache: false,
              success: function (dataResult) {
                if (dataResult == 'Cuenta actualizada exitosamente!') {
                  $('#contrasenaActualCuentaPostulante').val('')
                  $('#contrasenaNuevaCuentaPostulante').val('')
                  $('#contrasenaConfirmarCuentaPostulante').val('')
                }
                $('.alerta').append(alertaB('success', dataResult))
                ocultarAlerta()
              }
            })
          } else {
            $('.alerta').append(
              alertaB('danger', 'Las contraseñas no son iguales.')
            )
            ocultarAlerta()
          }
        } else {
          $('.alerta').append(
            alertaB('danger', 'Por favor no deje campos vacíos.')
          )
          ocultarAlerta()
        }
      })
    }
  
    if (tipoUsuario == 'empresa') {
      $('#actualizarEmpresa').on('click', function () {
        var nombreEmpresa = $('#nombreEmpresa').val()
        var ubicacionEmpresa = $('#ubicacionEmpresa option:selected').val()
        var direccionEmpresa = $('#direccionEmpresa').val()
        var telefonoEmpresa = $('#telefonoEmpresa').val()
        var webEmpresa = $('#webEmpresa').val()
        var descripcionEmpresa = $('#descripcionEmpresa').val()
  
        if (
          nombreEmpresa != '' &&
          ubicacionEmpresa != 0 &&
          ubicacionEmpresa != '' &&
          direccionEmpresa != '' &&
          telefonoEmpresa != ''
        ) {
          $.ajax({
            url: 'pages/perfil/functions/functions.php',
            type: 'post',
            dataType: 'text',
            data: {
              nombreEmpresa: nombreEmpresa,
              ubicacionEmpresa: ubicacionEmpresa,
              direccionEmpresa: direccionEmpresa,
              telefonoEmpresa: telefonoEmpresa,
              webEmpresa: webEmpresa,
              descripcionEmpresa: descripcionEmpresa,
              tipo: 'actualizarDatosEmpresa'
            },
            cache: false,
            success: function (dataResult) {
              var obj = $.parseJSON(dataResult)
              if (obj.respuesta == 200) {
                $('#nombreEmpresa').val(obj.nombreEmpresa)
                $('#ubicacionEmpresa option:selected')
                  .val(obj.ubicacionEmpresa)
                  .change()
                $('#direccionEmpresa').val(obj.direccionEmpresa)
                $('#telefonoEmpresa').val(obj.telefonoEmpresa)
                $('#webEmpresa').val(obj.webEmpresa)
                $('#descripcionEmpresa').val(obj.descripcionEmpresa)
                $('.alerta').append(alertaB('success', 'Datos actualizados'))
                ocultarAlerta()
              } else {
                $('.alerta').append(alertaB('danger', dataResult))
                ocultarAlerta()
              }
            }
          })
        } else {
          $('.alerta').append(
            alertaB('danger', 'Por favor no deje campos vacios')
          )
          ocultarAlerta()
        }
      })
  
      $('#actualizarCuentaEmpresa').on('click', function () {
        var correoCuentaEmpresa = $('#correoCuentaEmpresa').val()
        var contrasenaActualCuentaEmpresa = $(
          '#contrasenaActualCuentaEmpresa'
        ).val()
        var contrasenaNuevaCuentaEmpresa = $(
          '#contrasenaNuevaCuentaEmpresa'
        ).val()
        var contrasenaConfirmarCuentaEmpresa = $(
          '#contrasenaConfirmarCuentaEmpresa'
        ).val()
  
        if (
          correoCuentaEmpresa != '' &&
          contrasenaActualCuentaEmpresa != '' &&
          contrasenaNuevaCuentaEmpresa != '' &&
          contrasenaConfirmarCuentaEmpresa != ''
        ) {
          if (contrasenaNuevaCuentaEmpresa == contrasenaConfirmarCuentaEmpresa) {
            $.ajax({
              url: 'pages/perfil/functions/functions.php',
              type: 'post',
              dataType: 'text',
              data: {
                correoCuentaEmpresa: correoCuentaEmpresa,
                contrasenaActualCuentaEmpresa: contrasenaActualCuentaEmpresa,
                contrasenaNuevaCuentaEmpresa: contrasenaNuevaCuentaEmpresa,
                tipo: 'actualizarDatosCuentaEmpresa'
              },
              cache: false,
              success: function (dataResult) {
                if (dataResult == 'Cuenta actualizada exitosamente!') {
                  $('#contrasenaActualCuentaEmpresa').val('')
                  $('#contrasenaNuevaCuentaEmpresa').val('')
                  $('#contrasenaConfirmarCuentaEmpresa').val('')
                  $('.alerta').append(alertaB('success', dataResult))
                  ocultarAlerta()
                } else {
                  $('.alerta').append(alertaB('danger', dataResult))
                  ocultarAlerta()
                }
              }
            })
          } else {
            $('.alerta').append(
              alertaB('danger', 'Las contraseñas no son iguales.')
            )
            ocultarAlerta()
          }
        } else {
          $('.alerta').append(
            alertaB('danger', 'Por favor no deje campos vacíos.')
          )
          ocultarAlerta()
        }
      })
  
      $('#anunciar').on('click', function () {
        var tituloAnuncio = $('#tituloAnuncio').val()
        var descripcionAnuncio = editor.getData()
        var ubicacionAnuncio = $('#ubicacionAnuncio option:selected').val()
        var tipoEmpleoAnuncio = $('#tipoEmpleoAnuncio option:selected').val()
        var pdhAnuncio = $('#pdhAnuncio option:selected').val()
        var categoriaAnuncio = $('#categoriaAnuncio option:selected').val()
        var valoresHabilidades = $('#valoresHabilidades').val()
        
        if (
          tituloAnuncio != '' &&
          descripcionAnuncio != '' &&
          ubicacionAnuncio != 0 &&
          tipoEmpleoAnuncio != 0 &&
          pdhAnuncio != 0 &&
          categoriaAnuncio != 0
        ) {
            $('#anunciar').prop('disabled', true);
            mostrarSpinner();
          $.ajax({
            url: 'pages/perfil/functions/functions.php',
            type: 'post',
            dataType: 'text',
            data: {
              tituloAnuncio: tituloAnuncio,
              descripcionAnuncio: descripcionAnuncio,
              ubicacionAnuncio: ubicacionAnuncio,
              tipoEmpleoAnuncio: tipoEmpleoAnuncio,
              pdhAnuncio: pdhAnuncio,
              categoriaAnuncio: categoriaAnuncio,
              valoresHabilidades:valoresHabilidades,
              tipo: 'guardarAnuncio'
            },
            cache: false,
            success: function (dataResult) {
                //alert(dataResult)
                $('#anunciar').prop('disabled', false);
                quitarSpinner();
              if (dataResult == 'Empleo publicado exitosamente!') {
                $('#tituloAnuncio').val('')
                editor.setData('')
                $('#ubicacionAnuncio').val('').change()
                $('#tipoEmpleoAnuncio').val('').change()
                $('#pdhAnuncio').val('').change()
                $('#categoriaAnuncio').val('').change()
  
                $('.alerta').append(alertaB('success', dataResult))
                ocultarAlerta()
  
                $('#imagenNoHayAnuncio').attr({
                  class: 'd-none'
                })
  
                $.ajax({
                  url: 'pages/perfil/functions/functions.php',
                  type: 'post',
                  dataType: 'text',
                  data: {
                    tipo: 'cargarAnuncios'
                  },
                  cache: false,
                  success: function (dataResult) {
                    $('#tarjetas2').html(dataResult)
                  }
                })
  
                $('#modal_crear_anuncio').modal('toggle')
              }
            }
          })
        } else {
          $('.alerta').append(
            alertaB('danger', 'Por favor no deje campos vacíos.')
          )
          ocultarAlerta()
        }
      })
    }
  
    $('#fotoPerfil, .circle').on('click', function () {
      $('#fotoPerfilFile').click()
    })
    $('#fotoPerfilFile').on('change', function () {
      var archivo = $('#fotoPerfilFile').val()
      var extensiones = archivo.substring(archivo.lastIndexOf('.'))
      if (
        extensiones != '.jpg' &&
        extensiones != '.jpeg' &&
        extensiones != '.png'
      ) {
        $('.alerta').append(
          alertaB('danger', 'El archivo tipo ' + extensiones + ' no es válido.')
        )
        ocultarAlerta()
        $('#fotoPerfilFile').val('')
      } else {
        mostrarSpinner();
        var filename = $('#fotoPerfilFile').val().split('\\').pop()
        var file = $('#fotoPerfilFile')[0].files[0]
  
        var formData = new FormData()
        formData.append('filename', filename)
        formData.append('file', file)
        formData.append('tipo', 'fotoPerfil')
  
        $.ajax({
          url: 'pages/perfil/functions/functions.php',
          type: 'post',
          dataType: 'text',
          data: formData,
          processData: false,
          contentType: false,
          cache: false,
          success: function (dataResult) {
            quitarSpinner();
            var obj = $.parseJSON(dataResult)
            if (obj.respuesta == 200) {
              $('#imgPerfil').attr({
                src: '.' + obj.direccion
              })
              $('.alerta').append(
                alertaB('success', 'Foto de perfil actualizada correctamente.')
              )
              ocultarAlerta()
            } else {
              $('.alerta').append(alertaB('danger', dataResult))
              ocultarAlerta()
            }
          }
        })
      }
    })
  
    $('#eliminarAnuncio').on('click', function () {
      idAnuncio = $('#idAnuncioEdit').val()
      if (confirm('¿Está seguro/a que desea eliminar este anuncio?')) {
        $.ajax({
          url: 'pages/perfil/functions/functions.php',
          type: 'post',
          dataType: 'text',
          data: {
            tipo: 'eliminarAnuncio',
            idAnuncio: idAnuncio
          },
          cache: false,
          success: function (dataResult) {
            $.ajax({
              url: 'pages/perfil/functions/functions.php',
              type: 'post',
              dataType: 'text',
              data: {
                tipo: 'cargarAnuncios'
              },
              cache: false,
              success: function (dataResult) {
                $('#tarjetas2').html(dataResult)
              }
            })
            $('#modal_editar_anuncio').modal('toggle')
            $('.alerta').append(
              alertaB('success', 'Anuncio eliminado correctamente.')
            )
            ocultarAlerta()
          }
        })
      }
    })
  
    $('#actualizarAnuncio').on('click', function () {
      idAnuncio = $('#idAnuncioEdit').val()
      var tituloAnuncioEdit = $('#tituloAnuncioEdit').val()
      var descripcionAnuncioEdit = editor2.getData()
      var ubicacionAnuncioEdit = $('#ubicacionAnuncioEdit option:selected').val()
      var tipoEmpleoAnuncioEdit = $(
        '#tipoEmpleoAnuncioEdit option:selected'
      ).val()
      var pdhAnuncioEdit = $('#pdhAnuncioEdit option:selected').val()
      var categoriaAnuncioEdit = $('#categoriaAnuncioEdit option:selected').val()
      var idAnuncioEdit = $('#idAnuncioEdit').val()
  
      if (
        tituloAnuncioEdit != '' &&
        descripcionAnuncioEdit != '' &&
        ubicacionAnuncioEdit != 0 &&
        tipoEmpleoAnuncioEdit != 0 &&
        pdhAnuncioEdit != 0 &&
        categoriaAnuncioEdit != 0 &&
        idAnuncioEdit != 0
      ) {
        $.ajax({
          url: 'pages/perfil/functions/functions.php',
          type: 'post',
          dataType: 'text',
          data: {
            tipo: 'actualizarAnuncio',
            tituloAnuncioEdit: tituloAnuncioEdit,
            descripcionAnuncioEdit: descripcionAnuncioEdit,
            ubicacionAnuncioEdit: ubicacionAnuncioEdit,
            tipoEmpleoAnuncioEdit: tipoEmpleoAnuncioEdit,
            pdhAnuncioEdit: pdhAnuncioEdit,
            categoriaAnuncioEdit: categoriaAnuncioEdit,
            idAnuncio: idAnuncioEdit
          },
          cache: false,
          success: function (dataResult) {
            $.ajax({
              url: 'pages/perfil/functions/functions.php',
              type: 'post',
              dataType: 'text',
              data: {
                tipo: 'cargarAnuncios'
              },
              cache: false,
              success: function (dataResult) {
                $('#tarjetas2').html(dataResult)
              }
            })
            $('#modal_editar_anuncio').modal('toggle')
            $('.alerta').append(
              alertaB('success', 'Anuncio actualizado correctamente.')
            )
            ocultarAlerta()
          }
        })
      } else {
        alertaB('danger', 'No se pudo actualizar el anuncio.')
      }
    })
  
    $('#buscadorPostulante').on('keyup', function () {
      var buscadorPostulante = $('#buscadorPostulante').val()
      var estadoAnuncio = $('#estadoEmpleo option:selected').val()
      $.ajax({
        url: 'pages/perfil/functions/functions.php',
        type: 'post',
        dataType: 'text',
        data: {
          tipo: 'cargarAnunciosFiltro',
          buscadorPostulante: buscadorPostulante,
          estadoAnuncio: estadoAnuncio
        },
        cache: false,
        success: function (dataResult) {
          $('.postulantes').html(dataResult)
        }
      })
    })
  
    $('#buscarPostulantes').on('keyup',function(){
      var buscarPostulantes = $('#buscarPostulantes').val();
  
      $.ajax({
        url: 'pages/perfil/functions/functions.php',
        type: 'post',
        dataType: 'text',
        data: {
          tipo: 'cargarTodosPostulantes',
          buscarPostulantes: buscarPostulantes
        },
        cache: false,
        success: function (dataResult) {
          $('.todosPostulantes').html(dataResult)
        }
      })
  
    });
  
    $('#estadoEmpleo').on('change', function () {
      var buscadorPostulante = $('#buscadorPostulante').val()
      var estadoAnuncio = $('#estadoEmpleo option:selected').val()
      $.ajax({
        url: 'pages/perfil/functions/functions.php',
        type: 'post',
        dataType: 'text',
        data: {
          tipo: 'cargarAnunciosFiltro',
          buscadorPostulante: buscadorPostulante,
          estadoAnuncio: estadoAnuncio
        },
        cache: false,
        success: function (dataResult) {
          $('.postulantes').html(dataResult)
        }
      })
    })
  })
  
  function abrirModalAnuncio (idAnuncio) {
    $.ajax({
      url: 'pages/perfil/functions/functions.php',
      type: 'post',
      dataType: 'text',
      data: {
        tipo: 'modificarAnuncio',
        idAnuncio: idAnuncio
      },
      cache: false,
      success: function (dataResult) {
        var obj = $.parseJSON(dataResult)
        if (obj.respuesta == 200) {
          if (obj.ocultarEdit) {
            $('#eliminarAnuncio').attr({
              class: 'd-none'
            })
          } else {
            $('#eliminarAnuncio').attr({
              class: 'btn btn-danger'
            })
          }
          $('#tituloAnuncioEdit').val(obj.tituloAnuncioEdit)
          editor2.setData(obj.descripcionEdit)
          $('#ubicacionAnuncioEdit').val(obj.ubicacionEdit).change()
          $('#tipoEmpleoAnuncioEdit').val(obj.tipoEmpleoEdit).change()
          $('#pdhAnuncioEdit').val(obj.pdhEdit).change()
          $('#categoriaAnuncioEdit').val(obj.categoriaEdit).change()
          $('#idAnuncioEdit').val(obj.idAnuncioEdit)
          $('.pills-habilidades-anuncio-edit').html(obj.pills)
        }
        $('#modal_editar_anuncio').modal('toggle')
      }
    })
  }
  
  function abrirModalHabilidades(idPersona){
    $.ajax({
      url: 'pages/perfil/functions/functions.php',
      type: 'post',
      dataType: 'text',
      data: {
        tipo: 'abrirModalHabilidades',
        idPersona: idPersona
      },
      cache: false,
      success: function (dataResult) {
        $('#habProf').html(dataResult);
      }
    })
  }
  
  function cargarDescripcion (idAnuncio) {
    $.ajax({
      url: 'pages/perfil/functions/functions.php',
      type: 'post',
      dataType: 'text',
      data: {
        idAnuncio: idAnuncio,
        tipo: 'cargarDescripcionAnuncio'
      },
      cache: false,
      success: function (dataResult) {
        $('#descripcionEmpleo2').html(dataResult)
        $('#btnMostrarDescripcion').click()
      }
    })
  }
  
  function deleteProfesion (idProfesion) {
    $.ajax({
      url: 'pages/perfil/functions/functions.php',
      type: 'post',
      dataType: 'text',
      data: {
        idProfesion: idProfesion,
        tipo: 'borrarTituloProfesional'
      },
      cache: false,
      success: function (dataResult) {
        $('.pills-profesion').html(dataResult)
        $('.alerta').append(alertaB('success', 'Eliminado correctamente.'))
        ocultarAlerta()
      }
    })
  }
  
  function deleteHabilidad (idHabilidad) {
    $.ajax({
      url: 'pages/perfil/functions/functions.php',
      type: 'post',
      dataType: 'text',
      data: {
        idHabilidad: idHabilidad,
        tipo: 'borrarHabilidad'
      },
      cache: false,
      success: function (dataResult) {
        $('.pills-habilidades').html(dataResult)
        $('.alerta').append(alertaB('success', 'Eliminado correctamente.'))
        ocultarAlerta()
      }
    })
  }
  
  function deleteHabilidadAnuncio (idHabilidadAnuncio, idAnuncio) {
    $.ajax({
      url: 'pages/perfil/functions/functions.php',
      type: 'post',
      dataType: 'text',
      data: {
        idHabilidadAnuncio: idHabilidadAnuncio,
        idAnuncio: idAnuncio,
        tipo: 'borrarHabilidadAnuncio'
      },
      cache: false,
      success: function (dataResult) {
        $('.pills-habilidades-anuncio-edit').html(dataResult)
      }
    })
  }
  
  function revisado(idPostulacion, idDesplegable){
    if(confirm("¿cambiarás el estado a revisado?")){
      mostrarSpinner();
      $.ajax({
        url: 'pages/perfil/functions/functions.php',
        type: 'post',
        dataType: 'text',
        data: {
          idPostulacion: idPostulacion,
          tipo: 'revisarPostulante'
        },
        cache: false,
        success: function (dataResult) {
          quitarSpinner();
          if(dataResult == 'ok'){
            var buscadorPostulante = $('#buscadorPostulante').val()
            var estadoAnuncio = $('#estadoEmpleo option:selected').val()
            $.ajax({
              url: 'pages/perfil/functions/functions.php',
              type: 'post',
              dataType: 'text',
              data: {
                tipo: 'cargarAnunciosFiltro',
                buscadorPostulante: buscadorPostulante,
                estadoAnuncio: estadoAnuncio
              },
              cache: false,
              success: function (dataResult) {
                $('.postulantes').html(dataResult)
              }
            })
            $('.alerta').append(alertaB('success', 'Revisado.'))
            ocultarAlerta()
            $('#'+idDesplegable).click();
          } else {
            $('.alerta').append(alertaB('danger', dataResult))
            ocultarAlerta()
          }
         
        }
      })
    }
  }
  
  
  function eliminarHabAnun(habilidad){
    var valoresHabilidades = $('#valoresHabilidades').val()
    var array = valoresHabilidades.split(",");
  
    var index = array.indexOf(habilidad);
    if (index !== -1) {
      array.splice(index, 1);
    }
    valoresHabilidades = array.join(",");
    $('#valoresHabilidades').val(valoresHabilidades)
    $('.pills-habilidades-anuncio span:contains("' + habilidad + '")').addClass("d-none");
  
    if ((array.length-1) < 7){
      $('#habilidadesAnuncio').removeClass('readonly')
      $('#btnAgregarHabilidadesAnuncio').removeClass('disabled');
    }
  }
  //------------HABILIDADES ANUNCIO------------
  $('#btnAgregarHabilidadesAnuncio').on('click', function () {
    var habilidadesAnuncio = $('#habilidadesAnuncio').val()
    var valoresHabilidades = $('#valoresHabilidades').val()
    var valorFinal = '';
  
    
  
      if (habilidadesAnuncio.trim() != '') {
        if(valoresHabilidades.indexOf(habilidadesAnuncio) !== -1){
            $('.alerta').append(alertaB('danger', 'Esa habilidad ya fue asignada.'))
            ocultarAlerta()
        } else {
          var funcion =  `onclick="eliminarHabAnun('`+habilidadesAnuncio+`')"`;
          var newDiv = $('<div class="d-flex bg-light p-2 rounded"><span class="badge rounded-pill border border-tbo secondaryColor me-2">'+habilidadesAnuncio+'<button type="button" class="btn btn-sm ms-3"'+funcion+'><i class="bi bi-x"></i></button></span></div>');
          $('.pills-habilidades-anuncio').append(newDiv);
          
          valorFinal += valoresHabilidades+','+habilidadesAnuncio;  
          $('#valoresHabilidades').val(valorFinal);
    
          var valoresHabilidades2 = $('#valoresHabilidades').val()
          var array = valoresHabilidades2.split(",");
          
          if ((array.length-1) == 7){
            $('#habilidadesAnuncio').addClass('readonly')
            $('#btnAgregarHabilidadesAnuncio').addClass('disabled');
          } 
        }
    } 
  
    $('#habilidadesAnuncio').val('');
  })
  
  
  $('#btnAgregarHabilidadesAnuncioEdit').on('click', function () {
    var habilidadesAnuncioEdit = $('#habilidadesAnuncioEdit').val()
    var idAnuncioEdit = $('#idAnuncioEdit').val();
    if (habilidadesAnuncioEdit.trim() != '') {
      $.ajax({
        url: 'pages/perfil/functions/functions.php',
        type: 'post',
        dataType: 'text',
        data: {
          habilidadesAnuncioEdit: habilidadesAnuncioEdit,
          idAnuncioEdit: idAnuncioEdit,
          tipo: 'guardarHabilidadesAnuncio'
        },
        cache: false,
        success: function (dataResult) {
          if (dataResult == 'Esa habilidad ya existe') {
            $('.alerta').append(alertaB('danger', dataResult))
            ocultarAlerta()
          } else if (dataResult == 'No se pudo añadir') {
            $('.alerta').append(alertaB('danger', dataResult))
            ocultarAlerta()
          } else if (
            dataResult == 'Ya alcanzó el límite de habilidades permitidas.'
          ) {
            $('.alerta').append(alertaB('warning', dataResult))
            ocultarAlerta()
          } else {
            $('.pills-habilidades-anuncio-edit').html(dataResult)
            $('#habilidadesAnuncioEdit').val('')
          }
        }
      })
    }
  })