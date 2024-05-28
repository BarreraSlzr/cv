import CV from '@/components/cv';
import { CVData } from '@/lib/types';

export default function Home(){
  const data: CVData = {
    professionalPosition: 'Software Engineer',
    jobExperiences: [
      {
        title: 'Software Developer',
        description: 'Responsible for tech consulting, planning, developing and maintaining web applications.',
        razonSocial: 'Robert Bosch México S.A. de C.V.',
        projects: [
          {
            name: 'Preboarding and Onboarding Web System App',
            description: 'Development of a web application for the management of the recruitment of human resources with external users, internal administrators and different roles involved.',
            skillsUsed: [ 3, 5, 8, 10, 14, 15, 13, 16] 
          },
          {
            name: 'Tariff Classifier for Aduanas',
            description: 'Created an website to ask for Aduana Classification having a text input to describe any kind of object.',
            skillsUsed: [2, 3, 4, 6, 12]
          }
        ]
      },
      {
        title: 'Tech Support and Marketing Content Creator',
        description: 'Assisted in tech support of the company\'s tech devices and created content for the company\'s social networks.',
        razonSocial: 'Zapata Camiones S.A. de C.V.',
        projects: [
          {
            name: 'Marketing Content Creator',
            description: 'Create content for the company\'s social networks, such as images, videos and texts to increase the engagement on potencial clients.',
            skillsUsed: [17, 18, 19],
          }, {
            name: 'Tech Support - Tier 3',
            description: 'Assist the company\'s clients with their problems on the software and hardware of the company\'s products.',
            skillsUsed: [20, 21],
          }
        ]
      }
    ],
    skills: [
      { id: 1, name: 'JavaScript', popularity: 90 },
      { id: 2, name: 'TypeScript', popularity: 80 },
      { id: 3, name: 'React', popularity: 85 },
      { id: 4, name: 'Node.js', popularity: 70 },
      { id: 5, name: 'Next.js', popularity: 75 },
      { id: 6, name: 'CosmosDB', popularity: 65 },
      { id: 7, name: 'HTML', popularity: 95 },
      { id: 8, name: 'SASS', popularity: 90 },
      { id: 9, name: 'Tailwind CSS', popularity: 80 },
      { id: 10, name: 'Git', popularity: 85 },
      { id: 11, name: 'Docker', popularity: 70 },
      { id: 12, name: 'OpenAI', popularity: 60 },
      { id: 13, name: 'Azure Blob Storage', popularity: 70 },
      { id: 14, name: 'Azure WebApp', popularity: 65 },
      { id: 15, name: 'Mailing', popularity: 60 },
      { id: 16, name: 'Azure DevOps - CI/CD', popularity: 75 },
      { id: 17, name: 'Photography', popularity: 70 },
      { id: 18, name: 'Videography', popularity: 65 },
      { id: 19, name: 'Social Media Marketing', popularity: 80 },
      { id: 20, name: 'Ticket Tech Support', popularity: 75 },
      { id: 21, name: 'General Hardware Acknowledge', popularity: 70 }
    ],
    contactInfo: {
      email: 'BarreraSlzr@gmail.com',
      phone: '+52 (33) 1165-4324'
    }
  };

  
  return <CV data={data} />
};
