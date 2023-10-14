const calcularPrimerCaso = (R, i, n)=>{
  let S = R * (((1+(i/100))**n -1) /(i/100))
  return S.toFixed(2)
}
const calcularSegundoCaso = (R, j, n, m)=>{
  let S = R * (((1+(j/100/m))**(n*m) -1) / (((1+(j/100/m))**m) - 1))
  return S.toFixed(2)
}
const calcularTercerCaso = (R, i, n, p)=>{
  let S = R * (((1+(i/100))**n -1) /((1+(i/100)**(1/p))-1))
  return S.toFixed(2)
}
const calcularCuartoCaso = (R, j, n, m, p)=>{
  let S = R * (((1+(j/100/m))**(n*m) -1) / (((1+(j/100/m))**(m/p)) - 1))
  return S.toFixed(2)
}

export {
  calcularPrimerCaso,
  calcularSegundoCaso,
  calcularTercerCaso,
  calcularCuartoCaso
}