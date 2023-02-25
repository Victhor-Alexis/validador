import React, { useState } from 'react'
import { useLocation } from 'react-router-dom'
import Qrcode from '../../components/Qrcode';
import './styles.css'

const Convite = () => {
  const { state } = useLocation();
  const { name, cpf, igreja } = state;
  const [ status, setStatus ] = useState(["aguardando pagamento...", "#a8a620"]);

  return (
    <div className='body'>
      <Qrcode text={name}/>
    </div>
  )
}

export default Convite