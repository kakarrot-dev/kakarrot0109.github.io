import { getCollection, render } from "astro:content";

export interface SearchEntry {
  title: string;
  href: string;
  summary: string;
  group: "vibe-coding" | "writing";
  keywords: string[];
  sections: { title: string; slug: string }[];
}

export async function GET() {
  const [works, articles] = await Promise.all([
    getCollection("vibe-coding", ({ data }) => !data.draft),
    getCollection("writing", ({ data }) => !data.draft),
  ]);

  const entries = await Promise.all(
    [...works, ...articles]
      .sort((a, b) => b.data.publishedAt.valueOf() - a.data.publishedAt.valueOf())
      .map(async (entry): Promise<SearchEntry> => {
        const { headings } = await render(entry);
        return {
          title: entry.data.title,
          href: `/${entry.collection}/${entry.id}/`,
          summary: "summary" in entry.data
            ? entry.data.summary ?? entry.data.description
            : entry.data.description,
          group: entry.collection,
          keywords: "topics" in entry.data ? entry.data.topics : entry.data.tags,
          sections: headings.filter(({ depth }) => depth === 2 || depth === 3)
            .map(({ text, slug }) => ({ title: text, slug })),
        };
      })
  );

  return Response.json(entries);
}
