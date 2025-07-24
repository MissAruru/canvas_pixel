import { useState } from "react";

function Grid() {
  // Primero creo los cuadrados que serán el canvas del proyecto

  const initialState = new Array(156).fill(false);
  const [cuadrado, setCuadrado] = useState(initialState);

  // Luego hacemos la fórmula para que al hacer clic en un cuadrado este se pinte de un color (por ahora, rosa)
  const pintarCuadrado = (index) => {
    setCuadrado((prev) => {
      const newCuadrado = [...prev];
      newCuadrado[index] = !newCuadrado[index];
      return newCuadrado;
    });
  };
  const borrarColores = () => {
    setCuadrado(initialState);
  };

  return (
    <>
    <h1 className="text-center">Create your polaroid pixel art</h1>
      <div className="flex flex-row items-center justify-center gap-12 pt-8">
         <div className="flex flex-col items-center justify-center space-x-4 mt-4 p-2 gap-12">
          <button className="bg-gray-300 p-3 rounded">Guardar</button>
          <button className="bg-gray-300 p-3 rounded" onClick={borrarColores}>
            Limpiar
          </button>
          <button className="bg-gray-300 p-3 rounded">Dibujo anterior</button>
        </div>
        <div className="flex flex-col items-center justify-center p-4 ">
          <div className="grid grid-cols-12 gap-1 p-4 bg-gray-200 rounded-lg shadow-lg">
            {cuadrado.map((isActive, index) => (
              <button
                key={index}
                onClick={() => pintarCuadrado(index)}
                className={`w-5 h-5 ${
                  isActive ? "bg-pink-400" : "bg-gray-300"
                } transition-colors duration-300`}
              ></button>
            ))}
          </div>
        </div>

       
        <div className="flex flex-col items-center justify-center space-x-4">
          
          <div className="flex flex-col gap-12">
          <button className="bg-blue-500 p-3 rounded w-10 h-10" ></button>
          <button className="bg-gray-500 p-3 rounded w-10 h-10" ></button>
          <button className="bg-green-500 p-3 rounded w-10 h-10" ></button>
          <button className="bg-yellow-500 p-3 rounded w-10 h-10" ></button>
        </div>
        </div>
      </div>
    </>
  );
}

export default Grid;
