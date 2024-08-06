import React from 'react'

import estilos from './estilos.module.css';
import proyecto from './json/projects.json';
import ItemProyecto from '../../components/ItemProyecto';
export default function index() {
  return (
    <div className={estilos.contenedor}>
      <h2>Proyectos</h2>
      <div>
        {
          proyecto.map((item, id) => {
            return (
              <ItemProyecto key={id}
                logo={item.logo}
                titulo={item.titulo}
                descripcion={item.descripcion}
                repo={item.repo}
                demolive={item.demolive}
              />
            )
          })
        }
      </div>
    </div>
  )
}
