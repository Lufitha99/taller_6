import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { incrementar, reiniciar } from './ContadorSlice';
import { RootState } from "../redux/store";

const Contador: React.FC = () => {
    const count = useSelector((state: RootState) => state.contador);
    const dispatch = useDispatch();

    return (
        <div className="d-flex justify-content-center">
            <div className="card p-5 col-5 text-center" style={{
                background: '#00000094',
                border: ' 1px solid gray',
                borderRadius: '38px',
                color: 'white',
            }}>
                <h1>Contador(Redux): {count}</h1>
                <div className="d-flex justify-content-center">
                    <button className="btn btn-primary w-25 m-2" onClick={() => dispatch(incrementar())}>Aumentar</button>
                    <button className="btn btn-primary w-25 m-2" onClick={() => dispatch(reiniciar())}>Reiniciar</button>
                </div>
            </div>
        </div>
    );
};


export default Contador;