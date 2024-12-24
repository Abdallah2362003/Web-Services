import "./PricingPage.css";

function PricingPage() {
  const pricingPlans = [
    {
      title: "الخطة الأساسية",
      description:
        "لا تتطلب مهارات البرمجة لإنشاء مواقع فريدة. قم بتخصيص موقعك في الوقت الفعلي وشاهد النتائج على الفور.",
      features: [
        "10GB مساحة القرص",
        "100GB النطاق الترددي الشهري",
        "20 حسابات البريد الإلكتروني",
        "نطاقات فرعية غير محدودة",
      ],
      price: "500 جنية/سنوياً",
      link: "",
    },
    {
      title: "الخطة المهنية",
      description:
        "لا تتطلب مهارات البرمجة لإنشاء مواقع فريدة. قم بتخصيص موقعك في الوقت الفعلي وشاهد النتائج على الفور.",
      features: [
        "10GB مساحة القرص",
        "100GB النطاق الترددي الشهري",
        "20 حسابات البريد الإلكتروني",
        "نطاقات فرعية غير محدودة",
      ],
      price: "600 جنية/سنوياً",
      link: "",
      popular: true,
    },
    {
      title: "الخطة الإحترافية",
      description:
        "لا تتطلب مهارات البرمجة لإنشاء مواقع فريدة. قم بتخصيص موقعك في الوقت الفعلي وشاهد النتائج على الفور.",
      features: [
        "10GB مساحة القرص",
        "100GB النطاق الترددي الشهري",
        "20 حسابات البريد الإلكتروني",
        "نطاقات فرعية غير محدودة",
      ],
      price: "800 جنية/سنوياً",
      link: "",
    },
  ];

  return (
    <div className="pricing-page">
      {/* العنوان */}
      <div className="breadcrumb-area">
        <h1 className="breadcrumb-title">أسعار الاستضافة</h1>
        <ul className="page-list">
          <li className="item-home">
            <a className="bread-link" href="/" title="Home">
              الرئيسية
            </a>
          </li>
          <li className="separator separator-home"></li>
          <li className="item-current">أسعار الاستضافة</li>
        </ul>
      </div>

      {/* وصف القسم */}
      <div className="pricing-elements">
        <div className="container">
          <h2>أسعار الاستضافة</h2>
          <p>
            سواء كنت بحاجة إلى شعار جديد أو موقع ويب أو مقطع فيديو أو حملة
            تسويقية أو كتاب إلكتروني تم إنشاؤه لعملك، فإن مفتاح إنجاح المشروع
            يبدأ بامتلاك موجز إبداعي مدروس جيدًا.
          </p>

          {/* الخطط */}
          <div className="row">
            {pricingPlans.map((plan, index) => (
              <div className="col-md-4" key={index}>
                <div className={`venor-price-box ${plan.popular ? "premium-pricing" : ""}`}>
                  {plan.popular && (
                    <div className="plan-ribbon-wrapper">
                      <div className="plan-ribbon">شائع</div>
                    </div>
                  )}
                  <h3>
                    <strong>{plan.title}</strong>{" "}
                    <span>{plan.description}</span>
                  </h3>
                  <div className="plan-features">
                    <ul>
                      {plan.features.map((feature, idx) => (
                        <li key={idx}>
                          <strong>{feature}</strong>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <a href={plan.link} target="_self" className="btn btn-style1">
                    {plan.price}
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default PricingPage;
