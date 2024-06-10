function HomePage({ setIsOpen, isOpen }) {
  return (
    <div className="flex flex-col gap-48 p-4">
      <h1 className="font-bold p-4 text-2xl text-slate-800 text-right">
        لیست پروژهها
      </h1>
      <div className="flex justify-center items-center">
        <button
          onClick={() => setIsOpen((is) => !is)}
          className="text-white font-bold text-xl bg-blue-600 rounded-xl shadow-2xl py-3 px-12"
        >
          نشان دادن پروژه‌‌ها
        </button>
      </div>
    </div>
  );
}

export default HomePage;
