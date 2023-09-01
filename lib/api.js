export async function fetcher(url, options = {}) {
    console.log("url", url)
  let response;
  if (!options) {
    response = await fetch(url);
  } else {
    response = await fetch(url, options);
  }
  const data = await response.json();
  return data;
}
