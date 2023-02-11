$(document).ready(function () {

  $('#nextPage').on('click', function(){
    var buscadorHome = $('#buscadorHome').val();
    var ubicacionHome = $('#ubicacionHome option:selected').val();
    var categoriaHome = $('#categoriaHome option:selected').val();
    var tipoHome = $('#tipoHome option:selected').val();
    var tipoEmpleoHome = $('#tipoEmpleoHome option:selected').val();
    var page = parseInt($('#page').val()) + 1;
    
    if(ubicacionHome == 0) ubicacionHome = '';
    if(categoriaHome == 0) categoriaHome = '';
    if(tipoHome == 0) tipoHome = '';
    if(tipoEmpleoHome == 0) tipoEmpleoHome = '';

    $.ajax({
      url: 'pages/home/functions/functions.php',
      type: 'post',
      dataType: 'text',
      data: {
        buscadorHome: buscadorHome,
        ubicacionHome: ubicacionHome,
        categoriaHome: categoriaHome,
        tipoHome:tipoHome,
        tipoEmpleoHome:tipoEmpleoHome,
        page: page,
        tipo: 'cargarAnunciosFiltro'
      },
      cache: false,
      success: function (dataResult) {
        var obj = $.parseJSON(dataResult)
        $('#tarjetas').html(obj.output);
        // $('#contador').html(obj.contador);
        $('#page').val(page);
        $('#mostrarCantidadAnuncio').html(obj.textoContador);
        $('#activePrev').attr({
          class: 'page-item '+obj.activePrev
        })
        $('#activeNext').attr({
          class: 'page-item '+obj.activeNext
        })
        window.scrollTo({top: 0, left: 0, behavior: "smooth"});
      }
    })
  });

  $('#prevPage').on('click', function(){
    var buscadorHome = $('#buscadorHome').val();
    var ubicacionHome = $('#ubicacionHome option:selected').val();
    var categoriaHome = $('#categoriaHome option:selected').val();
    var tipoHome = $('#tipoHome option:selected').val();
    var tipoEmpleoHome = $('#tipoEmpleoHome option:selected').val();
    var page = parseInt($('#page').val()) - 1;
    
    if(ubicacionHome == 0) ubicacionHome = '';
    if(categoriaHome == 0) categoriaHome = '';
    if(tipoHome == 0) tipoHome = '';
    if(tipoEmpleoHome == 0) tipoEmpleoHome = '';

    $.ajax({
      url: 'pages/home/functions/functions.php',
      type: 'post',
      dataType: 'text',
      data: {
        buscadorHome: buscadorHome,
        ubicacionHome: ubicacionHome,
        categoriaHome: categoriaHome,
        tipoHome:tipoHome,
        tipoEmpleoHome:tipoEmpleoHome,
        page: page,
        tipo: 'cargarAnunciosFiltro'
      },
      cache: false,
      success: function (dataResult) {
        var obj = $.parseJSON(dataResult)
        $('#tarjetas').html(obj.output);
        // $('#contador').html(obj.contador);
        $('#page').val(page);
        $('#mostrarCantidadAnuncio').html(obj.textoContador);
        $('#activePrev').attr({
          class: 'page-item '+obj.activePrev
        })
        $('#activeNext').attr({
          class: 'page-item '+obj.activeNext
        })
        window.scrollTo({top: 0, left: 0, behavior: "smooth"});
      }
    })
  });

  $('#buscadorHome').on('keyup', function(){
    var buscadorHome = $('#buscadorHome').val();
    var ubicacionHome = $('#ubicacionHome option:selected').val();
    var categoriaHome = $('#categoriaHome option:selected').val();
    var tipoHome = $('#tipoHome option:selected').val();
    var tipoEmpleoHome = $('#tipoEmpleoHome option:selected').val();
    
    if(ubicacionHome == 0) ubicacionHome = '';
    if(categoriaHome == 0) categoriaHome = '';
    if(tipoHome == 0) tipoHome = '';
    if(tipoEmpleoHome == 0) tipoEmpleoHome = '';

    $.ajax({
      url: 'pages/home/functions/functions.php',
      type: 'post',
      dataType: 'text',
      data: {
        buscadorHome: buscadorHome,
        ubicacionHome: ubicacionHome,
        categoriaHome: categoriaHome,
        tipoHome:tipoHome,
        tipoEmpleoHome:tipoEmpleoHome,
        tipo: 'cargarAnunciosFiltro'
      },
      cache: false,
      success: function (dataResult) {
        var obj = $.parseJSON(dataResult)
        $('#tarjetas').html(obj.output);
        $('#mostrarCantidadAnuncio').html(obj.textoContador);
        // $('#contador').html(obj.contador);
      }
    })
  });
  $('#ubicacionHome').on('change', function(){
    var buscadorHome = $('#buscadorHome').val();
    var ubicacionHome = $('#ubicacionHome option:selected').val();
    var categoriaHome = $('#categoriaHome option:selected').val();
    var tipoHome = $('#tipoHome option:selected').val();
    var tipoEmpleoHome = $('#tipoEmpleoHome option:selected').val();
    
    if(ubicacionHome == 0) ubicacionHome = '';
    if(categoriaHome == 0) categoriaHome = '';
    if(tipoHome == 0) tipoHome = '';
    if(tipoEmpleoHome == 0) tipoEmpleoHome = '';

    $.ajax({
      url: 'pages/home/functions/functions.php',
      type: 'post',
      dataType: 'text',
      data: {
        buscadorHome: buscadorHome,
        ubicacionHome: ubicacionHome,
        categoriaHome: categoriaHome,
        tipoHome:tipoHome,
        tipoEmpleoHome:tipoEmpleoHome,
        tipo: 'cargarAnunciosFiltro'
      },
      cache: false,
      success: function (dataResult) {
        var obj = $.parseJSON(dataResult)
        $('#tarjetas').html(obj.output);
        $('#mostrarCantidadAnuncio').html(obj.textoContador);
        $('#activePrev').attr({
          class: 'page-item '+obj.activePrev
        })
        $('#activeNext').attr({
          class: 'page-item '+obj.activeNext
        })
        // $('#contador').html(obj.contador);
      }
    })
  });

  $('#categoriaHome').on('change', function(){
    var buscadorHome = $('#buscadorHome').val();
    var ubicacionHome = $('#ubicacionHome option:selected').val();
    var categoriaHome = $('#categoriaHome option:selected').val();
    var tipoHome = $('#tipoHome option:selected').val();
    var tipoEmpleoHome = $('#tipoEmpleoHome option:selected').val();
    
    if(ubicacionHome == 0) ubicacionHome = '';
    if(categoriaHome == 0) categoriaHome = '';
    if(tipoHome == 0) tipoHome = '';
    if(tipoEmpleoHome == 0) tipoEmpleoHome = '';

    $.ajax({
      url: 'pages/home/functions/functions.php',
      type: 'post',
      dataType: 'text',
      data: {
        buscadorHome: buscadorHome,
        ubicacionHome: ubicacionHome,
        categoriaHome: categoriaHome,
        tipoHome:tipoHome,
        tipoEmpleoHome:tipoEmpleoHome,
        tipo: 'cargarAnunciosFiltro'
      },
      cache: false,
      success: function (dataResult) {
        var obj = $.parseJSON(dataResult)
        $('#tarjetas').html(obj.output);
        $('#mostrarCantidadAnuncio').html(obj.textoContador);
        $('#activePrev').attr({
          class: 'page-item '+obj.activePrev
        })
        $('#activeNext').attr({
          class: 'page-item '+obj.activeNext
        })
        // $('#contador').html(obj.contador);
      }
    })
  });

  $('#tipoHome').on('change', function(){
    var buscadorHome = $('#buscadorHome').val();
    var ubicacionHome = $('#ubicacionHome option:selected').val();
    var categoriaHome = $('#categoriaHome option:selected').val();
    var tipoHome = $('#tipoHome option:selected').val();
    var tipoEmpleoHome = $('#tipoEmpleoHome option:selected').val();
    
    if(ubicacionHome == 0) ubicacionHome = '';
    if(categoriaHome == 0) categoriaHome = '';
    if(tipoHome == 0) tipoHome = '';
    if(tipoEmpleoHome == 0) tipoEmpleoHome = '';

    $.ajax({
      url: 'pages/home/functions/functions.php',
      type: 'post',
      dataType: 'text',
      data: {
        buscadorHome: buscadorHome,
        ubicacionHome: ubicacionHome,
        categoriaHome: categoriaHome,
        tipoHome:tipoHome,
        tipoEmpleoHome:tipoEmpleoHome,
        tipo: 'cargarAnunciosFiltro'
      },
      cache: false,
      success: function (dataResult) {
        var obj = $.parseJSON(dataResult)
        $('#tarjetas').html(obj.output);
        $('#mostrarCantidadAnuncio').html(obj.textoContador);
        $('#activePrev').attr({
          class: 'page-item '+obj.activePrev
        })
        $('#activeNext').attr({
          class: 'page-item '+obj.activeNext
        })
        // $('#contador').html(obj.contador);
      }
    })
  });

  $('#tipoEmpleoHome').on('change', function(){
    var buscadorHome = $('#buscadorHome').val();
    var ubicacionHome = $('#ubicacionHome option:selected').val();
    var categoriaHome = $('#categoriaHome option:selected').val();
    var tipoHome = $('#tipoHome option:selected').val();
    var tipoEmpleoHome = $('#tipoEmpleoHome option:selected').val();
    
    if(ubicacionHome == 0) ubicacionHome = '';
    if(categoriaHome == 0) categoriaHome = '';
    if(tipoHome == 0) tipoHome = '';
    if(tipoEmpleoHome == 0) tipoEmpleoHome = '';

    $.ajax({
      url: 'pages/home/functions/functions.php',
      type: 'post',
      dataType: 'text',
      data: {
        buscadorHome: buscadorHome,
        ubicacionHome: ubicacionHome,
        categoriaHome: categoriaHome,
        tipoHome:tipoHome,
        tipoEmpleoHome:tipoEmpleoHome,
        tipo: 'cargarAnunciosFiltro'
      },
      cache: false,
      success: function (dataResult) {
        var obj = $.parseJSON(dataResult)
        $('#tarjetas').html(obj.output);
        $('#mostrarCantidadAnuncio').html(obj.textoContador);
        $('#activePrev').attr({
          class: 'page-item '+obj.activePrev
        })
        $('#activeNext').attr({
          class: 'page-item '+obj.activeNext
        })
        // $('#contador').html(obj.contador);
      }
    })
  });

});

