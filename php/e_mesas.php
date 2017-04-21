<?php 

    include_once('class.conexion.php');

//INSERTAR O MODIFICAR MESA
    if (isset($_REQUEST['insmodmesa'])) {


          $id_mesa = $_REQUEST['id_mesa'];
          $id_td = $_REQUEST['id_td'];
          $desc_mesa = $_REQUEST['desc_mesa'];
          $nombre_mesa = $_REQUEST['nombre_mesa'];
          $numero_sillas = $_REQUEST['numero_sillas'];
          $id_restaurante = 1;


          $cons_mesa = new Conexion;
          $sql01 = "SELECT id_mesa FROM restaurapp_design_table WHERE id_restaurante = 1 and id_mesa = \"$id_mesa\"";
          $Rcons_mesa = $cons_mesa->query($sql01) or trigger_error($cons_mesa->error);
          $Ncons_mesa = $Rcons_mesa->num_rows;
          if ($Ncons_mesa != 0) {
            $sql02 = "UPDATE restaurapp_design_table SET id_td = \"$id_td\", descripcion_mesa = \"$desc_mesa\",nombre_mesa = \"$nombre_mesa\", cant_sillas_mesa = \"$numero_sillas\" WHERE id_restaurante = 1 and id_mesa = \"$id_mesa\"";
          }else{  
            $sql02 = "INSERT INTO restaurapp_design_table (id_restaurante,id_mesa,id_td,descripcion_mesa,nombre_mesa,cant_sillas_mesa) VALUES (\"$id_restaurante\",\"$id_mesa\",\"$id_td\",\"$desc_mesa\",\"$nombre_mesa\",\"$numero_sillas\")";
          }
//insertar/actualizar mesa nueva 
              $cons_mesa->close();
              $ins_mesa = new Conexion;
              $Rins_mesa = $ins_mesa->query($sql02) or trigger_error($ins_mesa->error);
              if ($Rins_mesa) {
                echo 'Mesa insertada';
              }else{
                'Error en la consulta';
              }
              $ins_mesa->close();
//insertar/actualizar mesa nueva

    }
//INSERTAR O MODIFICAR MESA

//BORRAR MESA
    if (isset($_REQUEST['delmodmesa'])) {

      $id_mesa = $_REQUEST['id_del_mesa'];

//borrar mesa
              
              $del_mesa = new Conexion;
              $sql01 = "DELETE FROM restaurapp_design_table WHERE id_restaurante = 1 and id_mesa = \"$id_mesa\"";
              $Rdel_mesa = $del_mesa->query($sql01) or trigger_error($del_mesa->error);
              if ($Rdel_mesa) {
                echo 'Mesa Borrada';
              }else{
                'Error en la consulta';
              }
              $del_mesa->close();
//borrar mesa

    }
//BORRAR MESA

    



?>