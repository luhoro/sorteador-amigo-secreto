import React, { useState } from 'react'
import { useListaParticipantes } from '../../state/hooks/useListaParticipantes'
import { useResultadoSorteio } from '../../state/hooks/useResultadoSorteio'
import './estilos.css'

const Sorteio = () => {
  const participantes = useListaParticipantes()
  const resultado = useResultadoSorteio()

  const [participanteDaVez, setParticipanteDaVez] = useState('')
  const [amigoSecreto, setAmigoSecreto] = useState('')

  const sortear = (evento: React.FormEvent<HTMLFormElement>) => {
    evento.preventDefault()
    if (resultado.has(participanteDaVez)) {
      setAmigoSecreto(resultado.get(participanteDaVez)!)
    }
  }

  return (
    <section className="sorteio">
      <h2>Quem vai tirar o papelzinho?</h2>
      <form onSubmit={sortear}>
        <select
          required
          name="participanteDaVez"
          id="participanteDaVez"
          placeholder="Selecione o seu nome"
          value={participanteDaVez}
          onChange={(evento) => setParticipanteDaVez(evento.target.value)}
        >
          {participantes.map((participante) => (
            <option key={participante}>{participante}</option>
          ))}
        </select>

        <p>Clique em sortear para ver quem é seu amigo secreto!</p>
        <button className="botao-sortear">Sortear</button>
      </form>
      {amigoSecreto && (
        <p className="resultado" role="alert">
          {amigoSecreto}
        </p>
      )}
      <footer className="sorteio">
        <img
          src="/imagens/aviao.png"
          className="aviao"
          alt="Um desenho de um avião de papel"
        />
      </footer>
    </section>
  )
}

export default Sorteio
