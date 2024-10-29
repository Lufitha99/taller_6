
import {render, screen, fireEvent} from '@testing-library/react';
import { Provider } from "react-redux";
import  configureStore from "redux-mock-store";
import TextToggleButton from "./Punto5";
import {store} from '../redux/store';

describe('TextToggleButton',()=>{


    test('deberia mostrar "Hacer click aquí" como texto inicial',() =>{
        render(
            <Provider store={store}>
                <TextToggleButton />
            </Provider>
        );

    expect(screen.getByRole('button')).toHaveTextContent('Hacer click aquí')
    });

    test('Deberia cambiar el texto a "¡Gracias por hacer click! al hacer clic"', () =>{
        render(
            <Provider store={store}>
                <TextToggleButton/>
            </Provider>
        );
        const button = screen.getByText(/Hacer click aquí/i);

        fireEvent.click(button);


        expect(screen.getByRole('button')).toHaveTextContent('¡Gracias por hacer click!');

    });

    test('Debería alternar el texto de nuevo a "Hacer click aquí" despues de dos clics', () =>{
        render(
            <Provider store={store}>
                <TextToggleButton/>
            </Provider>
        );
        const button = screen.getByRole('button');
        fireEvent.click(button);
        expect(button).toHaveTextContent('Hacer click aquí');
        fireEvent.click(button);
        expect(button).toHaveTextContent('¡Gracias por hacer click!');


    });
});