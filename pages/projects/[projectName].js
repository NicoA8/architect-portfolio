import React, { useEffect, useState } from "react";
import Head from "next/head";

// SUPABASE

import supabase from "../../utils/supabaseClient";
export async function getServerSideProps(context) {
    const { projectName } = context.query;
    let { data } = await supabase
        .from("projects")
        .select()
        .eq("projectName", projectName)
        .single();

    return {
        props: {
            data,
        },
    };
}

// STYLES
import styles from "./individual.module.scss";

// COMPONENTS
import LoadingWrap from "../../components/LoadingWrap/LoadingWrap";
import NavBar from "../../components/NavBar/NavBar";
import ProjectHeader from "../../components/ProjectHeader/ProjectHeader";
import NavProjects from "../../components/NavProjects/NavProjects";
import OneTile from "../../components/OneTile/OneTile";
import TwoTiles from "../../components/TwoTiles/TwoTiles";
import ThreeTiles from "../../components/ThreeTiles/ThreeTiles";
import FooterAndBackTop from "../../components/Footer/FooterAndBackTop";

export default function ProjectDetails({ data }) {
    const [project, setProject] = useState(data);

    useEffect(() => {
        if (data !== project) {
            // Data has changed, show loading wrap
            window.location.reload();
        }
    }, [project, data]);

    return (
        <LoadingWrap title={`${project.projectName}`}>
            <Head>
                <title>{project.projectName.toUpperCase()}</title>
            </Head>
            <NavBar />
            <ProjectHeader
                projectName={project.projectName}
                coverSource={project.cover}
                logoSource={project.source}
                title={project.description.title}
                subtitle={project.description.subtitle}
                text={project.description.text}
            />
            <main className={styles.main}>
                {project.content.map((section, index) => {
                    if (section.one1_text) {
                        return (
                            <OneTile
                                key={index}
                                planSource={section.one1_img}
                                oneTitle={section.one1_text}
                                twoTitle={section.one2_text}
                                threeTitle={section.one3_text}
                                fourTitle={section.one4_text}
                            />
                        );
                    } else if (section.two1_text) {
                        return (
                            <TwoTiles
                                key={index}
                                oneSource={section.two1_img}
                                twoSource={section.two2_img}
                                oneTitle={section.two1_text}
                                twoTitle={section.two2_text}
                            />
                        );
                    } else if (section.three1_text) {
                        return (
                            <ThreeTiles
                                key={index}
                                oneSource={section.three1_img}
                                twoSource={section.three2_img}
                                threeSource={section.three3_img}
                                oneTitle={section.three1_text}
                                twoTitle={section.three2_text}
                                threeTitle={section.three3_text}
                            />
                        );
                    }
                })}
            </main>
            <NavProjects next={project.next} previous={project.previous} />
            <FooterAndBackTop />
        </LoadingWrap>
    );
}
