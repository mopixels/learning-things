import { PageProps } from 'types/types'
import { normalizeNeighbourCharData } from './normalizeNeighbourCharData'

export const fetchCharacters = async ({
  pageParam = 1
}): Promise<PageProps> => {
  if (typeof pageParam === 'number') {
    const res = await fetch(
      `https://rickandmortyapi.com/api/character/?page=${pageParam}`
    )
    return res.json()
  } else {
    const res = await fetch(`${pageParam}`)
    return res.json()
  }
}

export const fetchSelectedCharacter = async (id: string): Promise<any> => {
  const res = await fetch(`https://rickandmortyapi.com/api/character/${id}`)
  return res.json()
}

export const fetchCurrentLocationData = async (
  location: string
): Promise<{ residents: string[] }> => {
  const res = await fetch(`${location}`)
  return res.json()
}

export const fetchNeighbourCharacters = async (
  urlWithCharacterList: string | string[]
): Promise<any> => {
  const res = await fetch(
    `https://rickandmortyapi.com/api/character/${urlWithCharacterList?.toString()}`
  )
  const data = await res.json()
  return normalizeNeighbourCharData(data)
}
