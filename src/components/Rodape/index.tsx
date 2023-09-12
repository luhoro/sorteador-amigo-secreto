import React from 'react'
import { useListaParticipantes } from '../../state/hooks/useListaParticipantes'
import { useNavigate } from 'react-router-dom'
import './estilos.css'

const Rodape = () => {

  const participantes = useListaParticipantes()

  const navegarPara = useNavigate()

  const iniciar = () => {
    navegarPara('/sorteio')
  }

  return (
    <footer className="rodape-configuracoes">
      <button
        className="botao"
        disabled={participantes.length < 3}
        onClick={iniciar}
      >
        iniciar brincadeira
      </button>
      <img src="/imagens/sacolas.png" alt="Sacolas de compras" />
    </footer>
  )
}

export default Rodape