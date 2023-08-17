import React from "react";
import {
  Box,
  Flex,
  Input,
  Icon,
  IconButton,
  Select,
  InputGroup,
  InputRightElement,
} from "@chakra-ui/react";
import { SearchIcon } from "@chakra-ui/icons";

const SearchBar = () => {
  const genres = [
    "Biografi",
    "Fantasi",
    "Fiksi",
    "Fiksi Ilmiah",
    "Filosofi",
    "Horor",
    "Pengembangan Diri",
    "Pengetahuan",
    "Romansa",
    "Sastra",
    "Sejarah",
  ];

  return (
    <div className="flex flex-row w-auto max-sm:hidden">
      <Flex align="center">
        <Select
          color="white"
          placeholder="Pilih genre"
          mr={2}
          width="150px"
          borderWidth={2}
          focusBorderColor="transparent"
          _focus={{
            color: "black",
            paddingX: "15px",
            width: "auto",
            borderRadius: "10px",
          }}
        >
          {genres.map((genre) => (
            <option key={genre} value={genre} color={"black"}>
              {genre}
            </option>
          ))}
        </Select>
        <InputGroup size="md" width="500px">
          <Input
            pr="4.5rem"
            placeholder="Cari Nama Buku, Pengarang"
            focusBorderColor="white"
            border="2px"
            borderColor="white"
            _placeholder={{ color: "white" }}
            _hover={{ borderColor: "white" }}
            _focus={{ bg: "white", color: "black" }}
          />
          <InputRightElement width="4.5rem">
            <Icon as={SearchIcon} h={5} w={5} color="white" />
          </InputRightElement>
        </InputGroup>
      </Flex>
    </div>
  );
};

export default SearchBar;
