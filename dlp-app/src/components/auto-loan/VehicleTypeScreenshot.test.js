import React from "react";
import {createRenderer} from 'react-test-renderer/shallow'

import { MemoryRouter } from "react-router-dom";
import VehicleType from './VehicleType'
//create a test renderer
const renderer=createRenderer()

describe("Vehicle Type Screenshot test",()=>{
    test('renders correctly the vehicle type  component',()=>{
        renderer.render(
            <MemoryRouter initialEntries={['/']}>
                <VehicleType/>
          </MemoryRouter>
        );
        const result=renderer.getRenderOutput();
        expect(result).toMatchSnapshot();
    });
});