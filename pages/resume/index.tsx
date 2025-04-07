import Link from 'next/link';
import { useResume } from '../../hooks/useResume';

export default function ResumeListPage() {
  const { resume, loading, error } = useResume();

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;
  if (!resume) return <div>No resumes found</div>;

  return (
    <div>
      <h1>Available Resumes</h1>
      <div>
        <Link href={`/resume/1`}>
          <div style={{ cursor: 'pointer', padding: '1rem', border: '1px solid #ccc', margin: '1rem 0' }}>
            <h2>{resume.basics.name}</h2>
            <p>{resume.basics.label}</p>
            {resume.basics.location && (
              <p>{resume.basics.location.city}, {resume.basics.location.countryCode}</p>
            )}
          </div>
        </Link>
      </div>
    </div>
  );
}