import Header from './components/Header';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import ProjectsMarquee from './components/ProjectsMarquee';
import FeaturedProjectsRowOne from './components/FeaturedProjectsRowOne';
import FeaturedProjectsRowTwo from './components/FeaturedProjectsRowTwo';
import ProjectsArchiveCta from './components/ProjectsArchiveCta';
import ServicesMarquee from './components/ServicesMarquee';
import DigitalCampaignsService from './components/DigitalCampaignsService';
import GrowthStrategyService from './components/GrowthStrategyService';
import BrandConsultingService from './components/BrandConsultingService';
import MarketingStrategyService from './components/MarketingStrategyService';
import BrandDevelopmentService from './components/BrandDevelopmentService';
import ProcessSection from './components/ProcessSection';
import ExpertiseMarquee from './components/ExpertiseMarquee';
import ExpertiseSection from './components/ExpertiseSection';
import TestimonialsSection from './components/TestimonialsSection';
import BlogIntro from './components/BlogIntro';
import BlogPostGrid from './components/BlogPostGrid';
import BlogArchiveCta from './components/BlogArchiveCta';
import Footer from './components/Footer';
import FloatingWorkLink from './components/FloatingWorkLink';
import FloatingAboutLink from './components/FloatingAboutLink';
import FloatingBlogLink from './components/FloatingBlogLink';
import FloatingContactLink from './components/FloatingContactLink';
import { useSyncEffects } from './effects/useSyncEffects';

