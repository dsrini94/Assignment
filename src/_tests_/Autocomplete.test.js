import { render } from '@testing-library/react';
import { shallow, mount, configure } from 'enzyme';
import Autocomplete from '../components/Autocomplete';
import Adapter from 'enzyme-adapter-react-16';
import mockData from '../utils/db.json';

configure({ adapter: new Adapter() });

test('Expect Autocomplete to be true', () => {
  let wrapper = render(<Autocomplete suggestions={mockData['search']} products={mockData['products']} />);
  expect(wrapper).toBeTruthy();
});

test('Expect Autocomplete to be true', () => {
  let wrapper = mount(<Autocomplete suggestions={mockData['search']} products={mockData['products']} />);
  expect(wrapper.prop('products')).toEqual(mockData['products']);
});

test('Expect Autocomplete to be true', () => {
  let wrapper = mount(<Autocomplete suggestions={mockData['search']} products={mockData['products']} />);
  expect(wrapper.prop('suggestions')).toEqual(mockData['search']);
});

test('Expect Autocomplete to be true', () => {
  let wrapper = shallow(<Autocomplete suggestions={mockData['search']} products={mockData['products']} />);
  wrapper.find('input').simulate('change', { currentTarget: { value: 'Mens Casual Premium Slim Fit T-Shirts ' } });
  expect(wrapper.instance().state.userInput).toEqual('Mens Casual Premium Slim Fit T-Shirts ');
});
