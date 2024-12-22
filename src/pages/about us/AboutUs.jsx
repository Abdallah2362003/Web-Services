import AboutUsPage from "./about/AboutUsPage";
import Testimonial from "../Home/testimonial/Testimonial";
import ClientSlider from "../../Components/client/ClientSlider";
import { Helmet } from "react-helmet-async";
import { useTranslation } from "react-i18next";

function AboutUs() {
  const { t } = useTranslation();
  return (
    <>
      <Helmet>
        <title>{t('About-Head-Title')}</title>
      </Helmet>

      <AboutUsPage />
      <Testimonial />
      <ClientSlider />
    </>
  );
}

export default AboutUs;
