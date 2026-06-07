import React, { useEffect, useState } from "react";
import FiltersList from "./FiltersList";
import LineDivider from "./LineDivider";
import TaskItem from "./TaskItem";
import { useSelector } from "react-redux";

function TasksList() {
  const tasks = useSelector((selector) => selector.task.tasks);
  const selectedFilter = useSelector(
    (selector) => selector.filter.selectedFilter,
  );
  const [filtered, setFiltered] = useState(tasks || []);

  useEffect(() => {
    if (filtered.length > -1) {
      if (selectedFilter === "Completed") {
        setFiltered(tasks.filter((f) => f.completed === true));
      } else if (selectedFilter === "Incomplete") {
        setFiltered(tasks.filter((f) => f.completed === false));
      } else {
        setFiltered(tasks);
      }
    }
  }, [selectedFilter, tasks]);

  return (
    <div className="flex w-full flex-col gap-4 rounded-xl bg-white p-3 py-4 md:px-6">
      <FiltersList />

      {filtered.length > 0 ? (
        filtered.map((task, idx) => (
          <div className="" key={idx}>
            <TaskItem task={task} key={idx} />
            {idx < filtered.length - 1 && <LineDivider />}
          </div>
        ))
      ) : (
        <div className="flex items-center justify-center py-4">
          {selectedFilter === "Completed"
            ? "You have not completed any of your tasks yet"
            : selectedFilter === "Incomplete"
              ? "You have no tasks to complete, good job!"
              : "You have no tasks"}
        </div>
      )}
    </div>
  );
}

export default TasksList;
