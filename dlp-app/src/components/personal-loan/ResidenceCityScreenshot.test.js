import React from "react";
import {createRenderer} from 'react-test-renderer/shallow'

import { MemoryRouter } from "react-router-dom";
import ResidenceCity from './ResidenceCity'
//create a test renderer
const renderer=createRenderer()

describe("Residence City Screenshot test",()=>{
    test('renders correctly the residence city component',()=>{
        renderer.render(
            <MemoryRouter initialEntries={['/']}>
                <ResidenceCity/>
          </MemoryRouter>
        );
        const result=renderer.getRenderOutput();
        expect(result).toMatchSnapshot();
    });
});