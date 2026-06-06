function Header() {
  const date = new Date();
  const options = {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
  };
  const formattedDate = date.toLocaleDateString("en-US", options);

  return (
    <div className="w-full rounded-lg bg-white px-6 py-4">
      <div className="flex w-full justify-between">
        <div className="">
          <h1 className="text-2xl font-bold">Your tasks</h1>
          <p className="text-md text-gray-500">{formattedDate}</p>
        </div>
        <div className="flex items-center justify-center rounded-lg bg-blue-50 px-6 py-3 font-semibold text-blue-500 transition-all hover:cursor-pointer hover:bg-blue-100">
          {/* TODO: Implement modal click */}
          <button>+ Add new task</button>
        </div>
      </div>
    </div>
  );
}

export default Header;
