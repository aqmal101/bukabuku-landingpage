import { useState } from "react";
import { Button, Input, FormControl, Toast } from "@chakra-ui/react";
import { supabase } from "../supabaseClient";
import { useNavigate } from "react-router-dom";
import { useToast } from "@chakra-ui/react";

function Login() {
  const [email, setEmail] = useState();
  const navigate = useNavigate();
  const toast = useToast();

  const handleSendMagicLink = async () => {
    try {
      const { data, error } = await supabase.auth.signInWithOtp({
        email: "aqmalmh101@gmail.com",
        options: {
          emailRedirectTo: "/",
        },
      });
      if (!error) {
        console.log("Magic link sent successfully!");
      }
      toast({
        title: "Account Logged In",
        description: "Magic link sent successfully!.",
        status: "success",
        duration: 3000,
        isClosable: true,
      });
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="w-full h-screen flex justify-center items-center">
      <div className="max-w-lg border border-green-300 rounded-lg shadow shadow-gray-500 p-10 space-y-3 flex flex-col justify-center items-center">
        <h1 className="text-3xl font-bold text-green-600">Login</h1>
        <p className="text-sm text-center text-green-800">
          Silahkan Masukkan Akun Anda
        </p>

        <FormControl>
          <Input
            placeholder="Masukkan Username"
            _placeholder={{ fontSize: 13 }}
            type="email"
            colorScheme="teal"
            color={"black"}
            focusBorderColor="green.500"
            width="300px"
            onChange={(e) => setEmail(e.target.value)}
          ></Input>
        </FormControl>

        <Button
          colorScheme="whatsapp"
          width={"full"}
          onClick={handleSendMagicLink}
        >
          Kirimkan Kode OTP
        </Button>
      </div>
    </div>
  );
}

export default Login;
