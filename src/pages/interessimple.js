import {useState} from 'react'
import FormInt from '@containers/Form-Interes-Simple'
import ModalRespuestaInteres from '@containers/Modal-Respuesta-Interes'
import Link from 'next/link'

const InteresSimple = () => {
  const [animation, setAnimation] = useState(false)
  const [displayForm, setDisplay] = useState(false)
  const [animationModal2, setAnimationModal2] = useState(false)
  const [displayRespuesta, setDisplayRespuesta] = useState(false)
  const [action, setAction] = useState(null)
  const [result, setResult] = useState(null)


  const openModal = () => {
    setAnimation(true)
    setDisplay(true)
  }
  const closeModal = () => {
    setAnimation(false)
    setTimeout(() => {
      setDisplay(false)
    }, 1000);
  }
  const closeModal2 = () => {
    setAnimationModal2(false)
    setTimeout(() => {
      setDisplayRespuesta(false)
    }, 1000);
  }
  const openModal2 = () => {  
    setDisplayRespuesta(true)
    setAnimationModal2(true)
  }

  return (
    <div className='flex flex-col p-2 md:pt-16 items-center '>
      <div className='bg-black/10 p-2 w-full md:w-[300px]'>
        <h3 className='mb-4 font-semibold text-2xl'>Interes Simple</h3>
        <div className='flex flex-col gap-2'>
         <button className='bg-blue-600 text-white py-2 px-1' onClick={()=>{
            openModal()
            setAction('interesSimple')
         }}>Calcular Interes Simple</button>
         <button className='bg-yellow-600 text-white py-2 px-1'
         onClick={()=>{
            openModal()
            setAction('calcularCapital')
         }}>Calcular Capital</button>
         <button className='bg-sky-600 text-white py-2 px-1'
         onClick={()=>{
            openModal()
            setAction('calcularTasa')
         }}>Calcular Tasa de Interes</button>
         <button className='bg-green-600 text-white py-2 px-1'onClick={()=>{
            openModal()
            setAction('calcularTiempo')
         }}>Calcular Tiempo</button>
         <Link href='/'>
          <button className='bg-red-600 text-white py-2 px-1 mt-3 w-full'>Regresar al Menu Principal</button> 
         </Link>
        </div>
      </div>
      <FormInt 
        animation={animation}
        displayForm={displayForm}
        closeModal={closeModal}
        action={action}
        setResult={setResult}
        openModal2={openModal2} />
      <ModalRespuestaInteres 
        animationModal2={animationModal2}
        displayRespuesta={displayRespuesta}
        result={result}
        closeModal2={closeModal2}
        action={action}
      />
    </div>
  )
}

export default InteresSimple