import ParallaxText from "./ParallaxText";

export default function Hero() {
  return (
    <>
      <section className="h-screen relative overflow-hidden flex items-start flex-col justify-between">
        <div className="grid grid-cols-3 mt-7 w-full px-5 font-cabinet">
          <a
            className="flex justify-start"
            href="https://unsplash.com/photos/a-black-and-white-photo-with-a-light-coming-out-of-it-p66qrgjeKfo"
          >
            photo by Tony Litvyak
          </a>
          <a className="flex justify-center" href="https://www.huyng.xyz/">
            code by HuyNG
          </a>
          <div className="flex justify-end space-x-2">
            <a href="https://www.youtube.com/channel/UCBOAB9RV647G93GxLhEXleA">
              YT
            </a>
            <a href="https://www.linkedin.com/in/huyngxyz/">IN</a>
            <a href="https://www.instagram.com/huyngxyz/">IG</a>
          </div>
        </div>
        <div className="absolute h-screen w-screen -z-10">
          <img
            className="object-cover h-full w-full"
            src="src/assets/images/bgwork-1.jpg"
            alt="abstract photo"
          />
        </div>
        <ParallaxText />
      </section>
      <section className="h-screen bg-neutral-900"></section>
    </>
  );
}
