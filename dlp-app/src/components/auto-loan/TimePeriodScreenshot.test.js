import React from "react";
import {createRenderer} from 'react-test-renderer/shallow'

import { MemoryRouter } from "react-router-dom";
import TimePeriod from './TimePeriod'
//create a test renderer
const renderer=createRenderer()

describe("TimePeriod Screenshot test",()=>{
    test('renders correctly the time period  component',()=>{
        renderer.render(
            <MemoryRouter initialEntries={['/']}>
                <TimePeriod/>
          </MemoryRouter>
        );
        const result=renderer.getRenderOutput();
        expect(result).toMatchSnapshot();
    });
});