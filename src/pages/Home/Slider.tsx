import { useRef } from "react";
import { motion, useScroll } from "framer-motion";
import React from "react";
import styles from "./Slider.module.css";

const Slider: React.FC = () => {
    const favors = [
      {
        title: "Académicos",
        img: "https://images.pexels.com/photos/544115/pexels-photo-544115.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
      },
      {
        title: "Carpinteria",
        img: "https://images.pexels.com/photos/1249611/pexels-photo-1249611.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
      },{
        title: "Cocina",
        img: "https://images.pexels.com/photos/7262911/pexels-photo-7262911.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
      },{
        title: "Cuidado de niños",
        img: "https://images.pexels.com/photos/1001914/pexels-photo-1001914.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
      },{
        title: "Cuidado de mascotas",
        img: "https://images.pexels.com/photos/7210531/pexels-photo-7210531.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
      },{
        title: "Deportes",
        img: "https://images.pexels.com/photos/2011383/pexels-photo-2011383.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
      },{
        title: "Electricidad",
        img: "https://images.pexels.com/photos/5691590/pexels-photo-5691590.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
      },{
        title: "Fotografia",
        img: "https://images.pexels.com/photos/2388569/pexels-photo-2388569.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
      },{
        title: "Jardineria",
        img: "https://images.pexels.com/photos/4750272/pexels-photo-4750272.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
      },{
        title: "Limpieza",
        img: "https://images.pexels.com/photos/4099467/pexels-photo-4099467.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
      },{
        title:"Transporte",
        img:"https://images.pexels.com/photos/977213/pexels-photo-977213.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
      }
      
    ]
  
    const ref = useRef(null);
    const { scrollXProgress } = useScroll({ container: ref });
  
    return (
      <>
        
        <ul className={styles["list"]} ref={ref}>
          {favors.map((favor) => 
          <li>
            <div>
              <div className={styles["tag"]}>
                <h3>{favor.title}</h3>
              </div>
              <img src={favor.img} alt="" />
            </div>
          </li>
          )}
          
        </ul>
      </>
    );
  }
  
  export default Slider;