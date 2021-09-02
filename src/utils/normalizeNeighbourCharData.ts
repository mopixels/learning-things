import { CharacterProps } from 'types/types'

export const normalizeNeighbourCharData = (
  characterData: CharacterProps | CharacterProps[]
) => (!Array.isArray(characterData) ? [characterData] : characterData)
