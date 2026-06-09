import { useDispatch, useSelector } from "react-redux";
import { updateSelectedFilter } from "../store/filterSlicer";

function FiltersList() {
  const filters = useSelector((state) => state.filter.filters);
  const selectedFilter = useSelector((state) => state.filter.selectedFilter);
  const dispatch = useDispatch();
  function handleClick(filter) {
    dispatch(updateSelectedFilter(filter));
  }
  return (
    <div className="flex w-full flex-row items-start justify-between gap-1 md:gap-4">
      {filters.map((filter, idx) => {
        return (
          <div
            className={`flex flex-row items-center gap-1 rounded-md border ${selectedFilter === filter.name ? "border-blue-500 bg-blue-50 text-blue-900" : "border-white text-gray-500"} cursor-pointer px-2 py-1 text-xs md:text-sm`}
            key={idx}
            onClick={() => handleClick(filter.name)}
          >
            <div>{filter.count}</div>
            <span>{filter.name}</span>
          </div>
        );
      })}
    </div>
  );
}

export default FiltersList;
