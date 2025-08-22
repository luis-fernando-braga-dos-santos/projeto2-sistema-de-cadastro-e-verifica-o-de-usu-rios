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
=============seu cadastro==============
login realizado com sucesso!bem vindo
a techSchool

nome do usuario:${nome2}
idade do usuario:${idade}
senha do usuario:${senha2}
        
========================================
        `);
    }else{
        alert("nome ou senha incorretos tente novamente");
    }

}else{

    alert("nao e possivel se cadastrar idade minima 13 anos");}
