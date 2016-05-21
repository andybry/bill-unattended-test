import * as format from '../../../src/utilities/format'
import expect from 'expect'

describe('src/utilities/format', () => {
  describe('price', () => {
    it('returns a number with 2 decimal places', () => {
      expect(format.price(71.4)).toBe('71.40')
    })
  })
})
