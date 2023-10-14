import { useRef } from 'react'
import { motion } from 'framer-motion'
import InputsPrimerCaso from '@components/Inputs-Primer-Caso'
import InputsCuartoCaso from '@components/Inputs-Cuarto-Caso'
import InputsSegundoCaso from '@components/Inputs-Segundo-Caso'
import InputsTercerCaso from '@components/Inputs-Tercer-Caso'

import {calcularPrimerCaso, calcularSegundoCaso, calcularTercerCaso, calcularCuartoCaso} from '@utils/calculadora-anualidades'

function FormAnualidadesVencidas ({animation, displayForm, closeModal, action, setResult, openModal2}){
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
      renta: formData.get('renta'),
      tasa: formData.get('tasa'),
      numeroCap: formData.get('n'),
      frecuencia: formData.get('m'),
      pagos: formData.get('p')
    }

    if(action == 'primercaso'){
      const resCaso1 = calcularPrimerCaso(data.renta, data.tasa, data.numeroCap) 
      setResult(resCaso1)
    } else if (action == 'segundocaso'){
      const resCaso2 = calcularSegundoCaso(data.renta, data.tasa, data.numeroCap, data.frecuencia)
      setResult(resCaso2)
    } else if (action == 'tercercaso'){ 
      const resCaso3 = calcularTercerCaso(data.renta, data.tasa, data.numeroCap, data.pagos) 
      setResult(resCaso3)
    } else {
      const resCuartoCaso = calcularCuartoCaso(data.renta, data.tasa, data.numeroCap, data.frecuencia, data.pagos)
      setResult(resCuartoCaso)
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
              className='flex flex-col bg-white p-2 md:px-4 md:min-w-[290px]'
              variants={variableModal}
              animate={animation ? 'visible' : 'hidden'}
              initial='hidden'
                >
              <h1 className='mb-2'>
                {
                  action == "primercaso" ? "Primer Caso" :
                  action == "segundocaso" ? "Segundo Caso" :
                  action == "tercercaso" ? "Tercer Caso" :
                  "Cuarto Caso"
                }
              </h1>
              <div className='flex flex-col gap-2'>
                {
                  action == "primercaso" 
                    ? <InputsPrimerCaso /> :
                  action == "segundocaso"
                    ? <InputsSegundoCaso /> :
                  action == "tercercaso" 
                  ? <InputsTercerCaso/> :
                  <InputsCuartoCaso/>
                }
                <div className='flex flex-col gap-2 mt-2'>
                  <input 
                    className='bg-green-500 text-white cursor-pointer py-2' value={"Calcular"} type='submit'/>
                  <button 
                    className='bg-black text-white py-2'
                    onClick={e=>{
                      e.preventDefault()
                      closeModal()}} >Cerrar</button>
                </div>
              </div>
            </motion.form>
          </motion.div>) : null
      } 
    </>
  )
}

export default FormAnualidadesVencidas