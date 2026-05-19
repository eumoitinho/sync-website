import ElevateCommerceProjectCard from './ElevateCommerceProjectCard';
import OrionSolutionsProjectCard from './OrionSolutionsProjectCard';

function FeaturedProjectsRowOne() {
  return (
    <div
      className="w-full h-min relative flex overflow-x-hidden overflow-y-hidden shrink-0 justify-center content-center items-center gap-y-6 gap-x-6"
      data-component-id="FeaturedProjectsRowOne"
    >
      <ElevateCommerceProjectCard />
      <OrionSolutionsProjectCard />
    </div>
  );
}

export default FeaturedProjectsRowOne;
