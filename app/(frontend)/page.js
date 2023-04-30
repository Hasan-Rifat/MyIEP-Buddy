import Accordion from "../components/Home/Accordion";
import Education from "../components/Home/Education";
import EducationBlog from "../components/Home/EducationBlog";
import Generator from "../components/Home/Generator";
import Hero from "../components/Home/Hero";
import Levels from "../components/Home/Levels";
import Pricing from "../components/Home/Pricing";


export default function Home() {
  return <>
    <Hero />
    <Education />
    <Generator />
    <Levels />
    <EducationBlog />
    <Accordion />
    <Pricing />
  </>;
}
