import { Link } from "react-router-dom";

const includedFeatures = [
  "Web Design and Development",
  "Search Engine Optimization",
  "Logos and Graphic Design",
  "Lifetime Updates and Hosting",
];

export default function PricingCard() {
  return (
    <div className="pb-24 sm:pb-32">
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto mt-16 max-w-2xl rounded-xl ring-1 ring-gray-200 sm:mt-20 lg:mx-0 lg:flex lg:max-w-none">
          <div className="p-8 sm:p-10 lg:flex-auto">
            <h3 className="text-4xl font-bold tracking-tight text-gray-900">
              Start your website
            </h3>
            <p className="mt-6 text-lg leading-7 text-gray-600">
              Looking to create a website? Whether it's a standard 5-page site
              or something larger, we can help.
            </p>
            <div className="mt-10 flex items-center gap-x-4">
              <h4 className="flex-none text-md font-semibold leading-6 text-mainblue">
                What’s included
              </h4>
              <div className="h-px flex-auto bg-gray-100" />
            </div>
            <ul
              role="list"
              className="mt-8 grid grid-cols-1 gap-4 text-sm leading-6 text-gray-600 sm:grid-cols-2 sm:gap-6"
            >
              {includedFeatures.map((feature) => (
                <li key={feature} className="flex gap-x-3">
                  <span className="material-symbols-outlined text-sm text-lightblue">
                    check
                  </span>
                  {feature}
                </li>
              ))}
            </ul>
          </div>
          <div className="-mt-2 p-2 lg:mt-0 lg:w-full lg:max-w-md lg:flex-shrink-0">
            <div className="rounded-xl py-10 text-center ring-1 ring-inset ring-gray-900/5 lg:flex lg:flex-col lg:justify-center lg:py-16">
              <div className="mx-auto max-w-xs px-8">
                <p className="text-base font-semibold text-gray-600">
                  Standard 5-Page
                </p>
                <p className="mt-6 flex items-baseline justify-center gap-x-2">
                  <span className="text-5xl font-bold tracking-tight text-gray-900">
                    $150
                  </span>
                  <span className="text-sm font-semibold leading-6 tracking-wide text-gray-600">
                    / mo
                  </span>
                </p>
                <Link
                  to="/contact"
                  onClick={() => handleClick("/home")}
                  className="mt-10 block w-full rounded-full bg-mainblue px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  Contact Us
                </Link>
                <p className="mt-6 text-xs leading-5 text-gray-600">
                  Thinking of something bigger? Contact for custom pricing and
                  services.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
