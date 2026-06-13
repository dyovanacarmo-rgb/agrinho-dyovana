const dicas = [
    "O nosso agir na natureza nos trás consequências no futuro. ⏳🌴🌳🏙️",
    "Não disperdice água. Água é vida 💧💧🚰",
    "Invista em energia limpa. Como a energia solar. ☀️☀️☀️",
    "Na Agricultura, pratique a agrofloresta. 🌳🌳🌳",
    "Opte por meios de transporte que não causem poluição: bicicleta, patinete, skate, roller e patins. 🚴🛹🛴⛸️",
    "Faça uso de pilhas e baterias recarregáveis. 🔋🔃",
    "Descarte lixo em lugares adequados. 🚯"
];

function mostrarDicaAleatoria() {
    const indice = Math.floor(Math.random() * dicas.length);
    document.getElementById('mensagemDica').innerText = dicas[indice];
}
document.addEventListener('DOMContentLoaded', function () {
    const botao = document.getElementById('btnDica');
    if (botao) botao.addEventListener('click', mostrarDicaAleatoria);
});