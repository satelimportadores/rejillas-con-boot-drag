$(document).ready(function() {
	$( "td" ).draggable({ containment: "#containment-wrapper", scroll: false });
	$( "#draggable" ).draggable();
	$("td").droppable({
      drop: function( event, ui ) {
        $( this )
          .addClass( "ui-state-highlight" )
          .find( "p" )
            .html( "Dropped!" );
      }
    });
	 $("#rejilla").on("click", "td", function() {
	 	alert('My position in table is: '+this.cellIndex+'x'+this.parentNode.rowIndex);
     //alert($( this ).text());
   });
});
