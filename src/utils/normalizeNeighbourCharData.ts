import { CharacterProps } from 'types/types'

export const normalizeNeighbourCharData = (
  characterData: CharacterProps | CharacterProps[]
) => {
  if (!Array.isArray(characterData)) {
    return [characterData]
  }
  return characterData
}
