import { TagAvatar, TextAvatarTag } from "./styles";

export interface TagProps {
  title: string;
}

export default function Tag({ title }: TagProps) {
  return (
    <TagAvatar>
      <TextAvatarTag>{title}</TextAvatarTag>
    </TagAvatar>
  );
}
