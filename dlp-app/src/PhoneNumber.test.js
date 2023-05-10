import React from "react";
import Enzyme,{ mount,shallow } from "enzyme";
import PhoneNumber from "./PhoneNumber";
import { MemoryRouter } from "react-router-dom";
import Adapter from 'enzyme-adapter-react-16'
import { render,screen } from "@testing-library/react";
Enzyme.configure({ adapter: new Adapter() })
import userEvent from "@testing-library/user-event";


describe('PhoneNumber component',()=>{
  test('renders phone number component without crashing',()=>{
    render(
      <MemoryRouter initialEntries={['/']}>
        <PhoneNumber/>
      </MemoryRouter>
    );
  });
  test('should display a form with a phone number input and a proceed button',()=>{
    render(
      <MemoryRouter initialEntries={['/']}>
        <PhoneNumber/>
      </MemoryRouter>
    );

    const phoneNumberInput=screen.getByLabelText('Enter PhoneNumber');
    const proceedButton=screen.getByText('proceed')
    expect(phoneNumberInput).toBeInTheDocument();
    expect(proceedButton).toBeInTheDocument();
   
  });

  test('enter phone number into text field',()=>{
    render(
      <MemoryRouter initialEntries={['/']}>
        <PhoneNumber/>
      </MemoryRouter>
    );
    const phoneNumberInput=screen.getByLabelText('Enter PhoneNumber');
    userEvent.type(phoneNumberInput,'1234567890')
    expect(phoneNumberInput).toHaveValue('1234567890');
  });

  test('displays error message if no phone number is provided',()=>{
    const alertMock=jest.spyOn(window,'alert').mockImplementation(()=>{});
    render(
      <MemoryRouter initialEntries={['/']}>
        <PhoneNumber/>
      </MemoryRouter>
    );
    const proceedButton=screen.getByRole('button',{name: 'proceed'});
    userEvent.click(proceedButton)
    expect(alertMock).toHaveBeenCalledWith('Please provide phone number to proceed !');
    alertMock.mockRestore();
  });
  test('displays error message if  phone number is not 10 digits ',()=>{
    const alertMock=jest.spyOn(window,'alert').mockImplementation(()=>{});
    render(
      <MemoryRouter initialEntries={['/']}>
        <PhoneNumber/>
      </MemoryRouter>
    );
    const phoneNumberInput=screen.getByLabelText('Enter PhoneNumber');
    userEvent.type(phoneNumberInput,'123456789')
    const proceedButton=screen.getByRole('button',{name: 'proceed'});
    userEvent.click(proceedButton)
    expect(alertMock).toHaveBeenCalledWith('Phone Number must be of 10 digits !');
    alertMock.mockRestore();
  });

  test('displays the correct product name passed through the state object', async ()=>{
    const mockLocation={
      state:'Auto Loan' 
    };

    render(
      <MemoryRouter location={mockLocation}>
        <PhoneNumber/>
      </MemoryRouter>
    );
    const productName= await screen.findByText('Enter your mobile number To proceed with loan');
    expect(productName).toBeInTheDocument();
  });
  test('displays the correct product name passed through the state object', async ()=>{
    const mockLocation={
      state:'Personal Loan' 
    };

    render(
      <MemoryRouter location={mockLocation}>
        <PhoneNumber/>
      </MemoryRouter>
    );
    const productName= await screen.findByText('Enter your mobile number To proceed with loan');
    expect(productName).toBeInTheDocument();
  });

  /*test('make a POST request to the correct URL with the phone numbet entered for Persoanl Loan',async()=>{
    const mockNavigate = jest.fn();
    const mockLocalStorage = jest.spyOn(window.localStorage.__proto__, 'setItem');
    const mockFetch= jest.fn().mockResolvedValue({json: jest.fn().mockResolvedValue({})});
    global.fetch=mockFetch;
    render(
      <MemoryRouter  >
        <PhoneNumber navigate={mockNavigate} location={{state: 'Personal Loan'}}/>
      </MemoryRouter>
    );
    const phoneNumberInput=screen.getByLabelText('Enter PhoneNumber');
    userEvent.type(phoneNumberInput,'1234567890')
    const proceedButton=screen.getByRole('button',{name: 'proceed'});
    userEvent.click(proceedButton)

    const expectedData ={ id: 1234567890, phNo: '1234567890'};
    const expectedUrl = 'http://localhost:8082/v1/create';

    expect(mockFetch).toHaveBeenCalledTimes(1)
    expect(mockFetch).toHaveBeenCalledWith(expectedUrl, {
      method: 'POST',
      mode: 'cors',
      body: JSON.stringify(expectedData),
      headers: {
        'content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
      },
    });
    expect(mockLocalStorage).toHaveBeenCalledTimes(1);
    expect(mockLocalStorage).toHaveBeenCalledWith('phNo','1234567890');
    expect(mockNavigate).toHaveBeenCalledTimes(1);
    expect(mockNavigate).toHaveBeenCalledWith('/personal-loan-emp-type');

  });
  test('sets localStorage and navigates to correct page for Auto Loan product', async()=>{
    const mockPhNo='1234567890';
    const mockProduct='Auto Loan';
    const navigate= jest.fn()
    const setItemSpy= jest.spyOn(Storage.prototype,'setItem');

    const fetchSpy= jest.spyOn(global, 'fetch').mockResolvedValue({
      json: ()=> Promise.resolve({}),
    });
    Object.defineProperty(window,'localStorage',{
      value: {
        setItem: setItemSpy,
      },
      writable: true
    });

    render(
      <MemoryRouter initialEntries={[{ pathname: '/phone-numbe',state: mockProduct}]}>
        <PhoneNumber navigate={navigate}/>
      </MemoryRouter>
    );

    const phoneNumberInput=screen.getByLabelText('Enter PhoneNumber');
    userEvent.type(phoneNumberInput,'1234567890')
    const proceedButton=screen.getByRole('button',{name: 'proceed'});
    userEvent.click(proceedButton)

    expect(setItemSpy).toHaveBeenCalledWith('phNo',mockPhNo);
    expect(fetchSpy).toHaveBeenCalledWith('http://localhost:8003/v1/create',{
      method: "POST",
      mode: "cors",
      body: JSON.stringify({id:mockPhNo, phNo: mockPhNo}),
      headers:{
        "content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",

      }
    });

    expect(navigate).toHaveBeenCalledWith('/vehicle-loan-vehicle-type');
  });*/
});
