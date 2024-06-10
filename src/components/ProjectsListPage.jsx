import DataTable from "./DataTable";
import { useState } from "react";
import {
  Menu,
  MenuButton,
  MenuItem,
  MenuItems,
  Transition,
} from "@headlessui/react";
import {
  BarsArrowDownIcon,
  BarsArrowUpIcon,
  ChevronDownIcon,
  CircleStackIcon,
  GlobeAltIcon,
  Square2StackIcon,
} from "@heroicons/react/16/solid";

function ProjetcsList({ projects }) {
  const [sortBy, setSortBy] = useState("latest");
  const [status, setStatus] = useState("all");
  const [filter, setFilter] = useState("all");
  return (
    <div>
      <div className="flex flex-col lg:flex-row gap-y-4 lg:gap-y-0 justify-between items-center p-4 mb-4">
        <h1 className="text-slate-800 p-4 text-2xl font-bold">لیست پروژه‌ها</h1>
        <div className="flex flex-wrap gap-y-4 justify-evenly items-center gap-x-5 px-4">
          <div className="flex flex-col xsm:flex-row items-center justify-between gap-x-2 ">
            <p className="font-semibold">وضعیت</p>
            <Tabs setStatus={setStatus} />
          </div>
          <SortByDate setSortBy={setSortBy} />
          <FilterByCategory setFilter={setFilter} filter={filter} />
        </div>
      </div>
      <DataTable
        projects={projects}
        sortBy={sortBy}
        status={status}
        filter={filter}
      />
    </div>
  );
}

export default ProjetcsList;

export function Tabs({ setStatus }) {
  const [selectedBtn, setSelectedBtn] = useState(null);
  const selectedBtnClass =
    "font-medium flex justify-center py-1 px-4 text-white hover:bg-blue-600 hover:rounded-lg hover:text-white cursor-pointer bg-blue-600 text-white shadow  w-full rounded-lg";
  const unselectedBtnClass =
    "font-medium flex justify-center py-1 px-4 text-slate-700 hover:bg-blue-600 hover:rounded-lg hover:text-white cursor-pointer";
  return (
    <div>
      <div className="bg-white shadow p-1 rounded-xl flex justify-around items-center gap-x-1">
        <button
          onClick={() => {
            setSelectedBtn(1), setStatus("all");
          }}
          className={selectedBtn === 1 ? selectedBtnClass : unselectedBtnClass}
        >
          همه
        </button>
        <button
          onClick={() => {
            setSelectedBtn(2), setStatus("open");
          }}
          className={selectedBtn === 2 ? selectedBtnClass : unselectedBtnClass}
        >
          باز
        </button>
        <button
          onClick={() => {
            setSelectedBtn(3), setStatus("close");
          }}
          className={selectedBtn === 3 ? selectedBtnClass : unselectedBtnClass}
        >
          بسته
        </button>
      </div>
    </div>
  );
}