function cargarDescripcion(idAnuncio) {
  $.ajax({
    url: 'pages/home/functions/functions.php',
    type: 'post',
    dataType: 'text',
    data: {
      idAnuncio: idAnuncio,
      tipo: 'cargarDescripcionAnuncio'
    },
    cache: false,
    success: function (dataResult) {
      $('#descripcionEmpleo').html(dataResult)
      $('#descripcionEmpleo2').html(dataResult)
      if($(window).width() <= 900){
        $('#btnAbrirDescripcionHome').click();
      }
    }
  })
}

function postularse (idAnuncio) {
  if(confirm("Estás por postularte a este empleo, ¿Estás seguro de realizar esta acción?")){
    $.ajax({
      url: 'pages/home/functions/functions.php',
      type: 'post',
      dataType: 'text',
      data: {
        tipo: 'postularse',
        idAnuncio: idAnuncio
      },
      cache: false,
      success: function (dataResult) {
        if(dataResult == 'Para postularse primeramente suba su hoja de vida en la sección de su perfil'){
          $('.alerta').append(alertaB('warning',dataResult));
          ocultarAlerta()
          setTimeout(function(){
            $('.alerta').hide();
          }, 2000);
        } else {
          cargarDescripcion(idAnuncio)
          $('#modalPostuladoOk').modal('toggle')
        }
      }
    })
  }
}


function modalIniciarSesion () {
  $.ajax({
    url: 'pages/home/functions/functions.php',
    type: 'post',
    dataType: 'text',
    data: {
      tipo: 'redigirLogin'
    },
    cache: false,
    success: function (dataResult) {
      window.location.href = 'login.php';
    }
  })
}

function verMasDatos(idEmpresa){
  $.ajax({
    url: 'pages/home/functions/functions.php',
    type: 'post',
    dataType: 'text',
    data: {
      tipo: 'verDatosEmpresa',
      idEmpresa: idEmpresa
    },
    cache: false,
    success: function (dataResult) {
      var obj = $.parseJSON(dataResult)
      if (obj.respuesta == 200) {
        $('#nombreEmpresa').text(obj.nombreEmpresa)
        $('#telefonoDatos').text(obj.telefono)
        $('#direccionDatos').text(obj.direccion)
        $('#webUrlDatos').text(obj.web)
        $('#descripcionDatos').text(obj.descripcion)
        $('#modalDatosEmpresa').modal('toggle')
      }
      
    }
  })
 
}
