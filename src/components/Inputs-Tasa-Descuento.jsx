import React from 'react'

const InputsTasaDescuento = () => {
  return (
    <>
      <label htmlFor='monto'>Valor de vencimiento: Q. </label>
      <input required min={0} step="0.01" id='monto' name='monto' className='bg-slate-200 px-2 py-1' type='number' placeholder='ingrese valor de vencimiento' />
      <label htmlFor='desc'>Descuento Bancario: Q. </label>
      <input required min={0} step="0.01" id='desc' name='desc' className='bg-slate-200 px-2 py-1' type='number' placeholder='ingrese descuento bancario' />
      <label htmlFor='tiempo'>Tiempo en años:</label>
      <input required min={0} step="0.01" id='tiempo' name='tiempo' className='bg-slate-200 px-2 py-1' type='number' placeholder='años' />
      
    </>
  )
}

export default InputsTasaDescuento