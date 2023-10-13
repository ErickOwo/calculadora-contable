import {useState} from 'react'
import FormDesc from '@containers/Form-Descuento-Simple'
import ModalRespuesta from '@containers/Modal-Respuesta-Descuento'

const DescuentoSimple = () => {
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
        <h3 className='mb-4 font-semibold text-2xl'>Descuento Bancario</h3>
        <div className='flex flex-col gap-2'>
         <button className='bg-blue-600 text-white py-2 px-1' onClick={()=>{
            openModal()
            setAction('descuentoSimple')
         }}>Calcular Descuento Bancario</button>
         <button className='bg-yellow-600 text-white py-2 px-1'
         onClick={()=>{
            openModal()
            setAction('calcularValorVencimiento')
         }}>Calcular Valor de Vencimiento</button>
         <button className='bg-sky-600 text-white py-2 px-1'
         onClick={()=>{
            openModal()
            setAction('calcularTasaDescuento')
         }}>Calcular Tasa de Descuento</button>
         <button className='bg-green-600 text-white py-2 px-1'onClick={()=>{
            openModal()
            setAction('calcularTiempoDescuento')
         }}>Calcular Tiempo</button>
        </div>
      </div>
      <FormDesc 
        animation={animation}
        displayForm={displayForm}
        closeModal={closeModal}
        action={action}
        setResult={setResult}
        openModal2={openModal2} />
      <ModalRespuesta 
        animationModal2={animationModal2}
        displayRespuesta={displayRespuesta}
        result={result}
        closeModal2={closeModal2}
        action={action}
      />
    </div>
  )
}

export default DescuentoSimple