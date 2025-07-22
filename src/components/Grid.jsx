import { useState } from "react";

function Grid() {
  const initialState = new Array(156).fill(false);
  const [cuadrado, setCuadrado] = useState(initialState);

  // Primero creo los cuadrados que serán el canvas de nuestro proyecto

  return (
    <>
      <div className="flex items-center justify-center p-4 ">
        <div className="grid grid-cols-12 gap-1 p-4 bg-gray-200 rounded-lg shadow-lg">
          {cuadrado.map((isActive, index) => (
            <button
              key={index}
              className={`w-5 h-5 bg-gray-300
              }`}
            ></button>
          ))}
        </div>
      </div>
    </>
  );
}

export default Grid;
