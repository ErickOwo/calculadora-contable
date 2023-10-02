import React from 'react'

const InputsCapital = () => {
  return (
    <>
      <label htmlFor='interes'>Ingrese el interés ganado o adeudado: Q. </label>
      <input required id='interes' name='interes' className='bg-slate-200 px-2 py-1' type='number' placeholder='Interes' />
      <label htmlFor='tasa'>Tasa de interese anual: %</label>
      <input required id='tasa' name='tasa' className='bg-slate-200 px-2 py-1' type='number' placeholder='tasa de interes' />
      <label htmlFor='tiempo'>Tiempo en años:</label>
      <input required id='tiempo' name='tiempo' className='bg-slate-200 px-2 py-1' type='number' placeholder='años' />
      
    </>
  )
}

export default InputsCapital