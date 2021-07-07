import { render } from '@testing-library/react';
import App from '../App';

test('rExpect App to be true', () => {
  let wrapper = render(<App />);
  expect(wrapper).toBeTruthy();
});
