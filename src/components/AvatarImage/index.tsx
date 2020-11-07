import React, { useCallback, useEffect, useState } from 'react';

import defaultAvatar from '../../assets/default_avatar.jpg';

interface AvatarImageProps {
  src: string;
  alt: string;
}

const AvatarImage: React.FC<AvatarImageProps> = ({ src, alt }) => {
  const [avatar, setAvatar] = useState(src);

  const onError = useCallback(() => {
    setAvatar('');
  }, []);

  useEffect(() => {
    setAvatar(src);
  }, [src]);

  return <img src={avatar || defaultAvatar} alt={alt} onError={onError} />;
};

export default AvatarImage;
