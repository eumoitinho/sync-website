import TestimonialsIntro from './TestimonialsIntro';
import FeaturedTestimonial from './FeaturedTestimonial';

function TestimonialsSection() {
  return (
    <div
      className="w-full h-min max-w-[1440px] relative flex flex-col shrink-0 justify-center content-center items-center gap-y-20 gap-x-20"
      data-component-id="TestimonialsSection"
    >
      <TestimonialsIntro />
      <FeaturedTestimonial />
    </div>
  );
}

export default TestimonialsSection;
