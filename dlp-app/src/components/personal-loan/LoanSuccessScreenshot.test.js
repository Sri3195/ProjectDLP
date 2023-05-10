import React from "react";
import {createRenderer} from 'react-test-renderer/shallow'

import { MemoryRouter } from "react-router-dom";
import LoanSuccess from './LoanSuccess'
//create a test renderer
const renderer=createRenderer()

describe("Personal Loan Success Screenshot test",()=>{
    test('renders correctly the personal loan success component',()=>{
        renderer.render(
            <MemoryRouter initialEntries={['/']}>
                <LoanSuccess/>
          </MemoryRouter>
        );
        const result=renderer.getRenderOutput();
        expect(result).toMatchSnapshot();
    });
});