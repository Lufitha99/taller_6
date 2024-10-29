import { render, screen, fireEvent } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import  configureStore from "redux-mock-store";
import App from './App';
const mockStore = configureStore([]);

describe('dentro de app', () =>{
  afterEach(() => {
    jest.clearAllTimers(); // Clear timers
    // Additional cleanup if needed
  });
  test('renderizado de componente dentro de app', () => {

    const store = mockStore({
      text:{value: 'Hacer click aquí'},
    });
  
    render(
      <Provider store={store}>
        <MemoryRouter initialEntries={['/']}>
          <App />
        </MemoryRouter>
      </Provider>
    )
    const nav = screen.getByText(/Ejercicios/i)
    fireEvent.click(nav)
    const punto5 = screen.getByText(/Punto 5/i)
    fireEvent.click(punto5)
    expect(screen.getByRole('button')).toHaveTextContent('Hacer click aquí');
  });
  
  test('deberia cambiar el texto en  punto 5 al hacer clic', () =>{
    const store = mockStore({
      text:{value:'Hacer click aquí'},
    });
  
    render(
      <Provider store={store}>
        <MemoryRouter initialEntries={['/']}>
          <App/>
        </MemoryRouter>
      </Provider>
    );
    const nav = screen.getByText(/Ejercicios/i)
    fireEvent.click(nav)
    const punto5 = screen.getByText(/Punto 5/i)
    fireEvent.click(punto5)
  
    const button = screen.getByRole('button');
  
    fireEvent.click(button);
  
    expect(button).toHaveTextContent('¡Gracias por hacer click!');
  });
  
  test('deberia alternar el texto en punto5 despues de dos clics',() =>{
    const store = mockStore({
    text:{value:'Hacer click aquí'},
    });
  
    render(
      <Provider store={store}> 
        <MemoryRouter initialEntries={['/']}>
          <App/>
        </MemoryRouter>
      </Provider>
    )
    const nav = screen.getByText(/Ejercicios/i)
    fireEvent.click(nav)
    const punto5 = screen.getByText(/Punto 5/i)
    fireEvent.click(punto5)
    const button = screen.getByRole('button');
  
    fireEvent.click(button);
    expect(button).toHaveTextContent('Hacer click aquí')
    fireEvent.click(button);
    expect(button).toHaveTextContent('¡Gracias por hacer click!');
  
  });
  
})
