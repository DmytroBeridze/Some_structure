import { useEffect } from "react";
import {
  useAppDispatch,
  useAppSelector,
} from "../../../../app/store/reduxHooks";
import usePosts from "../../hooks/usePosts";
import { fetchPosts } from "../../store/asyncPostAction";
import { Form } from "../molecules/Form";
import { PostList } from "../molecules/PostList";
import { PostItem } from "../molecules/PostItem";

export const SearchPostComponent = () => {
  const { posts } = usePosts();
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchPosts());
  }, []);

  return (
    <>
      <Form />

      <PostList>
        {posts.map((elem) => (
          <PostItem data={elem} key={elem.id} />
        ))}
      </PostList>
    </>
  );
};
