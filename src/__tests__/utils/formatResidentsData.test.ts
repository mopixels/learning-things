import { formatResidentsData } from '../../utils/formatResidentsData'

const neighboursMock1 = ['https://rickandmortyapi.com/api/character/1']

const neighboursMock2 = [
  'https://rickandmortyapi.com/api/character/103',
  'https://rickandmortyapi.com/api/character/107',
  'https://rickandmortyapi.com/api/character/109'
]

const neighboursMock3 = ['https://rickandmortyapi.com/api/character/']

describe('formatResidentsData', () => {
  it('should trim link and return array with one character ids (which is at the end of link)', () => {
    const result = formatResidentsData(neighboursMock1)
    expect(result).toStrictEqual(['1'])
  })

  it('should trim every link in array and return only array character ids', () => {
    const result = formatResidentsData(neighboursMock2)
    expect(result).toStrictEqual(['103', '107', '109'])
  })

  it('should return array with one item which is empty string', () => {
    const result = formatResidentsData(neighboursMock3)
    expect(result).toStrictEqual([''])
  })
})
