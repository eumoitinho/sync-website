import BlogEyebrow from './BlogEyebrow';
import BlogHeadline from './BlogHeadline';

function BlogIntro() {
  return (
    <div
      className="w-full h-min relative flex shrink-0 justify-between content-start items-start"
      data-component-id="BlogIntro"
    >
      <BlogEyebrow />
      <BlogHeadline />
    </div>
  );
}

export default BlogIntro;
