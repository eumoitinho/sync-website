import NexaTechProjectCard from './NexaTechProjectCard';
import VertexInnovationsProjectCard from './VertexInnovationsProjectCard';

function FeaturedProjectsRowTwo() {
  return (
    <div
      className="w-full h-min relative flex overflow-x-hidden overflow-y-hidden shrink-0 justify-center content-center items-center gap-y-6 gap-x-6"
      data-component-id="FeaturedProjectsRowTwo"
    >
      <NexaTechProjectCard />
      <VertexInnovationsProjectCard />
    </div>
  );
}

export default FeaturedProjectsRowTwo;
