import { Box, Flex, Icon, Image } from "@chakra-ui/react";
import { socials } from "../../utils/data";
import useElementWidth from "../../hooks/useElementWidth";
import Intro from "./Intro";

const Home = () => {
  const { elementRef, elementWidth } = useElementWidth();

  return (
    <Box id="/" mb={"100px"} className="text-white" pt={{ md: "100px" }}>
      <Flex gap={{ base: "40px", md: "100px" }} mb={{ base: "30px", md: 0 }}>
        <Flex direction={"column"} gap={"35px"}>
          {socials.map((each) => (
            <a
              key={each.id}
              href={each.link}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Icon
                className="text-blue text-hover-light-3-blue"
                as={each.icon}
                boxSize={6}
              />
            </a>
          ))}
        </Flex>
        <Flex
          w={"80%"}
          justify={"space-between"}
          flexWrap={"wrap"}
          gap={{ base: "30px", md: 0 }}
        >
          <Intro base={false} />
          <Box
            ref={elementRef}
            width={{ base: "100%", md: "46%" }}
            maxW={{ base: "320px", md: "46%" }}
            h={elementWidth}
          >
            <Image
              w={"100%"}
              h={"100%"}
              borderRadius={"60%"}
              alt="picture"
              objectFit={"cover"}
              src="https://res.cloudinary.com/dbxvk3apv/image/upload/v1697842761/Metaversus/WhatsApp_Image_2023-10-20_at_12.58.48_fitml4.webp"
            />
          </Box>
        </Flex>
      </Flex>
      <Intro base />
    </Box>
  );
};

export default Home;
