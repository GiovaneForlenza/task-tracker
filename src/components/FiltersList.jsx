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
    <div className="flex w-full flex-row items-start justify-between gap-4">
      {filters.map((filter, idx) => {
        return (
          <div
            className={`flex flex-row items-center gap-2 rounded-lg ${selectedFilter === filter.name ? "" : "text-gray-500"} cursor-pointer`}
            key={idx}
            onClick={() => handleClick(filter.name)}
          >
            <div
              className={`flex h-8 w-8 items-center justify-center rounded-full ${selectedFilter === filter.name ? " bg-blue-200 text-blue-900" : ""}`}
            >
              {filter.count}
            </div>
            <span>{filter.name}</span>
          </div>
        );
      })}
    </div>
  );
}

export default FiltersList;
