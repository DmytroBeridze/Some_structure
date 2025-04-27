import { useAppDispatch } from "../../../app/store/reduxHooks";
import { deletePost } from "../store/postSlice";
import usePosts from "./usePosts";

const usePostDelete = () => {
  const dispatch = useAppDispatch();
  const { posts } = usePosts();
  const postDelete = (id: number) => {
    const res = posts.filter((elem) => {
      return elem.id !== id;
    });
    dispatch(deletePost(res));
  };

  return { postDelete };
};

export default usePostDelete;
