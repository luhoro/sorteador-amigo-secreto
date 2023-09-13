import React from 'react'
import { RecoilRoot } from 'recoil'
import Sorteio from '.'
import { fireEvent, render, screen } from '@testing-library/react'
import { useListaParticipantes } from '../../state/hooks/useListaParticipantes'
import { useResultadoSorteio } from '../../state/hooks/useResultadoSorteio'

jest.mock('../../state/hooks/useListaParticipantes', () => {
  return {
    useListaParticipantes: jest.fn()
  }
})

jest.mock('../../state/hooks/useResultadoSorteio', () => {
  return {
    useResultadoSorteio: jest.fn()
  }
})

describe('Na pagina de sorteio', () => {
  const participantes = ['A', 'B', 'C']

  const resultado = new Map([
    ['A', 'B'],
    ['B', 'C'],
    ['C', 'A']
  ])

  beforeEach(() => {
    (useListaParticipantes as jest.Mock).mockReturnValue(participantes);
    (useResultadoSorteio as jest.Mock).mockReturnValue(resultado)
  })

  test('todos os participantes podem exibir o seu amigo secreto', () => {
    render(
      <RecoilRoot>
        <Sorteio />
      </RecoilRoot>
    )

    const opcoes = screen.queryAllByRole('option')
    expect(opcoes).toHaveLength(participantes.length)
  })

  test('o amigo secreto é exibido quando solicitado', () => {
    render(
      <RecoilRoot>
        <Sorteio />
      </RecoilRoot>
    )

    const select = screen.getByPlaceholderText('Selecione o seu nome')
    fireEvent.change(select, {
      target: {
        value: participantes[0]
      }
    })

    const botao = screen.getByRole('button')
    fireEvent.click(botao)

    const amigoSecreto = screen.getByRole('alert')
    expect(amigoSecreto).toBeInTheDocument()
  })
})
