import { useListaParticipantes } from '../../state/hooks/useListaParticipantes'
import './estilos.css'

const ListaParticipantes = () => {
  const participantes: string[] = useListaParticipantes()

  return (
    <ul className='lista'>
      {participantes.map((participante) => (
        <li key={participante}>
          <p>{participante}</p>
        </li>
      ))}
    </ul>
  )
}

export default ListaParticipantes
