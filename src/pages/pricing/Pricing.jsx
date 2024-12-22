import PricingPage from "./pricingP/PricingPage";
import { Helmet } from "react-helmet-async";
import { useTranslation } from "react-i18next";

function Pricing() {
  const { t } = useTranslation();
  return (
    <>
      <Helmet>
        <title>{t('Pricing-Head-Title')}</title>
      </Helmet>
      <PricingPage />
    </>
  );
}

export default Pricing;
