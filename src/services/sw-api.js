
export async function getAllStarships() {
    try {
      const response = await fetch("https://swapi.dev/api/starships/");
      if (!response.ok) {
        throw new Error('Failed to fetch starships');
      }
      const data = await response.json();
      return data.results;  // Return the list of starships
    } catch (error) {
      console.error(error);
      return [];  // Return an empty array in case of error
    }
  }
  