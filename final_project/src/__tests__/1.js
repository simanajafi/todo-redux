import configureStore from 'redux-mock-store'

const middlewares = []
const mockStore = configureStore(middlewares)

const addTodo = () => ({ type: 'AddTodo', payload:{
  id: 1,
  text: 'Eat breakfast',
  edit: false,
} })

it('should dispatch action', () => {

  const initialState = {}
  const store = mockStore(initialState)

  store.dispatch(addTodo())

  const actions = store.getActions()
  const expectedPayload = { type: 'AddTodo', payload:{
    id: 1,
    text: 'Eat breakfast',
    edit: false,
  } }
  expect(actions).toEqual([expectedPayload])
})