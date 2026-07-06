import rss from "@astrojs/rss";
import { getCollection } from "astro:content";

export async function GET() {
  const posts = await getCollection("writing");
  const projects = await getCollection("projects");

  return rss({
    title: "Kakarrot",
    description: "AI 产品经理 — 思考与实践",
    site: "https://kakarrot.com",
    items: [
      ...posts.map((p) => ({
        title: p.data.title,
        description: p.data.description,
        pubDate: p.data.publishedAt,
        link: `/writing/${p.slug}/`,
      })),
      ...projects.map((p) => ({
        title: p.data.title,
        description: p.data.description,
        pubDate: p.data.publishedAt,
        link: `/projects/${p.slug}/`,
      })),
    ],
  });
}
