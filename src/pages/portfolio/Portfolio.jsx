import PortfolioPage from "../portfolio/portfolio page/PortfolioPage";
import { Helmet } from "react-helmet-async";
import { useTranslation } from "react-i18next";
function Portfolio() {
  const { t } = useTranslation();
  return (
    <>
      <Helmet>
        <title>{t('Portfolio-Head-Title')}</title>
      </Helmet>
      <PortfolioPage />
    </>
  );
}

export default Portfolio;
