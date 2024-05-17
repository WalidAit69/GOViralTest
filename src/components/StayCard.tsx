import React, { FC } from "react";
import { DEMO_STAY_LISTINGS } from "@/data/listings";
import { StayDataType } from "@/data/types";
import StartRating from "@/components/StartRating";
import BtnLikeIcon from "@/components/BtnLikeIcon";
import SaleOffBadge from "@/components/SaleOffBadge";
import Badge from "@/shared/Badge";
import Link from "next/link";
import GallerySlider from "./GallerySlider";
import {
  TbBed,
  TbBath,
  TbWifi,
  TbAirConditioning,
  TbParking,
} from "react-icons/tb";

export interface StayCardProps {
  className?: string;
  data?: StayDataType;
  size?: "default" | "small";
}

const DEMO_DATA = DEMO_STAY_LISTINGS[0];

const StayCard: FC<StayCardProps> = ({
  size = "default",
  className = "",
  data = DEMO_DATA,
}) => {
  const {
    galleryImgs,
    listingCategory,
    address,
    title,
    bedrooms,
    href,
    like,
    saleOff,
    isAds,
    price,
    reviewStart,
    reviewCount,
    id,
    perks,
  } = data;

  const renderSliderGallery = () => {
    return (
      <div className="relative w-full">
        <GallerySlider
          uniqueID={`StayCard_${id}`}
          ratioClass="aspect-w-4 aspect-h-2"
          galleryImgs={galleryImgs}
          href={href}
          galleryClass={size === "default" ? undefined : ""}
        />
        <BtnLikeIcon isLiked={like} className="absolute right-7 top-7 z-[1]" />
        {/* {saleOff && <SaleOffBadge className="absolute left-3 top-3" />} */}
      </div>
    );
  };

  const renderContent = () => {
    return (
      <div
        className={
          size === "default" ? "px-4 pb-4 space-y-4" : "px-3 pb-3 space-y-1"
        }
      >
        <div className="">
          <div className="flex items-center space-x-2">
            <h2
              className={`font-semibold capitalize text-neutral-900 dark:text-white text-lg ${
                size === "default" ? "text-base" : "text-base"
              }`}
            >
              <span className="line-clamp-1">{title}</span>
            </h2>
          </div>

          <div className="mb-5 flex items-center text-neutral-500 dark:text-neutral-400 text-sm space-x-1.5">
            {size === "default" && (
              <svg
                className="h-4 w-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="#67b6ff"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                />
              </svg>
            )}
            <span className="">{address}</span>
          </div>

          <div className="w-full flex items-center justify-between gap-3 mt-6">
            <button className="py-3 w-full border border-[#67b6ff] text-[#67b6ff] hover:bg-[#67b6ff] hover:text-white transition-colors duration-300 rounded-2xl">
              Modifier
            </button>
            <button className="py-3 w-full border border-red-500 text-red-500 hover:bg-red-500 hover:text-white transition-colors duration-300 rounded-2xl">
              Supprimer
            </button>
          </div>
        </div>

        <div className="w-full border-b border-neutral-100 dark:border-neutral-800"></div>

        <div className="flex gap-3 items-center">
          {perks &&
            perks.map((Icon, index) => (
              <Icon key={index} className="text-[#67b6ff] opacity-50 w-5 h-5" />
            ))}
        </div>
      </div>
    );
  };

  return (
    <div
      className={`nc-StayCard group relative bg-white dark:bg-neutral-900 ${
        size === "default"
          ? "border border-neutral-100 dark:border-neutral-800 "
          : ""
      } rounded-2xl overflow-hidden hover:shadow-xl transition-shadow ${className}`}
      data-nc-id="StayCard"
    >
      {renderSliderGallery()}
      <Link href={href}>{renderContent()}</Link>
    </div>
  );
};

export default StayCard;
