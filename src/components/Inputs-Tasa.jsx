import React from 'react'

const InputsInteresSimple = () => {
  return (
    <>
      <label htmlFor='capital'>Monto de Capital: Q. </label>
      <input required min={0} step="0.01" id='capital' name='capital' className='bg-slate-200 px-2 py-1' type='number' placeholder='capital' />
      <label htmlFor='interes'>Ingrese el interés ganado o adeudado: Q. </label>
      <input required min={0} step="0.01" id='interes' name='interes' className='bg-slate-200 px-2 py-1' type='number' placeholder='Interes' />
      <label htmlFor='tiempo'>Tiempo en años:</label>
      <input required min={0} step="0.01" id='tiempo' name='tiempo' className='bg-slate-200 px-2 py-1' type='number' placeholder='años' />
      
    </>
  )
}

export default InputsInteresSimple