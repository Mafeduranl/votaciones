<?php
$servidor = "localhost";
$basededatos = "desis";
$usuario = "root";
$password = "root";
$conexion = mysqli_connect($servidor, $usuario, $password) or die ("No se ha podido conectar al servidor de Base de datos");
$conexion->set_charset("utf8");

  // Selección del a base de datos a utilizar
$db = mysqli_select_db($conexion, $basededatos) or die ( "Upps! Pues va a ser que no se ha podido conectar a la base de datos" );
