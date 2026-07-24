import rss from "@astrojs/rss";
import { getCollection } from "astro:content";

export async function GET() {
  const posts = (await getCollection("writing")).filter((p) => !p.data.draft);
  const vibe = (await getCollection("vibe-coding")).filter((p) => !p.data.draft);

  return rss({
    title: "Kakarrot",
    description: "AI 产品经理 — 思考与实践",
    site: "https://kakarrot.com",
    items: [
      ...posts.map((p) => ({
        title: p.data.title,
        description: p.data.description,
        pubDate: p.data.publishedAt,
        link: `/writing/${p.id}/`,
      })),
      ...vibe.map((p) => ({
        title: p.data.title,
        description: p.data.description,
        pubDate: p.data.publishedAt,
        link: `/vibe-coding/${p.id}/`,
      })),
    ].sort((a, b) => b.pubDate.valueOf() - a.pubDate.valueOf()),
  });
}
