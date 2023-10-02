import { useRef } from 'react'
import { motion } from 'framer-motion'
import InputsInteresSimple from '@components/Inputs-Interes-Simple'
import InputsCapital from '@components/Inputs-Capital'
import InputsTasa from '@components/Inputs-Tasa'
import InputsTiempo from '@components/Inputs-Tiempo'
import { calcularInteresSimple, calcularCapital, calcularTasaInteres, calcularTiempo } from '@utils/calculadora-interes-simple'

function FormInteresSimple ({animation, displayForm, closeModal, action, setResult, openModal2}){
  const formRef = useRef()
  const variableOverlay = {
    hidden: { 
      opacity: 0, 
      transition: { duration: 1.3 } 
    },
    visible: {
      opacity: 1,
      transition: {
        delay: 0.5,
        duration: 1.3
      }
    }
  }
  const variableModal = {
    hidden: { 
      y: '-100vh', 
      opacity: 0, 
      transition: { duration: 0.5 } 
    },
    visible: {
      y: '0px',
      opacity: 1,
      transition: {
        delay: 0.5,
        duration: 1.3
      }
    }
  }

  const calcular = e => {
    e.preventDefault()

    const formData = new FormData(formRef.current)
    const data = {
      capital: formData.get('capital'),
      tasa: formData.get('tasa'),
      tiempo: formData.get('tiempo'),
      interes: formData.get('interes'),
    }

    if(action == 'interesSimple'){
      const interes = calcularInteresSimple(data.capital, data.tasa, data.tiempo)
      setResult(interes)
    } else if (action == 'calcularCapital'){
      const capital = calcularCapital(data.interes, data.tasa, data.tiempo)
      setResult(capital)
    } else if (action == 'calcularTasa'){ 
      const tasa = calcularTasaInteres(data.interes, data.capital, data.tiempo)
      setResult(tasa)
    } else {
      const tiempo = calcularTiempo(data.interes, data.capital, data.tasa)
      setResult(tiempo)
    }
    openModal2()
  }
  return (
    <>
      {
        displayForm ? (<motion.div 
          className='w-screen h-screen fixed left-0 top-0 flex justify-center items-center bg-black/40 '
          variants={variableOverlay}
          initial={
            {opacity: 0}
          }
          animate={animation ? 'visible' : 'hidden'}
            >
            <motion.form
              onSubmit={calcular}
              ref={formRef}
              className='flex flex-col bg-white p-2 md:px-4'
              variants={variableModal}
              animate={animation ? 'visible' : 'hidden'}
              initial='hidden'
                >
              <h1 className='mb-2'>Calcularemos el Interes Simple</h1>
              <div className='flex flex-col gap-2'>
                {
                  action == "interesSimple" 
                    ? <InputsInteresSimple /> :
                  action == "calcularCapital" 
                  ? <InputsCapital/> :
                  action == "calcularTasa" 
                  ? <InputsTasa/> : <InputsTiempo/>
                }
                <input 
                  className='bg-green-500 text-white cursor-pointer' value={"Calcular"} type='submit'/>
                <button 
                  className='bg-black text-white'
                  onClick={e=>{
                    e.preventDefault()
                    closeModal()}} >Cerrar</button>
              </div>
            </motion.form>
          </motion.div>) : null
      } 
    </>
  )
}

export default FormInteresSimple