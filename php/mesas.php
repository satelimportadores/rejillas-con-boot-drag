<?php 

    include_once('class.conexion.php');

    $id_mesa = $_REQUEST['id_mesa'];
    $position_columna = $_REQUEST['position_columna'];
    $position_fila = $_REQUEST['position_fila'];
    $id_restaurante = 1;

// 
          $ins_mesa = new Conexion;
          $sql01 = "INSERT INTO restaurapp_design_table (id_restaurante,id_mesa,position_columna,position_fila) VALUES (\"$id_restaurante\",\"$id_mesa\",\"$position_columna\",\"$position_fila\")";
          $Rins_mesa = $ins_mesa->query($sql01) or trigger_error($ins_mesa->error);
          if ($Rins_mesa) {
            echo 'Mesa insertada';
          }
//



?>