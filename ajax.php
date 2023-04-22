<?php

  include_once('configuracion.php');
  $action= $_POST['action'];
  switch ($action) {
   case 'comunas':
    $id=$_POST['region'];
    $select1=  "SELECT * from comunas where region_id='$id'";
    $result1 = mysqli_query($conexion, $select1);
    while($row1=mysqli_fetch_array($result1)){ ?>
       <option value="<?= $row1['id']?>"><?= $row1['name']?></option>
<?php }
    break;

    case 'votar':
    $nombre= $_POST['nombre'];
    $alias= $_POST['alias'];
    $rut= $_POST['rut'];
    $email= $_POST['email'];
    $region= $_POST['region'];
    $comuna= $_POST['comuna'];
    $candidato= $_POST['candidato'];
    $canal= $_POST['canal'];
    $sql3 = "INSERT into votos (nombre_votante, alias_votante, rut_votante, email_votante, region, comuna,candidato, canal) values ('".$nombre."', '".$alias."', '".$rut."', '".$email."', '".$region."','".$comuna."','".$candidato."','".$canal."')";
    $result = mysqli_query($conexion, $sql3);
    mysqli_close($conexion);

    break;

    case 'buscar_rut':
    $rut= $_POST['rut'];
    $select=  "SELECT * from votos where rut_votante='$rut'";
    $result = mysqli_query($conexion, $select);
    if(mysqli_num_rows($result)==0)
       echo 1;
    else {
      echo 2;
    }


    break;

  }
 ?>
