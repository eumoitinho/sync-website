import VisualIdentityPostCard from './VisualIdentityPostCard';
import PreDesignPlaybookPostCard from './PreDesignPlaybookPostCard';
import BrandPlaybookPostCard from './BrandPlaybookPostCard';

function BlogPostGrid() {
  return (
    <div
      className="w-full h-min relative grid shrink-0 justify-center gap-y-10 gap-x-6 grid-cols-[repeat(3,minmax(50px,1fr))]"
      data-component-id="BlogPostGrid"
    >
      <VisualIdentityPostCard />
      <PreDesignPlaybookPostCard />
      <BrandPlaybookPostCard />
    </div>
  );
}

export default BlogPostGrid;
