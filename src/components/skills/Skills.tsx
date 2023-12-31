import { useState } from "react";
import { Box, Flex, Icon, Image } from "@chakra-ui/react";
import Headers from "../Headers";
import {
  MdDataObject,
  MdKeyboardArrowUp,
  MdKeyboardArrowDown,
} from "react-icons/md";
import { GiServerRack } from "react-icons/gi";
import Tech from "./Tech";
import { frontEnd, backend } from "../../utils/data";

const Skills = () => {
  const [showFront, setShowFront] = useState(false);
  const [showBack, setShowBack] = useState(false);

  return (
    <Box id="skills" mb={"100px"} className="cc-container page-alignment">
      <Headers title="Skills" subTitle="Expert Proficiency" />
      <Flex
        direction={{ base: "column", md: "row" }}
        width={{ base: "100%", md: "85%" }}
        justify={"space-between"}
        gap={{ base: "30px", md: 0 }}
        margin={"0 auto 50px auto"}
      >
        <Box width={{ base: "100%", md: "46%" }}>
          <Flex
            mb={"25px"}
            justify={"space-between"}
            align={"center"}
            gap={"20px"}
          >
            <Flex align={"center"} gap={"10px"}>
              <Icon className="text-blue" as={MdDataObject} boxSize={"40px"} />
              <h5 className="medium-text text-white">Frontend Development</h5>
            </Flex>
            <Icon
              className="text-blue cursor"
              boxSize={8}
              onClick={() => setShowFront(!showFront)}
              as={showFront ? MdKeyboardArrowUp : MdKeyboardArrowDown}
            />
          </Flex>
          <Tech data={frontEnd} show={showFront} />
        </Box>

        <Box width={{ base: "100%", md: "46%" }}>
          <Flex
            mb={"25px"}
            justify={"space-between"}
            align={"center"}
            gap={"20px"}
          >
            <Flex align={"center"} gap={"10px"}>
              <Icon className="text-blue" as={GiServerRack} boxSize={"40px"} />

              <h5 className="medium-text text-white">Backend Development</h5>
            </Flex>
            <Icon
              className="text-blue cursor"
              boxSize={8}
              onClick={() => setShowBack(!showBack)}
              as={showBack ? MdKeyboardArrowUp : MdKeyboardArrowDown}
            />
          </Flex>
          <Tech data={backend} show={showBack} />
        </Box>
      </Flex>
      <Box width={"100%"} maxW={"550px"} margin={"0 auto"} h={{base:"300px", sm:"400px"}}>
        <Image w={"100%"} h={"100%"} objectFit={"cover"} src="https://res.cloudinary.com/dbxvk3apv/image/upload/v1697889018/Languages/WhatsApp_Image_2023-10-21_at_01.45.28_zpgaxr.webp"/>
      </Box>
    </Box>
  );
};

export default Skills;
