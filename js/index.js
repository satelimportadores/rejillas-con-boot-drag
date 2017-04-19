var idmesa = 0;
var i;
$(document).ready(function() {

	$("td").droppable({
      drop: function( event, ui ) {
          i = $( this ).find('img').attr('id');
          alert(i);
          if (!i) {
            $( this ).html(ui.draggable); 
            identificador_mesa = $( this ).find('img').attr('id');
            columna = this.cellIndex;
            fila = this.parentNode.rowIndex;
            console.log(identificador_mesa+' '+fila+' '+columna);
          };
          
        }
    });

	 $("#rejilla").on("click", "td", function() {
	 	//console.log('My position in table is: '+this.cellIndex+'x'+this.parentNode.rowIndex);
     //alert($( this ).text());
   });

   $("#addmesa").on('click',function() {
    idmesa++;
     $("#mesas").append('<img id="'+idmesa+'" class="draggable ui-widget-content" src="images/mesita01.png" alt="">');
     $( ".draggable" ).draggable({ helper:'clone'});
   });
});



