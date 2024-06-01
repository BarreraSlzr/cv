import { CVData } from '@/lib/types';
import { FC } from 'react';
import { DrawerDialog } from '../DrawerDialog';
import ContactForm from '../forms/contact';
import { Badge } from '../ui/badge';
import { DateTime } from 'luxon';

interface CVProps {
  data: CVData;
}

const CV: FC<CVProps> = ({ data }) => {
  const currentDate = DateTime.now().setZone(data.contactInfo.timezone);
  data.contactInfo.isOnline = currentDate.hour >= 9 && currentDate.hour < 18;

  const renderSkills = (skillsUsed: number[]) => {
    const skillsMap = new Map(data.skills.map(skill => [skill.id, skill]));

    const sortedSkills = skillsUsed
      .map(id => skillsMap.get(id))
      .filter(skill => skill)
      .sort((a, b) => (b?.popularity || 0) - (a?.popularity || 0));

    return sortedSkills.map(skill => (
      <Badge key={skill?.id} className="bg-blue-100 text-blue-800 hover:text-blue-100">
        {skill?.name}
      </Badge>
    ));
  };

  return (
    <div className="max-w-4xl mx-auto p-6 relativef flex flex-col gap-2">
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
              <div className="flex mb-4">
                <Badge className="bg-gray-200 text-gray-700 hover:bg-gray-300 text-sm font-semibold mr-2 px-2.5 py-0.5 rounded">
                  {job.startDate} - {job.endDate || "Present"}
                </Badge>
              </div>
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
      {/* <div className="absolute">
        <Button>{`Let's connect`}</Button>
      </div> */}
      <DrawerDialog 
      isOnline={data.contactInfo.isOnline}
      title="Contact Information" description={'Connect with me to explore how we can achieve your goals.'}>
        <ContactForm className={""} contact={data.contactInfo} currentDate={currentDate}/>
      </DrawerDialog>
      <footer className="bg-gray-100 p-4 rounded-lg text-center">
        <p className="text-gray-700">{data.contactInfo.email}</p>
      </footer>
    </div>
  );
};

export default CV;
