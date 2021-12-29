import React from 'react';
import { Button, ButtonProps } from '@chakra-ui/react';

export const TweetButton: React.FC<ButtonProps> = ({ size, ...rest }) => {
  const tweet = () => {
    console.log('tweet...');
  };

  return (
    <Button onClick={tweet} colorScheme="blue" borderRadius="20" size={size} {...rest}>
      Tweet
    </Button>
  );
};

export default TweetButton;
