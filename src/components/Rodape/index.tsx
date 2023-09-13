import React from 'react'
import { useListaParticipantes } from '../../state/hooks/useListaParticipantes'
import { useNavigate } from 'react-router-dom'
import './estilos.css'
import { useSorteador } from '../../state/hooks/useSorteador'

const Rodape = () => {

  const participantes = useListaParticipantes()
  const navegarPara = useNavigate()
  const sortear = useSorteador()

  const iniciar = () => {
    sortear()
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