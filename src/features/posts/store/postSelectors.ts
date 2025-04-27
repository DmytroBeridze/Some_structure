import { RootState } from "../../../app/store";

export const selectPost = (state: RootState) => state.post.posts;
export const selectLoading = (state: RootState) => state.post.loading;
export const selectError = (state: RootState) => state.post.error;
