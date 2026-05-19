import FooterHeadline from './FooterHeadline';
import FooterContactButton from './FooterContactButton';
import FooterWorkLink from './FooterWorkLink';
import FooterAboutLink from './FooterAboutLink';
import FooterBlogLink from './FooterBlogLink';
import FooterContactLink from './FooterContactLink';
import FooterNotFoundLink from './FooterNotFoundLink';
import FooterPrivacyLink from './FooterPrivacyLink';

function FooterCallToAction() {
  return (
    <div
      className="opacity-100 w-full h-min relative flex shrink-0 justify-center content-start items-start gap-y-[120px] gap-x-[120px]"
      data-component-id="FooterCallToAction"
    >
      <div className="opacity-100 w-px h-min relative flex flex-col grow-[4] shrink-0 basis-0 justify-start content-start items-start gap-y-6 gap-x-6">
        <FooterHeadline />
        <div className="[--extracted-r6o4lv:var(--token-1ba3eb5c-3d1d-417e-a110-baadc5d93e3d,rgb(255,255,255))] [--framer-paragraph-spacing:0px] [transform:none] opacity-100 [white-space-collapse:preserve] [text-wrap-mode:wrap] [word-break:break-word] w-full max-w-[720px] relative flex flex-col shrink-0 justify-start outline-[3px]">
          <p className='[--framer-text-color:var(--extracted-r6o4lv,var(--token-1ba3eb5c-3d1d-417e-a110-baadc5d93e3d,rgb(255,255,255)))] text-white leading-[32.4px] [font-family:Geist,"Geist_Placeholder",sans-serif,system-ui,sans-serif] font-medium text-[18px] tracking-[-0.36px] [word-break:break-word] caret-white my-0'>
            Deixe a Sync ser sua parceira para gerar resultados consistentes. Seja para atrair leads, aumentar conversões ou fortalecer sua marca, estamos prontos para ajudar.
          </p>
        </div>
        <FooterContactButton />
      </div>
      <div className="opacity-100 w-px h-min relative flex flex-col grow shrink-0 basis-0 justify-start content-start items-start gap-y-2 gap-x-2">
        <FooterWorkLink />
        <FooterAboutLink />
        <FooterBlogLink />
        <FooterContactLink />
        <FooterNotFoundLink />
        <FooterPrivacyLink />
      </div>
    </div>
  );
}

export default FooterCallToAction;
