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

  const guardarColores = () => {
    const coloresGuardados = cuadrado.map((isActive, index) => ({
      index,
      color: isActive ? "bg-pink-400" : "bg-gray-300",
    }));
    localStorage.setItem("coloresGrid", JSON.stringify(coloresGuardados));
  };
  const cargarColores = () => {
    const coloresGuardados = localStorage.getItem("coloresGrid");
    if (coloresGuardados) {
      const coloresArray = JSON.parse(coloresGuardados);
      const nuevoCuadrado = initialState.map((_, index) => {
        const colorObj = coloresArray.find((c) => c.index === index);
        return colorObj ? colorObj.color === "bg-pink-400" : false;
      });
      setCuadrado(nuevoCuadrado);
    }
  };

  return (
    <>
      <h1 className="text-center font-montserrat p-10">
        Create your polaroid pixel art
      </h1>
      <div className="flex flex-row items-center justify-center gap-12 pt-8">
        <div className="flex flex-col items-center justify-center mt-4 p-2 gap-12">
          <img
            src="/document-download.png"
            className="w-10 h-10"
            alt="image"
            onClick={guardarColores}
          />
          <img
            src="/eraser.png"
            className="w-10 h-10"
            alt="image"
            onClick={borrarColores}
          />

          <img
            src="/back-square.png"
            className="w-10 h-10"
            alt="image"
            onClick={cargarColores}
          />
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
            <button className="bg-blue-500 p-3 rounded w-10 h-10"></button>
            <button className="bg-gray-500 p-3 rounded w-10 h-10"></button>
            <button className="bg-green-500 p-3 rounded w-10 h-10"></button>
            <button className="bg-yellow-500 p-3 rounded w-10 h-10"></button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Grid;
