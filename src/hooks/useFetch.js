import { useState, useEffect } from 'react';

function useFetch(resource) {
  const [data, setData]       = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError]     = useState(null);

  useEffect(() => {
    let cancelled = false;
    setLoading(true);

    import(`../data/${resource}.json`)
      .then((module) => {
        if (!cancelled) {
          setData(module.default);
          setLoading(false);
        }
      })
      .catch((err) => {
        if (!cancelled) {
          setError(err);
          setLoading(false);
        }
      });

    return () => { cancelled = true; };
  }, [resource]);

  return { data, loading, error };
}

export const useApi = useFetch;
export default useFetch;