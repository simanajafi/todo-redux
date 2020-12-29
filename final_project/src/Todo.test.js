import Todo from './components/todo'
import userEvent from '@testing-library/user-event';
import { render } from '@testing-library/react';

test('Todo testing click', ()  => {
    const {getByText, getByTestId} = render(<Todo />)

    // userEvent.type(getByTestId('inputText'), 'exercise');
    // const button = getByTestId('addButton')
    // button.click();
    // expect(getByText(/exercise/i)).toBeInTheDocument();

    const span = getByTestId('span')
    expect(span.textContent).toBe('Add Todo:')

})