const getUrl = (endpoint) => {
  const env = process.env.NEXT_PUBLIC_VERCEL_ENV || process.env.NODE_ENV;
  const urlByEnv = {
    preview: process.env.NEXT_PUBLIC_VERCEL_URL,
    development: process.env.NEXT_PUBLIC_APP_URL,
    production: process.env.NEXT_PUBLIC_APP_URL,
  };
  const url = (env === "development" ? "http://" : "https://") + urlByEnv[env];

  return endpoint[0] === "/" ? url + endpoint : endpoint;
};

export default async function fetcher(
  endpoint,
  { body, ...customConfig } = {}
) {
  const config = {
    ...customConfig,
    method: customConfig.method || "GET",
    headers: getHeaders(customConfig.headers),
  };

  if (body) {
    config.body = JSON.stringify(body);
  }

  const res = await fetch(getUrl(endpoint), config);

  if (!res.ok) {
    const error = new Error(
      `An error occurred while making the request: ${res.statusText}`
    );
    error.status = res.status;
    throw error;
  }

  return res.json();
}

export function getHeaders(customHeaders = {}) {
  const headers = {
    "Content-Type": "application/json",
  };

  return { ...headers, ...customHeaders };
}
