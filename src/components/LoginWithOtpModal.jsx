import React, { useState, useEffect } from "react";
import {
  useDisclosure,
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Input,
  FormControl,
} from "@chakra-ui/react";

function Home() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [isOtpVerified, setIsOtpVerified] = useState(false);
  const [otp, setOtp] = useState("");

  const handleOtpVerification = () => {
    // Replace this with your actual OTP verification logic
    // You might need to call an API to verify the OTP
    if (otp === "123456") {
      setIsOtpVerified(true);
    }
  };

  useEffect(() => {
    if (isOtpVerified) {
      onOpen();
    }
  }, [isOtpVerified, onOpen]);

  return (
    <div>
      <h1>Welcome to our Home Page</h1>
      <LoginModal
        isOpen={isOpen}
        onClose={onClose}
        setOtp={setOtp}
        handleOtpVerification={handleOtpVerification}
      />
    </div>
  );
}

function LoginModal({ isOpen, onClose, setOtp, handleOtpVerification }) {
  return (
    <Modal closeOnOverlayClick={false} isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader className="flex flex-row justify-center">
          <h1 className="text-green-500 text-2xl font-bold">Login</h1>
        </ModalHeader>
        <ModalCloseButton />
        <ModalBody pb={6}>
          <div className="p-10 space-y-3 flex flex-col justify-center items-center">
            <FormControl>
              <Input
                placeholder="Masukkan Kode OTP"
                _placeholder={{ fontSize: 13 }}
                colorScheme="teal"
                color={"black"}
                focusBorderColor="green.500"
                width="full"
                value={otp}
                onChange={(e) => setOtp(e.target.value)}
              ></Input>
            </FormControl>

            <Button
              colorScheme="whatsapp"
              width="full"
              onClick={handleOtpVerification}
            >
              Konfirmasi
            </Button>
          </div>
        </ModalBody>

        <ModalFooter className="flex flex-row justify-center">
          <p className="text-sm">Cek Kode OTP melalui Email Anda</p>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
}

export default Home;
