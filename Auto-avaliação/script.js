let nomes = ['Danilo','Mariana','Tadeu','Julia','Bruno','Istifeu','Adriano','Paulino','Kevin'];
let idades = [17,17,17,16,39,17,29,32,17];
let formacaos = [null,null,null,null,'Professor de E.F',null,'Const. Civil','Maridão bão',null];

function alunos(aluno,idade,formacao){
    this.aluno = aluno;
    this.idade = idade;
    this.formacao = formacao;
}

for(let i = 0;i < nomes.length;i++){
    alunos()
    let alunoz = this.aluno = nomes[i];
    let idadez = this.idade = idades[i];
    let formacaoz = this.formacao = formacaos[i];

    if(formacaoz == null){
        console.log(`${alunoz} tem ${idadez} anos e é um vagabundo(a), que no máximo estuda.`);
    }
    else{
        console.log(`${alunoz} tem ${idadez} anos e tem formação, ou trabalha em: ${formacaoz}`);
    }
}

/* 
Auto Avaliação

A minha maior dificuldade foi de lembrar de como se criava um constructor, além de demorar de o que era um template, já ia procurar na documentação, porém, por sorte lembrei de última hora.

*/