//Pop-up de boas vindas
alert("Bem-vindo ao Conversor Interstelar");

//Variáveis de conversão
var anosLuzEmKm = 9460800000000;
var anosLuzEmMetros = 9460800000000000;
var nome = prompt("Digite o seu nome: ");
var distanciaParaConverter = prompt("Digite a distância em anos-luz para conversão: ");

//Condicional se é um número válido
if (isNaN(distanciaParaConverter)) {
      alert("Distância inválida! Por favor, digite um valor válido.");
    } else {

var valorEmMetros = (distanciaParaConverter * anosLuzEmMetros).toFixed(2);
var valorEmKm = (distanciaParaConverter * anosLuzEmKm).toFixed(2);

//Alert com os resultados
alert (nome + ", a distância de " + distanciaParaConverter + " anos-luz equivale a " + valorEmKm + " KM");
alert (nome + ", a distância de " + distanciaParaConverter + " anos-luz equivale a " + valorEmMetros + " M");
}