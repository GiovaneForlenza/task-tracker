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
<<<<<<< HEAD
    if (filtered.length > -1) {
      if (selectedFilter === "Completed") {
        setFiltered(tasks.filter((f) => f.completed === true));
      } else if (selectedFilter === "Incomplete") {
        setFiltered(tasks.filter((f) => f.completed === false));
      } else {
        setFiltered(tasks);
      }
=======
    console.log(selectedFilter);
    if (selectedFilter === "Completed") {
      setFiltered(tasks.filter((f) => f.completed === true));
    } else if (selectedFilter === "Incomplete") {
      setFiltered(tasks.filter((f) => f.completed === false));
    } else {
      setFiltered(tasks);
>>>>>>> c6b6ac56de78458f8a94f9d88e607861428c63c7
    }
  }, [selectedFilter, tasks]);

  return (
<<<<<<< HEAD
    <div className="flex w-full flex-col gap-4 rounded-xl bg-white p-3 py-4 md:px-6">
      <FiltersList />

=======
    <div className="flex w-full flex-col gap-4 rounded-xl bg-white px-6 py-4">
      <FiltersList />
>>>>>>> c6b6ac56de78458f8a94f9d88e607861428c63c7
      {filtered.length > 0 ? (
        filtered.map((task, idx) => (
          <div className="" key={idx}>
            <TaskItem task={task} key={idx} />
            {idx < filtered.length - 1 && <LineDivider />}
          </div>
        ))
      ) : (
<<<<<<< HEAD
        <div className="flex items-center justify-center py-4">
=======
        <div className="flex items-center justify-center py-20">
>>>>>>> c6b6ac56de78458f8a94f9d88e607861428c63c7
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
