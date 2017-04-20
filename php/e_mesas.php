<?php 

    include_once('class.conexion.php');

//INSERTAR O MODIFICAR MESA
    if (isset($_REQUEST['insmodmesa'])) {

          $id_mesa = $_REQUEST['id_mesa'];
          $id_td = $_REQUEST['id_td'];
          $id_restaurante = 1;


          $cons_mesa = new Conexion;
          $sql01 = "SELECT id_mesa FROM restaurapp_design_table WHERE id_restaurante = 1 and id_mesa = \"$id_mesa\"";
          $Rcons_mesa = $cons_mesa->query($sql01) or trigger_error($cons_mesa->error);
          $Ncons_mesa = $Rcons_mesa->num_rows;
          if ($Ncons_mesa != 0) {
            $sql02 = "UPDATE restaurapp_design_table SET id_td = (\"$id_td\") WHERE id_restaurante = 1 and id_mesa = \"$id_mesa\"";
          }else{  
            $sql02 = "INSERT INTO restaurapp_design_table (id_restaurante,id_mesa,id_td) VALUES (\"$id_restaurante\",\"$id_mesa\",\"$id_td\")";
          }
//insertar/actualizar mesa nueva 
              $ins_mesa = new Conexion;
              $Rins_mesa = $ins_mesa->query($sql02) or trigger_error($ins_mesa->error);
              if ($Rins_mesa) {
                echo 'Mesa insertada';
              }
          
//insertar/actualizar mesa nueva

    }
//INSERTAR O MODIFICAR MESA

    



?>