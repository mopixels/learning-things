import { normalizeNeighbourCharData } from '../../utils/normalizeNeighbourCharData'

// Move mock data to different folders
const BeeboChar = {
  id: '33',
  name: 'Beebo',
  status: 'Dead',
  species: 'Alien',
  type: '',
  gender: 'Male',
  origin: {
    name: 'Venzenulon 7',
    url: 'https://rickandmortyapi.com/api/location/10'
  },
  location: {
    name: 'Venzenulon 7',
    url: 'https://rickandmortyapi.com/api/location/10'
  },
  image: 'https://rickandmortyapi.com/api/character/avatar/33.jpeg',
  episode: ['https://rickandmortyapi.com/api/episode/29'],
  url: 'https://rickandmortyapi.com/api/character/33',
  created: '2017-11-05T09:21:55.595Z'
}

const arrayOfCharacters = [
  {
    id: '1',
    name: 'Rick Sanchez',
    status: 'Alive',
    species: 'Human',
    type: '',
    gender: 'Male',
    origin: {
      name: 'Earth (C-137)',
      url: 'https://rickandmortyapi.com/api/location/1'
    },
    location: {
      name: 'Earth (Replacement Dimension)',
      url: 'https://rickandmortyapi.com/api/location/20'
    },
    image: 'https://rickandmortyapi.com/api/character/avatar/1.jpeg',
    episode: [
      'https://rickandmortyapi.com/api/episode/1',
      'https://rickandmortyapi.com/api/episode/2'
    ],
    url: 'https://rickandmortyapi.com/api/character/1',
    created: '2017-11-04T18:48:46.250Z'
  },
  {
    id: '2',
    name: 'Morty Smith',
    status: 'Alive',
    species: 'Human',
    type: '',
    gender: 'Male',
    origin: {
      name: 'Earth (C-137)',
      url: 'https://rickandmortyapi.com/api/location/1'
    },
    location: {
      name: 'Earth (Replacement Dimension)',
      url: 'https://rickandmortyapi.com/api/location/20'
    },
    image: 'https://rickandmortyapi.com/api/character/avatar/2.jpeg',
    episode: [
      'https://rickandmortyapi.com/api/episode/1',
      'https://rickandmortyapi.com/api/episode/2',
      'https://rickandmortyapi.com/api/episode/3'
    ],
    url: 'https://rickandmortyapi.com/api/character/2',
    created: '2017-11-04T18:50:21.651Z'
  }
]

describe('formatResidentsData', () => {
  it('should add object to array', () => {
    const result = normalizeNeighbourCharData(BeeboChar)
    expect(result).toStrictEqual([BeeboChar])
  })

  it('should return unchanged array of char objects', () => {
    const result = normalizeNeighbourCharData(arrayOfCharacters)
    expect(result).toStrictEqual(arrayOfCharacters)
  })
})
