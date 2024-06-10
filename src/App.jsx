import { useState } from "react";
import "./App.css";
import HomePage from "./components/HomePage";
import ProjetcsList from "./components/ProjectsListPage";

const projects = [
  {
    _id: 1,
    title: "طراحی اپلیکیشن سفر آنلاین",
    description: "طراحی رابط کاربری و تجربه کاربری اپلیکیشن سفر آنلاین",
    status: "open",
    category: {
      id: 1,
      title: "طراحی UI/UX",
      englishTitle: "design-ui/ux",
    },
    budget: "۱,۹۶۲,۰۰۰",
    tags: ["Ui/UX", "Figma"],
    deadline: "2023-12-23T12:55:48.740Z",
    createdAt: "2024-10-23T18:18:55.636Z",
    updatedAt: "2024-06-02T13:37:48.468Z",
  },
  {
    _id: 2,
    title: "توسعه سایت فروشگاهی",
    description: "یک سایت فروشگاهی کامل با پنل ادمین",
    status: "close",
    category: {
      id: 2,
      title: "برنامه نویسی وب",
      englishTitle: "web development",
    },
    budget: "۵,۴۵۰,۰۰۰",
    tags: ["React", "Nodejs", "online shop"],
    deadline: "2023-05-16T12:55:48.740Z",
    createdAt: "2023-10-23T18:18:55.636Z",
    updatedAt: "2024-06-02T13:37:48.468Z",
  },
  {
    _id: 3,
    title: "توسعه پنل کاربری",
    description: "یک سایت فروشگاهی کامل با پنل ادمین",
    status: "open",
    category: {
      id: 3,
      title: "برنامه نویسی وب",
      englishTitle: "web development",
    },
    budget: "۴,۷۸۹,۰۰۰",
    tags: ["React", "Nodejs", "online shop"],
    deadline: "2024-07-09T12:55:48.740Z",
    createdAt: "2023-10-23T18:18:55.636Z",
    updatedAt: "2024-06-02T13:37:48.468Z",
  },
  {
    _id: 4,
    title: "طراحی سایت وردپرس",
    description: "طراحی رابط کاربری و تجربه کاربری اپلیکیشن سفر آنلاین",
    status: "close",
    category: {
      id: 4,
      title: "طراحی UI/UX",
      englishTitle: "design-ui/ux",
    },
    budget: "۹۲۰,۰۰۰",
    tags: ["Ui/UX", "Figma"],
    deadline: "2022-02-29T12:55:48.740Z",
    createdAt: "2023-10-23T18:18:55.636Z",
    updatedAt: "2024-06-02T13:37:48.468Z",
  },
  //  خودتون میتونید دیتاهای دیگه رو اضافه کنید.
];

function App() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div>
      {isOpen ? (
        <ProjetcsList projects={projects} />
      ) : (
        <HomePage setIsOpen={setIsOpen} isOpen={isOpen} />
      )}
    </div>
  );
}

export default App;
