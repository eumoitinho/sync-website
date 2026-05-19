import ProcessEyebrow from './ProcessEyebrow';
import ProcessContent from './ProcessContent';

function ProcessSection() {
  return (
    <div
      className="w-full h-min relative flex shrink-0 justify-between content-start items-start"
      data-component-id="ProcessSection"
    >
      <ProcessEyebrow />
      <ProcessContent />
    </div>
  );
}

export default ProcessSection;
