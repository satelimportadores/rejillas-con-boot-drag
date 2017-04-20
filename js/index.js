
$(document).ready(function() {

  
asig_mesas();

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
            id_td = $(this).attr('id');
              //console.log(id_td);
                  //modal pedir nombre mesa,descripcion, cant sillas
                      $('#Modal_insertar').modal('show');
                      $('.modal_insertar_title').html('Insertar mesa: '+identificador_mesa+' en: '+id_td);
                  //modal pedir nombre mesa,descripcion, cant sillas
              //envio php
                $.ajax({
                  url: 'php/e_mesas.php',
                  type: 'POST',
                  data: {'insmodmesa':'insmodmesa','id_mesa': identificador_mesa,'id_td':id_td},
                })
                .done(function(data) {
                  console.log(data);
                })

                
              //envio php
          }
//INSERTAR O MODIFICAR MESA

          
        }
    });
//Celda recibe dropable

    //Borrar mesas
    	 $("#rejilla").on("click", "td img", function() {
          identificador_mesa = $( this ).attr('id');
          $('#Modal_borrar').modal('show');
          $('.modal_borrar_title').html('Eliminar mesa');
            $('.modal_borrar_content').html('Desea eliminar la mesa con id: '+identificador_mesa);
       });
    //Borrar mesas

    //Crear mesas
   $("#addmesa").on('click',function() {
      idmesa = 0;
      //mostar ultimo id
        $.ajax({
          type:"POST",
          url:"php/consulta_mesas.php",
          data: {'cons_id_mesas': 'cons_id_mesas'},
        }).done(function(data){
          data = parseInt(data);
          var idmesa = data + 1;
           // alert(idmesa);
          $("#mesas").append('<img id="'+idmesa+'" class="draggable ui-widget-content" src="images/mesita01.png" alt="">');
          $( ".draggable" ).draggable({ helper:'clone'});
        });
        
      //mostar ultimo id
     
   });
    //Crear mesas


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
                //console.log('--------------------');
           $("#"+id_td).html('<img id="'+id_mesa+'" class="draggable ui-widget-content" src="images/mesita01.png" alt="">')
           $( ".draggable" ).draggable({ helper:'clone'});
          }
}



