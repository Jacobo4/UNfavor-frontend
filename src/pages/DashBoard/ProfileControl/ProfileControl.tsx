import styles from "./ProfileControl.module.css";
import React from "react";
import FavorCard from "@components/FavorCard/FavorCard";
import ControlCard from "./ControlCard";
const ProfileControl: React.FC = () => {
  const dataDummie=[
    {
      title: "Pintar fachada de casa",
      profile: "Ana1234",
      ubication: "Bogotá D.C",
      description: "Se pintan fachadas de casas, excelencia garantizada",
      state: "",
    },
    {
      title: "Pintar apartamento",
      profile: "Juan1234",
      ubication: "Bogotá D.C",
      description: "Se pintan apartamentos en la ciudad de Bogota",
      state: "",
    },
    {
      title: "Pintar fachada de casa",
      profile: "Ana1234",
      ubication: "Bogotá D.C",
      description: "Se pintan fachadas de casas, excelencia garantizada",
      state: "",
    },
    {
      title: "Pintar fachada de casa",
      profile: "Ana1234",
      ubication: "Bogotá D.C",
      description: "Se pintan fachadas de casas, excelencia garantizada",
      state: "",
    },
    {
      title: "Pintar apartamento",
      profile: "Juan1234",
      ubication: "Bogotá D.C",
      description: "Se pintan apartamentos en la ciudad de Bogota",
      state: "",
    },
    {
      title: "Pintar fachada de casa",
      profile: "Ana1234",
      ubication: "Bogotá D.C",
      description: "Se pintan fachadas de casas, excelencia garantizada",
      state: "",
    },
    {
      title: "Pintar fachada de casa",
      profile: "Ana1234",
      ubication: "Bogotá D.C",
      description: "Se pintan fachadas de casas, excelencia garantizada",
      state: "",
    },
  ]
  return (
    <div className={styles.ProfileControl}>
      <div className={styles.headInfo}>
        <h1>
              Control de Perfiles
          </h1>
          <h2>
            Aprueba o rechaza los perfiles que incumplen con las reglas de la comunidad.
          </h2>
      </div>
        
        <div className={styles.ControlCardsContainer}>
          {dataDummie.map((info, index) => <ControlCard {...info}/> )}
          
        </div>
        
    </div>
  );
};

export default ProfileControl;
