
(function(e){jQuery.fn.Rut=function(t){var n={digito_verificador:null,on_error:function(){},on_success:function(){},validation:true,format:true,format_on:"change"};var r=e.extend(n,t);return this.each(function(){if(n.format){jQuery(this).bind(n.format_on,function(){jQuery(this).val(jQuery.Rut.formatear(jQuery(this).val(),n.digito_verificador==null))})}if(n.validation){if(n.digito_verificador==null){jQuery(this).bind("blur",function(){var e=jQuery(this).val();if(jQuery(this).val()!=""&&!jQuery.Rut.validar(e)){n.on_error()}else if(jQuery(this).val()!=""){n.on_success()}})}else{var e=jQuery(this).attr("id");jQuery(n.digito_verificador).bind("blur",function(){var t=jQuery("#"+e).val()+"-"+jQuery(this).val();if(jQuery(this).val()!=""&&!jQuery.Rut.validar(t)){n.on_error()}else if(jQuery(this).val()!=""){n.on_success()}})}}})}})(jQuery);jQuery.Rut={formatear:function(e,t){var n=new String(e);var r="";n=jQuery.Rut.quitarFormato(n);if(t){var i=n.charAt(n.length-1);n=n.substring(0,n.length-1)}while(n.length>3){r="."+n.substr(n.length-3)+r;n=n.substring(0,n.length-3)}r=n+r;if(r!=""&&t){r+="-"+i}else if(t){r+=i}return r},quitarFormato:function(e){var t=new String(e);while(t.indexOf(".")!=-1){t=t.replace(".","")}while(t.indexOf("-")!=-1){t=t.replace("-","")}return t},digitoValido:function(e){if(e!="0"&&e!="1"&&e!="2"&&e!="3"&&e!="4"&&e!="5"&&e!="6"&&e!="7"&&e!="8"&&e!="9"&&e!="k"&&e!="K"){return false}return true},digitoCorrecto:function(e){largo=e.length;if(largo<2){return false}if(largo>2){rut=e.substring(0,largo-1)}else{rut=e.charAt(0)}dv=e.charAt(largo-1);jQuery.Rut.digitoValido(dv);if(rut==null||dv==null){return 0}dvr=jQuery.Rut.getDigito(rut);if(dvr!=dv.toLowerCase()){return false}return true},getDigito:function(e){var t="0";suma=0;mul=2;for(i=e.length-1;i>=0;i--){suma=suma+e.charAt(i)*mul;if(mul==7){mul=2}else{mul++}}res=suma%11;if(res==1){return"k"}else if(res==0){return"0"}else{return 11-res}},validar:function(e){e=jQuery.Rut.quitarFormato(e);largo=e.length;if(largo<2){return false}for(i=0;i<largo;i++){if(!jQuery.Rut.digitoValido(e.charAt(i))){return false}}var t="";for(i=largo-1,j=0;i>=0;i--,j++){t=t+e.charAt(i)}var n="";n=n+t.charAt(0);n=n+"-";cnt=0;for(i=1,j=2;i<largo;i++,j++){if(cnt==3){n=n+".";j++;n=n+t.charAt(i);cnt=1}else{n=n+t.charAt(i);cnt++}}t="";for(i=n.length-1,j=0;i>=0;i--,j++){t=t+n.charAt(i)}if(jQuery.Rut.digitoCorrecto(e)){return true}return false}}

