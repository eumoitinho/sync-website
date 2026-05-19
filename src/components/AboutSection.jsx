import AboutSidebar from './AboutSidebar';
import AboutMetrics from './AboutMetrics';

function AboutSection() {
  return (
    <div
      className="w-full h-min relative flex shrink-0 justify-between content-end items-end"
      data-component-id="AboutSection"
    >
      <AboutSidebar />
      <AboutMetrics />
    </div>
  );
}

export default AboutSection;
