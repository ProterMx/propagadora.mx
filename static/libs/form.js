$(document).on("ready", inicio);

function inicio () 
{
  
    $(".boton_envio").click(function() {
        
        var nombre = $(".nombre").val();
            email = $(".email").val();
            validacion_email = /^[a-zA-Z0-9_\.\-]+@[a-zA-Z0-9\-]+\.[a-zA-Z0-9\-\.]+$/;
            telefono = $(".telefono").val();
            movil = $(".movil").val();
            ubicacion = $(".ubicacion").val();
            mensaje = $(".mensaje").val();
        
        if (nombre == "") {
            $(".nombre").focus();
            return false;
        }else if(email == "" || !validacion_email.test(email)){
            $(".email").focus();    
            return false;
        }else if(telefono == ""){
            $(".telefono").focus();
            return false;
        }else if(movil == ""){
            $(".movil").focus();
            return false;
        }else if(ubicacion == ""){
            $(".ubicacion").focus();
            return false;
        }else if(mensaje == ""){
            $(".mensaje").focus();
            return false;
        }else{
            $('.ajaxgif').removeClass('hide');
            var datos = 'nombre='+ nombre + 
                        '&email=' + email + 
                        '&telefono=' + telefono +
                        '&movil=' + movil +
                        '&ubicacion=' + ubicacion + 
                        '&mensaje=' + mensaje;
            $.ajax({
                type: "POST",
                url: "http://mssfp.com/send.php",
                url: "http://mssfp.com/add_reg_f.php",
                data: datos,
                success: function() {
                    $('.ajaxgif').hide();
                    $('.msg').text('Mensaje enviado!').addClass('msg_ok').animate({ 'right' : '130px' }, 300);  
                },
                error: function() {
                    $('.ajaxgif').hide();
                    $('.msg').text('Hubo un error!').addClass('msg_error').animate({ 'right' : '130px' }, 300);                 
                }
            });
            return false;   
        }
    });

}
