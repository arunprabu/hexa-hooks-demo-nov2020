import React from 'react'; // needed
import ReactDOM from 'react-dom'; //needed
import Team from './Team'; // Load the comp for testing
import { render, cleanup } from '@testing-library/react'; // from react testing lib 

// group of related tests
describe('Team Component', ()=>{
  // 'it' and 'test' are same - 'it' is an alias of 'test'
  it('renders the team comp properly inside a div', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Team />, div);
  });
  
  it('should have input with placeholder text Enter Name', () => {
    const {queryByPlaceholderText} = render(<Team/>);
    // expecting the placeholder -- Enter Name is in the Team comp 
    expect(queryByPlaceholderText('Enter Name')).toBeTruthy();
  });

  it('should have Hello Team text', () => {
    const { getByText } = render(<Team/>);
    const textEl = getByText('Hello Team');
    expect(textEl).toBeInTheDocument();
  });
})

