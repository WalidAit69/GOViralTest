import React, { FC, Fragment, useState } from "react";
import ScrollContainer from "react-indiana-drag-scroll";
import { Tab } from "@headlessui/react";
import StayCard from "@/components/StayCard";
import { DEMO_STAY_LISTINGS } from "@/data/listings";
import ButtonSecondary from "@/shared/ButtonSecondary";

function RenderSection1({ Loueur }: { Loueur: boolean }) {
  let [categories] = useState(
    !Loueur
      ? ["Toutes", "En attente", "Validées", "Refusées", "Annulées", "Expirées"]
      : ["Toutes", "Validées", "En attente de validation", "Refusées", "Suspendus", "Expirées"]
  );

  return (
    <div className="listingSection__wrap">
      <h2 className="text-3xl font-bold text-center">Mes réservations</h2>

      <div className="overflow-x-hidden">
        <Tab.Group>
          <ScrollContainer>
            <Tab.List className="flex space-x-1 overflow-x-auto-auto gap-2">
              {categories.map((item) => (
                <Tab key={item} as={Fragment}>
                  {({ selected }) => (
                    <button
                      className={`flex-shrink-0 block !leading-none px-5 py-2.5 text-sm sm:text-base sm:px-6 sm:py-3 capitalize rounded-full focus:outline-none ${
                        selected
                          ? "bg-[#67b6ff] text-secondary-50 font-medium"
                          : "bg-[#f5f5f5] font-normal text-gray-500 dark:text-neutral-400 dark:hover:text-neutral-100 hover:text-neutral-900 hover:bg-neutral-200 dark:hover:bg-neutral-800"
                      } `}
                    >
                      {item}
                    </button>
                  )}
                </Tab>
              ))}
            </Tab.List>
          </ScrollContainer>

          {Loueur && (
            <Tab.Panels>
              <Tab.Panel className="">
                <div className="mt-8 grid grid-cols-1 gap-6 md:gap-7 sm:grid-cols-2">
                  {DEMO_STAY_LISTINGS.filter((_, i) => i < 4).map((stay) => (
                    <StayCard key={stay.id} data={stay} />
                  ))}
                </div>
                <div className="flex mt-11 justify-center items-center">
                  <ButtonSecondary>Show me more</ButtonSecondary>
                </div>
              </Tab.Panel>
            </Tab.Panels>
          )}
        </Tab.Group>
      </div>
    </div>
  );
}

export default RenderSection1;
