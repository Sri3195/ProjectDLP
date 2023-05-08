import { render,screen } from "@testing-library/react";
import App from "./App";
import { MemoryRouter } from "react-router-dom";

describe('App component',()=>{
  test('renders without crashing',()=>{
    render(
      <MemoryRouter initialEntries={['/']}>
      <App/>
    </MemoryRouter>
    );
    });

    test('displays DigiLend title',()=>{
      render(
        <MemoryRouter initialEntries={['/']}>
        <App/>
      </MemoryRouter>
      );
      const titleElement= screen.getByTestId('dlp-title')
      expect(titleElement).toBeInTheDocument();
    });

    test('displays All Productslin with correct URL',()=>{
      render(
        <MemoryRouter initialEntries={['/']}>
        <App/>
      </MemoryRouter>
      );
      const linkElement=screen.getByTestId("all-products")
      expect(linkElement).toBeInTheDocument();
      expect(linkElement.href).toContain('/');
    });

    test('displays About Us link with correct URL',()=>{
      render(
        <MemoryRouter initialEntries={['/']}>
        <App/>
      </MemoryRouter>
      );
      const linkElement=screen.getByTestId("about-us")
      expect(linkElement).toBeInTheDocument();
      expect(linkElement.href).toContain('/');
    });
    test('displays Contact Us link with correct URL',()=>{
      render(
        <MemoryRouter initialEntries={['/']}>
        <App/>
      </MemoryRouter>
      );
      const linkElement=screen.getByTestId("contact-us")
      expect(linkElement).toBeInTheDocument();
      expect(linkElement.href).toContain('/');
    });

    test('displays SignIn button',()=>{
      render(
        <MemoryRouter initialEntries={['/']}>
        <App/>
      </MemoryRouter>
      );
      const buttonElement= screen.getByText('SignIn');
      expect(buttonElement).toBeInTheDocument();
    });

    test('renders navbar links',()=>{
      render(
        <MemoryRouter initialEntries={['/']}>
        <App/>
      </MemoryRouter>
      );
      const links=screen.getAllByRole('link')
      expect(links).toHaveLength(6);
      //expect(links[0]).toHaveTextContent('DigiLend')
      expect(links[0]).toHaveTextContent('All Products')
      expect(links[1]).toHaveTextContent('About Us')
      expect(links[2]).toHaveTextContent('Contact Us');
      expect(links[3]).toHaveTextContent('All Products')
      expect(links[4]).toHaveTextContent('About Us')
      expect(links[5]).toHaveTextContent('Contact Us');

    });

    test('displays product cards', async ()=>{
      const mockProducts=[
        {id: 1, productName: 'Product 1',productBenefit: 'Benefit 1', productLink: 'Link 1'},
        {id: 2, productName: 'Product 2', productBenefit: 'Benefit 2',productLink: 'Link 2'}

      ];

      jest.spyOn(global,'fetch').mockResolvedValue({
        json: () => Promise.resolve(mockProducts),
      });
      render(
        <MemoryRouter initialEntries={['/']}>
        <App/>
      </MemoryRouter>
      );

      const cardElements= await screen.findAllByRole('card');
      expect(cardElements.length).toBe(mockProducts.length);
      

    });
    test('render product cards', async ()=>{
      const mockProducts=[
        {id: 1, productName: 'Product 1',productBenefit: 'Benefit 1', productLink: 'Link 1'},
        {id: 2, productName: 'Product 2', productBenefit: 'Benefit 2',productLink: 'Link 2'}

      ];

      jest.spyOn(global,'fetch').mockResolvedValueOnce({
        json: async ()=> mockProducts,
      });
      render(
        <MemoryRouter initialEntries={['/']}>
        <App/>
      </MemoryRouter>
      );

      const cards= await screen.findAllByRole('card');
      //expect(cardElements.length).toBe(mockProducts.length);

      expect(cards[0]).toHaveTextContent('Product 1');
      expect(cards[0]).toHaveTextContent('Benefit 1');
      expect(cards[0]).toHaveTextContent('Link 1');
      expect(cards[1]).toHaveTextContent('Product 2');
      expect(cards[1]).toHaveTextContent('Benefit 2');
      expect(cards[1]).toHaveTextContent('Link 2');
      
      

    });

})