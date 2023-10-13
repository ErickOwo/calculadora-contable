import { useRef } from 'react'
import { motion } from 'framer-motion'
import InputsDescuentoSimple from '@components/Inputs-Descuento-Simple'
import InputsTiempoDescuento from '@components/Inputs-Tiempo-Descuento'
import InputsValorVencimiento from '@components/Inputs-Valor-Vencimiento'
import InputsTasaDescuento from '@components/Inputs-Tasa-Descuento'

import { calcularDescuento, calcularTasaDescuento, calcularValorVencimiento, calcularTiempoDescuento } from '@utils/calculadora-descuento-simple'

function FormDescuentoSimple ({animation, displayForm, closeModal, action, setResult, openModal2}){
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
      desc: formData.get('desc'),
      monto: formData.get('monto'),
      tasa: formData.get('tasa'),
      tiempo: formData.get('tiempo'),
    }

    if(action == 'descuentoSimple'){
      const resDescuentoSimple = calcularDescuento(data.monto, data.tiempo, data.tasa) 
      setResult(resDescuentoSimple)
    } else if (action == 'calcularValorVencimiento'){
      const resValorVencimiento = calcularValorVencimiento(data.desc, data.tasa, data.tiempo)
      setResult(resValorVencimiento)
    } else if (action == 'calcularTasaDescuento'){ 
      const tasa = calcularTasaDescuento(data.desc, data.monto, data.tiempo)
      setResult(tasa)
    } else {
      const tiempo = calcularTiempoDescuento(data.desc, data.monto, data.tasa)
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
              className='flex flex-col bg-white p-2 md:px-4 md:min-w-[290px]'
              variants={variableModal}
              animate={animation ? 'visible' : 'hidden'}
              initial='hidden'
                >
              <h1 className='mb-2'>
                {
                  action == "descuentoSimple" ? "Calcularemos el Descuento Simple" :
                  action == "calcularValorVencimiento" ? "Calcularemos el Valor de Vencimiento" :
                  action == "calcularTasaDescuento" ? "Calcularemos la Tasa de Descuento" :
                  "Calcularemos el Tiempo Descuento"
                }
              </h1>
              <div className='flex flex-col gap-2'>
                {
                  action == "descuentoSimple" 
                    ? <InputsDescuentoSimple /> :
                  action == "calcularValorVencimiento"
                    ? <InputsValorVencimiento /> :
                  action == "calcularTasaDescuento" 
                  ? <InputsTasaDescuento/> :
                  <InputsTiempoDescuento/>
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

export default FormDescuentoSimple