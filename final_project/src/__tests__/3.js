import { render, unmountComponentAtNode } from "react-dom";
import { act } from 'react-dom/test-utils'
import configureStore from 'redux-mock-store'
import Todo from './../components/todo'
import { Provider } from 'react-redux';
import * as actions from '../redux/actions/todo'

const middlewares = []
const mockStore = configureStore(middlewares)

let container = null;
beforeEach(() => {
  container = document.createElement("div");
  document.body.appendChild(container);
});

afterEach(() => {
  unmountComponentAtNode(container);
  container.remove();
  container = null;
});

test('Todo testing', async () => {

    const fakeTodo = {
        id: 1,
        text: 'Eat breakfast',
        edit: false,
    }
  
    const initialState = {todos:[fakeTodo], todo:''}
    const store = mockStore(initialState)

    await act(async () => {
      render(<Provider store={store}><Todo /></Provider>, container)
    })
    
    expect(container.querySelector("h4").textContent).toBe('Todos List')
    // expect(container.textContent).toBe(fakeTodo.text)
  })