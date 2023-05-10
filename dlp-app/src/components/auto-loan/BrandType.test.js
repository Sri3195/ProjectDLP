import {React} from "react";
import { render,fireEvent ,screen} from "@testing-library/react";
import BrandType from "./BrandType";
import { MemoryRouter } from "react-router-dom";
import { createMemoryHistory } from "history";
import userEvent from "@testing-library/user-event";


describe('brand type component',()=>{
    test('renders brand type component without crashing',()=>{
        render(
            <MemoryRouter initialEntries={['/']}>
                <BrandType/>
            </MemoryRouter>
        );
    });
    test('displays an image',()=>{
         const {getByAltText} = render(
            <MemoryRouter initialEntries={['/']}>
                <BrandType/>
            </MemoryRouter>
        );
        const image=getByAltText('no-image found');
        expect(image).toBeInTheDocument();
    });
   /*test('display a back button that navigates to previous page',()=>{
    const navigate=jest.fn()
    render(
        <MemoryRouter initialEntries={['/']}>
            <BrandType/>
        </MemoryRouter>
    );
    const backButton=screen.getByRole('button',{name: 'arrow-back'});
    userEvent.click(backButton)
   });*/
      
});