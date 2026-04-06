export async function fetchJSONData(url) {
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Unable to load ${url} (status ${response.status})`);
    }

    return await response.json();
  } catch (error) {
    console.error(`Error fetching JSON from ${url}:`, error);
    return null;
  }
}


