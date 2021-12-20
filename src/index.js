import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { App } from "./App";

ReactDOM.render(
  // <Componente titulo="Titulo" contenido="Hola desde React" />,
  // <Componente titulo="Titulo">Hola desde React</Componente> ,
  <App />,
  document.getElementById("root")
);

// const contenido = (
//   <div>
//     <h1>Titulo</h1>
//     <div>Hola desde React</div>
//   </div>
// );
// function Componente({ titulo, children }) {

//   // const titulo = props.titulo;
//   // const contenido = props.contenido;

//   // const { titulo, contenido } = props;
//   return (
//     <div>
//       <h1>{titulo} </h1>
//       <div>{children} </div>
//     </div>
//   );
// }
