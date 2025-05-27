const ACCESS_KEY = 'kE95Y-klvXAsDGxInTiujzm507v79AOjZ8bd6BqcHj0';

export async function fetchImage(query) {
  const endpoint = `https://api.unsplash.com/search/photos?query=${encodeURIComponent(
    query
  )}&client_id=${ACCESS_KEY}&orientation=landscape&per_page=1`;

  const response = await fetch(endpoint);
  if (!response.ok) throw new Error('Image not found');

  const data = await response.json();

  if (data.results.length === 0) {
    return '';
  }

  return data.results[0].urls.regular;
}
