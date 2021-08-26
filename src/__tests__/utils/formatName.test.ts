import { formatName } from '../../utils/formatName'

const nameMock = 'The rIcKy Rick'

describe('formatName', () => {
  it('should replace spaces with dash and convert letters to lower case', () => {
    const result = formatName(nameMock)
    expect(result).toBe('the-ricky-rick')
  })
})
