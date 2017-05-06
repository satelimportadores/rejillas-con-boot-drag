<?php 

    include_once('class.conexion.php');

    	//consultar mesas
    	if (isset($_REQUEST['cons_mesas'])) {
          $piso = $_REQUEST['piso'];
       	  $con_mesas = new Conexion;
          $sql01 = "SELECT * FROM restaurapp_design_table WHERE id_piso = $piso and id_restaurante = 1 order by id_td desc";
          $Rcon_mesas = $con_mesas->query($sql01) or trigger_error($con_mesas->error);
          $Ncon_mesas = $Rcon_mesas->num_rows;

	          if ($Ncon_mesas == 0) {
	          	echo 0;
	          }else{
			          	while ($data = $Rcon_mesas->fetch_array()) {
			              	$arreglo[] = array_map('utf8_encode', $data);
			            }
	           	echo json_encode($arreglo);
	          }
          
            $con_mesas->close();
        //consultar mesas
    	}

    	//consultar id  mesas
    	if (isset($_REQUEST['cons_id_mesas'])) {
       	  $con_mesas = new Conexion;
          $sql01 = "SELECT MAX(id_mesa) as idultimo FROM restaurapp_design_table WHERE id_piso = 1 and id_restaurante = 1";
          $Rcon_mesas = $con_mesas->query($sql01) or trigger_error($con_mesas->error);

           $data = $Rcon_mesas->fetch_array();
           $idultimo = $data['idultimo'];
           if ($idultimo)
              echo $idultimo;
           else
              echo 0;
                            
	            
            $con_mesas->close();
        //consultar id mesas
    	}

      //conteo de mesas
      if (isset($_REQUEST['conteo'])) {
          $con_mesas = new Conexion;
          $sql01 = "SELECT id_mesa FROM restaurapp_design_table WHERE id_piso = 1 and id_restaurante = 1";
          $Rcon_mesas = $con_mesas->query($sql01) or trigger_error($con_mesas->error);

           $data = $Rcon_mesas->num_rows;
           $mesas = $data;
           
           echo $mesas;
           
            $con_mesas->close();
        //conteo de mesas
      }

      if (isset($_REQUEST['pisos'])) {
          $con_mesas = new Conexion;
          $sql01 = "SELECT DISTINCT(id_piso) FROM restaurapp_design_table WHERE id_restaurante = 1";
          $Rcon_mesas = $con_mesas->query($sql01) or trigger_error($con_mesas->error);

           while($data = $Rcon_mesas->fetch_array()){
              $pisos[] = array_map('utf8_encode', $data);   
           }
           echo json_encode($pisos);
           
           
            $con_mesas->close();
        //conteo de mesas
      }



 ?>