import { IconType } from 'react-icons';

import Text from '@components/Text';

interface PostMetadataProps {
  icon: IconType;
  metadata: string;
}

const PostMetadata = ({ icon: Icon, metadata }: PostMetadataProps) => {
  return (
    <div className="w-fit h-fit flex items-center text-neutral-600 text-sm gap-0.5">
      {Icon && <Icon size={16} />}
      <Text variant="span">{metadata}</Text>
    </div>
  );
};

export default PostMetadata;
