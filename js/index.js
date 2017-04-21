

$(document).ready(function() {
 var idmesa; 
$("#cancelmesa").hide();
$("#loading").hide();   
asig_mesas();
$('[data-toltip="tooltip"]').tooltip();
//Celda recibe dropable
	$("td").droppable({
      
      drop: function( event, ui ) {
          var i;
          i = $( this ).find('img').attr('id');
           //console.log(i);

//INSERTAR O MODIFICAR MESA
          if (!i) {
            $( this ).html(ui.draggable); 
            identificador_mesa = $( this ).find('img').attr('id');
            nombre_mesa = $( this ).find('img').attr('data-mesa');
            desc_mesa = $( this ).find('img').attr('data-desc');
            num_sillas_mesa = $( this ).find('img').attr('data-cant-sillas');
            id_td = $(this).attr('id');
              //console.log(id_td);
                  //modal pedir nombre mesa,descripcion, cant sillas
                      $('#Modal_insertar').modal('show');
                      $('.modal_insertar_title').html('Insertar mesa: '+identificador_mesa+' en: '+id_td);
                      $('#id_mesa').attr({value: identificador_mesa});
                      $('#id_td').attr({value: id_td});
                      $('#nombre_mesa').attr({value: nombre_mesa});
                      $('#desc_mesa').attr({value: desc_mesa});
                      $('#sillas_'+num_sillas_mesa).attr({
                        selected: 'selected'
                      });
                      
                      
                  //modal pedir nombre mesa,descripcion, cant sillas
          }
//INSERTAR O MODIFICAR MESA

          
        }
    });
//Celda recibe dropable

    //Borrar mesas
    	 $("#rejilla").on("click", "td img", function() {
          identificador_mesa = $( this ).attr('id');
          var id_td = $(this).parent().attr('id');
          $('#Modal_borrar').modal('show');
          $('.modal_borrar_title').html('Eliminar mesa');
            $('.modal_borrar_title').html('Desea eliminar la mesa con id: '+identificador_mesa+" Ubicación: "+id_td);
            $('#id_del_mesa').attr({value: identificador_mesa});
            $('#id_td_reset').attr({value: id_td});

       });
    //Borrar mesas

    //Crear mesas
   $("#addmesa").on('click',function() {

        $("#loading").show(); 
      idmesa = 0;
      //mostar ultimo id
        $.ajax({
          type:"POST",
          url:"php/consulta_mesas.php",
          data: {'cons_id_mesas': 'cons_id_mesas'},
        }).done(function(data){
          data = parseInt(data);
          idmesa = data + 1;
           // alert(idmesa);
          $("#mesas").append('<img id="'+idmesa+'" class="draggable ui-widget-content mesas" src="images/mesita01.png" alt="">');
          $( ".draggable" ).draggable({ helper:'clone'});
          $('#nombre_mesa').val('Mesa '+idmesa);
          $('#desc_mesa').val('');
          $("#loading").hide(); 
          $("#addmesa").hide();
          $("#cancelmesa").show();
        });
        
      //mostar ultimo id
     
   });
   //Crear mesas

//Cancelar crear mesas
   $("#cancelmesa").on('click',function() {
      $("#"+idmesa).remove();
      $("#addmesa").show();
      $("#cancelmesa").hide();
   });
//Cancelar crear mesas

// AJAX guardar_mesas
    $("#guardar_mesa").on('click', function() {
      $("#loading").show();
       $.ajax({
                  url: 'php/e_mesas.php',
                  type: 'POST',
                  data: $('#form_save_table').serialize(),
                })
                .done(function(data) {
                  console.log(data);
                  $('#Modal_insertar').modal('hide');            
                  $("#loading").hide();
                  $("#addmesa").show();
                  $("#cancelmesa").hide();
                  $('#nombre_mesa').val('');
                  $('#desc_mesa').val('');
                })
    });
// AJAX guardar_mesas

// AJAX borrar_mesas
    $("#borrar_mesa").on('click', function() {
      
      info = $('#form_delete_table').serialize();
      console.log(info);
       $.ajax({
                  url: 'php/e_mesas.php',
                  type: 'POST',
                  data: info,
                })
                .done(function(data) {
                  console.log(data);
                  $('#Modal_borrar').modal('hide');
                  var id_td_reset = $('#id_td_reset').val();
                  $('#'+id_td_reset).html('<img  src="images/fondo_td.png">');
                   
                })
       
                
    });
// AJAX borrar_mesas


});


//FUNCIONES:

var asig_mesas = function(){
        $.ajax({
          type:"POST",
          url:"php/consulta_mesas.php",
          data: {'cons_mesas': 'cons_mesas'},
        }).done(function(data){
          if (data != 0) {
            var mesas01 = JSON.parse(data);
            org_mesas(mesas01);
          };

        });
}


var org_mesas = function(mesas01){
          
          for(var i in mesas01){

               var idtabla = mesas01[i].id;
                    //console.log(idtabla);
               var id_mesa = mesas01[i].id_mesa;
                   // console.log(id_mesa);
               var id_restaurante = mesas01[i].id_restaurante;
                   // console.log(id_restaurante);
               var nombre_mesa = mesas01[i].nombre_mesa;
                    //console.log(nombre_mesa);
               var id_td = mesas01[i].id_td;
                    //console.log(id_td);
               var descripcion_mesa = mesas01[i].descripcion_mesa;
                    //console.log(descripcion_mesa);
                var cant_sillas_mesa = mesas01[i].cant_sillas_mesa;
                    //console.log('--------------------');
               $("#"+id_td).html('<img id="'+id_mesa+'" data-toltip="tooltip" title="'+nombre_mesa+'" class="draggable ui-widget-content mesas" src="images/mesita01.png" data-mesa="'+nombre_mesa+'" data-desc="'+descripcion_mesa+'" data-cant-sillas="'+cant_sillas_mesa+'" alt="'+nombre_mesa+'">')
               $( ".draggable" ).draggable({ helper:'clone'});

          }
}

