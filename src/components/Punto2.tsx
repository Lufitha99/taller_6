//contador
import React, { useState, useEffect } from "react";

const Counter: React.FC = () => {
    const [count, setCount] = useState<number>(0);

    useEffect(() => {

        console.log(`Contador aumentado a:  ${count + 1}`);
    }, [count]);

    const handleIncrement = () => {
        setCount(prevCount => prevCount + 1);
    };

    return (
        <div className="d-flex justify-content-center">
            <div className="card p-5 col-5 text-center">
                <h1>Contador: {count}</h1>
                <div className="d-flex justify-content-center">
                 <button className="btn btn-primary w-25 m-2" onClick={handleIncrement}> Aumentar </button>
                 <button className="btn btn-primary w-25 m-2" onClick={() => setCount(0)}>Reiniciar</button>                   
                </div>

            </div>           
        </div>

    );
};

export default Counter;