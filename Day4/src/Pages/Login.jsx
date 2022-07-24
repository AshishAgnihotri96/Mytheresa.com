import {
  Box,
  Checkbox,
  Flex,
  Image,
  Input,
  Radio,
  RadioGroup,
  Stack,
  Text
} from "@chakra-ui/react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../Components/Navbar";
import HomePage from "./HomePage";
const initialData = {
  title: "",
  first_name: "",
  last_name: "",
  email: "",

  password: "",
  confirm_password: ""
};

export default function Login() {
  let navigate = useNavigate();
  const [formdata, setformdata] = useState(initialData);

  const [user, setuser] = useState([]);
  const handleChange = (e) => {
    const { value, name } = e.target;
    setformdata({ ...formdata, [name]: value });
  };

  const handlesubmit = (e) => {
    e.preventDefault();
  };
  const handleAddUser = (e) => {
    if (formdata.password !== formdata.confirm_password) {
      alert("Enter Correct Password");
      return;
    } else if (formdata.first_name === "") {
      alert("Enter details");
      return;
    }
    e.preventDefault();
    setuser([...user, formdata]);
    setformdata(initialData);
    alert("Register Success");
    navigate("/");
  };
  const handleLogin = () => {
    alert("Login Success");
    navigate("/");
  };
  return (
    <Box>
      <Navbar />

      <Box m="auto" mt="8rem" display="flex">
        <Box mr="3rem" w="45%">
          <Text>CREATE AN ACCOUNT</Text>
          <Text mb="2rem">
            Please enter the following information to create your account.
          </Text>
          <form onSubmit={handlesubmit}>
            <RadioGroup>
              <Stack direction="row">
                <Radio value="Mr.">Mr.</Radio>
                <Radio value="Mrs.">Mrs.</Radio>
                <Radio value="Ms.">Ms.</Radio>
              </Stack>
            </RadioGroup>
            <Stack spacing={5}>
              <Input
                value={formdata.first_name}
                onChange={handleChange}
                name="first_name"
                placeholder="First Name"
              />
              <Input
                value={formdata.last_name}
                onChange={handleChange}
                name="last_name"
                placeholder="Last Name"
              />
              <Input
                value={formdata.email}
                onChange={handleChange}
                type="email"
                name="email"
                placeholder="Email Addres"
              />
              <Input
                value={formdata.password}
                onChange={handleChange}
                name="password"
                placeholder="Password"
              />
              <Input
                onChange={handleChange}
                name="confirm_password"
                value={formdata.confirm_password}
                placeholder="Confirm Password"
              />
            </Stack>

            <Checkbox size="sm">
              <Text align="left">
                From now on I will receive the Mytheresa Newsletter with
                selected fashion offers. If I do not wish to receive the
                newsletter, I can unsubscribe at any time free of charge at
                privacy@mytheresa.com. <br />
                <br />I agree that Mytheresa may insert analytical web beacons
                into the newsletter and create a personalized user profile based
                on my purchase and usage behavior, including sending a
                notification when I have placed something in the shopping cart.
                Further details can be found in our Privacy Policy, clause 5. I
                understand that I can revoke my consent at any time by emailing
                privacy@mytheresa.com.
              </Text>
            </Checkbox>

            <Box
              onClick={handleAddUser}
              bottom="0"
              _hover={{ bg: "black" }}
              h="2rem"
              w="9rem"
              borderRadius="none"
              mt="2rem"
              fontSize="10px"
              color="white"
              bg="black"
              as="button"
              isLoading
            >
              REGISTER
            </Box>
          </form>
        </Box>

        <Box w="45%">
          <Text>ALREADY REGISTERED?</Text>
          <Text mb="2rem">If you have an account with us, please log in.</Text>

          <Stack spacing={5}>
            <Input onChange={handleLogin} placeholder="Email Adress" />
            <Input onChange={handleLogin} placeholder="Password" />
          </Stack>
          <Text mt="2rem" align="left" textDecoration="underline">
            Forgot Your Password?
          </Text>
          <Box
            onClick={handleLogin}
            bottom="0"
            _hover={{ bg: "black" }}
            h="2rem"
            w="9rem"
            borderRadius="none"
            mt="2rem"
            fontSize="10px"
            color="white"
            bg="black"
            as="button"
          >
            LOGIN
          </Box>
          <Text mt="2rem" align="left">
            At Mytheresa, we keep your information secure. As a result, it will
            be necessary for you to log in to your account before you are able
            to place an order or change the information on your account. You
            will be asked to log in to complete your order even if you have
            already been greeted on the website.
          </Text>
        </Box>
      </Box>
      <Image
        cursor="pointer"
        src="https://i.im.ge/2022/07/24/F7VoMm.png"
        alt="footer"
      />
    </Box>
  );
}
