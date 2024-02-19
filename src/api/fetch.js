export const fetchDataWithToken = async (apiUrl, params) => {
  const urlSearchParams = new URLSearchParams(params);

  // use simple key as authorization 
  const urlWithApiKey = `${apiUrl}?${urlSearchParams}`;

  try {
    const response = await fetch(urlWithApiKey, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    // Handle errors during the fetch
    console.error("Fetch error:", error.message);
    throw error;
  }
};
