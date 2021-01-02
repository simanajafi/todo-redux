import * as actions from '../redux/actions/todo'

describe('actions', () => {
  it('should create an action to add a todo', () => {
    const text = {
        id: 1,
        text: 'Eat breakfast',
        edit: false,
      }
    const expectedAction = {
      type: 'AddTodo',
      payload: {
        id: 1,
        text: 'Eat breakfast',
        edit: false,
      }
    }
    expect(actions.addTodo(text)).toEqual(expectedAction)
  })
})