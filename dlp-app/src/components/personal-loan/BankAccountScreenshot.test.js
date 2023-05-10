import React from "react";
import {createRenderer} from 'react-test-renderer/shallow'

import { MemoryRouter } from "react-router-dom";
import BankAccount from './BankAccount'
//create a test renderer
const renderer=createRenderer()

describe("Bank Account Screenshot test",()=>{
    test('renders correctly the bank account component',()=>{
        renderer.render(
            <MemoryRouter initialEntries={['/']}>
                <BankAccount/>
          </MemoryRouter>
        );
        const result=renderer.getRenderOutput();
        expect(result).toMatchSnapshot();
    });
});