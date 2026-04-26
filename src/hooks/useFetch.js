import { useState, useEffect } from 'react';
import * as api from '../utils/api';

// Maps the resource name used in components to the correct api function
const resourceMap = {
  projects: api.getProjects,
  members:  api.getMembers,
  events:   api.getEvents,
  stats:    api.getStats,
};

function useFetch(resource) {
  const [data, setData]       = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError]     = useState(null);

  useEffect(() => {
    let cancelled = false;
    const fetcher = resourceMap[resource];

    if (!fetcher) {
      setError(new Error(`Unknown resource: ${resource}`));
      setLoading(false);
      return;
    }

    setLoading(true);
    fetcher()
      .then((result) => {
        if (!cancelled) {
          setData(result);
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