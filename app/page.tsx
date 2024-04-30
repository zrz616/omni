import { Button } from "@/components/ui/button";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { ArrowDown } from "lucide-react";
import Image from "next/image";

const bannerImgURL = [
  "https://omnibvi.com/files/thumbnails/static_web_img_index_banner01_desktop_1920x960.webp",
  "https://omnibvi.com/files/thumbnails/static_web_img_index_banner02_desktop_1920x960.webp"
];

const aboutDate = [
  {
    href: "https://omnibvi.com/static/web/img/index/index_about_01.webp",
    line1: "代理全球",
    line2: "數一數二品牌"
  },
  {
    href: "https://omnibvi.com/static/web/img/index/index_about_02.webp",
    line1: "提供 24/7",
    line2: "在線工程師服務"
  },
  {
    href: "https://omnibvi.com/static/web/img/index/index_about_01.webp",
    line1: "協助企業快速上雲",
    line2: "資安防護"
  },
  {
    href: "https://omnibvi.com/static/web/img/index/index_about_01.webp",
    line1: "豐富跨產業經驗",
    line2: ""
  },
];

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <section className="w-full relative">
        <Carousel className="w-full" opts={{ loop: true }}>
          <CarouselContent>
            {bannerImgURL.map((href, index) => (
              <CarouselItem key={index}>
                <img className="rounded-bl-[110px]" src={href} alt="banner"></img>
                {/* <div className="p-1">
                <span className="text-4xl font-semibold">{index + 1}</span>
              </div> */}
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
        <div>
          <Button className="absolute right-20 -bottom-12 rounded-full w-24 h-24 hover:bg-orange-400 bg-orange-500">
            <ArrowDown />
          </Button>
        </div>
      </section>
      <section className="w-full pt-24">
        <div className="px-10 md:text-center lg:text-left">
          <p className="before:content-[''] before:block before:absolute before:left-0 before:top-1.5 before:bg-sky-900 before:w-1 before:h-[1em] relative inline-block pl-3.5 mt-0 mb-5 font-sans font-semibold text-sky-900 tracking-widest leading-8 text-xl md:text-center lg:text-left">ABOUT</p>
        </div>
        <div className="pr-10 lg:grid lg:grid-cols-3 lg:gap-6 lg:mb-24">
          <div>
            <h2 className="text-4xl md:text-center mb-20">
              <span className="mb-2 font-bold block">雲端資安整合專家</span>
              <span className="font-normal">核心價值和嶄新視野</span>
            </h2>
          </div>
          <div className="col-span-2">
            <div className="md:text-center md:ml-10 lg:grid lg:grid-cols-4 lg:gap-4">
              <p className="lg:text-left md:mb-5 md:mr-10 col-span-3 text-lg">歐米英泰成立於2014年，憑藉對實體機房的豐富經驗與對CDN(content delivery network)的熟稔，加以專業團隊建構雲端網路、雲端資料中心、雲端資訊安全、雲端應用等服務；擁有豐富的跨產業經驗，專精網路資訊安全防護，為企業網路遞送優化、建置網路資安防護，致力實現企業快速上雲。</p>
              <Button className="rounded-full bg-sky-600" size={"lg"}>View More</Button>
            </div>
          </div>
        </div>
        <div className="pl-10 from-cyan-50 to-pink-500 grid lg:grid-cols-4 gap-4" style={{ backgroundImage: "radial-gradient(closest-side, #ffd1f2, #ec9adf, rgba(94, 189, 213, 0))" }}>
          {aboutDate.map(({ href, line1, line2 }) => (
            <div className="bg-cover bg-center rounded-full w-64 h-64 pt-8 align-middle" style={{ backgroundImage: "url(https://omnibvi.com/static/web/img/index/about_date_bg.webp)" }}>
              <img className="rounded-full bg-white mx-auto mb-3 w-5/12" data-src="/static/web/img/index/index_about_01.webp" src={href} alt="歐米英泰" width="260" height="260"></img>
              <p className="text-xl text-center">
                {line1}
                <br />
                {line2}
              </p>
            </div>
          ))}
        </div>
      </section>
      {/* <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex">
        <p className="fixed left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
          Get started by editing&nbsp;
          <code className="font-mono font-bold">app/page.tsx</code>
        </p>
        <div className="fixed bottom-0 left-0 flex h-48 w-full items-end justify-center bg-gradient-to-t from-white via-white dark:from-black dark:via-black lg:static lg:size-auto lg:bg-none">
          <a
            className="pointer-events-none flex place-items-center gap-2 p-8 lg:pointer-events-auto lg:p-0"
            href="https://vercel.com?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            By{" "}
            <Image
              src="/vercel.svg"
              alt="Vercel Logo"
              className="dark:invert"
              width={100}
              height={24}
              priority
            />
          </a>
        </div>
      </div>

      <div className="relative z-[-1] flex place-items-center before:absolute before:h-[300px] before:w-full before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-full after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 sm:before:w-[480px] sm:after:w-[240px] before:lg:h-[360px]">
        <Image
          className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
          src="/next.svg"
          alt="Next.js Logo"
          width={180}
          height={37}
          priority
        />
      </div>

      <div className="mb-32 grid text-center lg:mb-0 lg:w-full lg:max-w-5xl lg:grid-cols-4 lg:text-left">
        <a
          href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className="mb-3 text-2xl font-semibold">
            Docs{" "}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className="m-0 max-w-[30ch] text-sm opacity-50">
            Find in-depth information about Next.js features and API.
          </p>
        </a>

        <a
          href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className="mb-3 text-2xl font-semibold">
            Learn{" "}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className="m-0 max-w-[30ch] text-sm opacity-50">
            Learn about Next.js in an interactive course with&nbsp;quizzes!
          </p>
        </a>

        <a
          href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className="mb-3 text-2xl font-semibold">
            Templates{" "}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className="m-0 max-w-[30ch] text-sm opacity-50">
            Explore starter templates for Next.js.
          </p>
        </a>

        <a
          href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className="mb-3 text-2xl font-semibold">
            Deploy{" "}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className="m-0 max-w-[30ch] text-balance text-sm opacity-50">
            Instantly deploy your Next.js site to a shareable URL with Vercel.
          </p>
        </a>  
      </div> */}
    </main>
  );
}
