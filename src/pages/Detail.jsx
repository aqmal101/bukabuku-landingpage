import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import NavbarComponent from "../components/NavbarComponent";
import { Image, ButtonGroup, Button } from "@chakra-ui/react";
import { supabase } from "../supabaseClient";

function Details() {
  const { id } = useParams();
  const [productData, setProductData] = useState({});
  const [urlBuku, setUrlBuku] = useState("");
  console.log(productData);

  async function getProduct() {
    let { data: products, error } = await supabase
      .from("buku")
      .select("*")
      .eq("id_buku", id)
      .single();

    if (!error) {
      setProductData(products);
    }
  }

  async function getUrlCover() {
    let { data: cover_buku, error: errorBuku } = await supabase
      .from("cover_buku")
      .select("*")
      .eq("id_cover", id)
      .single();
    setUrlBuku(cover_buku?.url_cover);
  }
  useEffect(() => {
    getUrlCover();
    getProduct();
  }, [id]);

  console.log(urlBuku);
  return (
    <>
      <NavbarComponent />
      <div className=" h-auto flex pt-[110px] pb-6 max-sm:py-[100px] max-sm:px-3 items-center justify-center bg-white">
        <div className="max-w-5xl max-sm:w-full max-sm:px-5 max-sm:flex max-sm:flex-col max-sm:items-center max-sm:justify-center container border border-gray-400 shadow-xl rounded-lg gap-10 flex justify-start items-start flex-row bg-white">
          <div className="m-4 border border-gray-400 max-sm:m-2">
            <Image
              className="max-w-sm min-w-sm"
              size="xl"
              minWidth="280px"
              maxWidth="300px"
              src={urlBuku}
              alt={urlBuku}
            />
          </div>
          <div className="py-10 w-full pr-[50px] space-y-3 max-sm:flex max-sm:flex-col max-sm:w-full max-sm:px-1">
            <span className="max-sm:w-fit bg-blue-400 px-[9px] py-[3px] text-white rounded-lg">
              /
              {productData.kategori
                ? productData.kategori.toString().toLowerCase()
                : ""}
            </span>
            <p className="text-gray-500">{productData.penulis}</p>
            <h1 className="text-3xl font-bold">{productData.judul}</h1>
            <p className="text-xl font-semibold text-blue-800">
              Rp {parseFloat(productData.harga).toLocaleString("id-ID")}
            </p>
            <hr class="w-full h-px mr-12 bg-gray-200 border-0 dark:bg-gray-400"></hr>
            <p className=" text-gray-700 ">Deskripsi Buku</p>
            <p class="text-justify">
              Ini adalah buku karangan {productData.penulis} dengan kategori{" "}
              {productData.kategori
                ? productData.kategori.toString().toLowerCase()
                : ""}{" "}
              yang sudah dialih bahasa ke Bahasa Indonesia dan diterbitkan oleh{" "}
              {productData.penerbit} pada tahun {productData.tahun_terbit}
            </p>
            <div>
              <ButtonGroup
                marginTop={"20px"}
                columnGap={{ lg: "40px", sm: "10px" }}
              >
                <Button
                  variant="solid"
                  border="2px"
                  borderColor="green.500"
                  size={"xl"}
                  paddingX="30px"
                  paddingY="0.50rem"
                  letterSpacing="1px"
                  fontSize="17px"
                  colorScheme="green"
                  _hover={{
                    color: "white",
                    border: "2px",
                    background: "blue.400",
                  }}
                  // onClick={() => navigate(`detail/${productData.id_buku}`)}
                >
                  Beli
                </Button>
                <Button
                  variant="outline"
                  size={"xl"}
                  paddingX="20px"
                  // paddingX={{ lg: "30px" }}
                  paddingY="0.50rem"
                  letterSpacing="1px"
                  fontSize="17px"
                  fontWeight="normal"
                  colorScheme="green"
                  _hover={{ color: "white", background: "red.400" }}
                >
                  + daftar keinginan
                </Button>
              </ButtonGroup>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Details;
