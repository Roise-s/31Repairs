import React, { useState } from "react";
import PriceTable from "./PriceTable";
import PriceS from "./PriceS";
import PriceB from "./PriceBack";
import OthersPage from "./OthersPage";

type Category = "all" | "iphone-battery" | "iphone-screen" | "iphone-back-glass" | "others";

interface PortfolioCardProps {
  showCard: Category;
  category: string;
}

const PortfolioCard: React.FC<PortfolioCardProps> = ({
  showCard,
  category,
}) => {
  const Tablearea = (category: string) => {
    if (category === "iphone-battery") {
      return <PriceTable />
    } else if (category === "iphone-screen") {
      return <PriceS />
    } else if (category === "iphone-back-glass") {
      return <PriceB />
    } else {
      return <OthersPage />
    }
  }
  return (
    <div
      className={`w-full px-4 md:w-1/2 xl:w-1/3 ${
        showCard === "all" || showCard === category.toLowerCase()
          ? "block"
          : "hidden"
      }`}
    >
      {Tablearea(category)}
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
                See what price, the type of replacement you want for your phone so we can understand how to best assist you.
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
        <div className="flex flex-wrap justify-center -mx-4">
          <PortfolioCard
            category="iphone-battery"
            showCard={showCard}
          />
          <PortfolioCard
            category="iphone-back-glass"
            showCard={showCard}
          />
          <PortfolioCard
            category="others"
            showCard={showCard}
          />
          <PortfolioCard
            category="iphone-screen"
            showCard={showCard}
          />
        </div>
      </div>
    </section>
  );
};

export default Portfolio;



