import React, { useState, useEffect } from "react";
import {
  Card,
  CardBody,
  Stack,
  Heading,
  Text,
  Divider,
  Image,
  CardFooter,
  ButtonGroup,
  Button,
} from "@chakra-ui/react";
import { faker } from "@faker-js/faker";
import { Rating } from "react-simple-star-rating";
import { useNavigate } from "react-router-dom";
import { supabase } from "../supabaseClient";

function CardComponent({ productData }) {
  const navigate = useNavigate();
  const [dataCover, setDataCover] = useState([]);
  console.log(productData);

  useEffect(() => {
    async function fetchDataCover() {
      const { data: dataCover, error } = await supabase
        .from("cover_buku")
        .select("*");

      if (!error) {
        setDataCover(dataCover);
      }
    }

    fetchDataCover();
  }, []);

  console.log(dataCover);

  // console.log(dataCover.filter((e) => e.id_cover == 1)[0].url_cover);

  return (
    <div className="space-6 ">
      <Card
        maxW="220px"
        minH={"600px"}
        border={"1px"}
        borderColor={"gray.400"}
        boxShadow="2xl"
        rounded="md"
      >
        <CardBody key={productData.id_buku}>
          <Image
            size="xl"
            outlineColor={"gray.300"}
            src={
              dataCover &&
              dataCover.filter((e) => e.id_cover == productData.id_buku)[0]
                ?.url_cover
            }
            borderRadius="lg"
            alt={productData.judul}
          />
          <Stack mt="6" spacing="3">
            <Heading size="md">
              <p className="mb-2 text-xl">{productData.judul}</p>
              <p className="font-normal text-sm">{productData.penulis}</p>
            </Heading>
            <div
              style={{
                direction: "ltr",
                fontFamily: "sans-serif",
                touchAction: "none",
              }}
            >
              <Rating
                initialValue={faker.string.alphanumeric({
                  length: { min: 5, max: 5 },
                })}
                onClick={function noRefCheck() {}}
                transition
                SVGstyle={{ display: "inline" }}
                size={18}
              />
            </div>
            <p fontSize="2xl" color="green.">
              {/* Rp {numeral(productData.harga).format("0,0")} */}
              Rp {productData.harga.toLocaleString("id-ID")}
            </p>
          </Stack>
        </CardBody>
        <Divider />
        <CardFooter>
          <ButtonGroup columnGap="16px" px="10px">
            <Button
              variant="solid"
              border="2px"
              borderColor="green.500"
              size={"sm"}
              fontSize={"md"}
              colorScheme="green"
              paddingX="15px"
              _hover={{
                color: "white",
                border: "2px",
                borderColor: "blue.400",
                background: "blue.400",
              }}
              onClick={() => navigate(`detail/${productData.id_buku}`)}
            >
              Beli
            </Button>
            <Button
              variant="outline"
              size={"sm"}
              fontSize={"md"}
              paddingX="15px"
              colorScheme="green"
              _hover={{ color: "white", background: "red.400" }}
            >
              Sukai
            </Button>
          </ButtonGroup>
        </CardFooter>
      </Card>
    </div>
  );
}

export default CardComponent;
