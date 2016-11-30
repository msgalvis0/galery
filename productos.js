window.onload=manejarclick;


var cambiarimg;
cambiarimg="<img src='";
var cerrarimg="' height=40vw' width='50vw'/>";
var llamarregresar="<img src='http://periodismodelmotor.com/wp-content/uploads/2015/08/coches-con-turbo.jpg' width='50vw' height='40vw'/>";

function manejarclick() {
   
   var img1=document.getElementById("auto1");
       img1.addEventListener("click",function() {
       mostar("https://i.ytimg.com/vi/qQ3LVIP_dx0/hqdefault.jpg");
     });
                                        
   //var img1=document.getElementById("auto1");
       img1.addEventListener("mouseover",function() {
       aparecer("https://i.ytimg.com/vi/qQ3LVIP_dx0/hqdefault.jpg");
     });
    img1.addEventListener("mouseout",llamar);

   var img2=document.getElementById("auto2");
       img2.addEventListener("click",function() {
       mostar("http://www.todoautos.com.pe/portal/images/stories/P1-1.jpg");
     });
                                        

   //var img2=document.getElementById("auto2");
       img2.addEventListener("mouseover",function() {
         aparecer("http://www.todoautos.com.pe/portal/images/stories/P1-1.jpg");
     });

   img2.addEventListener("mouseout",llamar);
                                        

   var img3=document.getElementById("auto3");
       img3.addEventListener("click",function() {
       mostar("http://www.nocturnar.com/imagenes/autos-deportivos/autos-deportivos-wallpaper-de-ferrari-deportivos.jpg");
     });
                                        

   //var img3=document.getElementById("auto3");
       img3.addEventListener("mouseover",function() {
         aparecer("http://www.nocturnar.com/imagenes/autos-deportivos/autos-deportivos-wallpaper-de-ferrari-deportivos.jpgg");
     });

    img3.addEventListener("mouseout",llamar);
                                       
 
   var img4=document.getElementById("auto4");
       img4.addEventListener("click",function() {
       mostar("http://1.bp.blogspot.com/-7njozmBFcu8/UVt85cQB9MI/AAAAAAAAbkk/cZvETNs19EI/s1600/2014-McLaren-P1.jpg");
     });
                                        

   //var img4=document.getElementById("auto4");
       img4.addEventListener("mouseover",function() {
         aparecer("http://1.bp.blogspot.com/-7njozmBFcu8/UVt85cQB9MI/AAAAAAAAbkk/cZvETNs19EI/s1600/2014-McLaren-P1.jpg");
     });
    img4.addEventListener("mouseout",llamar);
                                       
   
   var img5=document.getElementById("auto5");
       img5.addEventListener("click",function() {
       mostar("http://cdn24.merca20.com/wp-content/uploads/2015/12/Challenger-730x490.png");
     });
                                       

   //var img5=document.getElementById("auto5");
       img5.addEventListener("mouseover",function() {
         aparecer("http://cdn24.merca20.com/wp-content/uploads/2015/12/Challenger-730x490.png");
     });
    img5.addEventListener("mouseout",llamar);
                                       

   var img6=document.getElementById("auto6");
       img6.addEventListener("click",function() {
       mostar("http://st-listas.20minutos.es/images/2013-12/374153/4279146_640px.jpg?1387500476");
     });
                                       

   //var img6=document.getElementById("auto6");
       img6.addEventListener("mouseover",function() {
         aparecer("http://st-listas.20minutos.es/images/2013-12/374153/4279146_640px.jpg?1387500476");
     });
    img6.addEventListener("mouseout",llamar);
                                        
   }

function mostar(img){
  //alert("hola");
  
  cambiarimg +=img;
  cambiarimg +=cerrarimg;
  var mostrar=document.getElementById('principal').innerHTML = cambiarimg;
  llamarregresar=cambiarimg;
  cambiarimg="<img src='";
}
function aparecer(img){

  cambiarimg +=img;
  cambiarimg +=cerrarimg;
  var mostrar=document.getElementById('principal').innerHTML = cambiarimg;
  
  cambiarimg="<img src='";
}


function llamar(){
  //alert("hola");
  var mostrar=document.getElementById('principal').innerHTML = llamarregresar;
}