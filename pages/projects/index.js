import React from "react";
import Head from "next/head";
import { ThemeContext } from "../../context/theme";
import { useContext } from "react";

// SUPABASE
import supabase from "../../utils/supabaseClient";
export async function getServerSideProps() {
  let { data } = await supabase
    .from("projects")
    .select(
      "projectName, source, subtitle, text,title_one, title_two, title_three, title_four, color, page"
    )
    .order("id");
  return {
    props: {
      projects: data,
    },
  };
}

// STYLES
import styles from "./projects.module.scss";

// COMPONENTS
import NavBar from "../../components/NavBar/NavBar";
import CustomParticles from "../../components/CustomParticles/CustomParticles";
import LoadingWrap from "../../components/LoadingWrap/LoadingWrap";
import ProjectTile from "../../components/ProjectTile/ProjectTile";
import FooterAndBackTop from "../../components/Footer/FooterAndBackTop";

function MyProjectsPage({ projects }) {
  const theme = useContext(ThemeContext);
  return (
    <LoadingWrap title={"proiecte"}>
      <Head>
        <title>Proiecte</title>
      </Head>
      <NavBar />
      {projects && (
        <main className={styles.projects_box}>
          {projects.map(project => (
            <ProjectTile
              key={project.projectName}
              source={project.source}
              projectName={project.projectName}
              subtitle={project.subtitle}
              text={project.text}
              title_one={project.title_one}
              title_two={project.title_two}
              title_three={project.title_three}
              title_four={project.title_four}
              color={project.color}
              page={project.page}
            />
          ))}
        </main>
      )}
      <FooterAndBackTop />
      <CustomParticles color={theme.isDark ? "#fff" : "#000"} />
    </LoadingWrap>
  );
}

export default MyProjectsPage;
