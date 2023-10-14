import React from 'react'

const InputsTercerCaso = () => {
  return (
    <>
      <label htmlFor='renta'>Ingresa la Renta de la anualidad: Q. </label>
      <input required id='renta' name='renta' className='bg-slate-200 px-2 py-1' type='number' placeholder='renta anual' min={0} step="0.01" />
      <label htmlFor='tasa'>Tasa de interes anual: %</label>
      <input required min={0} step="0.01" id='tasa' name='tasa' className='bg-slate-200 px-2 py-1' type='number' placeholder='tasa de interes' />
      <label htmlFor='n'>Numero de capitalización:</label>
      <input required min={0} step="0.01" id='n' name='n' className='bg-slate-200 px-2 py-1' type='number' placeholder='número de capitalización' />
      <label htmlFor='p'>Ingrese número de pagos realizados o a realizar:</label>
      <input required min={0} step="0.01" id='p' name='p' className='bg-slate-200 px-2 py-1' type='number' placeholder='número de pagos' />
      
      
    </>
  )
}

export default InputsTercerCaso