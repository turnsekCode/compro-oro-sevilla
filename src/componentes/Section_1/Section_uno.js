import React from "react";
//import Image from "next/image";
import styles from "./section_uno.module.css";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import { Link } from "react-scroll";
import useScreenSize from "@/utilities/useScreenSize";

const Section_uno = () => {
  const { width } = useScreenSize();
  return (
    <section className={styles.contenedorSectionUno}>
      <div className={styles.bloqueIzq}>
        <h1>
          Compro oro <span className={styles.linea}>Sevilla</span>
        </h1>
        <p>
          En Quickgold puedes vender oro en Sevilla en tan solo unos minutos y
          obtener dinero en efectivo ¡para tus necesidades! En nuestra tienda
          compro oro puedes ver el precio del oro en Sevilla siempre actualizado
          para conocer al detalle cuánto te vamos a dar por tus joyas de oro.
        </p>
        <div className={styles.botones}>
          <Link
            to="contenedorMapa"
            smooth={true}
            offset={-110}
            spy={true}
            duration={500}
            title="texto"
            passive="true"
          >
            <LocationOnOutlinedIcon />
            encuentra tu tienda
          </Link>
          <a href="tel:900 373 629" title="Teléfono">
            llama gratis al 900 373 629
          </a>
        </div>
      </div>
      <div className={styles.bloqueDer}>
        {width <= 610 ? (
          <img
            src="/bilbaoOro_mobil.webp"
            alt="Compro oro sevilla"
            className={styles.madridMobil}
            width={290}
            height={220}
          />
        ) : (
          <img
            src="/bilbaoOro.webp"
            alt="Compro oro sevilla"
            className={styles.vector}
            width={480}
            height={364}
          />
        )}
      </div>
    </section>
  );
};

export default Section_uno;
