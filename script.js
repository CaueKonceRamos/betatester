let margin = 0;
let marginAdvogado = 0;
let marginDepoimentos = 0;
let scrool = false;
document.querySelector('.material-symbols-outlined').addEventListener('click', ()=>{ 
    document.querySelector('.menu-hamburguer').style.opacity = 0; 
    document.querySelector('.menu-hamburguer').style.display = 'flex';
    setTimeout(() => {
        document.querySelector('.menu-hamburguer').style.opacity = 1; 
    }, 200);
});

document.querySelector('.menu-hamburguer .material-symbols-outlined').addEventListener('click', ()=>{

   
    document.querySelector('.menu-hamburguer').style.opacity = 1; 
    setTimeout(() => {
        
        document.querySelector('.menu-hamburguer').style.opacity = 0; 
        document.querySelector('.menu-hamburguer').style.display = 'none';
    }, 200);


});

document.querySelector('.servicos-seta-left .material-symbols-outlined').addEventListener('click', ()=>{
    
    if(window.innerWidth < 1400){
        margin = margin + 280;
    if(margin > 0 ){ 
        margin = 0;
    }
    
    document.querySelector('.servicos-list').style.marginLeft = margin + 'px';
    }else {
        margin = margin + 430;
        if(margin > 0 ){ 
            margin = 0;
        }
        
        document.querySelector('.servicos-list').style.marginLeft = margin + 'px';
    }
    
    

});
document.querySelector('.servicos-seta-right .material-symbols-outlined').addEventListener('click', ()=>{

    if(window.innerWidth < 1400){
        margin = margin - 280;
    if(margin < (-3870)){
        margin = (-3870);
    }
    
    if(window.innerWidth - 3870 > margin) {
        margin = (window.innerWidth - 4100);
    }
    document.querySelector('.servicos-list').style.marginLeft = margin + 'px';
    }else {
        margin = margin - 430;
        if(margin < (-3870)){
            margin = (-3870);
        }
        
        if(window.innerWidth - 3870 > margin) {
            margin = (window.innerWidth - 4100);
        }
        document.querySelector('.servicos-list').style.marginLeft = margin + 'px';
    }
    
});


document.querySelector('.advogado-seta-left .material-symbols-outlined').addEventListener('click', () => {

    marginAdvogado = marginAdvogado + 80;
    if(marginAdvogado > 0){
        marginAdvogado = 0;
    }

    document.querySelector('.advogado-list').style.marginLeft = marginAdvogado + 'vw';
});

document.querySelector('.advogado-seta-right  .material-symbols-outlined').addEventListener('click', () => {
    marginAdvogado = marginAdvogado - 80;
    if(marginAdvogado < (-240)){
        marginAdvogado = (-240);
    }
    document.querySelector('.advogado-list').style.marginLeft = marginAdvogado + 'vw';
});







document.querySelector('.advogado-seta-left-responsivo .material-symbols-outlined').addEventListener('click', () => {

    marginAdvogado = marginAdvogado + 100;
    if(marginAdvogado > 0){
        marginAdvogado = 0;
    }

    document.querySelector('.advogado-list').style.marginLeft = marginAdvogado + 'vw';
});

document.querySelector('.advogado-seta-right-responsivo  .material-symbols-outlined').addEventListener('click', () => {
    marginAdvogado = marginAdvogado - 100;
    if(marginAdvogado < (-300)){
        marginAdvogado = (-300);
    }
    document.querySelector('.advogado-list').style.marginLeft = marginAdvogado + 'vw';
});




document.querySelector('.depoimentos-seta-left .material-symbols-outlined').addEventListener('click', () => {

    marginDepoimentos = marginDepoimentos+ 80;
    if(marginDepoimentos > 0){
        marginDepoimentos = 0;
    }

    document.querySelector('.depoimentos-list').style.marginLeft = marginDepoimentos + 'vw';
});

document.querySelector('.depoimentos-seta-right  .material-symbols-outlined').addEventListener('click', () => {
    marginDepoimentos = marginDepoimentos - 80;
    if(marginDepoimentos < (-80)){
        marginDepoimentos = (-80);
    }
    document.querySelector('.depoimentos-list').style.marginLeft = marginDepoimentos + 'vw';
});


window.addEventListener('scroll', () => {

    monitorar();


})


function monitorar(){
    if(window.innerWidth > 1100){
        if(window.scrollY > 100){
            document.querySelector('header').style.position = 'fixed';
            document.querySelector('header').style.left =  0;
            document.querySelector('header').style.top =  0;
            document.querySelector('header').style.right =  0;
            document.querySelector('header').style.zIndex =  100;
            
        }else {
            document.querySelector('header').style.position = 'relative';
           
        }
    }
    
};

window.sr = ScrollReveal({reset: true});

ScrollReveal().reveal('.informacoes-caixa', {
    delay: 300,
    rotate:{
        x:100,
        y:0,
        z:0
    }
})
ScrollReveal().reveal('.quem-somos-brasao', {
    delay: 400,
    rotate:{
        x:100,
        y:0,
        z:0
    }
})
ScrollReveal().reveal('.quem-somos-textos', {
    delay: 400,
    rotate:{
        x:0,
        y:100,
        z:0
    }
})
ScrollReveal().reveal('.inicio-img', {
    delay: 400,
    rotate:{
        x:0,
        y:100,
        z:0
    }
})
ScrollReveal().reveal('.inicio-textos h1', {
    delay: 400,
    rotate:{
        x:0,
        y:100,
        z:0
    }
})
ScrollReveal().reveal('.inicio-textos a', {
    delay: 400,
    rotate:{
        x:0,
        y:100,
        z:0
    }
})
ScrollReveal().reveal('.servicos-titulo', {
    delay: 400,
    rotate:{
        x:100,
        y:0,
        z:0
    }
})
ScrollReveal().reveal('.advogado-titulo h1', {
    delay: 400,
    rotate:{
        x:0,
        y:100,
        z:0
    }
})

const menuItens = document.querySelectorAll('.header-menu a[href^="#"]'); //pega todos a

menuItens.forEach(item => {
    item.addEventListener('click', scrollToIdOnClick); //coloca um evento de click para cada a
})

function scrollToIdOnClick(event) { //esse event e passado cada a cada vez que e clicado, addeventlistener
    event.preventDefault();
    const element = event.target; // o event vem com varios atributos, o target pega so a tag "a"
    const id = element.getAttribute('href'); //pega so atributo href dentro do element
    const to = document.querySelector(id).offsetTop; //esse offsettop pega o top da section

    window.scroll({
        top: to - 100,
        behavior: "smooth",
    })
}

document.querySelector('.advogado-seta-right').addEventListener('click', function() {
    const list = document.querySelector('.advogado-list');
    list.scrollBy({ left: 300, behavior: 'smooth' });
});

document.querySelector('.advogado-seta-left').addEventListener('click', function() {
    const list = document.querySelector('.advogado-list');
    list.scrollBy({ left: -300, behavior: 'smooth' });
});