export function SortByDate({ setSortBy }) {
  const [isOpenDate, setIsOpenDate] = useState(false);
  return (
    <div className="w-auto text-center">
      <Menu>
        <MenuButton
          onClick={() => setIsOpenDate((is) => !is)}
          className="inline-flex items-center gap-2 rounded-xl bg-white py-2 px-4 text-md font-semibold text-slate-700 shadow focus:outline-none data-[hover]:bg-blue-600 data-[hover]:text-white data-[open]:text-white data-[open]:bg-blue-600 data-[focus]:outline-1 data-[focus]:outline-white"
        >
          مرتب سازی تاریخ
          <ChevronDownIcon
            className={`${
              isOpenDate ? "rotate-180" : ""
            } transition-all ease-out duration-300 size-4 fill-current`}
          />
        </MenuButton>
        <Transition
          enter="transition ease-out duration-75"
          enterFrom="opacity-0 scale-95"
          enterTo="opacity-100 scale-100"
          leave="transition ease-in duration-100"
          leaveFrom="opacity-100 scale-100"
          leaveTo="opacity-0 scale-95"
        >
          <MenuItems
            anchor="bottom center"
            className=" origin-top-right w-40 rounded-xl border border-white/5 bg-blue-600 p-1 text-sm/6 text-white [--anchor-gap:5px] focus:outline-none"
          >
            <MenuItem>
              <button
                onClick={() => {
                  setSortBy("latest"), setIsOpenDate((is) => !is);
                }}
                className="group flex w-full items-center gap-2 rounded-lg py-1.5 px-3 data-[focus]:bg-white/20"
              >
                <BarsArrowUpIcon className="size-4 fill-white" />
                جدیدترین
              </button>
            </MenuItem>
            <MenuItem>
              <button
                onClick={() => {
                  setSortBy("earliest"), setIsOpenDate((is) => !is);
                }}
                className="group flex w-full items-center gap-2 rounded-lg py-1.5 px-3 data-[focus]:bg-white/20"
              >
                <BarsArrowDownIcon className="size-4 fill-white" />
                قدیمی‌ترین
              </button>
            </MenuItem>
          </MenuItems>
        </Transition>
      </Menu>
    </div>
  );
}

export function FilterByCategory({ setFilter, filter }) {
  const [isOpenFilter, setIsOpenFilter] = useState(false);
  return (
    <div className="w-auto text-center">
      <Menu>
        <MenuButton
          onClick={() => setIsOpenFilter((is) => !is)}
          className="inline-flex items-center gap-2 rounded-xl bg-white py-2 px-4 text-md font-semibold text-slate-700 shadow focus:outline-none data-[hover]:bg-blue-600 data-[hover]:text-white data-[open]:text-white data-[open]:bg-blue-600 data-[focus]:outline-1 data-[focus]:outline-white"
        >
          دسته‌بندی ({filter === 'all' ? 'همه' : (filter === "design-ui/ux" ? "طراحی" : "وب")})
          <ChevronDownIcon
            className={`${
              isOpenFilter ? "rotate-180" : ""
            } transition-all ease-out duration-300 size-4 fill-current`}
          />
        </MenuButton>
        <Transition
          enter="transition ease-out duration-75"
          enterFrom="opacity-0 scale-95"
          enterTo="opacity-100 scale-100"
          leave="transition ease-in duration-100"
          leaveFrom="opacity-100 scale-100"
          leaveTo="opacity-0 scale-95"
        >
          <MenuItems
            anchor="bottom center"
            className=" origin-top-right w-40 rounded-xl border border-white/5 bg-blue-600 p-1 text-sm/6 text-white [--anchor-gap:5px] focus:outline-none"
          >
            <MenuItem>
              <button
                onClick={() => {
                  setIsOpenFilter((is) => !is), setFilter("all");
                }}
                className="group w-full flex items-center gap-2 rounded-lg py-1.5 px-3 data-[focus]:bg-white/20"
              >
                <CircleStackIcon className="size-4 fill-white" />
                همه
              </button>
            </MenuItem>
            <MenuItem>
              <button
                onClick={() => {
                  setIsOpenFilter((is) => !is), setFilter("design-ui/ux");
                }}
                className="group w-full flex items-center gap-2 rounded-lg py-1.5 px-3 data-[focus]:bg-white/20"
              >
                <Square2StackIcon className="size-4 fill-white" />
                طراحی UI/UX
              </button>
            </MenuItem>
            <MenuItem>
              <button
                onClick={() => {
                  setIsOpenFilter((is) => !is), setFilter("web development");
                }}
                className="group w-full flex items-center gap-2 rounded-lg py-1.5 px-3 data-[focus]:bg-white/20"
              >
                <GlobeAltIcon className="size-4 fill-white" />
                برنامه‌نویسی وب
              </button>
            </MenuItem>
          </MenuItems>
        </Transition>
      </Menu>
    </div>
  );
}
