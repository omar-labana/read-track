import { Menu } from "@headlessui/react";
import arrow from "../assets/arrow.svg";

const Book = ({ book }) => {
  console.log(book);
  const { title, subtitle, imageLinks, shelf } = book;
  return (
    <li className="relative flex flex-col items-center justify-center gap-3 w-56 text-left flex-auto">
      <span className="relative">
        <div
          className="bg-cover bg-center bg-no-repeat w-56 h-72"
          style={{ backgroundImage: `url("${imageLinks.thumbnail}")` }}
        ></div>
        <Menu as="div" className="absolute bottom-0 right-2">
          <Menu.Button className="drop-shadow-2xl">
            <img
              src={arrow}
              alt="123"
              className="p-3 bg-browny rounded-full drop-shadow-2xl w-14 border-4 border-browny-dark"
            />
          </Menu.Button>
          <Menu.Items className="absolute bg-browny-dark p-5 rounded-lg w-72 flex flex-col gap-3 items-start z-10 text-white">
            <Menu.Item as="div" className="text-gray-200">
              Move to...
            </Menu.Item>

            <Menu.Item>
              <button
                type="button"
                className={
                  shelf === "currentlyReading" ? "italic font-bold" : ""
                }
              >
                Currently Reading {shelf === "currentlyReading" ? "✓" : ""}
              </button>
            </Menu.Item>

            <Menu.Item>
              <button
                type="button"
                className={shelf === "wantToRead" ? "italic font-bold" : ""}
              >
                Want to Read {shelf === "wantToRead" ? "✓" : ""}
              </button>
            </Menu.Item>

            <Menu.Item>
              <button
                type="button"
                className={shelf === "read" ? "italic font-bold" : ""}
              >
                Read {shelf === "read" ? "✓" : ""}
              </button>
            </Menu.Item>

            <Menu.Item>
              <button
                type="button"
                className={shelf === "none" ? "italic font-bold" : ""}
              >
                None {shelf === "none" ? "✓" : ""}
              </button>
            </Menu.Item>
          </Menu.Items>
        </Menu>
      </span>
      <h2 className="truncate w-56">{title}</h2>
    </li>
  );
};

export default Book;
