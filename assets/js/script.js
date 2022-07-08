let inputAdultos = document.querySelector('#adultos')
let inputCriancas = document.querySelector('#criancas')
let inputDuracao = document.querySelector('#duracao')

let resultado = document.querySelector('#resultado')

function calcular() {
  console.log('calculando...')

  let adultos = inputAdultos.value
  let criancas = inputCriancas.value
  let duracao = inputDuracao.value

  let qtdTotalCarne =
    carnePP(duracao) * adultos + (carnePP(duracao) / 2) * criancas

  let qtdTotalCerveja = cervejaPP(duracao) * adultos

  let qtdTotalBebida =
    bebidasPP(duracao) * adultos + (bebidasPP(duracao) / 2) * criancas

  resultado.innerHTML = `<p>${qtdTotalCarne / 1000} Kg de Carne</p>`
  resultado.innerHTML += `<p>${Math.ceil(
    qtdTotalCerveja / 350
  )} latas de Cerveja</p>`
  resultado.innerHTML += `<p>${Math.ceil(
    qtdTotalBebida / 2000
  )} Pet's 2l de Bebidas</p>`
}

function carnePP(duracao) {
  if (duracao >= 6) {
    return 600
  } else {
    return 350
  }
}

function cervejaPP(duracao) {
  if (duracao >= 6) {
    return 2200
  } else {
    return 1400
  }
}

function bebidasPP(duracao) {
  if (duracao >= 6) {
    return 1000
  } else {
    return 500
  }
}
