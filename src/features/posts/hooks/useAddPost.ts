import { useAppDispatch } from "../../../app/store/reduxHooks";
import { Post } from "../model/types";
import { addPost } from "../store/postSlice";

export const useAddPost = () => {
  const dispatch = useAppDispatch();

  const addNewPost = (value: string) => {
    const post: Post = {
      userId: Date.now(),
      id: Date.now(),
      title: value,
      body: "Test body",
    };

    dispatch(addPost(post));
  };
  return { addNewPost };
};
