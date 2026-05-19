import ProcessHeadline from './ProcessHeadline';
import ProcessSteps from './ProcessSteps';

function ProcessContent() {
  return (
    <div
      className="w-[57%] h-min relative flex flex-col shrink-0 justify-start content-start items-start gap-y-[60px] gap-x-[60px]"
      data-component-id="ProcessContent"
    >
      <ProcessHeadline />
      <ProcessSteps />
    </div>
  );
}

export default ProcessContent;
