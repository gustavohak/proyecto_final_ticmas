function mostrardp() {
   let cadena='<ul class="list-group list-group-flush">'+
   '<li class="list-group-item active">Datos Personales</li>'+
'</ul>'+
   '<div class="table-responsive">'+
    '<table class="table">'+
   '<thead>'+
      '<tr>'+   
     '</tr>'+
   '</thead>'+
   '<tbody>'+
     '<tr>'+
       '<th scope="row"></th>'+
       '<td>Domicilio: </td>'+
       '<td>Salta 2895 Santa fe</td>'+
       '<td>Argentina</td>'+
       '<td></td>'+
       '</tr>'+
     '<tr>'+
       '<th scope="row"></th>'+
       '<td>Telefono: </td>'+
       '<td>Cel:3426125489  </td>'+
       '<td>0342-48897412</td>'+
       '<td></td>'+
       '</tr>'+
     '<tr>'+
       '<th scope="row"></th>'+
       '<td>Email: </td>'+
       '<td>agustinats@gmail.com</td>'+
       '<td></td>'+
       '<td></td>'+
     '</tr>'+
     '<tr>'+
       '<th scope="row"></th>'+
       '<td>idiomas: </td>'+
       '<td>Ingles Basico </td>'+
       '<td></td>'+
       '<td></td>'+
     '</tr>' +
   '</tbody>'+
 '</table>' +
 '<div>' ;
    document.getElementById("dp").innerHTML=cadena;
}

function mostraredu(){
  
let lista1 ='<ul class="list-group list-group-flush">'+
       '<li class="list-group-item active">Educacion</li>'+
    '</ul>'+
    '<div class="row">'+
    '<div class="col-sm-1">'+ '</div>'+
    '<div class="col-sm-9">'+
    '<ul>'+
    '<li>Secundaria'+
      '<ul>'+
        '<li>'+'Tecnico en electronica ' + 'E.N.E.T  N.Avellaneda ' + 'Duracion 4 años'+'</li>'+
      '</ul>'+
    '</li>'+
    '<li>Terciario'+
      '<ul>'+
        '<li>'+'Tecnico en Informatica ' + 'E.N.E.T D.Silva ' + 'Duracion 4 años'+'</li>'+
      '</ul>'+
    '</li>'+
    '<li>Universitario'+
      '<ul>'+
        '<li>'+ 'Tecnico en Tecnologias de la informacion ' + 'Universidad Tecnologica  Nacional ' + 'Duracion 2 años y medio' + '</li>'+
      
      '</ul>'+
    '</li>'+
    '</ul>'+ '</div>' +'</div>';

  document.getElementById("dp").innerHTML=lista1;
}
function mostrarexp(){
    let lista1 ='<ul class="list-group list-group-flush">'+
         '<li class="list-group-item active">Experiencia Laboral</li>'+
      '</ul>'+
      '<div class="row">'+
      '<div class="col-sm-1">'+ '</div>'+
          '<div class="col-sm-9">'+
            '<ul>'+
            '<li>Tecnico Independiente '+
              '<ul>'+
                '<li>'+' Trabajo en taller propio reparando equipos electronicos. '+ 'Desde 2011 -2014'+ 
                '</li>'+
              '</ul>'+
            '</li>'+
            '<li>Tecnico Telecom Argentina. '+' Desde 2015 -2023'+
              '<ul>'+
                '<li>'+'Tecnico Instalador-Reparador lineas telefonicas'+'</li>'+
              '</ul>'+
            '</li>'+
            '</ul>'+
          '</div>'+ 
      '</div>';
    document.getElementById("dp").innerHTML=lista1;
}
function mostrarcursos(){
  let lista1 ='<ul class="list-group list-group-flush">'+
       '<li class="list-group-item active">Experiencia Laboral</li>'+
    '</ul>'+
    '<div class="row">'+
    '<div class="col-sm-1">'+ '</div>'+
        '<div class="col-sm-9">'+
          '<ul>'+
          '<li>Como Tecnico Independiente '+
            '<ul>'+
            '<li>'+' Autocad 2000 ' +
            '<li>'+' Empalme de Fibras Opticas y localizacion de fallas con OTDR '+ 'Año 2023'+ 
              '</li>'+
            '</ul>'+
          '</li>'+
          '<li>En Telecom Argentina. '+' Desde 2015 -2023'+
            '<ul>'+
              '<li>'+' Instalador-Reparador lineas telefonicas por redes de cobre'+'</li>'+
              '<li>'+'Mantenimiento Enlaces de Loop Inalambrico (Wll), GSM fijo '+'</li>'+
              '<li>'+'Mantenimiento de Enlaces de lineas digitales Adsl domiciliarias'+'</li>'+
              '<li>'+'configuracion de redes ethernet,Wll,Modems '+'</li>'+
              '<li>'+'Empalme de cables Multipares de red de cobre'+'</li>'+
              '<li>'+' Seguridad laboral'+'</li>'+
            '</ul>'+
          '</li>'+
          
          '</ul>'+
        '</div>'+ 
    '</div>';
  document.getElementById("dp").innerHTML=lista1;
}
function mostrarapt(){
 let a= "Motivada por la Electronica y las ciencias que dependen de ella estoy" + 
 "preparada para realizar tareas de mantenimiento de equipos electronicos."+ "<br>"+
 "Poseeo conocimientos de desarrollo de software y administracion de bases de datos"+ 
 " usando, java, c#, delphi,php y mysql, "+"adquiridos en las tecnicaturas realizadas "
 + "<br>"+ "Por el momento no he tenido oportunidad de trabajar en empresas del rubro pero en mis "+
 " tiempos libres trabajo como  desarrollador independiente";
  let lista1 ='<ul class="list-group list-group-flush">'+
                 '<li class="list-group-item active">Aptitudes</li>'+
              '</ul>'+
    '<div class="row">'+
        '<div class="col-sm-1">'+ '</div>'+
        '<div class="col-sm-9">'+
          '<p>'+ '<br>'+ a + '</p>'+
           '</div>'+
    '</div>';
  
    document.getElementById("dp").innerHTML=lista1;
}
