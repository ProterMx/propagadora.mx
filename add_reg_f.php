<!DOCTYPE html>
<!--[if lt IE 7]>      <html class="no-js lt-ie9 lt-ie8 lt-ie7"> <![endif]-->
<!--[if IE 7]>         <html class="no-js lt-ie9 lt-ie8"> <![endif]-->
<!--[if IE 8]>         <html class="no-js lt-ie9"> <![endif]-->
<!--[if gt IE 8]><!--> <html class="no-js" lang="es"> <!--<![endif]-->
<!-- MSSFP // Developed by draoomedia.com -->
<head>
    <meta charset="utf-8"/>
    <meta name="viewport" content="width=device-width, initial-scale=1"/>
    <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1"/>
    <script src="prefixfree.min.js"></script>
    <script type="text/javascript" src="demo/libs/jq.js"></script>
    <link rel="Stylesheet" type="text/css" href="demo/libs/xo.css" />
    <script type="text/javascript" src="parallax.min.js"></script>
    <script type="text/javascript" src="demo/index.js"></script>
    <script type="text/javascript" src="demo/examples.js"></script>
    <script type="text/javascript" src="demo/libs/form.js"></script>
    <link rel="Stylesheet" type="text/css" href="demo/index.css" />
<!--[if IE]><script src="http://html5shiv.googlecode.com/svn/trunk/html5.js"></script><![endif]-->
    <script type="text/javascript">

      var _gaq = _gaq || [];
      _gaq.push(['_setAccount', 'UA-34546066-1']);
      _gaq.push(['_trackPageview']);

      (function() {
        var ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true;
        ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';
        var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ga, s);
      })();

    </script>
</head>
<body class="background">


    <div class="container">

        <div id="index" class="leaguegothic white page">
            <div id="startbox" class="f2 lghtgrey">
<?php  

// Recibimos por POST los datos procedentes del formulario  

$nombre = $POST["nombre"];
$email = $_POST["email"]; 
$telefono = $_POST["telefono"];
$movil = $_POST["movil"];
$ubicacion = $_POST["ubicacion"];
$mensaje = $_POST["mensaje"];

// Abrimos la conexion a la base de datos  
include("o_conexion_f.php");  

$_GRABAR_SQL = "INSERT INTO $tabla_db1 (nombre,email,telefono,movil,ubicacion,mensaje) VALUES ('$nombre','$email','$telefono','$movil','$ubicacion','$mensaje')";  
mysql_query($_GRABAR_SQL); 

// Cerramos la conexion a la base de datos  
include("c_conexion.php");  

// Confirmamos que el registro ha sido insertado con exito  

echo "  
<p>Gracias por enviarnos tus comentarios y dudas.</p>
<p>en breve nos comunicaremos con usted.</p>  

<p><a href='javascript:history.go(-1)'>VOLVER ATRÁS</a></p>  
";  
?>  
                
            </div>
        </div>










</body>
</html>