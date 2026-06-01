import FeaturedProjectCard from './FeaturedProjectCard';

const projects = [
  {
    href: './work/live-academia',
    imageSrc: 'https://framerusercontent.com/images/o7NnNcOU1P3lU5SuIXyBfq58U.png',
    imageAlt: 'Projeto digital Live Academia',
    name: 'Live Academia',
    tag: 'Web, CMS e Marketing',
    impact: 'Site com CMS para o time de marketing atualizar planos e campanhas sem depender de dev.',
  },
  {
    href: './work/clinimais',
    imageSrc: 'https://framerusercontent.com/images/OE9cBbkbWulMC3j6abqSaE4yDg.png',
    imageAlt: 'Plataforma de telemedicina Clinimais',
    name: 'Clinimais e Clini+',
    tag: 'Telemedicina',
    impact: 'Plataforma com consulta, pagamento, autenticação e compliance em um só fluxo.',
  },
  {
    href: './work/pesados-web',
    imageSrc: 'https://framerusercontent.com/images/KsczN5qsvWnrgLXuonLTSfsWJQ.png',
    imageAlt: 'Marketplace Pesados Web',
    name: 'Pesados Web',
    tag: 'Marketplace',
    impact: 'Plataforma de veículos pesados com busca, vendedor, admin e checkout integrado.',
  },
]

function FeaturedProjectsRowOne() {
  return (
    <div
      className="w-full h-min relative flex overflow-x-hidden overflow-y-hidden flex-wrap shrink-0 justify-center content-start items-start gap-y-10 gap-x-6"
      data-component-id="FeaturedProjectsRowOne"
    >
      {projects.map((project) => (
        <FeaturedProjectCard key={project.name} {...project} />
      ))}
    </div>
  );
}

export default FeaturedProjectsRowOne;
