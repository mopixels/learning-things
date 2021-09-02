import React, { useEffect } from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { useQuery } from 'react-query'
import NeighbourResidents from '../components/NeighbourResidents'
import { fetchSelectedCharacter } from 'utils/api'
import { RootStateOrAny, useSelector } from 'react-redux'
import { LoadingMessage } from 'components/LoadingMessage'
import { ErrorMessage } from 'components/ErrorMessage'

const Section = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin: 64px;
`

const StyledLink = styled(Link)`
  margin-top: 32px;
`

const CharacterPage: React.FC = () => {
  const selectedCharId = useSelector(
    (state: RootStateOrAny) => state.SelectedCharId
  )
  const id: string = selectedCharId || sessionStorage.getItem('id')!

  const { data, isError, isLoading, isFetched } = useQuery(
    ['characters', id],
    () => fetchSelectedCharacter(id)
  )

  useEffect(() => {
    sessionStorage.setItem('id', id)
    return () => {
      sessionStorage.clear()
    }
  }, [id])

  const currentCharacterGender =
    data?.gender === 'Male' ? 'He' : data?.gender === 'Female' ? 'She' : 'It'

  return (
    <>
      {isError && <ErrorMessage />}
      {isLoading && <LoadingMessage />}
      {isFetched && (
        <Section>
          <StyledLink to="/">Homepage &rarr;</StyledLink>
          <h1>Well hello there, this is {data.name}'s profile !</h1>
          <img src={data.image} alt="Character" />
          <p>
            {data.name} is from {data.origin.name}
          </p>
          <p>
            {currentCharacterGender} is {data.species} and currently{' '}
            {data.status}
          </p>
          <p>Other {data.location.name} residents are:</p>
          <NeighbourResidents locationUrl={data.location.url} />
        </Section>
      )}
    </>
  )
}

export default CharacterPage
