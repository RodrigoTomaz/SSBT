"use client";
//styles
import styles from "./styles.module.scss";
//Features
import Image from "next/image";
import Link from "next/link";
import Logo from "@/app/icon.svg";
//Icons Components
import Facebook from "/public/images/socials/facebook.svg";
import Instagram from "/public/images/socials/instagram.svg";
import Email from "/public/images/socials/emails.svg";
import Whatsapp from "/public/images/socials/whatsapp.svg";

const index = () => {
  return (
    <header className={styles.header}>
      <nav className={`${styles.navHeader} md:flex hidden`}>
        <div className={styles.navContainer}>
          <div className={styles.navContact}>
            <div className={styles.navCantactItem}>
              <Image src={Email} fill={false} alt="Image social email" />
              <p>bethbeauty@bethbeauty.com.br</p>
            </div>
            <div className={styles.navCantactItem}>
              <Image src={Whatsapp} fill={false} alt="Image social Phone" />
              <p>(31) 9999-9999</p>
            </div>
          </div>
          <div className={styles.navSocials}>
            <p>Siga-nos:</p>
            <Link href="#">
              <Image
                src={Facebook}
                fill={false}
                alt="image midia social Facebook"
              />
            </Link>
            <Link href="#">
              <Image
                src={Instagram}
                fill={false}
                alt="image midia social Instagram"
              />
            </Link>
          </div>
        </div>
      </nav>
      <div className={styles.mainHeader}>
        <div className={styles.mainHeaderContainer}>
          <div className={styles.headerLogo}>
            <Link href={"/"}>
              <Image src={Logo} fill={false} alt="Image Logo" />
            </Link>
          </div>
          <button className={`${styles.btnNav} lg:hidden`} onClick={() => {}}>
            <div className={styles.lineBars}></div>
            <div className={styles.lineBars}></div>
            <div className={styles.lineBars}></div>
          </button>
          <nav className={`${styles.navBar} lg:flex hidden`}>
            <ul className={styles.navBarContainer}>
              <li className={styles.navBarItem}>
                <Link href="#home">Home</Link>
              </li>
              <li className={styles.navBarItem}>
                <Link href="#about">Sobre Nós</Link>
              </li>
              <li className={styles.navBarItem}>
                <Link href="#services">Serviços</Link>
              </li>
              <li className={styles.navBarItem}>
                <Link href="#products">Produtos</Link>
              </li>
              <li className={styles.navBarItem}>
                <Link href="#contact">Contate-nos</Link>
              </li>
              <li className={styles.navBarButton}>
                <button>
                  <Link href="#contact" className="text-white">
                    Agendar Horário +
                  </Link>
                </button>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default index;
