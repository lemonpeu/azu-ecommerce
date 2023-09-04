export async function fetcher(url, options = {}) {
  let response;
  let data;
  try {
    response = await fetch(url);
  } catch (e) {
    console.error(e);
  }
  data = await response.json();

  return data;
}
