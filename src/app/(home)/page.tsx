import LiveUpdate from "@/components/Home/LiveUpdate";
import CurrentAffair from "@/components/Home/currentAffair";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <section className="px-5 block md:px-10">
      <div className="mx-auto w-full max-w-7xl">
        <div className="py-16 md:py-20">
          <div className="grid items-center max-[991px]:justify-items-start grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-20">
            <div className="max-[991px]:max-w-[720px]">
              <h1 className="font-bold mb-4 leading-normal text-4xl md:text-6xl">
                PaperAdda : Your Gateway to Knowledge and Beyond
              </h1>
              <div className="max-w-[528px] mb-5 md:mb-6 lg:mb-8">
                <p className="text-[#636262]  lg:leading-6 lg:text-xs sm:text-xl">
                  Unlock a world of learning possibilities with EduVerse, your
                  all-in-one destination for educational enrichment. Dive into a
                  vast ocean of knowledge, where you can watch courses, tackle
                  exams, conquer quizzes, explore current affairs, and ignite
                  your passion for learning.
                </p>
              </div>
              <div className="w-full max-w-xs mb-6 md:mb-10 lg:mb-12">
                <div className="flex items-center">
                  <Image
                    width={28}
                    height={28}
                    src="https://assets.website-files.com/6458c625291a94a195e6cf3a/6458c625291a945e53e6cf8f_Ellipse%2011%20(1).svg"
                    alt=""
                    className="inline-block h-7 w-7 max-w-full mr-2"
                  />
                  <p className="font-bold text-sm sm:text-sm">Anantram</p>
                  <div className="ml-4 mr-4 h-full px-0 [border-right-style:solid] py-3"></div>
                  <p className="font-bold mr-2 text-sm sm:text-sm">5.0</p>
                  <Image
                    src="https://assets.website-files.com/6458c625291a94a195e6cf3a/6458c625291a947e84e6cf91_Vector.svg"
                    alt=""
                    width={14}
                    height={14}
                    className="inline-block max-w-full flex-none mr-1 w-3.5"
                  />
                  <Image
                    src="https://assets.website-files.com/6458c625291a94a195e6cf3a/6458c625291a947e84e6cf91_Vector.svg"
                    alt=""
                    width={14}
                    height={14}
                    className="inline-block max-w-full flex-none mr-1 w-3.5"
                  />
                  <Image
                    width={14}
                    height={14}
                    src="https://assets.website-files.com/6458c625291a94a195e6cf3a/6458c625291a947e84e6cf91_Vector.svg"
                    alt=""
                    className="inline-block max-w-full flex-none mr-1 w-3.5"
                  />
                  <Image
                    width={14}
                    height={14}
                    src="https://assets.website-files.com/6458c625291a94a195e6cf3a/6458c625291a947e84e6cf91_Vector.svg"
                    alt=""
                    className="inline-block max-w-full flex-none mr-1 w-3.5"
                  />
                  <Image
                    width={14}
                    height={14}
                    src="https://assets.website-files.com/6458c625291a94a195e6cf3a/6458c625291a947e84e6cf91_Vector.svg"
                    alt=""
                    className="inline-block max-w-full flex-none mr-1 w-3.5"
                  />
                </div>
              </div>
              <div className="flex items-center mb-6 md:mb-10 lg:mb-12">
                <Link
                  href="/courses"
                  className="box-border relative z-30 inline-flex items-center justify-center w-auto px-8 py-3 overflow-hidden font-bold text-white transition-all duration-300 bg-indigo-600 rounded-md cursor-pointer group ring-offset-2 ring-1 ring-indigo-300 ring-offset-indigo-200 hover:ring-offset-indigo-500 ease focus:outline-none"
                >
                  <span className="absolute bottom-0 right-0 w-8 h-20 -mb-8 -mr-5 transition-all duration-300 ease-out transform rotate-45 translate-x-1 bg-white opacity-10 group-hover:translate-x-0"></span>
                  <span className="absolute top-0 left-0 w-20 h-8 -mt-1 -ml-12 transition-all duration-300 ease-out transform -rotate-45 -translate-x-1 bg-white opacity-10 group-hover:translate-x-0"></span>
                  <span className="relative z-20 flex items-center text-sm">
                    <svg
                      className="relative w-5 h-5 mr-2 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M13 10V3L4 14h7v7l9-11h-7z"
                      ></path>
                    </svg>
                    Get Started
                  </span>
                </Link>
                <a
                  href="#"
                  className="flex-row flex max-w-full items-center justify-center border border-solid border-black px-6 py-3 font-bold text-black"
                >
                  <Image
                    width={20}
                    height={20}
                    src="https://assets.website-files.com/6458c625291a94a195e6cf3a/6458c625291a94d411e6cf99_Vector%20(6).svg"
                    alt=""
                    className="mr-2 inline-block max-h-4 max-w-full w-5"
                  />
                  <p className="text-black max-[479px]:text-sm">Download App</p>
                </a>
              </div>
              <p className="max-[479px]:text-sm">Available on</p>
              <div className="mt-2 flex items-start">
                <a
                  href="#"
                  className="flex max-w-full items-center text-black mr-6 md:mr-10 lg:mr-12"
                >
                  <Image
                    width={32}
                    height={32}
                    src="https://assets.website-files.com/6458c625291a94a195e6cf3a/6458c625291a944d39e6cf9a_Vector%20(7).svg"
                    alt=""
                    className="inline-block h-8 w-8 max-w-full"
                  />
                  <div className="ml-2.5">
                    <p className="text-[#636262] text-sm sm:text-sm">
                      Download on{" "}
                    </p>
                    <p className="font-semibold text-[#636262] text-sm sm:text-sm">
                      App Store
                    </p>
                  </div>
                </a>
                <a href="#" className="flex max-w-full items-center text-black">
                  <Image
                    src="https://assets.website-files.com/6458c625291a94a195e6cf3a/6458c625291a945d29e6cf9b_Vector%20(8).svg"
                    width={32}
                    height={32}
                    alt=""
                    className="inline-block h-8 w-8 max-w-full"
                  />
                  <div className="ml-2.5">
                    <p className="text-[#636262] text-sm sm:text-sm">
                      Get it on
                    </p>
                    <p className="font-semibold text-[#636262] text-sm sm:text-sm">
                      Google Play
                    </p>
                  </div>
                </a>
              </div>
            </div>
            <div className="">
              <Image
                width={640}
                height={300}
                src="/student.webp"
                alt=""
                className="mx-auto inline-block h-full w-full max-w-[640px] object-cover"
              />
            </div>
          </div>
        </div>
      </div>

      <LiveUpdate />
      <CurrentAffair />
    </section>
  );
}
