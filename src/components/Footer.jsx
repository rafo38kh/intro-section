export default function Footer() {
  return (
    <footer className=" text-borderOutline my-4 text-center text-[.6rem] md:text-xs">
      Challenge by{" "}
      <a
        href="https://www.frontendmentor.io?ref=challenge"
        target="_blank"
        rel="noreferrer"
        className="hover:text-primaryLight font-bold uppercase underline transition-all duration-300"
      >
        Frontend Mentor
      </a>{" "}
      Coded by{" "}
      <a
        href="https://github.com/rafo38kh"
        target="_blank"
        rel="noreferrer"
        className="hover:text-primaryLight font-bold uppercase underline transition-all duration-300"
      >
        rafo38kh
      </a>
    </footer>
  );
}
