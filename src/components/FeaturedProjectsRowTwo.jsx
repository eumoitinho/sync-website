import FeaturedProjectCard from './FeaturedProjectCard';

const projects = [
  {
    href: './work/mundial-beach-tennis-itf-rio-brilhante',
    imageSrc: 'https://framerusercontent.com/images/ZFbBgds4e21HSgGR6hStmRS8zY.png',
    imageAlt: 'Mundial de Beach Tennis ITF Rio Brilhante',
    name: 'Mundial de Beach Tennis ITF Rio Brilhante',
    tag: 'Marketing e Evento',
    impact: 'Marketing e audiovisual para etapa do ITF Beach Tennis World Tour em Rio Brilhante.',
  },
  {
    href: './work/berg-universe',
    imageSrc: 'https://framerusercontent.com/images/D0i8VrIebhmCxF0MEgu4VTwn4Kk.jpeg',
    imageAlt: 'Projeto visual BERG Universe',
    name: 'BERG Universe',
    tag: 'Branding e Música',
    impact: 'Single cover e Spotify Canvas para lançamento que passou de 1 milhão de plays.',
  },
  {
    href: './work/iaspe-brand-guidelines',
    imageSrc: 'https://framerusercontent.com/images/FqsAAdkSVVvVFAwEw7cn2ujFK4.jpg',
    imageAlt: 'Brand guidelines IASPE',
    name: 'IASPE Brand Guidelines',
    tag: 'Identidade Visual',
    impact: 'Manual de marca para instituição que atende administrações públicas.',
  },
  {
    href: './work/welker-epk-2024',
    imageSrc: 'https://framerusercontent.com/images/O7F4iPGUuhqfdhjxE5D6BqfgXg.jpg',
    imageAlt: 'Electronic Press Kit Welker',
    name: 'Welker EPK 2024',
    tag: 'Design Editorial',
    impact: 'Electronic Press Kit profissional para apresentação comercial e imprensa.',
  },
]

function FeaturedProjectsRowTwo() {
  return (
    <div
      className="w-full h-min relative flex overflow-x-hidden overflow-y-hidden flex-wrap shrink-0 justify-center content-start items-start gap-y-10 gap-x-6"
      data-component-id="FeaturedProjectsRowTwo"
    >
      {projects.map((project) => (
        <FeaturedProjectCard key={project.name} {...project} />
      ))}
    </div>
  );
}

export default FeaturedProjectsRowTwo;
