import TestimonialsEyebrow from './TestimonialsEyebrow';
import TestimonialsHeader from './TestimonialsHeader';

function TestimonialsIntro() {
  return (
    <div
      className="w-full h-min relative flex shrink-0 justify-between content-start items-start"
      data-component-id="TestimonialsIntro"
    >
      <TestimonialsEyebrow />
      <TestimonialsHeader />
    </div>
  );
}

export default TestimonialsIntro;
