import { useState, useEffect } from "react";

export default function useFetch(url, options = {}) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!url) return;
    const controller = new AbortController();

    async function fetchData() {
      try {
        setLoading(true);
        setError(null);

        const response = await fetch(url, {
          ...options,
          signal: controller.signal,
        });

        if (!response.ok) throw new Error(response.statusText);

        const data = await response.json();
        setData(data);
      } catch (e) {
        if (e.name !== "AbortError") {
          setError(e);
          console.error(e);
        }
      } finally {
        setLoading(false);
      }
    }
    fetchData();

    return () => controller.abort();
  }, [url]);

  return [data, error, loading];
}
