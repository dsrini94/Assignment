import { render } from '@testing-library/react';
import { shallow, mount, configure } from 'enzyme';
import ImageComponent from '../components/ImageComponet/index.js';
import mockData from '../utils/db.json';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

test('Expect ImageComponent to be true', () => {
  let wrapper = render(<ImageComponent products={mockData['products']} productId={3} />);
  expect(wrapper).toBeTruthy();
});

test('Expect ImageComponent to have class product-container', () => {
  let wrapper = shallow(<ImageComponent products={mockData['products']} productId={3} />);
  expect(wrapper.find('div').hasClass('product-container')).toBe(true);
});

test('Expect ImageComponent to have class prodcut-title', () => {
  let wrapper = shallow(<ImageComponent products={mockData['products']} productId={3} />);
  expect(wrapper).toMatchSnapshot();
});

test('Expect ImageComponent to have products as props and its value to equal to mockData[products]', () => {
  let wrapper = mount(<ImageComponent products={mockData['products']} productId={3} />);
  expect(wrapper.prop('products')).toEqual(mockData['products']);
});

test('Expect ImageComponent to have productId as props and its value to equal to 3', () => {
  let wrapper = mount(<ImageComponent products={mockData['products']} productId={3} />);
  expect(wrapper.prop('productId')).toEqual(3);
});
