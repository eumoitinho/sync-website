import DiscoveryStep from './DiscoveryStep';
import PlanningStep from './PlanningStep';
import ImplementationStep from './ImplementationStep';
import DeliveryStep from './DeliveryStep';

function ProcessSteps() {
  return (
    <div
      className="w-full h-min relative grid overflow-x-hidden overflow-y-hidden shrink-0 justify-center gap-y-[60px] gap-x-[60px] grid-cols-[repeat(2,minmax(50px,1fr))] grid-rows-[repeat(2,minmax(0px,1fr))]"
      data-component-id="ProcessSteps"
    >
      <DiscoveryStep />
      <PlanningStep />
      <ImplementationStep />
      <DeliveryStep />
    </div>
  );
}

export default ProcessSteps;
