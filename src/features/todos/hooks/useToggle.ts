import { useAppDispatch, useAppSelector } from "../../../app/store/reduxHooks";
import { toggleCheckbox } from "../store/todosSlice";

export const useToggle = () => {
  const dispatch = useAppDispatch();

  const toggle = (id: number) => {
    dispatch(toggleCheckbox(id));
  };
  return { toggle };
};
