import React, { useState, useEffect } from "react";
import CardComponent from "../components/Card";
import NavbarComponent from "../components/NavbarComponent";
import { supabase } from "../supabaseClient";

function Home() {
  const [productData, setProductData] = useState(null);
  useEffect(() => {
    async function fetchProductData() {
      // Menggunakan Supabase untuk mengambil data produk dari tabel buku berdasarkan ID
      const { data, error } = await supabase.from("buku").select("*");

      if (error) {
        console.error("Error fetching product data:", error);
      } else {
        console.log(data);
        setProductData(data);
      }
    }

    fetchProductData();
  }, []);
  return (
    <div>
      <NavbarComponent />
      <div className="bg-white px-8 py-[120px] justify-center max-sm:pt-[80px] max-sm:justify-center">
        <div className="flex flex-wrap gap-9 w-full justify-start mx-4 items-center max-sm:justify-center max-sm:mx-1">
          {productData?.map((e, i) => (
            <CardComponent key={i} productData={e} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Home;
