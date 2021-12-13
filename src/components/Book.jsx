import { Menu } from "@headlessui/react";
import arrow from "../assets/arrow.svg";

const Book = ({ book }) => {
  const { title, subtitle, imageLinks } = book;
  return (
    <li className="relative flex flex-col items-center justify-center gap-3 w-56 text-left flex-auto">
      <span className="relative">
        <div
          className="bg-cover bg-center bg-no-repeat w-56 h-72"
          style={{ backgroundImage: `url("${imageLinks.thumbnail}")` }}
        ></div>
        <Menu as="div" className="absolute bottom-0 right-2">
          <Menu.Button>
            <img
              src={arrow}
              alt="123"
              className="p-3 bg-green-400 rounded-full drop-shadow-2xl"
            />
          </Menu.Button>
          <Menu.Items className="absolute bg-green-100 p-5 rounded-lg w-72 flex flex-col items-start z-10">
            <Menu.Item as="div" className="text-gray-400">
              Move to...
            </Menu.Item>

            <Menu.Item>
              <button type="button" className="text-purple-800">
                Currently Reading
              </button>
            </Menu.Item>
            

            <Menu.Item>
              <button type="button" className="text-purple-800">
                Want to Read
              </button>
            </Menu.Item>

            <Menu.Item>
              <button type="button" className="text-purple-800">
                Read
              </button>
            </Menu.Item>

            <Menu.Item>
              <button type="button" className="text-purple-800">
                None
              </button>
            </Menu.Item>

          </Menu.Items>
        </Menu>
      </span>
      <h2>{title}</h2>
      <h3>{subtitle}</h3>
    </li>
  );
};

export default Book;
