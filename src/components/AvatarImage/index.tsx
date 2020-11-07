import React, { useCallback, useState } from 'react';

import defaultAvatar from '../../assets/default_avatar.jpg';

interface AvatarImageProps {
  src: string;
  alt: string;
}

const AvatarImage: React.FC<AvatarImageProps> = ({ src, alt }) => {
  const [avatar, setAvatar] = useState(src);
  const [errorLoadingAvatar, setErrorLoadingAvatar] = useState(false);

  const onError = useCallback(() => {
    if (!errorLoadingAvatar) {
      setErrorLoadingAvatar(true);
      setAvatar('');
    }
  }, [errorLoadingAvatar]);

  return <img src={avatar || defaultAvatar} alt={alt} onError={onError} />;
};

export default AvatarImage;
