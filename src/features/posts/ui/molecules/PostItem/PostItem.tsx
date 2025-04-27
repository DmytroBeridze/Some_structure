import styled from "styled-components";
import { Post } from "../../../model/types";
import { Icon } from "../../../../../shared/ui/atoms/Icon";
import usePostDelete from "../../../hooks/usePostDelete";

interface PostItemProps {
  data: Post;
}

const StyledPostItem = styled.li`
  padding: 10px;
  cursor: pointer;
`;
export const PostItem = ({ data }: PostItemProps) => {
  const { postDelete } = usePostDelete();

  return (
    <StyledPostItem>
      <h3>{data.title}</h3>
      <div>{data.body}</div>
      <div>
        <Icon name="delete" size={18} onClick={() => postDelete(data.id)} />
      </div>
    </StyledPostItem>
  );
};
