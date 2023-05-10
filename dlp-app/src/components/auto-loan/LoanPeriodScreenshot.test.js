import React from "react";
import {createRenderer} from 'react-test-renderer/shallow'

import { MemoryRouter } from "react-router-dom";
import LoanPeriod from './LoanPeriod'
//create a test renderer
const renderer=createRenderer()

describe("Loan Period Screenshot test",()=>{
    test('renders correctly the loan period component',()=>{
        renderer.render(
            <MemoryRouter initialEntries={['/']}>
                <LoanPeriod/>
          </MemoryRouter>
        );
        const result=renderer.getRenderOutput();
        expect(result).toMatchSnapshot();
    });
})