var idmesa = 0;
var i;
$(document).ready(function() {

//Celda recibe dropable
	$("td").droppable({
      drop: function( event, ui ) {
          i = $( this ).find('img').attr('id');
          console.log(i);
          if (!i) {
            $( this ).html(ui.draggable); 
            identificador_mesa = $( this ).find('img').attr('id');
            columna = this.cellIndex;
            fila = this.parentNode.rowIndex;
            console.log(identificador_mesa+' '+fila+' '+columna);
              //envio php
                $.ajax({
                  url: 'php/mesas.php',
                  type: 'POST',
                  data: {'id_mesa': identificador_mesa,'position_columna':columna,'position_fila':fila},
                })
                .done(function(data) {
                  console.log(data);
                })
                .fail(function(data) {
                  console.log(data);
                })
                .always(function(data) {
                  console.log(data);
                });
                
              //envio php
          };
          
        }
    });
//Celda recibe dropable

    //Borrar mesas
    	 $("#rejilla").on("click", "td img", function() {
         identificador_mesa = $( this ).attr('id');
         console.log(identificador_mesa);
       });
    //Borrar mesas

    //Crear mesas
   $("#addmesa").on('click',function() {
    idmesa++;
     $("#mesas").append('<img id="'+idmesa+'" class="draggable ui-widget-content" src="images/mesita01.png" alt="">');
     $( ".draggable" ).draggable({ helper:'clone'});
   });
    //Crear mesas
});