function App() {
  useSyncEffects();

  return (
    <>
      <div className="bg-[#f6f4ef] [font-family:sans-serif,system-ui,sans-serif] text-[12px]">
        <div id="main">
          <div className="w-auto bg-[#f6f4ef] h-min min-h-[835px] relative flex flex-col justify-start content-center items-center gap-y-0 gap-x-0">
            <div className="w-[62%] max-w-[800px] aspect-[1.58155_/_1] absolute z-0 overflow-hidden shrink-0 select-none left-auto right-0 top-0 bottom-auto">
              <div className="absolute select-none inset-0">
                <img
                  width="1474"
                  height="932"
                  src="https://framerusercontent.com/images/t7UIgISfch06jfGgWhPJEE4a1s.jpg"
                  className="object-[center_center] w-full h-full aspect-[auto_1474_/_932] block object-cover select-none"
                />
              </div>
            </div>
            <div className="contents">
              <div className="opacity-100 [transform:none] h-16 absolute z-[6] shrink-0 will-change-transform top-6 bottom-auto inset-x-0">
                <nav className="opacity-100 w-full h-full relative flex justify-center content-center items-center gap-y-5 gap-x-5 px-10">
                  <Header />
                </nav>
              </div>
            </div>
            <div className="w-auto bg-[#f6f4ef] h-min min-h-[835px] relative contents flex-col justify-start content-center items-center gap-y-0 gap-x-0">
              <div className="relative shrink-0"></div>
              <section className="w-full h-min relative flex overflow-x-hidden overflow-y-hidden shrink-0 justify-center content-center items-center gap-y-0 gap-x-0">
                <div className="w-px h-min relative flex overflow-x-hidden overflow-y-hidden flex-col grow shrink-0 basis-0 justify-center content-center items-center gap-y-0 gap-x-0">
                  <HeroSection />
                </div>
              </section>
              <section
                id="about"
                className="bg-[#f6f4ef] w-full h-min relative flex shrink-0 justify-center content-center items-center gap-y-0 gap-x-0 px-10 py-40 scroll-mt-[100px]"
              >
                <div className="w-px h-min max-w-[1440px] relative flex flex-col grow shrink-0 basis-0 justify-center content-center items-center gap-y-20 gap-x-20">
                  <AboutSection />
                </div>
              </section>
              <section className="bg-[#f6f4ef] w-full h-min relative flex overflow-x-hidden overflow-y-hidden shrink-0 justify-center content-center items-center gap-y-0 gap-x-0">
                <div className="js-scroll-marquee opacity-100 w-px relative grow shrink-0 basis-0 will-change-transform translate-x-[-2592.3px] translate-y-0">
                  <ProjectsMarquee />
                </div>
              </section>
              <section className="bg-[#f6f4ef] w-full h-min relative flex flex-col shrink-0 justify-center content-center items-center gap-y-40 gap-x-40 pt-[120px] pb-40 px-10">
                <div className="w-full h-min max-w-[1440px] relative flex flex-col shrink-0 justify-center content-center items-center gap-y-[60px] gap-x-[60px]">
                  <FeaturedProjectsRowOne />
                  <FeaturedProjectsRowTwo />
                  <ProjectsArchiveCta />
                </div>
              </section>
              <section className="bg-[#f6f4ef] w-full h-min relative flex overflow-x-hidden overflow-y-hidden shrink-0 justify-center content-center items-center gap-y-0 gap-x-0">
                <div
                  name="Service title"
                  className="js-scroll-marquee opacity-100 w-px relative grow shrink-0 basis-0 will-change-transform translate-x-[-2592.3px] translate-y-0"
                >
                  <ServicesMarquee />
                </div>
              </section>
              <section
                id="service"
                className="bg-[#f6f4ef] w-full h-min relative flex flex-col shrink-0 justify-center content-center items-center gap-y-40 gap-x-40 pt-[100px] pb-40 px-10 scroll-mt-[100px]"
              >
                <div className="w-full h-min max-w-[1440px] relative flex flex-col shrink-0 justify-center content-center items-center gap-y-0 gap-x-0">
                  <DigitalCampaignsService />
                  <GrowthStrategyService />
                  <BrandConsultingService />
                  <MarketingStrategyService />
                  <BrandDevelopmentService />
                </div>
              </section>
              <section className="bg-[#f6f4ef] w-full h-min relative flex overflow-x-hidden overflow-y-hidden shrink-0 justify-center content-center items-center gap-y-0 gap-x-0 px-10">
                <div className="w-px max-w-[1440px] aspect-[1.7_/_1] relative flex overflow-x-hidden overflow-y-hidden grow shrink-0 basis-0 justify-center content-end items-end gap-y-0 gap-x-0 rounded-br-[16px] rounded-t-[16px] rounded-bl-[16px]">
                  <div className="contents">
                    <div className="js-parallax opacity-100 absolute top-[-100px] bottom-[-100px] z-[1] shrink-0 will-change-transform translate-x-0 translate-y-[350.76px] inset-x-0">
                      <div className="absolute inset-0">
                        <img
                          width="2400"
                          height="1350"
                          src="https://framerusercontent.com/images/0RKPd5R0f4mK52To1RovQ3ttA.jpg"
                          alt="equipe colaborando no escritorio da Sync"
                          className="object-[center_center] w-full h-full aspect-[auto_2400_/_1350] block object-cover"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </section>
              <section
                id="process"
                className="bg-[#f6f4ef] w-full h-min relative flex shrink-0 justify-center content-center items-center gap-y-0 gap-x-0 pt-40 pb-[140px] px-10 scroll-mt-[100px]"
              >
                <div className="w-px h-min max-w-[1440px] relative flex flex-col grow shrink-0 basis-0 justify-center content-center items-center gap-y-20 gap-x-20">
                  <ProcessSection />
                </div>
              </section>
              <div className="bg-[#f6f4ef] w-full h-min relative flex overflow-x-hidden overflow-y-hidden flex-col shrink-0 justify-center content-center items-center gap-y-0 gap-x-0">
                <div className="js-scroll-marquee opacity-100 w-full relative shrink-0 will-change-transform translate-x-[-2592.3px] translate-y-0">
                  <ExpertiseMarquee />
                </div>
              </div>
              <section className="bg-[#f6f4ef] w-full h-min relative z-[1] flex flex-col shrink-0 justify-center content-center items-center gap-y-40 gap-x-40 pt-[120px] pb-40 px-10">
                <div className="w-full h-min max-w-[1440px] relative flex flex-col shrink-0 justify-center content-center items-center gap-y-[200px] gap-x-[200px]">
                  <ExpertiseSection />
                  <TestimonialsSection />
                </div>
              </section>
              <section className="bg-[#f6f4ef] w-full h-min relative flex shrink-0 justify-center content-center items-center gap-y-0 gap-x-0 pb-[140px] px-10">
                <div className="w-px h-min max-w-[1440px] relative flex flex-col grow shrink-0 basis-0 justify-center content-center items-center gap-y-[60px] gap-x-[60px]">
                  <BlogIntro />
                  <BlogPostGrid />
                  <BlogArchiveCta />
                </div>
              </section>
            </div>
            <div id="overlay"></div>
            <div className="w-0 h-0 relative grow [background-position-x:0px] [background-position-y:0px]"></div>
            <div className="w-full relative z-[8] shrink-0 order-[1003]">
              <div className="contents">
                <div className="bg-[#050814] w-full h-min relative flex overflow-x-hidden overflow-y-hidden justify-center content-center items-center gap-y-0 gap-x-0 pt-[100px] pb-[30px] px-10">
                  <div className="opacity-100 w-full h-full absolute z-0 flex overflow-x-hidden overflow-y-hidden shrink-0 justify-center content-center items-center gap-y-0 gap-x-0 left-[0%] right-auto top-0 bottom-auto">
                    <div className="opacity-100 w-px h-full relative flex grow shrink-0 basis-0 justify-start content-start items-start gap-y-0 gap-x-0">
                      <div
                        className="w-px h-full relative grow shrink-0 basis-0 gap-y-0 gap-x-0 opacity-10"
                        data-style-id="style-9-1779169346309"
                      ></div>
                      <div
                        className="w-px h-full relative grow shrink-0 basis-0 gap-y-0 gap-x-0 opacity-20"
                        data-style-id="style-10-1779169346309"
                      ></div>
                      <div
                        className="w-px h-full relative grow shrink-0 basis-0 gap-y-0 gap-x-0 opacity-30"
                        data-style-id="style-11-1779169346309"
                      ></div>
                      <div
                        className="w-px h-full relative grow shrink-0 basis-0 gap-y-0 gap-x-0 opacity-40"
                        data-style-id="style-12-1779169346309"
                      ></div>
                      <div
                        className="w-px h-full relative grow shrink-0 basis-0 gap-y-0 gap-x-0 opacity-80"
                        data-style-id="style-13-1779169346309"
                      ></div>
                      <div
                        className="w-px h-full relative grow shrink-0 basis-0 gap-y-0 gap-x-0 opacity-85"
                        data-style-id="style-14-1779169346309"
                      ></div>
                      <div
                        className="w-px h-full relative grow shrink-0 basis-0 gap-y-0 gap-x-0 opacity-40"
                        data-style-id="style-15-1779169346309"
                      ></div>
                      <div
                        className="w-px h-full relative grow shrink-0 basis-0 gap-y-0 gap-x-0 opacity-30"
                        data-style-id="style-16-1779169346309"
                      ></div>
                      <div
                        className="w-px h-full relative grow shrink-0 basis-0 gap-y-0 gap-x-0 opacity-20"
                        data-style-id="style-17-1779169346309"
                      ></div>
                      <div
                        className="w-px h-full relative grow shrink-0 basis-0 gap-y-0 gap-x-0 opacity-10"
                        data-style-id="style-18-1779169346309"
                      ></div>
                    </div>
                  </div>
                  <Footer />
                </div>
              </div>
            </div>
            <div className="opacity-100 fixed bottom-[calc(100%_+_24px_-_min(100%,100%))] z-[9] shrink-0 order-[1004] will-change-transform -translate-x-2/4 translate-y-0 left-2/4 right-auto top-auto">
              <nav className="js-floating-nav opacity-100 bg-[#1440fc] w-min h-min relative flex justify-center content-center items-center gap-y-0 gap-x-0 p-1 rounded-br-[999px] rounded-t-[999px] rounded-bl-[999px]">
                <div className="opacity-100 relative z-[1] shrink-0">
                  <a
                    href="./"
                    tabIndex="0"
                    className="opacity-100 bg-[rgba(255,255,255,0)] text-[#1440fc] w-[50px] h-[42px] relative flex justify-center content-center items-center gap-y-0 gap-x-0 caret-[#1440fc] px-3 py-2 rounded-br-[999px] rounded-t-[999px] rounded-bl-[999px]"
                  >
                    <div className="opacity-100 w-min h-min min-w-[26px] min-h-[26px] relative flex overflow-x-hidden overflow-y-hidden flex-col shrink-0 justify-center content-center items-center gap-y-0 gap-x-0 caret-[#1440fc]">
                      <div
                        aria-hidden="true"
                        className="[image-rendering:pixelated] fill-black text-black opacity-100 w-[26px] h-[26px] absolute top-[calc(50%_-_13px)] left-[calc(50%_-_13px)] z-[1] shrink-0 right-auto bottom-auto"
                      >
                        <div className="w-full h-full">
                          <svg
                            viewBox="0 0 26 26"
                            width="100%"
                            height="100%"
                            className="w-full h-full block overflow-x-hidden overflow-y-hidden"
                            data-svg-size="175"
                          >
                            <use
                              href="#svg1061023559_1040"
                              className="inline"
                            ></use>
                          </svg>
                        </div>
                      </div>
                    </div>
                  </a>
                </div>
                <div className="opacity-100 relative z-[1] shrink-0">
                  <FloatingWorkLink />
                </div>
                <div className="opacity-100 relative z-[1] shrink-0">
                  <FloatingAboutLink />
                </div>
                <div className="opacity-100 relative z-[1] shrink-0">
                  <FloatingBlogLink />
                </div>
                <div className="opacity-100 relative z-[1] shrink-0">
                  <FloatingContactLink />
                </div>
                <div className="js-floating-selection opacity-100 bg-[rgba(255,255,255,0.12)] w-[50px] h-[42px] absolute top-[calc(50%_-_21px)] left-1 z-0 overflow-x-hidden overflow-y-hidden shrink-0 rounded-br-[99px] rounded-t-[99px] rounded-bl-[99px] right-auto bottom-auto"></div>
              </nav>
            </div>
          </div>
        </div>
        <div
          id="svg-templates"
          aria-hidden="true"
          className="[contain:strict] w-0 h-0 absolute z-0 overflow-x-hidden overflow-y-hidden left-0 right-auto top-auto bottom-0"
        >
          <svg
            viewBox="0 0 21 20"
            id="svg12103093974"
            className="overflow-x-hidden overflow-y-hidden"
            data-svg-size="420"
          >
            <path
              d="M 4.994 14.094 L 6.264 15.486 L 12.838 9.425 C 12.202 11.725 12.813 14.178 14.244 16.252 L 15.703 14.921 C 13.756 12.182 13.697 8.549 16.262 6.208 L 15.145 4.984 C 12.58 7.325 8.968 6.935 6.417 4.746 L 4.959 6.077 C 6.893 7.691 9.281 8.523 11.629 8.101 Z"
              fill="rgb(5, 8, 20)"
              className="inline fill-[#050814]"
            ></path>
          </svg>
          <svg
            viewBox="0 0 21 20"
            id="svg12065469925"
            className="overflow-x-hidden overflow-y-hidden"
            data-svg-size="419"
          >
            <path
              d="M 4.994 14.094 L 6.264 15.486 L 12.838 9.425 C 12.202 11.725 12.813 14.178 14.244 16.252 L 15.703 14.921 C 13.756 12.182 13.697 8.549 16.262 6.208 L 15.145 4.984 C 12.58 7.325 8.968 6.935 6.417 4.746 L 4.959 6.077 C 6.893 7.691 9.281 8.523 11.629 8.101 Z"
              fill="rgb(255, 255, 255)"
              className="inline fill-white"
            ></path>
          </svg>
          <svg
            width="40"
            height="40"
            viewBox="0 0 40 40"
            fill="none"
            id="svg357967545_627"
            className="w-10 h-10 overflow-x-hidden overflow-y-hidden fill-none"
            data-svg-size="764"
          >
            <circle
              cx="20"
              cy="20"
              r="20"
              transform="matrix(-1 0 0 1 40 0)"
              fill="rgb(246, 244, 239)"
              className="inline [transform:matrix(-1,0,0,1,40,0)] fill-[#f6f4ef]"
            ></circle>
            <g className='inline [clip-path:url("#svg357967545\_627\_clip0\_4053\_3455")] fill-none'>
              <path
                d="M12.79 19.592V21.584L22.246 21.536C20.11 22.88 18.838 25.232 18.478 27.872H20.566C20.998 24.344 23.542 21.464 27.214 21.464V19.712C23.542 19.712 20.998 16.832 20.566 13.304H18.478C18.838 15.944 20.11 18.296 22.246 19.64L12.79 19.592Z"
                fill="rgb(20, 64, 252)"
                className="inline fill-[#1440fc]"
              ></path>
            </g>
            <defs className="inline fill-none"></defs>
          </svg>
          <svg className="w-0 h-0 absolute overflow-hidden" aria-hidden="true">
            <clipPath id="svg357967545_627_clip0_4053_3455">
              <rect
                width="16"
                height="15"
                fill="rgb(255, 255, 255)"
                transform="matrix(-1 0 0 1 28 13)"
                className="w-4 h-[15px] inline [transform:matrix(-1,0,0,1,28,13)] fill-white"
              ></rect>
            </clipPath>
          </svg>
          <svg
            width="26"
            height="26"
            viewBox="0 0 26 26"
            fill="none"
            id="svg1061023559_1040"
            className="w-[26px] h-[26px] overflow-x-hidden overflow-y-hidden fill-none"
            data-svg-size="1190"
          >
            <path
              d="M18.9238 22.087H7.04498C5.92377 22.087 4.98438 21.1779 4.98438 20.0264V10.8446C4.98438 10.2385 5.2571 9.66275 5.74195 9.26881L11.6813 4.35972C12.4389 3.72336 13.5298 3.72336 14.2874 4.35972L20.2268 9.23851C20.7116 9.63245 20.9844 10.2082 20.9844 10.8143V19.9961C20.9844 21.1779 20.045 22.087 18.9238 22.087ZM12.9844 5.11729C12.8026 5.11729 12.5904 5.1779 12.4389 5.29911L6.49953 10.2082C6.31771 10.3597 6.1965 10.6021 6.1965 10.8446V20.0264C6.1965 20.4809 6.56013 20.8749 7.04498 20.8749H18.9238C19.3783 20.8749 19.7723 20.5112 19.7723 20.0264V10.8446C19.7723 10.6021 19.651 10.3597 19.4692 10.2082L13.5298 5.29911C13.3783 5.1779 13.1662 5.11729 12.9844 5.11729Z"
              fill="rgb(255, 255, 255)"
              className="inline fill-white"
            ></path>
            <path
              d="M16.6366 19.4204H9.36387C9.03054 19.4204 8.75781 19.1477 8.75781 18.8144C8.75781 18.481 9.03054 18.2083 9.36387 18.2083H16.6366C16.9699 18.2083 17.2427 18.481 17.2427 18.8144C17.2427 19.1477 16.9699 19.4204 16.6366 19.4204Z"
              fill="rgb(255, 255, 255)"
              className="inline fill-white"
            ></path>
          </svg>
          <svg
            width="21"
            height="22"
            viewBox="0 0 21 22"
            fill="none"
            id="svg1718107284_634"
            className="w-[21px] h-[22px] overflow-x-hidden overflow-y-hidden fill-none"
            data-svg-size="675"
          >
            <g className='inline [clip-path:url("#svg1718107284\_634\_clip0\_4310\_1081")] fill-none'>
              <path
                d="M6.10466 16.7892L7.82978 17.7852L12.5162 9.57204C12.6122 12.0939 14.013 14.3715 16.1194 16.0032L17.1634 14.195C14.324 12.0568 13.1019 8.41367 14.9379 5.23363L13.4206 4.35763C11.5846 7.53767 7.81843 8.30084 4.54709 6.91096L3.50309 8.71922C5.9694 9.72745 8.64229 9.80187 10.8742 8.62404L6.10466 16.7892Z"
                fill="rgb(255, 255, 255)"
                className="inline fill-white"
              ></path>
            </g>
            <defs className="inline fill-none"></defs>
          </svg>
          <svg className="w-0 h-0 absolute overflow-hidden" aria-hidden="true">
            <clipPath id="svg1718107284_634_clip0_4310_1081">
              <rect
                width="16"
                height="15"
                fill="rgb(255, 255, 255)"
                transform="matrix(-0.5 0.866025 0.866025 0.5 8 0.321777)"
                className="w-4 h-[15px] inline [transform:matrix(-0.5,0.866025,0.866025,0.5,8,0.321777)] fill-white"
              ></rect>
            </clipPath>
          </svg>
        </div>
      </div>
    </>
  );
}

export default App;
