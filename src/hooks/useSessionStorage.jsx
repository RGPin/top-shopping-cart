import { useEffect, useState } from "react";

const FIVE_MINUTES = 1000 * 60 * 5;

export default function useSessionStorage(key, ttl = FIVE_MINUTES) {
  const [storedValue, setStoredValue] = useState(null);
  const [error, setError] = useState(null);
  useEffect(() => {
    try {
      const raw = sessionStorage.getItem(key);

      if (!raw) return;

      const parsed = JSON.parse(raw);

      if (ttl && parsed.timestamp) {
        const isExpired = Date.now() - parsed.timestamp > ttl;

        if (isExpired) {
          sessionStorage.removeItem(key);
          console.log("Session storage expired");
          return;
        }
      }

      setStoredValue(parsed.value);
      console.log(
        `Fetched from session storage. TTL: ${ttl - (Date.now() - parsed.timestamp)}`,
      );
    } catch (error) {
      setError(error);
    }
  }, [key, ttl]);

  const setValue = (value) => {
    try {
      const payload = {
        value,
        timestamp: Date.now(),
      };
      setStoredValue(value);
      sessionStorage.setItem(key, JSON.stringify(payload));
    } catch (error) {
      setError(error);
    }
  };

  return [storedValue, setValue, error];
}
