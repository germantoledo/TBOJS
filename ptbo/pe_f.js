$(document).ready(function () {

    $('#buscarEmpresaME').on('keyup', function(){
        var buscarEmpresa = $('#buscarEmpresaME').val();
    
        $.ajax({
            url: 'pages/empresas/functions/functions.php',
            type: 'post',
            dataType: 'text',
            data: {
            buscarEmpresa: buscarEmpresa,
            tipo: 'cargarTablaEmpresa'
            },
            cache: false,
            success: function (dataResult) {
                $('#cuerpoTablaEmpresa').html(dataResult);
            }
        })
    });

});

function activarServicio (idEmpresa) {
  $.ajax({
    url: 'pages/empresas/functions/functions.php',
    type: 'post',
    dataType: 'text',
    data: {
      idEmpresa: idEmpresa,
      tipo: 'activarServicio'
    },
    cache: false,
    success: function (dataResult) {
      $.ajax({
        url: 'pages/empresas/functions/functions.php',
        type: 'post',
        dataType: 'text',
        data: {
          buscarEmpresa: '',
          tipo: 'cargarTablaEmpresa'
        },
        cache: false,
        success: function (dataResult) {
          $('#cuerpoTablaEmpresa').html(dataResult)
        }
      })
    }
  })
}

function desactivarServicio (idPago, idEmpresa) {
  if (confirm('¿Está seguro de desactivar?')) {
    $.ajax({
      url: 'pages/empresas/functions/functions.php',
      type: 'post',
      dataType: 'text',
      data: {
        idPago: idPago,
        idEmpresa: idEmpresa,
        tipo: 'desactivarServicio'
      },
      cache: false,
      success: function (dataResult) {
        $.ajax({
          url: 'pages/empresas/functions/functions.php',
          type: 'post',
          dataType: 'text',
          data: {
            buscarEmpresa: '',
            tipo: 'cargarTablaEmpresa'
          },
          cache: false,
          success: function (dataResult) {
            $('#cuerpoTablaEmpresa').html(dataResult)
          }
        })
      }
    })
  }
}
