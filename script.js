//criando variaveis
let nome = prompt("digite seu nome")
let idade = prompt("digite sua idade")
let senha = prompt("digite sua senha")

if (idade >=13) {
    alert("cadastro permitido");


//criando login
let nome2 = prompt("digite seu nome novamente")
let senha2 = prompt("confirme sua senha")

if (nome == nome2 && senha == senha2)
    {alert(`
===============seu cadastro===============
login realizado com sucesso!bem vindo
a techSchool

nome do usuario:${nome2}
idade do usuario:${idade}
senha do usuario:${senha2}
        
//caso o usuario erre o nome e a senha
        `);
    }else{
        alert("nome ou senha incorretos tente novamente");
    }
//caso a idade do usuario seja menor que 13 anos
}else{

    alert(`   
==================seu cadastro==================
nome de usuario:${nome} 
idade de usuario:${idade}
senha de usuario:${senha}
         
voce nao pode se cadastrar idade minima 13 anos!         
        ` );}



