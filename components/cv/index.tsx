import { CVData } from '@/lib/types';
import { FC } from 'react';

interface CVProps {
  data: CVData;
}

const CV: FC<CVProps> = ({ data }) => {
  const renderSkills = (skillsUsed: number[]) => {
    const skillsMap = new Map(data.skills.map(skill => [skill.id, skill]));

    const sortedSkills = skillsUsed
      .map(id => skillsMap.get(id))
      .filter(skill => skill)
      .sort((a, b) => (b?.popularity || 0) - (a?.popularity || 0));

    return sortedSkills.map(skill => (
      <span key={skill?.id} className="bg-blue-100 text-blue-800 text-sm font-semibold px-2.5 py-0.5 rounded">
        {skill?.name}
      </span>
    ));
  };

  return (
    <div className="max-w-4xl mx-auto p-6">
      <header className="bg-gray-100 p-4 rounded-lg mb-6">
        <h1 className="text-3xl font-bold text-center">
          Curriculum Vitae - <span className="text-blue-600">{data.professionalPosition}</span>
        </h1>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <main className="md:col-span-2 bg-white p-4 rounded-lg shadow">
          <h2 className="text-2xl font-semibold mb-4">Core Job Expertise & History</h2>
          {data.jobExperiences.map((job, index) => (
            <section key={index} className="mb-4">
              <h3 className="text-xl font-semibold">{job.title}</h3>
              <p className="text-gray-500 italic mb-4">{job.razonSocial}</p>
              <p className="text-gray-700 mb-2">{job.description}</p>
              {job.projects.map((project, pIndex) => (
                <div key={pIndex} className="ml-4 mb-4">
                  <h4 className="text-lg font-semibold">{project.name}</h4>
                  <p className="text-gray-700 mb-2">{project.description}</p>
                  <div className="flex flex-wrap gap-2">{renderSkills(project.skillsUsed)}</div>
                </div>
              ))}
            </section>
          ))}
        </main>

        <aside className="bg-gray-50 p-4 rounded-lg shadow">
          <h2 className="text-2xl font-semibold mb-4">Skills & Aptitudes</h2>
          <ul className="list-disc list-inside">
            {data.skills.sort((a, b) => b.popularity - a.popularity).map((skill, index) => (
              <li key={index} className="text-gray-700">{skill.name}</li>
            ))}
          </ul>
        </aside>
      </div>

      <footer className="bg-gray-100 p-4 rounded-lg mt-6 text-center">
        <p className="text-gray-700">Contact Info: {data.contactInfo.email} | {data.contactInfo.phone}</p>
      </footer>
    </div>
  );
};

export default CV;
