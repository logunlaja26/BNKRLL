import {
  Box,
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
  Input,
} from "@chakra-ui/react";
import { useState } from "react";

interface Props {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (updatedBuyIn: number) => void;
  currentBuyIn: number;
  currentSessionId: string;
}

const UpdateBuyInModal = ({
  isOpen,
  onClose,
  onSubmit,
  currentBuyIn,
}: Props) => {
  const [updatedBuyIn, setUpdatedBuyIn] = useState<number>(currentBuyIn);

  const handleUpdateClick = () => {
    onSubmit(updatedBuyIn);
    onClose();
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose} size="sm">
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Update Buy-In</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <Box mb={4}>
            <Input
              type="number"
              placeholder="Enter updated buy-in"
              value={updatedBuyIn}
              onChange={(e) => setUpdatedBuyIn(Number(e.target.value))}
            />
          </Box>
        </ModalBody>
        <ModalFooter>
          <Button colorScheme="blue" mr={3} onClick={handleUpdateClick}>
            Update
          </Button>
          <Button variant="outline" onClick={onClose}>
            Cancel
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default UpdateBuyInModal;
