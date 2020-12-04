import React from 'react'; // needed
import ReactDOM from 'react-dom'; //needed
import Company from './Company'; // Load the comp for testing
import { render, cleanup } from '@testing-library/react'; // from react testing lib 

afterEach(cleanup); // we can cleanup the tests using after each

// group of related tests -- test cases
describe('Company component', () => {
  it('renders the Company comp properly', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Company/>, div);
  });

  it('should have the right placeholder in input', () => {
    const { queryByPlaceholderText } = render(<Company />);

    //if the placeholder is not matching, it will fail
    expect(queryByPlaceholderText('company')).toBeTruthy();
  });

  //checking whether the comp has right text
  it('should have official webpage text', () => {
    const { getByText } = render(<Company />);
    const linkElement = getByText('Welcome to My Company\'s Official Webpage!');
    expect(linkElement).toBeInTheDocument();
  });
});
