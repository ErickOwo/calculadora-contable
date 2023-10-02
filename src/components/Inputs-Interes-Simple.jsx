import React from 'react'

const InputsInteresSimple = () => {
  return (
    <>
      <label htmlFor='capital'>Monto de Capital: Q. </label>
      <input required id='capital' name='capital' className='bg-slate-200 px-2 py-1' type='number' placeholder='capital' />
      <label htmlFor='tasa'>Tasa de interese anual: %</label>
      <input required id='tasa' name='tasa' className='bg-slate-200 px-2 py-1' type='number' placeholder='tasa de interes' />
      <label htmlFor='tiempo'>Tiempo en años:</label>
      <input required id='tiempo' name='tiempo' className='bg-slate-200 px-2 py-1' type='number' placeholder='años' />
      
    </>
  )
}

export default InputsInteresSimple