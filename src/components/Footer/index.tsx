"use client";
//Styles
import styles from "./styles.module.scss";
//Features
import Image from "next/image";
import Link from "next/link";
//Image
import ImageLogo from "/public/images/logo.svg";

const index = () => {
  return (
    <footer id={styles.footer}>
      <div className={styles.footerContainer}>
        <div className={styles.footerContent}>
          <div className={styles.footerItem}>
            <div className={styles.footerLogo}>
              <Image width={45} src={ImageLogo} alt="Image Logo" />
              <div>
                <h2>Beth</h2>
                <h2 className={styles.colorLogo}>Beauty</h2>
              </div>
            </div>
          </div>
          <div className={styles.footerItem}>
            <h2>Empresa</h2>
            <div className={styles.footerLink}>
              <Link href="#about">Sobre Nós</Link>
              <Link href="#services">Serviços</Link>
            </div>
          </div>
          <div className={styles.footerItem}>
            <h2>Serviços</h2>
            <div className={styles.footerLink}>
              <a href="#">Lavada Especial</a>
              <a href="#">Corte Feminino</a>
              <a href="#">Escova</a>
              <a href="#">Luzes</a>
              <a href="#">Mais Serviços</a>
            </div>
          </div>
          <div className={styles.footerItem}>
            <h2>Contato</h2>
            <div className={styles.footerLink}>
              <a href="#">Fale Conosco</a>
              <a href="#">Agendar Horário</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default index;
