 var activeItem = document.getElementsByClassName('item')


 for ( i = 0 ; i < 5; i++){
   
    activeItem[i].addEventListener('click',function(){
        removeShadow()
            this.classList.toggle('shadow-item');

    })
}

function removeShadow() {
    
 for ( i = 0 ; i < 5; i++){
    
         activeItem[i].classList.remove('shadow-item');
}
}

function removeShadowAbout() {
    
    for ( i = 5 ; i < activeItem.length; i++){
       
            activeItem[i].classList.remove('shadow-item');
   }
   }


// about section

for ( i = 5 ; i < activeItem.length; i++){
    activeItem[i].addEventListener('click',function(){
        removeShadowAbout()
            this.classList.toggle('shadow-item');         
    })
}

   /// section hidden porfifolio

   var btnHideen = document.querySelector('.btn-hidden')
   var contentWork = document.getElementsByClassName('work');



   btnHideen.addEventListener('click', ()=> {

    if(btnHideen.innerHTML ==="ver mais")
    {
        btnHideen.innerHTML ="ver menos";
    }else{
        btnHideen.innerHTML="ver mais";
    }
    
for ( i = 5 ; i< contentWork.length; i++) 
    
    contentWork[i].classList.toggle('work-close');
    
   });


   // nav-bar lateral

   var bntLateral = document.getElementById('mobile');
   var navbarlateral = document.querySelector('.content-item')
   var bntLateralclose = document.getElementById('close'); 

console.log(bntLateral);
   if (bntLateral) {
    bntLateral.addEventListener('click', function () {

        navbarlateral.classList.add('active')
    
       })
   }

   if (bntLateralclose) {
    bntLateralclose.addEventListener('click', function () {

        navbarlateral.classList.remove('active')
    
       })

       
   } 


   if (bntLateralclose) {
    window.addEventListener('mousemove',function(){
        navbarlateral.classList.remove('active')
       })
   }


  //            nigth end day
  const daynight = document.querySelector('.day-night');

  daynight.addEventListener('click',()=>{
    daynight.querySelector('i').classList.toggle('fa-sun');
    daynight.querySelector('i').classList.toggle('fa-moon');
    document.body.classList.toggle('dark');
  })
  window.addEventListener('load',()=>{
    if (document.body.classList.contains('dark')) {
        daynight.querySelector('i').classList.add('fa-sun');
    }else{
        daynight.querySelector('i').classList.add('fa-moon');
    }
  }) 




  /***reescrevendo */
  var typed = new Typed(".typing",{
    strings:["FullStack Development"],
    typeSpeed:150,
    backSpeed:150,
    loop:true

  })

   

   
   