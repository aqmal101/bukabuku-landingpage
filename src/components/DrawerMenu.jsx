import React from "react";
import {
  useDisclosure,
  IconButton,
  InputGroup,
  Button,
  Icon,
  InputRightElement,
  Input,
  Stack,
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerFooter,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
} from "@chakra-ui/react";
import { HamburgerIcon, SearchIcon } from "@chakra-ui/icons";
import { FaUserAlt } from "react-icons/fa";
import { RiSettings4Fill } from "react-icons/ri";
import { IoIosExit } from "react-icons/io";
import { useNavigate } from "react-router-dom";
import { supabase } from "../supabaseClient";

function DrawerMenu() {
  const navigate = useNavigate();
  const handleLogOut = async () => {
    const { error } = await supabase.auth.signOut();
    localStorage.removeItem("session");
    navigate("/login");
    // console.log("hehe");
  };

  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();

  return (
    <>
      <IconButton
        ref={btnRef}
        icon={<HamburgerIcon w={6} h={6} />}
        colorScheme="whatsapp"
        onClick={onOpen}
      />
      <Drawer
        isOpen={isOpen}
        placement="right"
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader className="text-green-500">Menu</DrawerHeader>
          <DrawerBody>
            <InputGroup>
              <Input
                border="1px"
                borderColor="green"
                placeholder="Cari Nama Buku, Pengarang"
                _placeholder={{ fontSize: "12px" }}
              />
              <InputRightElement>
                <Icon as={SearchIcon} h={2} w={2} color="white" />
              </InputRightElement>
            </InputGroup>
          </DrawerBody>
          <DrawerFooter className="space-x-2">
            <Stack>
              <Button
                leftIcon={<FaUserAlt />}
                colorScheme="whatsapp"
                variant="solid"
              >
                Aqmal
              </Button>
              <Button
                rightIcon={<RiSettings4Fill size={"20px"} />}
                colorScheme="whatsapp"
                variant="outline"
              >
                Pengaturan
              </Button>
              <Button
                rightIcon={<IoIosExit size={"20px"} />}
                colorScheme="whatsapp"
                variant="outline"
                onClick={() => handleLogOut()}
              >
                Logout
              </Button>
            </Stack>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  );
}

export default DrawerMenu;
