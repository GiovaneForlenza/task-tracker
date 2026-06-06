import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Header from "../components/Header";
import TasksList from "../components/TasksList";
import { updateFilterCounter } from "../store/filterSlicer";
import { updateLS } from "../store/localStorageSlicer";
import Modal from "./Modal";

function Home() {
  const dispatch = useDispatch();
  const tasks = useSelector((selector) => selector.task.tasks);
  // const filters = useSelector((selector) => selector.filter.filter);
  const modal = useSelector((selector) => selector.modal.isOpen);
  useEffect(() => {
    dispatch(updateLS(tasks));
    dispatch(updateFilterCounter(tasks));
  }, [tasks]);

  return (
    <div className="flex w-full max-w-250 flex-col gap-4">
      <Header />
      <TasksList />

      {/* TODO open and close modal using Redux */}
      {modal && <Modal />}
    </div>
  );
}

export default Home;
