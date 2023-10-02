import React from 'react'
import { motion } from 'framer-motion'

const ModalRespuesta = ({displayRespuesta, animationModal2, result , closeModal2, action}) => {
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
        duration: 1
      }
    }
  }
  
  return (
    <>
      {
        displayRespuesta ? (
        <motion.div 
          className='w-screen h-screen fixed left-0 top-0 flex justify-center items-center bg-white/40 z-20'
          variants={variableOverlay}
          initial={
            {opacity: 0}
          }
          animate={animationModal2 ? 'visible' : 'hidden'}
            >
            <motion.div
              className='flex flex-col bg-slate-900 p-2 md:px-4 text-white w-full md:w-[300px]'
              variants={variableModal}
              animate={animationModal2 ? 'visible' : 'hidden'}
              initial='hidden'
                >
              <h3 className='text-xl'>{
                action == 'interesSimple' ? 'El Interes ganado o adeudado es de:' : 
                action == 'calcularCapital' ? 'El Capital es de:' : 
                action == 'calcularTasa' ? 'La Tasa de Interes Anual es de:' : 
                action == 'calcularTiempo' ? 'El Tiempo transcurrido es de:' : ''
              }</h3>
              <p className='text-2xl text-center mt-2 mb-4'>{
                action == 'calcularTasa' ? `% ${result}` 
                : action == 'calcularTiempo' ? `${result} años` 
                :`Q. ${result}` 
              }</p>
              <button className='bg-red-600 text-white py-2 px-1' onClick={closeModal2}>Cerrar</button>
            </motion.div>
        </motion.div>): null
      }
    </>
  )
}

export default ModalRespuesta