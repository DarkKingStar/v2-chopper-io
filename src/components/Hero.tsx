import Image from "next/image";
import { Container } from "@/components/Container";
import heroImg from "../../public/img/hero.svg";

export const Hero = () => {
  return (
    <>
      <Container className="flex flex-wrap lg:mx-12 xl:mx-12">
        <div className="flex items-center w-full lg:w-2/3">
          <div className="max-w-2xl mb-8">
            <h1
              className="text-4xl font-bold leading-snug tracking-tight text-gray-800 lg:text-4xl lg:leading-tight xl:text-6xl xl:leading-tight dark:text-white "
            >
              Free Anime Streaming for Otakus
            </h1>
            <p className="py-5 text-xl leading-normal text-gray-500 lg:text-xl xl:text-2xl dark:text-gray-300">
              Chopper.IO is a free anime streaming and download platform
              designed for the Otaku community. Enjoy unlimited access to your
              favorite anime shows and movies, all in one place.
            </p>

            <div className="flex flex-col items-start space-y-3 sm:space-x-4 sm:space-y-0 sm:items-center sm:flex-row">
              <a
                href="#"
                target="_blank"
                rel="noopener"
                className="flex items-center justify-center space-x-4 px-6 py-3 bg-theme-100 text-white font-semibold text-lg rounded-lg shadow-lg hover:bg-theme-200 transition duration-300 ease-in-out"
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
              <a
                href="/home"
                target="_blank"
                rel="noopener"
                className="flex items-center space-x-2 text-gray-500 dark:text-gray-400">
                  <Image 
                    src="/img/web-logo.svg"
                    alt="Continue on Web"
                    width={24}
                    height={24}
                    className="object-contain"
                  />
                <span>Continue on Website</span>
              </a>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-center w-full lg:w-1/3">
          <div className="">
            <Image
              src={heroImg}
              width="412"
              height="418"
              className={"object-contain"}
              alt="Hero Illustration"
              loading="eager"
            />
          </div>
        </div>
      </Container>
      <Container>
        <div className="flex flex-col justify-center">
          <div className="text-xl text-center text-gray-700 dark:text-white">
            Loved by <span className="text-theme-100">2000+</span> anime fans
            worldwide
          </div>
          <div className="flex flex-wrap justify-center gap-5 mt-10 md:justify-around">
            <div className="pt-2 text-gray-400 dark:text-gray-400">
              {/* <AmazonLogo /> */}
            </div>
            <div className="text-gray-400 dark:text-gray-400">
              {/* <VerizonLogo /> */}
            </div>
            <div className="text-gray-400 dark:text-gray-400">
              {/* <MicrosoftLogo /> */}
            </div>
            <div className="pt-1 text-gray-400 dark:text-gray-400">
              {/* <NetflixLogo /> */}
            </div>
            <div className="pt-2 text-gray-400 dark:text-gray-400">
              {/* <SonyLogo /> */}
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};
