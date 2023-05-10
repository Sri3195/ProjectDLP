import { render,screen } from "@testing-library/react";

import { MemoryRouter } from "react-router-dom";
import ProgressBar from "./ProgressBar";

describe('progress bar component',()=>{

    test('render progress bar component without crashing',()=>{
       render( 
       <MemoryRouter initialEntries={['/']}>
        <ProgressBar progress={50}/>
      </MemoryRouter>
       );
    });

    test('render progress bar with expected value',()=>{
        render( 
        <MemoryRouter initialEntries={['/']}>
        <ProgressBar progress={50}/>
      </MemoryRouter>
       );
       const progressBar= screen.getByRole('progressbar');
       expect(progressBar.getAttribute('aria-valuenow')).toBe('50')
    });

    test('renders completion text with expected value',()=>{
        render( 
        <MemoryRouter initialEntries={['/']}>
        <ProgressBar progress={50}/>
      </MemoryRouter>
       );
       const completionText= screen.getByText('Completion');
       expect(completionText).toBeInTheDocument(); 
    });

    test('renders progress bar with expected width and height',()=>{
        render( 
            <MemoryRouter initialEntries={['/']}>
            <ProgressBar progress={50}/>
          </MemoryRouter>
           );
           const progressBar=screen.getByRole('progressbar');
           expect(progressBar).toHaveStyle({width: '590px', height: '30px'});
    });
});