jQuery(document).ready(function(){
  var rut_valido=0;
      jQuery('#rut').Rut({ // Validar Rut
          format_on: 'keyup , focusout , focus',
          validation: true,
          on_error: function(){

              jQuery('#rut-error').addClass('d-block');
              jQuery('#sender').prop('disabled' , true);
              jQuery('.btn-primary ').attr('disabled' , true);
              document.getElementById("rut").focus();
              rut_valido=0;
              return false;
          },
          on_success: function(){
              rut_valido=1;
              //er = 0
              jQuery('#rut-error').removeClass('d-block');
              jQuery('#sender').prop('disabled' , true)
              jQuery('.btn-primary ').attr('disabled' , false);
          }
     });

     jQuery("#nombre").keypress(function (key) {  // Validar Campo nombre solo letras

            if ((key.charCode < 97 || key.charCode > 122)//letras mayusculas
                && (key.charCode < 65 || key.charCode > 90) //letras minusculas
                && (key.charCode != 45) //retroceso
                && (key.charCode != 241) //ñ
                 && (key.charCode != 209) //Ñ
                 && (key.charCode != 32) //espacio
                 && (key.charCode != 225) //á
                 && (key.charCode != 233) //é
                 && (key.charCode != 237) //í
                 && (key.charCode != 243) //ó
                 && (key.charCode != 250) //ú
                 && (key.charCode != 193) //Á
                 && (key.charCode != 201) //É
                 && (key.charCode != 205) //Í
                 && (key.charCode != 211) //Ó
                 && (key.charCode != 218) //Ú

                )
                return false;
        });

});
function buscar(){ // Funcion Alias que permite mas de 5 caracteres y solo numeros y letras
  var dato= jQuery('#alias').val();
  var valoresAceptados = /^[A-Za-z0-9_-]+$/;
  var bandera=0; var bandera1=0;var bandera2=0;
  if ((!dato.match(valoresAceptados))&&(dato!="")) {
      console.log('caract')
      bandera2=1;
      jQuery('#alias-error').html('No está admitido caracteres especiales')
      jQuery('#alias-error').addClass('d-block');
      jQuery('.btn-primary ').attr('disabled' , true);
      return false;

    }
    else{
      jQuery('#alias-error').removeClass('d-block');
    }
    if((dato.length<=5)&&(dato!="")){
      jQuery('#alias-error').html('Debe ingresar mas de 5 caracteres')
      jQuery('#alias-error').addClass('d-block');
      jQuery('.btn-primary ').attr('disabled' , true);
      return false;
    }
    else{
      jQuery('#alias-error').removeClass('d-block');
      jQuery('.btn-primary ').attr('disabled' , false);
      jQuery('#alias-error').html('Ingrese un alias')
    }

}
function validarcorreo(){  // Validar correo
  if($("#email").val().indexOf('@', 0) == -1 || $("#email").val().indexOf('.', 0) == -1) {
    jQuery('#email-error').html('Debe ingresar un correo válido')
    jQuery('#email-error').addClass('d-block');
    jQuery('.btn-primary ').attr('disabled' , true);
    return false;

  }
  else{
    jQuery('#email-error').removeClass('d-block');
    jQuery('.btn-primary ').attr('disabled' , false);
  }
}
function cambiarcomuna(){  // Funcion que cambia las comunas d acuerdo a la región
  var region = jQuery('#region').val();
  jQuery.ajax({
    url: 'ajax.php',
    type: 'post',
    data: {
     "region": region,
     "action":"comunas",
   },
   success: function(data, textStatus, jQxhr) {

      $('#comuna').html(data);

   },
   error: function(jqXhr, textStatus, errorThrown) {
      console.log(errorThrown);
   }
  });
}
function votar(){  // Funcion Que guarda a los votantes
  var forms = document.getElementById('form');
  var nombre= jQuery('#nombre').val();
  var alias= jQuery('#alias').val();
  var rut= jQuery('#rut').val();
  var email= jQuery('#email').val();
  var region= jQuery('#region').val();
  var comuna= jQuery('#comuna').val();
  var candidato= jQuery('#candidato').val();
  if (forms.checkValidity()) {
    var i=0; var selected="";
    $('#form input[type=checkbox]').each(function(){
      if (this.checked) {
        selected += $(this).val()+', ';
        i++;
      }
    });
    if(i<=1){
      jQuery('#mensaje').html('Debe escoger al menos 2 opciones');
      jQuery('#mensaje').removeClass('d-none');
    }
    else{
      jQuery('#mensaje').addClass('d-none');
      jQuery('#mensaje').html('Su voto fue enviado con éxito');
      jQuery.ajax({
        url: 'ajax.php',
        type: 'post',
        data: {
          "nombre": nombre,
          "alias": alias,
          "rut": rut,
          "email": email,
          "region": region,
          "comuna": comuna,
          "candidato":candidato,
          "canal":selected,
          "action":"votar",
       },
       success: function(data, textStatus, jQxhr) {

          jQuery('#mensaje').removeClass('d-none');
          jQuery('#form')[0].reset();
          jQuery('#comuna').empty();
          jQuery('#comuna').append('<option value="">Seleccione</option>');


       },
       error: function(jqXhr, textStatus, errorThrown) {
          console.log(errorThrown);
       }
     });
   }
  }
  else {

    forms.classList.add('was-validated')
  }
}
function validar_rut(){  // Funcion que busca el rut para ver si ya realizó el voto
  var rut= jQuery('#rut').val(); //alert(rut);
  jQuery.ajax({
    url: 'ajax.php',
    type: 'post',
    data: {
      "rut": rut,
      "action":"buscar_rut",
   },
   success: function(data, textStatus, jQxhr) {
     if(data!=1){
       $('#mensaje').removeClass('d-none');
       jQuery('#mensaje').html('Ese rut ya realizó la votación');
       jQuery('.btn-primary ').attr('disabled' , true);
       document.getElementById("rut").focus();
     }
     else{
       $('#mensaje').addClass('d-none');
       jQuery('#mensaje').html('Su voto fue enviado con éxito');
       jQuery('.btn-primary ').attr('disabled' , false);
     }

   },
   error: function(jqXhr, textStatus, errorThrown) {
      console.log(errorThrown);
   }
  });
}
