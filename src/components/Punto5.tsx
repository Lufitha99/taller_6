import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleText } from "./TextSlice";
import { AppDispatch, RootState } from "../redux/store";

const TextToggleButton: React.FC = () =>{
    const text = useSelector((state:RootState)=> state.text.value);
    const dispatch = useDispatch<AppDispatch>();

    const handleClick = () => {
        dispatch(toggleText())
    };

    return(
        <div>
        <h1 className="text-center">Cambia de texto con redux</h1>
        <div className="d-flex justify-content-center">
            <div className="card p-5 col-5 text-center" style={{
                background: 'transparent',
            }}>
                <button className="btn btn-primary btn-lg"onClick={handleClick}>{text}</button>
            </div>
        </div>            
        </div>

    );
};

export default TextToggleButton;