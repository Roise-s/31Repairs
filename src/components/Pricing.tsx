import React, { useState } from "react";

type Category = "all" | "iphone-battery" | "iphone-screen" | "iphone-back-glass" | "others";

interface PortfolioCardProps {
  showCard: Category;
  category: string;
  ImageHref: string;
  title: string;
  button: string;
  buttonHref: string;
}

const PortfolioCard: React.FC<PortfolioCardProps> = ({
  showCard,
  category,
  ImageHref,
  title,
  button,
  buttonHref,
}) => {
  return (
    <div
      className={`w-full px-4 md:w-1/2 xl:w-1/3 ${
        showCard === "all" || showCard === category.toLowerCase()
          ? "block"
          : "hidden"
      }`}
    >
      <div className="relative mb-12">
        <div className="overflow-hidden rounded-[10px]">
          <img src={ImageHref} alt="portfolio" className="w-full" />
        </div>
        <div className="relative z-10 mx-7 -mt-20 rounded-lg bg-white dark:bg-dark-2 py-[34px] px-3 text-center shadow-portfolio dark:shadow-box-dark">
          <span className="text-primary mb-2 block text-sm font-medium">
            {category}
          </span>
          <h3 className="text-dark dark:text-white mb-5 text-xl font-bold">
            {title}
          </h3>
          <a
            href={buttonHref}
            className="text-body-color dark:text-dark-6 hover:border-primary hover:bg-primary inline-block rounded-md border border-stroke dark:border-dark-3 py-[10px] px-7 text-sm font-medium transition hover:text-white"
          >
            {button}
          </a>
        </div>
      </div>
    </div>
  );
};

const Portfolio: React.FC = () => {
  const [showCard, setShowCard] = useState<Category>("iphone-battery");

  const handleProject = (category: Category) => {
    setShowCard(category);
  };

  return (
    <section className="pt-20 pb-12 lg:pt-[120px] lg:pb-[90px] dark:bg-dark">
      <div className="container mx-auto">
        <div className="flex flex-wrap -mx-4">
          <div className="w-full px-4">
            <div className="mx-auto mb-[60px] max-w-[510px] text-center">
              <h2 className="text-dark mb-3 text-3xl leading-[1.208] font-bold sm:text-4xl md:text-[40px]">
                Our Services
              </h2>
              <p className="text-body-color text-base dark:text-dark-6">
                Select the type of replacement you want for your phone so we can understand how to best assist you.
              </p>
            </div>
          </div>
        </div>

        {/* Buttons */}
        <div className="w-full flex flex-wrap justify-center -mx-4">
          <div className="w-full px-4">
            <ul className="flex flex-wrap justify-center mb-12 space-x-1">
              {(["iphone-battery", "iphone-screen", "iphone-back-glass", "others"] as Category[]).map(
                (cat) => (
                  <li key={cat} className="mb-1">
                    <button
                      onClick={() => handleProject(cat)}
                      className={`inline-block rounded-lg py-2 px-5 text-center text-base font-semibold transition md:py-3 lg:px-8 ${
                        showCard === cat
                          ? "activeClasses bg-primary text-white"
                          : "inactiveClasses text-body-color dark:text-dark-6 hover:bg-primary hover:text-white"
                      }`}
                    >
                      {cat === "all"
                        ? ""
                        : cat.charAt(0).toUpperCase() + cat.slice(1)}
                    </button>
                  </li>
                )
              )}
            </ul>
          </div>
        </div>

        {/* Cards */}
        <div className="flex flex-wrap -mx-4">
          <PortfolioCard
            ImageHref="https://cdn.tailgrids.com/assets/images/marketing/portfolio/portfolio-01/image-01.jpg"
            category="iphone-battery"
            title="Creative Agency"
            button="View Details"
            buttonHref="#"
            showCard={showCard}
          />
          <PortfolioCard
            ImageHref="https://cdn.tailgrids.com/assets/images/marketing/portfolio/portfolio-01/image-06.jpg"
            category="iphone-back-glass"
            title="Creative Agency"
            button="View Details"
            buttonHref="#"
            showCard={showCard}
          />
          <PortfolioCard
            ImageHref="https://cdn.tailgrids.com/assets/images/marketing/portfolio/portfolio-01/image-03.jpg"
            category="others"
            title="Creative Agency"
            button="View Details"
            buttonHref="#"
            showCard={showCard}
          />
          <PortfolioCard
            ImageHref="https://cdn.tailgrids.com/assets/images/marketing/portfolio/portfolio-01/image-04.jpg"
            category="iphone-screen"
            title="Creative Agency"
            button="View Details"
            buttonHref="#"
            showCard={showCard}
          />
        </div>
      </div>
    </section>
  );
};

export default Portfolio;



