import { ClipboardDocumentListIcon } from "@heroicons/react/16/solid";

function DataTable({ projects, sortBy, status, filter }) {
  let sortedProjects;
  let filterByStatusProjects;
  let filterByCategoryProjects ;

  // Filter By Category
  if(filter === "design-ui/ux") {
    filterByCategoryProjects = [...projects].filter(item => item.category.englishTitle === "design-ui/ux")
  } else if(filter === "web development") {
    filterByCategoryProjects = [...projects].filter(item => item.category.englishTitle === "web development")
  } else {
    filterByCategoryProjects = projects;
  }

  // Filter By Status
  if(status === "open") {
    filterByStatusProjects = [...filterByCategoryProjects].filter(item => item.status === "open")
  } else if(status === "close") {
    filterByStatusProjects = [...filterByCategoryProjects].filter(item => item.status === "close")
  } else {
    filterByStatusProjects = filterByCategoryProjects;
  }

  // Sort By Date
  if (sortBy === "earliest") {
    sortedProjects = [...filterByStatusProjects].sort(
      (a, b) => new Date(a.deadline) - new Date(b.deadline)
    );
  } else if (sortBy === "latest") {
    sortedProjects = [...filterByStatusProjects].sort(
      (a, b) => new Date(b.deadline) - new Date(a.deadline)
    );
  } else {
    sortedProjects = filterByStatusProjects;
  }

  return (
    <div className="bg-white overflow-x-scroll md:overflow-x-hidden max-w-6xl mx-auto rounded-xl border-2 border-gray-200 px-4 py-16 my-16 sm:my-28">
      <table className="w-full max-w-5xl mx-auto border-collapse rounded-lg shadow-xl overflow-hidden">
        <thead>
          <tr className="flex  bg-gray-100 py-3 item-center justify-between">
            <th className="flex justify-center w-80 p-2 text-sm text-slate-500">
              #
            </th>
            <th className="flex justify-center w-full p-2 text-sm text-slate-500">
              عنوان پروژه
            </th>
            <th className="flex justify-center w-full p-2 text-sm text-slate-500">
              بودجه
            </th>
            <th className="flex justify-center w-full p-2 text-sm text-slate-500">
              ددلاین
            </th>
            <th className="flex justify-center w-full p-2 text-sm text-slate-500">
              وضعیت
            </th>
            <th className="flex justify-center w-full p-2 text-sm text-slate-500">
              عملیات
            </th>
          </tr>
        </thead>
        <tbody>
          {sortedProjects.map((item) => (
            <tr
              key={item._id}
              className="flex items-center justify-center py-3 border border-gray-100"
            >
              <td className="flex justify-center w-80 text-base">{item._id}</td>
              <td className="flex justify-center w-full text-base font-medium">
                {item.title}
              </td>
              <td className="flex justify-center w-full text-base">
                {item.budget}
              </td>
              <td className="flex justify-center w-full text-base">
                {new Date(item.deadline).toLocaleDateString("fa")}
              </td>
              <td className="flex justify-center w-full text-base">
                <span
                  className={`${
                    item.status === "open" ? "bg-blue-600" : "bg-rose-500"
                  } py-0.5 px-4 w-16 rounded-xl text-white`}
                >
                  {item.status === "open" ? 'باز' : 'بسته'}
                </span>
              </td>
              <td className="flex justify-center w-full cursor-pointer">
                <ClipboardDocumentListIcon className="w-5 h-5 fill-blue-600" />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default DataTable;
