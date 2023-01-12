const techies = [
  {
    id: 1,
    firstName: 'Rochelle',
    lastName: 'Rossman',
    imageUrl:
      'https://avatars.githubusercontent.com/u/102299152?s=400&u=2fab77da66f2df4181579defc0bc881109d553c0&v=4',
    title: 'Software Engineer',
    linkedInUrl: 'https://www.linkedin.com/in/rochelle-rossman/',
    githubUrl: 'https://github.com/rochelle-rossman',
    portfolioUrl: 'https://rochellerossman.dev',
    resumeUrl:
      'https://docs.google.com/document/d/1h1L2PI_raWf3lXm0VepStg76ioLKc8jqX9dzmxbLjfM/edit',
  },
  {
    id: 2,
    firstName: 'Ewell',
    lastName: 'Van der Brug',
    imageUrl: 'http://dummyimage.com/176x100.png/cc0000/ffffff',
    title: 'Sales Representative',
    linkedInUrl: 'http://nymag.com',
    githubUrl: 'http://123-reg.co.uk',
    portfolioUrl: 'https://si.edu',
    resumeUrl: 'https://auda.org.au',
  },
  {
    id: 3,
    firstName: 'Chelsy',
    lastName: 'Krale',
    imageUrl: 'http://dummyimage.com/250x100.png/dddddd/000000',
    title: 'Environmental Specialist',
    linkedInUrl: 'https://google.es',
    githubUrl: 'http://smh.com.au',
    portfolioUrl: 'http://ucla.edu',
    resumeUrl: 'http://uol.com.br',
  },
  {
    id: 4,
    firstName: 'Byran',
    lastName: 'Brazur',
    imageUrl: 'http://dummyimage.com/229x100.png/ff4444/ffffff',
    title: 'Programmer IV',
    linkedInUrl: 'https://nydailynews.com',
    githubUrl: 'http://ed.gov',
    portfolioUrl: 'https://mayoclinic.com',
    resumeUrl: 'https://sciencedaily.com',
  },
  {
    id: 5,
    firstName: 'Merrile',
    lastName: 'Howgill',
    imageUrl: 'http://dummyimage.com/111x100.png/5fa2dd/ffffff',
    title: 'Community Outreach Specialist',
    linkedInUrl: 'http://springer.com',
    githubUrl: 'https://craigslist.org',
    portfolioUrl: 'http://altervista.org',
    resumeUrl: 'http://discuz.net',
  },
];

export default function Home() {
  return (
    <p>{techies}</p>
  );
}
