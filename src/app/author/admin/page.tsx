"use client";

import { Tab } from "@headlessui/react";
import React, { FC, Fragment, useState } from "react";
import { GrDocumentText } from "react-icons/gr";
import { MdMailOutline } from "react-icons/md";
import { FaRegPaperPlane } from "react-icons/fa";
import MenuSignOutBtn from "@/components/author/MenuSignOutBtn";
import Image from "next/image";
import ProfileSection from "@/components/author/ProfileSection";
import { useMenu } from "@/store/store";
import { cn } from "@/utils/twmerge";
import { BsHouses } from "react-icons/bs";
import { HiOutlineUsers } from "react-icons/hi2";
import { FaRegMessage } from "react-icons/fa6";
import { LuCalendarClock } from "react-icons/lu";
import Logements from "@/components/author/admin sections/Logements";
import Users from "@/components/author/admin sections/Users";
import Reservation from "@/components/author/admin sections/Reservation";
import ReservationPostes from "@/components/author/ReservationPostes";
import Converstions from "@/components/author/admin sections/Converstions";
import Pages from "@/components/author/admin sections/Pages";
import Newsletter from "@/components/author/admin sections/Newsletter";
import TransactionMessages from "@/components/author/admin sections/TransactionMessages";
import { useRole } from "@/hooks/useRole";
import { redirect } from "next/navigation";

export interface AuthorPageProps {}

const AuthorPage: FC<AuthorPageProps> = ({}) => {
  const role = useRole();

  const [Menu] = useState([
    {
      title: "Logements",
      icon: BsHouses,
    },
    {
      title: "Utilisateurs",
      icon: HiOutlineUsers,
    },
    {
      title: "Réservations",
      icon: LuCalendarClock,
    },
    {
      title: "Demandes de réservations postées",
      icon: LuCalendarClock,
    },
    {
      title: "Conversations",
      icon: MdMailOutline,
    },
    {
      title: "Pages",
      icon: GrDocumentText,
    },
    {
      title: "Newsletter",
      icon: FaRegPaperPlane,
    },
    {
      title: "Messages de transaction",
      icon: FaRegMessage,
    },
  ]);

  const [MenuItem, setMenuItem] = useState("Logements");

  const handleTabClick = (selectedMenuItem: string) => {
    setMenuItem(selectedMenuItem);
  };

  const { MenuOpen, closeMenu } = useMenu();

  const renderSidebar = () => {
    return (
      <div
        className={cn(
          "fixed lg:static -right-[100%] top-0 h-[100vh] lg:h-auto w-full flex justify-end lg:justify-normal",
          MenuOpen
            ? "transition-all duration-500 right-0"
            : "transition-all duration-500 -right-[100%]"
        )}
      >
        <div className="flex w-full h-full">
          {/* ---- */}
          <div
            onClick={closeMenu}
            className={cn(
              `bg-transparent w-full h-full backdrop-blur-sm lg:hidden sm:block hidden`,
              MenuOpen ? "backdrop-blur-sm" : "backdrop-blur-none"
            )}
          ></div>

          <div className="flex flex-col items-center justify-center gap-6 w-full lg:w-full mx-auto sm:w-[500px] dark:border-neutral-700 space-y-6 sm:space-y-7 px-4 lg:p-6 xl:p-8 dark:bg-neutral-900 shadow-[0_8px_30px_rgb(0,0,0,0.12)] bg-white ">
            <div className="items-center justify-center gap-4 ml-5 flex flex-col w-[95%] mx-auto">
              <h2 className="text-3xl font-semibold text-center">
                Adminisrtation
              </h2>
              <div className="w-[80%] h-[1px] bg-neutral-100"></div>
            </div>

            <Tab.Group>
              <Tab.List className="flex flex-col gap-4 mb-[100px] w-full">
                {Menu.map((item) => (
                  <Tab key={item.title} as={Fragment}>
                    {({ selected }) => (
                      <button
                        onClick={() => {
                          handleTabClick(item.title);
                          closeMenu();
                        }}
                        className={`w-full flex-shrink-0 block !leading-none py-2.5 text-sm sm:text-base sm:py-3 rounded-full focus:outline-none ${
                          selected
                            ? "bg-[#67b6ff] text-secondary-50 font-medium"
                            : "bg-[#f5f5f5] font-light dark:text-neutral-400 dark:hover:text-neutral-100 hover:text-neutral-900 hover:bg-neutral-200 dark:hover:bg-neutral-800"
                        } `}
                      >
                        <span
                          className={`h-full w-full flex items-center gap-5 pl-7 max-w-[90%] mx-auto ${
                            selected ? "text-accent-500" : "text-gray-400"
                          }`}
                        >
                          <item.icon className={`w-[25px] h-[25px]`} />
                          <span className={`pl-3 text-left w-[70%]`}>
                            {item.title}
                          </span>
                        </span>
                      </button>
                    )}
                  </Tab>
                ))}
              </Tab.List>
            </Tab.Group>

            <MenuSignOutBtn />
          </div>
        </div>
      </div>
    );
  };

  const sections = {
    Logements: Logements,
    Utilisateurs: Users,
    Réservations: Reservation,
    "Demandes de réservations postées": ReservationPostes,
    Conversations: Converstions,
    Pages: Pages,
    Newsletter: Newsletter,
    "Messages de transaction": TransactionMessages,
  };

  // @ts-ignore
  const SectionComponent = sections[MenuItem] || null;

  role !== "Admin" && redirect("/");

  return (
    <div className={`nc-AuthorPage relative overflow-hidden`}>
      <section className="container lg:mt-12 mb-24 lg:mb-32 flex flex-col lg:flex-row">
        <div className="block flex-grow mb-24 lg:mb-0 z-20">
          <div className="lg:top-24">{renderSidebar()}</div>
        </div>
        <div className="w-full lg:w-3/5 xl:w-2/3 space-y-8 lg:space-y-10 lg:pl-10 flex-shrink-0">
          {SectionComponent && <SectionComponent />}
        </div>

        <div className="absolute w-full h-full top-0 left-[60%] -translate-x-1/2 -z-10">
          <Image
            src="/vevtor.svg"
            width={100}
            height={100}
            alt=""
            className="w-full h-[200%]"
          />
        </div>
      </section>
    </div>
  );
};

export default AuthorPage;
