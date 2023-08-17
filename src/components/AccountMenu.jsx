import React from "react";
import { Link as LinkRoute } from "react-router-dom";
import {
  useDisclosure,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Button,
  Icon,
} from "@chakra-ui/react";

import { FaUserAlt } from "react-icons/fa";
import { RiSettings4Fill } from "react-icons/ri";
import { IoIosExit } from "react-icons/io";
import { useNavigate } from "react-router-dom";
import { supabase } from "../supabaseClient";
// import LoginModal from "./LoginWithOtpModal";

function AccountMenu() {
  const navigate = useNavigate();
  const handleLogOut = async () => {
    const { error } = await supabase.auth.signOut();
    localStorage.removeItem("session");
    navigate("/login");
    // console.log("hehe");
  };
  return (
    <div>
      <Menu color="transparent">
        <MenuButton
          as={Button}
          leftIcon={<Icon as={FaUserAlt} h={5} w={5} color="green.500" />}
        >
          <p className="text-green-500">Aqmal</p>
        </MenuButton>
        <MenuList>
          <MenuItem minH="48px" gap="20px">
            <Icon as={FaUserAlt} h={5} w={5} color="green.500" />
            <span>Profil</span>
          </MenuItem>
          <MenuItem minH="48px" gap="20px">
            <Icon as={RiSettings4Fill} h={6} w={6} color="green.500" />
            <span>Pengaturan</span>
          </MenuItem>
          <MenuItem minH="48px" gap="20px" onClick={() => handleLogOut()}>
            <Icon as={IoIosExit} h={6} w={6} color="green.500" />
            <span>Logout</span>
          </MenuItem>
          {/* <MenuItem>
            <LoginModal />
          </MenuItem> */}
        </MenuList>
      </Menu>
    </div>
  );
}

export default AccountMenu;
