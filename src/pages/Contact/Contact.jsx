import ContactPage from "./ContactPage/ContactPage";
import ClientSlider from "../../Components/client/ClientSlider";
import { Helmet } from "react-helmet-async";
import { useTranslation } from "react-i18next";

function Contact() {
  const { t } = useTranslation();
  return (
    <>
      <Helmet>
        <title>{t('Contact-Head-Title')}</title>
      </Helmet>
      <ContactPage />
      <ClientSlider />
    </>
  );
}

export default Contact;
