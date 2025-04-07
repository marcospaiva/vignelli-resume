import { useRouter } from 'next/router';
import { useResume } from '../../hooks/useResume';

export default function ResumePage() {
  const router = useRouter();
  const { id } = router.query;
  const { resume, loading, error } = useResume(id as string);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;
  if (!resume) return <div>No resume found</div>;

  return (
    <div>
      <h1>{resume.basics.name}</h1>

      {resume.basics.label && <h2>{resume.basics.label}</h2>}

      {resume.basics.summary && (
        <section>
          <h3>Summary</h3>
          <p>{resume.basics.summary}</p>
        </section>
      )}

      <section>
        <h3>Contact</h3>
        <p>Email: {resume.basics.email}</p>
        {resume.basics.phone && <p>Phone: {resume.basics.phone}</p>}
        {resume.basics.url && <p>Website: {resume.basics.url}</p>}
      </section>

      {resume.work.length > 0 && (
        <section>
          <h3>Work Experience</h3>
          {resume.work.map((work, index) => (
            <div key={index}>
              <h4>{work.position} at {work.company}</h4>
              <p>{work.startDate} - {work.endDate || 'Present'}</p>
              {work.summary && <p>{work.summary}</p>}
              {work.highlights && work.highlights.length > 0 && (
                <ul>
                  {work.highlights.map((highlight, i) => (
                    <li key={i}>{highlight}</li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </section>
      )}

      {resume.education.length > 0 && (
        <section>
          <h3>Education</h3>
          {resume.education.map((edu, index) => (
            <div key={index}>
              <h4>{edu.studyType} in {edu.area}</h4>
              <p>{edu.institution}</p>
              <p>{edu.startDate} - {edu.endDate || 'Present'}</p>
            </div>
          ))}
        </section>
      )}

      {resume.skills.length > 0 && (
        <section>
          <h3>Skills</h3>
          {resume.skills.map((skill, index) => (
            <div key={index}>
              <h4>{skill.name}</h4>
              {skill.level && <p>Level: {skill.level}</p>}
              {skill.keywords && (
                <p>Keywords: {skill.keywords.join(', ')}</p>
              )}
            </div>
          ))}
        </section>
      )}

      {resume.languages.length > 0 && (
        <section>
          <h3>Languages</h3>
          {resume.languages.map((lang, index) => (
            <div key={index}>
              <p>{lang.language} - {lang.fluency}</p>
            </div>
          ))}
        </section>
      )}

      {resume.projects.length > 0 && (
        <section>
          <h3>Projects</h3>
          {resume.projects.map((project, index) => (
            <div key={index}>
              <h4>{project.name}</h4>
              {project.description && <p>{project.description}</p>}
              {project.highlights && project.highlights.length > 0 && (
                <ul>
                  {project.highlights.map((highlight, i) => (
                    <li key={i}>{highlight}</li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </section>
      )}
    </div>
  );
}