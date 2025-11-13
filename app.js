function saudacao(){
const nome = "aluno";
const data = new Date().toLocaleString("pt-BR");
console.log(`ola, ${nome}`)
console.log(`Este script está rodando dentro de um container Docker`);
console.log(`Horario da execução: ${data}`);
}

saudacao();