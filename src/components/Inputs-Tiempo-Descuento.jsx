import React from 'react'

const InputsTiempoDescuento = () => {
  return (
    <>
      <label htmlFor='monto'>Valor de vencimiento: Q. </label>
      <input required id='monto' name='monto' className='bg-slate-200 px-2 py-1' type='number' placeholder='ingrese valor de vencimiento' />
      <label htmlFor='tasa'>Tasa de descuento anual: %</label>
      <input required id='tasa' name='tasa' className='bg-slate-200 px-2 py-1' type='number' placeholder='tasa de descuento' />
      <label htmlFor='tiempo'>Tiempo en años:</label>
      <label htmlFor='desc'>Descuento Bancario: Q. </label>
      <input required id='desc' name='desc' className='bg-slate-200 px-2 py-1' type='number' placeholder='ingrese descuento bancario' />
      
    </>
  )
}

export default InputsTiempoDescuento