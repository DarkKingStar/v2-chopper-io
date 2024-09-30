import React from "react";
import { Container } from "@/components/Container";
import Image from "next/image";

export const Cta = () => {
  return (
    <Container>
      <div
        className="flex flex-wrap items-center justify-between w-full max-w-4xl gap-5 mx-auto text-white lg:flex-nowrap rounded-xl"
        style={{
          backgroundImage: "url('/img/cta-bg.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
         <div
        className="flex flex-wrap items-center justify-between w-full max-w-4xl gap-5 mx-auto text-white px-7 py-7 lg:px-12 lg:py-12 lg:flex-nowrap rounded-xl bg-black bg-opacity-60"
      >

        <div className="flex-grow text-center lg:text-left">
          <h2 className="text-2xl font-medium lg:text-3xl">
            Ready to try-out our App?
          </h2>
          <p className="mt-2 font-medium text-white text-opacity-90 text-sm">
            Avaiable for Android and iOS
          </p>
        </div>
        <div className="flex-shrink-0 w-full text-center lg:w-auto">
          <a
            href="#"
            target="_blank"
            rel="noopener"
            className="flex items-center justify-center space-x-4 px-6 py-5 bg-theme-800 text-white font-semibold text-lg rounded-lg shadow-lg hover:bg-theme-200 transition duration-300 ease-in-out"
          >
            <span>Download for Free</span>
            <div className="flex space-x-2">
              <Image
                src="/img/android-logo.svg"
                alt="Download for Android"
                width={24}
                height={24}
                className="object-contain"
              />
              <Image
                src="/img/apple-logo.svg"
                alt="Download for iOS"
                width={24}
                height={24}
                className="object-contain"
              />
            </div>
          </a>
        </div>
      </div>
      </div>
    </Container>
  );
};
