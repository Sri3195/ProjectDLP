import React from "react";
import {createRenderer} from 'react-test-renderer/shallow'

import { MemoryRouter } from "react-router-dom";
import ResidingCity from './ResidingCity'
//create a test renderer
const renderer=createRenderer()

describe("Residing City Screenshot test",()=>{
    test('renders correctly the residing city  component',()=>{
        renderer.render(
            <MemoryRouter initialEntries={['/']}>
                <ResidingCity/>
          </MemoryRouter>
        );
        const result=renderer.getRenderOutput();
        expect(result).toMatchSnapshot();
    });
});