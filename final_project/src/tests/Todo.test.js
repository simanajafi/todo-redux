import Todo from '../components/todo';
import configureMockStore from "redux-mock-store";
// import promiseMiddleware from "redux-promise-middleware";
import thunk from "redux-thunk";
import App from '../components/App';

const mockStore = configureMockStore([thunk]);

const mockServiceCreator = (body, succeeds = true) => () =>
new Promise((resolve, reject) => {
  setTimeout(() => (succeeds ? resolve(body) : reject(body)), 10);
});

// describe("Actions", () => {


// });
let store;

beforeEach(() => {
  store = mockStore({ todos: [], todo: '' });
})
let wrapped;
beforeEach(() => {
  wrapped = mount(
    <Provider store={store}>
      {/* <App> */}
        <Todo />
      {/* </App> */}
    </Provider>
  )
})
// afterEach(() => {
//   wrapped.unmount(); // it cleans the mount after test.
// });



// describe('when a user logs in', () => {
//   it('fires a login request action', () =>
//     store
//       .dispatch(login(
//         { username: 'user', password: 'pass' },
//         mockServiceCreator(REQUIRED_BODY),
//       ))
//       .then(() => expect(store.getActions()).toContainEqual({ type: LOGIN_REQUEST })));

describe(`This is todo component`, () => {
  it(``, () => {
    expect(wrapped.find(`span`).text()).toEqual(`Add Todo:`);
  });
})

  


    
// test('Todo testing click', ()  => {

//     // const {getByText, getByTestId} = render(<Todo todos={mockData} todo={''} />)

//     // userEvent.type(getByTestId('inputText'), 'exercise');
//     // const button = getByTestId('addButton')
//     // button.click();
//     // expect(getByText(/exercise/i)).toBeInTheDocument();

//     const span = getByTestId('span')
//     expect(span.textContent).toBe('Add Todo:')

// })
  