import React from "react";
import {createRenderer} from 'react-test-renderer/shallow'

import { MemoryRouter } from "react-router-dom";
import LoanAmount from './LoanAmount'
//create a test renderer
const renderer=createRenderer()

describe("Personal LoanAmount Screenshot test",()=>{
    test('renders correctly the personal loan component',()=>{
        renderer.render(
            <MemoryRouter initialEntries={['/']}>
                <LoanAmount/>
          </MemoryRouter>
        );
        const result=renderer.getRenderOutput();
        expect(result).toMatchSnapshot();
    });
});