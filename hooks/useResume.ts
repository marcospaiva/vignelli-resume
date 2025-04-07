import { useState, useEffect } from 'react';
import { Resume } from '../types/Resume';

export function useResume(id?: string) {
  const [resume, setResume] = useState<Resume | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchResume() {
      try {
        setLoading(true);
        const url = id ? `/api/resume/${id}` : '/api/resume';
        const response = await fetch(url);

        if (!response.ok) {
          throw new Error('Failed to fetch resume data');
        }

        const data = await response.json();
        setResume(data);
        setError(null);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'An error occurred');
        setResume(null);
      } finally {
        setLoading(false);
      }
    }

    fetchResume();
  }, [id]);

  return { resume, loading, error };
}