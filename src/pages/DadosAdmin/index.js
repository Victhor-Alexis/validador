import React, { useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import Button from '../../components/Button';
import './styles.css'

const DadosAdmin = () => {
  const { state } = useLocation();
  const { name, cpf, igreja } = state;
  const [ status, setStatus ] = useState(["aguardando pagamento...", "#a8a620"]);
  let navigate = useNavigate();

  return (
    <>
      <div className='container_dados'>
        <h2>Dados do usuário inscrito</h2>
        <p><span>Nome: </span>{name}</p>
        <p><span>CPF: </span>{cpf}</p>
        <p><span>Igreja: </span>{igreja}</p>
        <p>Outros dados</p>
        <p onClick={() => navigate('/dados', { state: { name: name, cpf: cpf, igreja: igreja } })}>Outros dados</p>
        <p style={{color: status[1]}} >Status: {status[0]}</p>
      </div>

      <Button action={() => setStatus(["pagamento realizado", "#355E3B"])} >Aprovar pagamento</Button>
    </>
  )
}

export default DadosAdmin