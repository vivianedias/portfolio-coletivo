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

  const res = await fetch(endpoint, config);

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
