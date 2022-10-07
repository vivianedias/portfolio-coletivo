// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import fetcher from "../../shared/utils/fetcher";

export default async function handler(req, res) {
  try {
    res.setHeader("Access-Control-Allow-Origin", req.headers.origin);
    res.setHeader("Access-Control-Allow-Headers", "api-key");

    const vArticles = await fetcher("https://dev.to/api/articles/me", {
      headers: {
        "api-key": process.env.NEXT_PUBLIC_DEV_TO_API_KEY_VIVIANE,
      },
    });
    const cArticles = await fetcher("https://dev.to/api/articles/me", {
      headers: {
        "api-key": process.env.NEXT_PUBLIC_DEV_TO_API_KEY_CAMILA,
      },
    });

    res.status(200).json([...vArticles, ...cArticles]);
  } catch (e) {
    console.error(`GET ARTICLES FROM DEV.TO: ${e}`);
    res.status(400).send(`An error occurred while fetching the articles`);
  }
}
