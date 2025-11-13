
import HeroSection from "./page-ui/hero/page"
import FourVedas from "./page-ui/fourvedas/page"
import AskYourQuestion from './page-ui/yourquestion/page'
import AboutVedicPedia from './page-ui/aboutvedic/page'
import FaqArticles from './page-ui/faqsarticles/page'
import VideoClip from '../components/video-clip/featured-clip'

export default function Home() {
  return (
    <>
      <HeroSection />
      <div>
        <FourVedas />
      </div>
      <div>
        <AskYourQuestion />
      </div>
      <div>
        <VideoClip/>
      </div>
      <div>
        <AboutVedicPedia />
      </div>
      <div>
        <FaqArticles />
      </div>
    </>
  );
}
