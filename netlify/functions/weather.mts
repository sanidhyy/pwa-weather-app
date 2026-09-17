import type { Config } from "@netlify/functions";

const OPENWEATHER_URL = "https://api.openweathermap.org/data/2.5/weather";
const MAX_QUERY_LENGTH = 100;

const json = (body: unknown, status: number) =>
  new Response(JSON.stringify(body), {
    status,
    headers: { "content-type": "application/json" },
  });

export default async (req: Request) => {
  const query = new URL(req.url).searchParams.get("q")?.trim() ?? "";

  if (!query) {
    return json({ error: "Missing location query" }, 400);
  }

  if (query.length > MAX_QUERY_LENGTH) {
    return json({ error: "Location query is too long" }, 400);
  }

  const apiKey = process.env.OPENWEATHER_API_KEY;

  if (!apiKey) {
    return json({ error: "Weather service is not configured" }, 500);
  }

  const url = new URL(OPENWEATHER_URL);
  url.searchParams.set("q", query);
  url.searchParams.set("units", "metric");
  url.searchParams.set("APPID", apiKey);

  try {
    const response = await fetch(url);
    const data: unknown = await response.json();

    if (!response.ok) {
      return json(
        { error: "Unable to fetch weather for that location" },
        response.status === 404 ? 404 : 502,
      );
    }

    return json(data, 200);
  } catch {
    return json({ error: "Unable to reach the weather service" }, 502);
  }
};

export const config: Config = {
  path: "/api/weather",
  method: "GET",
};
