import React from 'react'
import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import Products from './Products'


Enzyme.configure({ adapter: new Adapter() })

describe('Test Case For Products page', () => {
    test('renders the product page',()=>{
      shallow(<Products/>)
    });
    it('render test field', () => {
      const wrapper = shallow(<Products />)
      const titleElement  = wrapper.find('#proceed-button');
      expect(titleElement.text()).toEqual('Proceed');
    });
  })