import { getServerSideSitemapLegacy } from "next-sitemap";
import supabase from "../../utils/supabaseClient";

export const getServerSideProps = async (ctx) => {
    let { data } = await supabase
        .from("projects")
        .select("projectName")
        .order("id");

    const dynamicUrls = data.map((url) => ({
        loc: `${process.env.NEXT_PUBLIC_WEBSITE}/projects/${url.projectName}`,
        lastmod: new Date().toISOString(),
    }));

    return getServerSideSitemapLegacy(ctx, dynamicUrls);
};

export default function Sitemap() {}
