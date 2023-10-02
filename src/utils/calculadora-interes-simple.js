const calcularInteresSimple = (P, r, t)=> {
  let res = P * (r/100) * t
  return res.toFixed(2)
}
  
const calcularCapital = (I, r, t)=> {
  let res = I / ((r/100) * t)
  return res.toFixed(2)
}

const calcularTasaInteres = (I, P, t)=> {
  let res = I / (P * t) * 100
  return res.toFixed(2)
}

const calcularTiempo = (I, P, r)=> {
  let res = I / (P * (r/100))
  return res.toFixed(2)
} 

export {
  calcularInteresSimple,
  calcularCapital,
  calcularTasaInteres,
  calcularTiempo
}