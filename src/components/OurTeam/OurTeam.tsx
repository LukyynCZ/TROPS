import Header from '../Header';
import Team from './Team';

const OurTeam = () => {
  const teamMembers = [
    {
      name: 'Lukas Macku',
      position1: 'Video Editor',
      position2: 'Full-Stack Web Developer',
      image: 'src/assets/lukas.png',
      x: -100,
    },
    {
      name: 'Kristian Ingr',
      position1: 'Actor',
      position2: 'Voice',
      image: 'src/assets/kristian.png',
      x: -200,
    },
    {
      name: 'Filip Machek',
      position1: 'Main Actor',
      position2: 'Support',
      image: 'src/assets/filip.png',
      x: -250,
    },
  ];
  return (
    <>
      <Header site={''} />
      <section className='max-w-7xl m-auto md:px-8 md:mt-10 px-5 pb-20'>
        <h2 className='text-5xl font-bold mb-20 text-center'>Our Team</h2>
        <div className='flex flex-col md:flex-row justify-between gap-4 items-center'>
          {teamMembers.map((member) => (
            <Team
              name={member.name}
              position1={member.position1}
              position2={member.position2}
              image={member.image}
              key={member.name}
              x={member.x}
            />
          ))}
        </div>
      </section>
    </>
  );
};

export default OurTeam;
