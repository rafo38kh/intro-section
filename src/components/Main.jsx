import heroDesk from "../images/image-hero-desktop.png";
import heroMobile from "../images/image-hero-mobile.png";

import databiz from "../images/client-databiz.svg";
import audiophile from "../images/client-audiophile.svg";
import meet from "../images/client-meet.svg";
import maker from "../images/client-maker.svg";

export default function Main() {
  const clients = [databiz, audiophile, meet, maker];

  return (
    <div className="mx-auto mt-12 flex flex-col gap-12 lg:mt-0 lg:max-w-[75rem] lg:flex-row-reverse lg:gap-0">
      <img className="mt-4 lg:hidden" src={heroMobile} alt="hero-mobile-img" />
      <img
        className="hidden pt-4 lg:block lg:max-w-[30rem]"
        src={heroDesk}
        alt="hero-desktop-img"
      />

      <div className="flex flex-col items-center justify-center gap-4 p-4 md:gap-8 lg:items-start">
        <h1 className="text-4xl font-bold tracking-wide md:text-6xl lg:pr-24 lg:text-8xl">
          Make remote work
        </h1>
        <p className="text-center text-mediumGray md:max-w-xl md:text-2xl lg:pr-24 lg:text-left">
          Get your team in sync, no matter your location. Streamline processes,
          create team rituals, and watch productivity soar.
        </p>
        <button className="w-32 rounded-2xl border border-transparent bg-black p-3 text-almostWhite transition-all duration-300 hover:border-black hover:bg-almostWhite hover:text-black lg:w-48 lg:p-4 lg:text-[1.2rem]">
          Learn more
        </button>

        <div className="mt-8 flex w-full max-w-md items-center justify-between gap-4 md:max-w-xl">
          {clients.map((client) => {
            return <img className="w-16 md:w-24" src={client} />;
          })}
        </div>
      </div>
    </div>
  );
}
