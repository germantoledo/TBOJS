$(document).ready(function () {

    $('#monto').on('keyup', function(){
      var monto = $('#monto').val();
  
      if(monto == 70){
        $('#plan').val('B').change();
      } else if (monto == 140){
        $('#plan').val('M').change();
      }
      else if (monto == 179 || monto == 180){
        $('#plan').val('P').change();
      }
    });
  
    $('#buscarEmpresa,#buscarEmpleo').on('keyup', function(){
      var buscarEmpresa = $('#buscarEmpresa').val();
      var buscarEmpleo = $('#buscarEmpleo').val();
  
      $.ajax({
        url: 'pages/home/functions/functions.php',
        type: 'post',
        dataType: 'text',
        data: {
          buscarEmpresa: buscarEmpresa,
          buscarEmpleo: buscarEmpleo,
          tipo: 'buscarDatos'
        },
        cache: false,
        success: function (dataResult) {
            $('#cuerpoTabla').html(dataResult);
        }
      })
    });
  
    $('#guardarPago').on('click', function(){
      var monto = $('#monto').val();
      var plan = $('#plan').val();
      var estado = $('#estado').val();
      var id = $('#idAnuncio').val();
  
      if(monto > 0 && monto != '' && plan != 'N'){
        $.ajax({
          url: 'pages/home/functions/functions.php',
          type: 'post',
          dataType: 'text',
          data: {
            idAnuncio: id,
            monto: monto,
            plan: plan,
            estado: estado,
            tipo: 'guardarPago'
          },
          cache: false,
          success: function (dataResult) {
            if(dataResult == 'No se pudo actualizar anuncio'){
              $('.alerta').append(alertaB('danger',dataResult));
              $('#modalEditarAnuncio').modal('toggle');
            } else if (dataResult == 'No se pudo guardar pago'){
              $('.alerta').append(alertaB('danger',dataResult));
              $('#modalEditarAnuncio').modal('toggle');
            } else {
              // $('#cuerpoTabla').html(dataResult);
              $('.alerta').append(alertaB('success',dataResult));
              $('#modalEditarAnuncio').modal('toggle');
              window.location.reload();
            }
            
            
          }
        })
      } else {
        $('.alerta').append(alertaB('danger','El monto debe ser mayor a 0'));
      }
    });
  });
  
  function editarAnuncio(id){
    $('#modalEditarAnuncio').modal('toggle');
  
    $.ajax({
      url: 'pages/home/functions/functions.php',
      type: 'post',
      dataType: 'text',
      data: {
        idAnuncio: id,
        tipo: 'mostrarModalAnuncio'
      },
      cache: false,
      success: function (dataResult) {
        var obj = $.parseJSON(dataResult)
        $('#nombreEmpresa').val(obj.nombre);
        $('#tituloAnuncio').val(obj.titulo);
        $('#monto').val(obj.monto);
        $('#plan').val(obj.plan);
        $('#estado').val(obj.estado);
        $('#idAnuncio').val(obj.id);
      }
    })
  }
  