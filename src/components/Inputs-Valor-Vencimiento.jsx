import React from 'react'

const InputsValorVencimiento = () => {
  return (
    <>
      <label htmlFor='desc'>Descuento Bancario: Q. </label>
      <input required id='desc' name='desc' className='bg-slate-200 px-2 py-1' type='number' placeholder='ingrese descuento bancario' />
      <label htmlFor='tasa'>Tasa de descuento anual: %</label>
      <input required id='tasa' name='tasa' className='bg-slate-200 px-2 py-1' type='number' placeholder='tasa de descuento' />
      <label htmlFor='tiempo'>Tiempo en años:</label>
      <input required id='tiempo' name='tiempo' className='bg-slate-200 px-2 py-1' type='number' placeholder='años' />
      
    </>
  )
}

export default InputsValorVencimiento