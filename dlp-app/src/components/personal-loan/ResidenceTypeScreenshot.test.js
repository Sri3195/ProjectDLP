import React from "react";
import {createRenderer} from 'react-test-renderer/shallow'

import { MemoryRouter } from "react-router-dom";
import ResidenceType from './ResidenceType'
//create a test renderer
const renderer=createRenderer()

describe(" Residence  type Screenshot test",()=>{
    test('renders correctly the residence type  component',()=>{
        renderer.render(
            <MemoryRouter initialEntries={['/']}>
                <ResidenceType/>
          </MemoryRouter>
        );
        const result=renderer.getRenderOutput();
        expect(result).toMatchSnapshot();
    });
});