const letreiro = document.querySelector('.letreiro');
const original = letreiro.innerHTML;
const larguraGrupo = letreiro.scrollWidth;

  // quantas cópias cabem para cobrir a tela (mínimo 1)
const n = Math.ceil(window.innerWidth / larguraGrupo);

  // total = 2 * n cópias, assim a metade (-50%) sempre fica exata
letreiro.innerHTML = original.repeat(n * 2);