import React from "react";
import Head from "next/head";

// CONTEXT
import { ThemeContext } from "../../context/theme";
import { useContext } from "react";

// STYLES
import styles from "./about.module.scss";

// DATA
import informations from "../../data/about/informations";
import contact from "../../data/about/contact";
import schools from "../../data/about/schools";
import jobs from "../../data/about/jobs";
import languages from "../../data/about/languages";
import orgs from "../../data/about/orgs";
import coms from "../../data/about/coms";
import profs from "../../data/about/profs";

// COMPONENTS
import NavBar from "../../components/NavBar/NavBar";
import CustomParticles from "../../components/CustomParticles/CustomParticles";
import LoadingWrap from "../../components/LoadingWrap/LoadingWrap";
import AbilitySection from "../../components/AbilitySection/AbilitySection";
import InfoSection from "../../components/InfoSection/InfoSection";
import DigitalList from "../../components/DigitalList/DigitalList";
import FooterAndBackTop from "../../components/Footer/FooterAndBackTop";

function MyAboutPage() {
  const theme = useContext(ThemeContext);
  return (
    <LoadingWrap title={"detalii"}>
      <Head>
        <title>Detalii</title>
      </Head>
      <NavBar />
      <main className={styles.main}>
        <header className={styles.header}>
          <div className={styles.photo}></div>
          <div className={styles.text}>
            <p className={styles.title}>maria mădălina astancăi</p>
            <p className={styles.sub_title}>arhitect</p>
          </div>
        </header>
        <InfoSection
          title={"date personale"}
          info={informations}
          infoClass={"information"}
        />
        <InfoSection title={"contact"} info={contact} infoClass={"contact"} />
        <InfoSection
          title={"educație și formare profesională"}
          info={schools}
          infoClass={"schools"}
        />
        <InfoSection
          title={"experiență profesională"}
          info={jobs}
          infoClass={"jobs"}
        />
        <DigitalList abilityClass={"digitals"} />
        <AbilitySection
          title={"lingvistice"}
          ability={languages}
          abilityClass={"languages"}
        />
        <AbilitySection
          title={"organizatorice"}
          ability={orgs}
          abilityClass={"orgs"}
        />
        <AbilitySection
          title={"de comunicare. interpersonale"}
          ability={coms}
          abilityClass={"coms"}
        />
        <AbilitySection
          title={"dobândite la locul de muncă"}
          ability={profs}
          abilityClass={"profs"}
        />
      </main>
      <FooterAndBackTop />
      <CustomParticles color={theme.isDark ? "#fff" : "#000"} />
    </LoadingWrap>
  );
}

export default MyAboutPage;
