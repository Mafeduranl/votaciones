<?php
  include_once('configuracion.php'); 

?>
<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <title>Formulario de Votación</title>
    <link href="assets/css/bootstrap.css" rel="stylesheet">
    <link href="assets/css/form-validation.css" rel="stylesheet">

  </head>
  <body class="bg-light">
  <div class="container">
   <div class="row g-5">
       <div class="col-md-7 col-lg-8">
        <h4 class="mb-3">FORMULARIO DE VOTACIÓN</h4>
          <hr class="my-4">
          <!-- Empieza formulario -->
          <form class="needs-validation" novalidate id="form">
            <div class="row g-3">
              <div class="col-6">
                <label for="firstName" class="form-label">Nombre y Apellido</label>
              </div>
                <div class="col-6">
                <input type="text" class="form-control" id="nombre"  required>
                <div class="invalid-feedback">
                Ingresa tu nombre
                </div>
              </div>

              <div class="col-6">
                <label for="lastName" class="form-label">Alias</label>
              </div>
              <div class="col-6">
                <input type="text" class="form-control" id="alias" pattern="[A-Za-z0-9_-]{1,15}" required onblur="buscar()" minlength="6">
                <div class="invalid-feedback" id="alias-error">
                Ingresa un alias
                </div>
              </div>

                <div class="col-6">
                  <label for="username" class="form-label">RUT</label>
                </div>
                <div class="col-6">
                  <input type="text" class="form-control" id="rut" required maxlength="12" onblur="validar_rut()">

                  <div class="invalid-feedback" id="rut-error">
                      Ingresa un Rut válido
                  </div>
                </div>

              <div class="col-6">
                <label for="email" class="form-label">Email </label>
              </div>
              <div class="col-6">
                <input type="email" class="form-control" id="email" placeholder="tu@correo.cl" required onblur="validarcorreo()">
                <div class="invalid-feedback" id="email-error">
                  Ingresa un email válido
                </div>
              </div>

              <div class="col-6">
                <label for="address" class="form-label">Región</label>
              </div>
              <div class="col-6">
                <select class="form-select" id="region" required onchange="cambiarcomuna()">
                  <option value="">Seleccione</option>
                  <?php
                  $select=  "SELECT * from regions";
                  $result = mysqli_query($conexion, $select);
                  while($row=mysqli_fetch_array($result)){
                  ?>
                    <option value="<?= $row['id']?>"><?= $row['name']?></option>
                  <?php } ?>
                </select>
                <div class="invalid-feedback">
                 Ingresa una región
                </div>
              </div>

              <div class="col-6">
                <label for="address2" class="form-label">Comuna</label>
              </div>
              <div class="col-6">
                <select class="form-select" id="comuna" required>
                  <option value="">Seleccione</option>
                </select>
                <div class="invalid-feedback">
                Ingresa una comuna
                </div>
              </div>

              <div class="col-6">
                <label for="country" class="form-label">Candidato</label>
              </div>
              <div class="col-6">
                <select class="form-select" id="candidato" required>
                  <option value="">Seleccione</option>
                  <?php
                  $select=  "SELECT * from candidatos";
                  $result = mysqli_query($conexion, $select);
                  while($row=mysqli_fetch_array($result)){ ?>
                    <option value="<?= $row['id']?>"><?= $row['candidato']?></option>
              <?php  } ?>
                </select>
                <div class="invalid-feedback">
                  Ingresa un candidato
                </div>
              </div>

              <div class="col-6 ">
                <label for="country" class="form-label">Como se enteró de nosotros</label>
              </div>
              <div class="col-6">
                <label class="form-check-label">
                  <input type="checkbox" class="form-check-input" name="canal[]" value="Web" >
                  Web
                </label>
                <label class="form-check-label">
                  <input type="checkbox" class="form-check-input" name="canal[]" value="Tv">
                  Tv
                </label>
                <label class="form-check-label">
                  <input type="checkbox" class="form-check-input" name="canal[]" value="Redes-Sociales">
                  Redes Sociales
                </label>
                <label class="form-check-label">
                  <input type="checkbox" class="form-check-input" name="canal[]" value="Amigo">
                  Amigo
                </label>



              </div>


            </div>
            <div class="alert alert-primary d-none" role="alert" id="mensaje">
              Su voto fue enviado!
            </div>
           <button class="w-100 btn btn-primary btn-lg" type="button" onclick="votar()">Votar</button>
        </form>
          <!-- Termina formulario -->
      </div>
    </div>



</div>



    <script src="assets/js/jquery.min.js"></script>
    <script src="assets/js/form-validation.js"></script>
  </body>
</html>
