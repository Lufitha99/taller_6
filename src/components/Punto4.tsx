import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { incrementar, reiniciar } from './ContadorSlice';
import { RootState } from "../redux/store";

const Contador: React.FC = () => {
    const count = useSelector((state: RootState) => state.contador);
    const dispatch = useDispatch();

    return (
        <div className="d-flex justify-content-center">
            <div className="card p-5 col-5 text-center">
                <h1>Contador: {count}</h1>
                <div className="d-flex justify-contenr-center">
                    <button className="btn btn-primary w-25 m-2" onClick={() => dispatch(incrementar())}>Aumentar</button>
                    <button className="btn btn-primary w-25 m-2" onClick={() => dispatch(reiniciar())}>Reiniciar</button>
                </div>
            </div>
        </div>
    );
};


export default Contador;