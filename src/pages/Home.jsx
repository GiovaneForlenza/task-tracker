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
<<<<<<< HEAD
  const isModalOpen = useSelector((selector) => selector.modal.isOpen);
=======
  const modal = useSelector((selector) => selector.modal.isOpen);
>>>>>>> c6b6ac56de78458f8a94f9d88e607861428c63c7
  useEffect(() => {
    dispatch(updateLS(tasks));
    dispatch(updateFilterCounter(tasks));
  }, [tasks]);

  return (
    <div className="flex w-full max-w-250 flex-col gap-4">
      <Header />
      <TasksList />

      {/* TODO open and close modal using Redux */}
<<<<<<< HEAD
      {isModalOpen && <Modal />}
=======
      {modal && <Modal />}
>>>>>>> c6b6ac56de78458f8a94f9d88e607861428c63c7
    </div>
  );
}

export default Home;
