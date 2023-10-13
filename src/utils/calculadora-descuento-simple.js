const calcularDescuento = (S, n, d)=> {
  let res = S * (d/100) * n
  return res.toFixed(2)
}

const calcularValorVencimiento = (Db, d, n)=> {
  let res = Db / ((d/100) * n)
  return res.toFixed(2)
}
  
const calcularTasaDescuento = (Db, S, n)=> {
  let res = Db / (S * n) * 100
  return res.toFixed(2)
}

const calcularTiempoDescuento = (Db, S, d)=> {
  let res = Db / (S * (d/100)) 
  return res.toFixed(2)
}


export {
  calcularDescuento,
  calcularValorVencimiento,
  calcularTasaDescuento,
  calcularTiempoDescuento,
}