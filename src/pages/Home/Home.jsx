import Hero from "./hero/Hero";
import AboutUs from "./about/AboutUs";
import Services from "./services/Services";
import Portfolio from "./portfolio/portfolio";
import FunFacts from "./funFacts/FunFacts";
import Testimonial from "./testimonial/Testimonial";
import ClientSlider from "../../Components/client/ClientSlider";
import { Helmet } from "react-helmet-async";
import { useTranslation } from "react-i18next";

function Home() {
  const {t} = useTranslation();
  return (
    <>
      <Helmet>
        <title>
          {t("Home-Head-Title")}
        </title>
      </Helmet>

      <Hero />
      <AboutUs />
      <Services />
      <Portfolio />
      <FunFacts />
      <Testimonial />
      <ClientSlider />
    </>
  );
}

export default Home;
