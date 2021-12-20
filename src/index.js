import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { App } from "./App";

/* const contenido = (
    <div>
        <h1>Este es el título</h1>
        <div>Hola desde reactTTTT </div>
    </div>
); */

/* function Componente({ titulo, contenido, children }) {
    // console.log(props);
    // let { titulo, contenido } = props;

    return (
        <div className="contenedor">
            <h1>{titulo}</h1>
            <div>{contenido} </div>
            <div>{children} </div>
        </div>
    );
} */

ReactDOM.render(
    /* <Componente titulo="c mata" contenido="Hola mundo llorando">
        {" "}
        Este es el children{" "}
    </Componente> */

    <App />,
    document.getElementById("root")
);
