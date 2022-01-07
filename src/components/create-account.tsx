import React, { useState } from 'react';
import {
  Input,
  Button,
  FormControl,
  FormLabel,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
} from '@chakra-ui/react';
import { trpc } from '@/utils';
import { createJWT } from '@/lib/auth';
import { __jwt__, colors } from '@/constants';

// TODO! Nookies doesn't store the cookie in the same place as ctx.req.cookies
export const CreateAccount: React.FC<{ isOpen: boolean; onClose: () => void }> = ({
  isOpen,
  onClose,
}) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const mutation = trpc.useMutation(['users.create']);

  const create = async () => {
    // TODO: check if username and password are not only spaces
    if (username.length !== 0 && password.length !== 0) {
      const jwt = await createJWT();
      mutation.mutate({ name: username, password, jwt });
    }
  };

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      closeOnOverlayClick={false}
      closeOnEsc={false}
      autoFocus={false}
    >
      <ModalOverlay />
      <ModalContent bg={colors.darkGray} color={colors.white}>
        <ModalHeader>Create your account</ModalHeader>
        <ModalBody pb="6">
          <FormControl>
            <FormLabel>Username</FormLabel>
            <Input
              value={username}
              onChange={e => setUsername(e.target.value)}
              placeholder="Username"
            />
          </FormControl>
          <FormControl mt="4">
            <FormLabel>Password</FormLabel>
            <Input
              value={password}
              onChange={e => setPassword(e.target.value)}
              placeholder="Password"
            />
          </FormControl>
        </ModalBody>
        <ModalFooter>
          <Button colorScheme="blue" onClick={create}>
            Create
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default CreateAccount;
