var contaner = document.getElementById('login-modal');
var Ncadastro = document.getElementById('Ncadastro');
var mudar = document.getElementById("efeito");
var t_login = document.getElementById("fazer-login");
var t_cadastrar = document.getElementById("cadastrar");
var btn_cadastrar = document.getElementById("btn_cadastrar");
var link_login = document.getElementById('m-login');
var link_cadastrar = document.getElementById('m-cadastrar');

//====================================================
//monitora o tamanho da tela quando a tela e do mobile
function tela_mobi(){
  if(window.innerWidth > 318 && window.innerWidth < 770){
     Ncadastro.removeAttribute('onclick');
     btn_cadastrar.setAttribute('onclick','Tela_inicial()');
     t_login.style.transition = 'height 1s ease-in-out';
     t_cadastrar.style.transition = 'height 1s ease-in-out';
    Ncadastro.addEventListener('click', () => {
      link_cadastrar.click();
     })
     
} else {
  Ncadastro.setAttribute('onclick','anime()');
  btn_cadastrar.setAttribute('onclick','logar()');
  t_login.style.display = 'flex';
  t_cadastrar.style.display = 'flex';
  mudar.style.display = 'block';
  mudar.style.zIndex = '999';
  t_cadastrar.style.zIndex = '1';
 

 
}
}
setInterval(tela_mobi, 10);

function Tela_inicial(){
  
  t_login.style.display = 'none';
  mudar.style.display = 'block';
  t_cadastrar.style.display = 'none';
  mudar.style.transition = 'Display 2s';
 
}



//=================================================


link_login.addEventListener('click', () =>{
  t_login.style.height = '0px';
  t_cadastrar.style.display = 'none';
  mudar.style.display = 'none';
 t_login.style.display = 'flex'; 
 t_login.style.height = '100%';
 //t_login.style.transition = 'height 1s ease-in-out';

});

link_cadastrar.addEventListener('click', () =>{
 // t_cadastrar.style.height = '0px';
 
  t_login.style.display = 'none';
  mudar.style.display = 'none';
  t_cadastrar.style.display = 'flex';
  t_cadastrar.style.zIndex ='1';
  t_cadastrar.style.height = '100%';
  //t_cadastrar.style.transition = 'height 1s ease-in-out';
  
});


// btn_cadastrar.addEventListener('click', () =>{
//   logar();

// })
//Ncadastro.addEventListener('click', () =>{
//anime();

// })

function menu(){
  
   if(document.getElementById("nav-menu").style.display == "none"){
    document.getElementById("nav-menu").style.display = "block";
   } else {
    document.getElementById("nav-menu").style.display = "none";
   }
 }

function tela_resize(){
  if(window.innerWidth > 768){
    document.getElementById('nav-menu').style.display = 'block';
  } 

  if(window.innerWidth < 768){
    document.getElementById('nav-menu').style.display = 'none';
    
  }
}

//  window.onresize = function(){
//   if(window.innerWidth >= 769){
//     //  document.getElementById('nav-menu').setAttribute('class','mostrar_menu');
//     alert('teste')
//   }
  

// }

 
// EXECUTA A ANIMAÇÃO DA TELA DE LOGIN E ATIVA O ZINDEX


function anime() {
     var mudar = document.getElementById("efeito");
     var t_login = document.getElementById("fazer-login");
     var t_cadastrar = document.getElementById("cadastrar");
     
     t_login.style.zIndex = "-1";
     mudar.style.left = "400px";
     t_cadastrar.style.zIndex = "-1";
    
     mudar.style.transition ="left 800ms"
    
     mudar.style.zIndex = "5";
     
     mudar.addEventListener('transitionend', function() {
      t_cadastrar.style.zIndex = "1";
      
     });
     
     
     
    }

    

  function logar() {
    var mudar = document.getElementById("efeito");
    var t_login = document.getElementById("fazer-login");
    var t_cadastrar = document.getElementById("cadastrar");
   
    t_cadastrar.style.zIndex = "-1";
    t_login.style.zIndex = "1";
  mudar.style.left = "0px";
   
    
 }

 mudar.addEventListener('transitionend', function() {
  t_cadastrar.style.zIndex = "1"; 

  if(mudar.style.left == "400px"){
  mudar.style.borderTopLeftRadius = "0";
  mudar.style.borderBottomLeftRadius = "0";
  mudar.style.borderTopRightRadius = "25px";
  mudar.style.borderBottomRightRadius = "25px";
  
} else if(mudar.style.left <= "1px"){
  mudar.style.borderTopLeftRadius = "25px";
  mudar.style.borderBottomLeftRadius = "25px";
  mudar.style.borderTopRightRadius = "0";
  mudar.style.borderBottomRightRadius = "0";
  }
  
 });
 