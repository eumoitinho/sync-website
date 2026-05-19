import AboutStatement from './AboutStatement';
import ExperienceMetric from './ExperienceMetric';
import ClientProjectsMetric from './ClientProjectsMetric';
import SatisfactionMetric from './SatisfactionMetric';

function AboutMetrics() {
  return (
    <div
      className="w-[57%] h-min relative flex flex-col shrink-0 justify-start content-start items-start gap-y-[120px] gap-x-[120px]"
      data-component-id="AboutMetrics"
    >
      <div className="w-full relative z-[1] shrink-0">
        <AboutStatement />
      </div>
      <div className="w-full h-min relative flex overflow-x-hidden overflow-y-hidden shrink-0 justify-center content-start items-start gap-y-2 gap-x-2">
        <ExperienceMetric />
        <ClientProjectsMetric />
        <SatisfactionMetric />
      </div>
    </div>
  );
}

export default AboutMetrics;
