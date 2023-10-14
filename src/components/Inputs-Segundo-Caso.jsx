import React from 'react'

const InputsPrimerCaso = () => {
  return (
    <>
      <label htmlFor='renta'>Ingresa la Renta de la anualidad: Q. </label>
      <input required id='renta' name='renta' className='bg-slate-200 px-2 py-1' type='number' placeholder='renta anual' min={0} step="0.01" />
      <label htmlFor='tasa'>Tasa de interes nominal: %</label>
      <input required min={0} step="0.01" id='tasa' name='tasa' className='bg-slate-200 px-2 py-1' type='number' placeholder='tasa de interes nominal' />
      <label htmlFor='n'>Ingrese el Tiempo:</label>
      <input required min={0} step="0.01" id='n' name='n' className='bg-slate-200 px-2 py-1' type='number' placeholder='tiempo' />
      <label htmlFor='m'>Frecuencia:</label>
      <input required min={0} step="0.01" id='m' name='m' className='bg-slate-200 px-2 py-1' type='number' placeholder='frecuencia' />
      
    </>
  )
}

export default InputsPrimerCaso