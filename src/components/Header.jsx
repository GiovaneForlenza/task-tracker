import { useDispatch } from "react-redux";
import { openModal } from "../store/modalSlicer";
import { getTasksFromLS } from "../store/taskSlicer";

function Header() {
  const date = new Date();
  const options = {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
  };
  const formattedDate = date.toLocaleDateString("en-US", options);
  const dispatch = useDispatch();
  function handleClick() {
    dispatch(openModal({ type: "Create" }));
  }

  return (
    <div className="w-full rounded-lg bg-white px-6 py-4">
      <div className="flex w-full justify-between">
        <div className="">
          <h1 className="text-lg font-bold md:text-2xl">Your tasks</h1>
          <p className="text-md text-gray-500">{formattedDate}</p>
        </div>
        <button
          className="md:text-md flex items-center justify-center rounded-lg bg-blue-50 px-6 py-3 text-sm font-semibold text-blue-500 transition-all hover:cursor-pointer hover:bg-blue-100"
          onClick={handleClick}
        >
          + Add new task
        </button>
      </div>
    </div>
  );
}

export default Header;
