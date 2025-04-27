import { useAppSelector } from "../../../app/store/reduxHooks";
import { selectError, selectLoading, selectPost } from "../store/postSelectors";

const usePosts = () => {
  const posts = useAppSelector(selectPost);
  const loading = useAppSelector(selectLoading);
  const error = useAppSelector(selectError);

  return { posts, loading, error };
};

export default usePosts;
