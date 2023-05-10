import React from "react";
import {createRenderer} from 'react-test-renderer/shallow'

import { MemoryRouter } from "react-router-dom";
import EmploymentType from './EmploymentType'
//create a test renderer
const renderer=createRenderer()

describe("Personal Loan Employment Type Screenshot test",()=>{
    test('renders correctly the personal loan employment type component',()=>{
        renderer.render(
            <MemoryRouter initialEntries={['/']}>
                <EmploymentType/>
          </MemoryRouter>
        );
        const result=renderer.getRenderOutput();
        expect(result).toMatchSnapshot();
    });
});