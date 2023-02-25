import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './styles.css'

const Home = () => {
  let navigate = useNavigate();

  const [name, setName] = useState("");
  const [cpf, setCpf] = useState("");
  const [igreja, setIgreja] = useState("");

  return (
    <div className='container'>
      <h2>Inscrição online, por que não?</h2>
      <div className='central_block'>
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder='nome...'/>
        <input type="text" value={cpf} onChange={(e) => setCpf(e.target.value)} placeholder='cpf...'/>
        <input type="text" value={igreja} onChange={(e) => setIgreja(e.target.value)} placeholder='igreja...'/>
        <input type="text" placeholder='outro campo...'/>
        <input type="text" placeholder='outro campo...'/>
        
        <input onClick={() => navigate('/dadosAdmin', { state: { name: name, cpf: cpf, igreja: igreja } })} type="submit" value="Inscrever-se"/>
      </div>
    </div>
  )
}

export default Home