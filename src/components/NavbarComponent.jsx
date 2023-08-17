import React from "react";
import { Link as LinkRoute, useLocation } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";
import { IconButton, Icon, Image } from "@chakra-ui/react";
import AccountMenu from "./AccountMenu";
import SearchBar from "./SearchBooks";
import DrawerMenu from "./DrawerMenu";

function NavbarComponent() {
  const location = useLocation();
  const isHomePage = location.pathname === "/";

  return (
    <nav className=" bg-green-500  w-full h-auto fixed z-10 max-sm:h-[60px] max-sm:flex max-sm:items-center max-sm:top-0">
      <div className="px-9 w-full h-20 flex flex-row justify-between space-x-9">
        <div className="m-2 flex flex-col justify-center">
          <LinkRoute to={"/"} className=" hover:decoration-none">
            {/* <Image src={BukaBuku} alt="Logo" boxSize="60px" /> */}
            <h1 className="text-2xl max-sm:text-sm font-bold text-white">
              BUKABUKU
            </h1>
          </LinkRoute>
        </div>
        {isHomePage && <SearchBar />}
        <div className="flex flex-row items-center justify-end gap-x-2 max-sm:hidden">
          <IconButton
            icon={<Icon as={FaShoppingCart} h={5} w={5} color="white" />}
            size="lg"
            aria-label="cart"
            background="none"
            _hover="bg-green-500"
            marginEnd="20px"
          />
          <AccountMenu />
        </div>
        <div className="max-sm:flex flex-row items-center hidden">
          <DrawerMenu />
        </div>
      </div>
    </nav>
  );
}

export default NavbarComponent;
