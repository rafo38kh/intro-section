import { useState } from "react";

import todo from "../images/icon-todo.svg";
import calendar from "../images/icon-calendar.svg";
import reminders from "../images/icon-reminders.svg";
import planning from "../images/icon-planning.svg";

const menuItems = [
  {
    title: "Feautures",
    submenu: [
      {
        title: "Todo List",
        icon: todo,
      },
      {
        title: "Calendar",
        icon: calendar,
      },
      {
        title: "Reminders",
        icon: reminders,
      },
      {
        title: "Planning",
        icon: planning,
      },
    ],
  },
  {
    title: "Company",
    submenu: [
      {
        title: "History",
        icon: "",
      },
      {
        title: "Our Team",
        icon: "",
      },
      {
        title: "Blog",
        icon: "",
      },
    ],
  },
  {
    title: "Careers",
  },
  {
    title: "About",
  },
];

export default function DesktopMenu() {
  const [activeMenu, setActiveMenu] = useState(null);

  return (
    <div className="hidden w-full justify-between pl-32 font-bold lg:flex">
      <ul className="flex w-44 flex-row items-start gap-12 bg-almostWhite   md:w-64">
        {menuItems.map((item, index) => {
          return (
            <li
              key={index}
              className="inline-block text-mediumGray "
              onClick={() =>
                index === activeMenu
                  ? setActiveMenu(null)
                  : setActiveMenu(index)
              }
            >
              <span className="flex  cursor-pointer items-center text-sm text-mediumGray transition-all duration-300 hover:text-almostBlack">
                {item.title}{" "}
                {item.submenu && (
                  <svg
                    className={`ml-1 h-4 w-4 ${
                      activeMenu === index && "rotate-180"
                    }`}
                    aria-hidden="true"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                )}
              </span>
              {item.submenu && activeMenu === index && (
                <ul className="absolute rounded-2xl bg-almostWhite p-2 px-4 shadow">
                  {item.submenu.map((subitem) => (
                    <li
                      key={subitem.title}
                      className="flex cursor-pointer items-center gap-2 py-2 text-sm text-mediumGray transition-all duration-300 hover:text-almostBlack"
                    >
                      {subitem.icon && (
                        <img src={subitem.icon} alt={subitem.title} />
                      )}
                      {subitem.title}
                    </li>
                  ))}
                </ul>
              )}
            </li>
          );
        })}
      </ul>
      <div className="flex items-center justify-center gap-12">
        <a
          className="text-sm text-mediumGray transition-all duration-300 hover:text-almostBlack"
          href="#"
        >
          Login
        </a>
        <button className="w-32 rounded-2xl border border-mediumGray bg-almostWhite p-1 py-2 text-sm text-mediumGray transition-all duration-300 hover:border-black hover:bg-almostWhite  hover:text-black">
          Register
        </button>
      </div>
    </div>
  );
}
