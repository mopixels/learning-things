/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react'
import { useMutation } from 'react-query'
import { useDispatch, RootStateOrAny, useSelector } from 'react-redux'
import { fetchNeighbours, clearNeighbours } from 'redux/actions/actions'
import styled from 'styled-components'
import { CharacterProps } from 'types/types'
import { fetchCurrentLocationData } from 'utils/api'
import { formatResidentsData } from 'utils/formatResidentsData'
import Card from './Card'
import { ErrorMessage } from './ErrorMessage'
import { LoadingMessage } from './LoadingMessage'

const Neighbours = styled.div`
  max-width: 75%;
  display: grid;
  grid-template-columns: repeat(4, minmax(200px, 250px));
  grid-gap: 16px;
`

type NeighboursResidentsProps = {
  locationUrl: string
}

const NeighboursResidents: React.FC<NeighboursResidentsProps> = ({
  locationUrl
}) => {
  const dispatch = useDispatch()

  const { isError, isLoading, isSuccess, mutate } = useMutation(
    () => fetchCurrentLocationData(locationUrl),
    {
      onSuccess: (data, _variables) => {
        const allResidents = formatResidentsData(data.residents)
        dispatch(fetchNeighbours(allResidents))
      }
    }
  )

  const characterList = useSelector((state: RootStateOrAny) => state.Neighbours)

  useEffect(() => {
    mutate()
    return () => {
      dispatch(clearNeighbours())
    }
  }, [])

  return (
    <>
      {isError &&
        (!locationUrl ? (
          <span>Sorry, characters location is unknown</span>
        ) : (
          <ErrorMessage />
        ))}
      {isLoading && <LoadingMessage />}
      {isSuccess && (
        <Neighbours>
          {characterList.map((character: CharacterProps, i: number) => (
            <Card key={character.name + i} character={character} />
          ))}
        </Neighbours>
      )}
    </>
  )
}

export default NeighboursResidents
