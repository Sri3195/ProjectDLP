import React from "react";
import {createRenderer} from 'react-test-renderer/shallow'

import { MemoryRouter } from "react-router-dom";
import LoanAmount from './LoanAmount'
//create a test renderer
const renderer=createRenderer()

describe("Vehicle Loan Amount Screenshot test",()=>{
    test('renders correctly the vehicle loan amount  component',()=>{
        renderer.render(
            <MemoryRouter initialEntries={['/']}>
                <LoanAmount/>
          </MemoryRouter>
        );
        const result=renderer.getRenderOutput();
        expect(result).toMatchSnapshot();
    });
});