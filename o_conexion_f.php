<?php 

// Parametros a configurar para la conexion de la base de datos 

$hotsdb = "mssfpdb.db.10574139.hostedresource.com";    // sera el valor de nuestra BD 
$basededatos = "mssfpdb";    // sera el valor de nuestra BD 

$usuariodb = "mssfpdb";    // sera el valor de nuestra BD 
$clavedb = "aDMIN@31416";    // sera el valor de nuestra BD 

$tabla_db1 = "contact_form";    // sera el valor de una tabla 
$tabla_db2 = "otratabla";    // sera el valor de otra tabla 

// Fin de los parametros a configurar para la conexion de la base de datos 

$conexion_db = mysql_connect("$hotsdb","$usuariodb","$clavedb") 
    or die ("Conexión denegada, el Servidor de Base de datos que solicitas NO EXISTE"); 
    $db = mysql_select_db("$basededatos", $conexion_db) 
    or die ("La Base de Datos <b>$basededatos</b> NO EXISTE"); 
?> 