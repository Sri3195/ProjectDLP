import React from 'react'
import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import App from './App'


Enzyme.configure({ adapter: new Adapter() })

describe('Test Case For App', () => {
  test('renders the landing page',()=>{
    shallow(<App/>)
  });
  it('should render nav item of DigiLEnd', () => {
    const wrapper = shallow(<App />)
    const titleElement  = wrapper.find('#dlp-title');
    expect(titleElement.text()).toEqual('DigiLend');
  });
})
