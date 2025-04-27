import { ReactElement, ReactNode } from "react";
import styled from "styled-components";
import usePosts from "../../../hooks/usePosts";

interface PostListProps {
  children: ReactNode;
}

const SyledPostList = styled.ul`
  display: flex;
  flex-direction: column;
`;

export const PostList = ({ children }: PostListProps) => {
  const { error, loading } = usePosts();

  if (loading === "loading") return <div>Loading...</div>;
  if (error) return <div>{error}</div>;

  return <SyledPostList>{children}</SyledPostList>;
};
