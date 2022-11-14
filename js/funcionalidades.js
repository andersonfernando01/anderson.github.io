
function educacao() {    
    linha = document.createElement('div');
    circulo = document.createElement('div');
    h3= document.createElement('h3');
    h3.innerHTML='Cursando';
    conteudo = document.createElement('div')
    conteudo.classList.add('conteudo')
    ist= document.createElement('p')
    curso= document.createElement('p')
    ano = document.createElement('p')
    ist.innerText="Instituto Superior Policténico Indepedente (ISPI)"
    curso.innerText="Curso: Engenharia Informática (EI)"
    ano.innerText="4ªAno"
    linha.classList.add('linha');   
    circulo.classList.add('circulo');
    
    


    circulo.append(h3)
    linha.append(circulo);
    conteudo.appendChild(ist)
    conteudo.appendChild(curso)
    conteudo.appendChild(ano)
    linha.appendChild(conteudo)
    contentTab.appendChild(linha)

}

function habilidaades() {
    linha1 = document.createElement('div');
    linha1.classList.add('linha');   
    circulo1 = document.createElement('div');
    circulo1.classList.add('circulo');
    tech1 = document.createElement('i')
    tech1.innerText="HTML_CSS_JAVACRIPT";
    conteudo = document.createElement('div')
    conteudo.classList.add('conteudo')
    descricao= document.createElement('p')
    descricao.innerText="Tecnologias Front-End, usadas para desenvolver paginas webs, com conteúdo estruturado, bonito e interativo."
    frameworks= document.createElement('p')
    frameworks.innerText ="FRAMEWORK'S: BOOTSTRAP and soon REACT.JS";

    back = document.createElement('div');
    back.classList.add('linha');   
    circulo2 = document.createElement('div');
    circulo2.classList.add('circulo');
    techBack = document.createElement('i')
    techBack.innerText="NODE.JS_END_PHP";
    conteudo2 = document.createElement('div')
    conteudo2.classList.add('conteudo')
    descricaoBack= document.createElement('p')
    descricaoBack.innerText="Tecnologias BACK-End,usadas para criar aplicações com suporte a banco de dados ."
   
    
    circulo1.appendChild(tech1);
    linha1.append(circulo1);
    conteudo.append(descricao)
    conteudo.append(frameworks)
    linha1.appendChild(conteudo)

    circulo2.append(techBack)
    back.appendChild(circulo2)
    conteudo2.appendChild(descricaoBack)
    back.appendChild(conteudo2)
    
    contentTab.appendChild(linha1)
    contentTab.appendChild(back)


}

function  experiencias() {
    linha1 = document.createElement('div');
    linha1.classList.add('linha');   
    circulo1 = document.createElement('div');
    circulo1.classList.add('circulo');
    tech1 = document.createElement('i')
    tech1.innerText="Projectos_Pessoais";
    conteudo = document.createElement('div')
    conteudo.classList.add('conteudo')
    descricao= document.createElement('p')
    descricao.innerText="Tecnologias Front-End, usadas para desenvolver paginas webs, com conteúdo estruturado, bonito e interativo."
    frameworks= document.createElement('p')
    frameworks.innerText ="FRAMEWORK'S: BOOTSTRAP and soon REACT.JS";

    back = document.createElement('div');
    back.classList.add('linha');   
    circulo2 = document.createElement('div');
    circulo2.classList.add('circulo');
    techBack = document.createElement('i')
    techBack.innerText="Projectos_De_Faculdade";
    conteudo2 = document.createElement('div')
    conteudo2.classList.add('conteudo')
    descricaoBack= document.createElement('p')
    descricaoBack.innerText="Tecnologias BACK-End,usadas para criar aplicações com suporte a banco de dados ."
    circulo2.append(techBack)
    back.appendChild(circulo2)
    conteudo2.appendChild(descricaoBack)
    back.appendChild(conteudo2)
    
*
    circulo1.appendChild(tech1);
    linha1.append(circulo1);
    conteudo.append(descricao)
    conteudo.append(frameworks)
    linha1.appendChild(conteudo)
    
    contentTab.appendChild(linha1)
    contentTab.appendChild(back)

}

var activeItem = document.getElementsByClassName('item')
var contentTab = document.querySelector(".resultados");
for ( i = 5 ; i < activeItem.length; i++){
    activeItem[i].addEventListener('click',function(){
      
    show(this.id);   
    
            
    })
}

function show(value){

    contentTab.classList.add('open')

    if (contentTab.classList.contains('open') && value =="edu") {
        contentTab.innerHTML="";
               educacao();
 
    
    }else if (contentTab.classList.contains('open') && value =="hab") {
        contentTab.innerHTML="";
        habilidaades();
}else if (contentTab.classList.contains('open') && value =="exp") {
        
    contentTab.innerHTML="";
    experiencias();
}

}
