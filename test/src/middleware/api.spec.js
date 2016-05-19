import api from '../../../src/middleware/api'
import expect from 'expect'
import nock from 'nock'

const setup = (type) => {
  const store = {
    dispatch: expect.createSpy()
  }
  const action = { type }
  const next = () => 'next action'
  return { store, next, action }
}

describe('src/middleware/api', () => {
  before(() => {
    nock('https://still-scrubland-9880.herokuapp.com')
      .get('/bill.json')
      .times(2)
      .reply(200, { key: 'value' })
  })

  it('should return the result of next by default', () => {
    const { store, next, action } = setup('ANY_ACTION')
    expect(api(store)(next)(action)).toEqual('next action')
  })

  it('should return the result of next when location changes', () => {
    const { store, next, action } = setup('@@router/LOCATION_CHANGE')
    expect(api(store)(next)(action)).toEqual('next action')
  })

  it('should dispatch a billResponse action with the API response', (done) => {
    const { store, next, action } = setup('@@router/LOCATION_CHANGE')
    api(store)(next)(action)
    setTimeout(() => {
      expect(store.dispatch).toHaveBeenCalled()
      done()
    }, 5)
  })

  after(() => nock.restore())
})
