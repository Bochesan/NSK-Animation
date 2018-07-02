var pre_img=0;
 var array_img = new Array('assets/img/benzovoz.png', 'assets/img/benzovoz-2.png', 'assets/img/bg.jpg', 'assets/img/car-1.png', 'assets/img/car-2.png', 'assets/img/cho-cho.png', 'assets/img/cho-cho-smoke.png', 'assets/img/city.png', 'assets/img/cloud.png', 'assets/img/earth.png', 'assets/img/left-arrow.png', 'assets/img/plane.png', 'assets/img/right-arrow.png', 'assets/img/ship.png', 'assets/img/svetofor.png', 'assets/img/trees.png');
 var all_img=array_img.length;
 
 
 $(document).ready(function(){
 
   preload();
  
 });

function hiddenPre() {
  setTimeout(function(){
    $('.preloader').fadeOut(1000,function(){
    $('.banner_slider').addClass('active');
    });
  }, 2000);
  /*setTimeout(function(){
    $('.banner_slider').fadeIn(1000);
  }, 4000);*/
 }

 function preload () {
 for (var key in array_img){
  var i = new Image();
  i.onload = function(){
   pre_img++;
   if (all_img<=pre_img) {
    hiddenPre(); // функция, которая выполнится после загрузки всех картинок
   }
  }
  i.src=array_img[key];
 }
  }