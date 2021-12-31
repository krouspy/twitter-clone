import React from 'react';
import { HStack, IconButton, Button, Spacer } from '@chakra-ui/react';
import { AiOutlineFileGif, AiOutlineCalendar } from 'react-icons/ai';
import { BiImage } from 'react-icons/bi';
import { BsBarChartLineFill, BsEmojiSmile } from 'react-icons/bs';

export const Utilitaries: React.FC<{ isTweetEmpty: boolean }> = ({ isTweetEmpty }) => {
  return (
    <HStack direction="row">
      {buttons.map(({ id, Icon, ariaLabel }) => (
        <IconButton key={id} icon={<Icon />} aria-label={ariaLabel} variant="ghost" size="lg" />
      ))}
      <Spacer />
      <Button colorScheme="blue" size="sm" borderRadius="20" isDisabled={isTweetEmpty}>
        Tweet
      </Button>
    </HStack>
  );
};

export default Utilitaries;

const buttons = [
  {
    id: 0,
    Icon: BiImage,
    ariaLabel: 'utilitary-image',
  },
  {
    id: 1,
    Icon: AiOutlineFileGif,
    ariaLabel: 'utilitary-gif',
  },
  {
    id: 2,
    Icon: BsBarChartLineFill,
    ariaLabel: 'utilitary-barchart',
  },
  {
    id: 3,
    Icon: BsEmojiSmile,
    ariaLabel: 'utilitary-emoji',
  },
  {
    id: 4,
    Icon: AiOutlineCalendar,
    ariaLabel: 'utilitary-calendar',
  },
];
