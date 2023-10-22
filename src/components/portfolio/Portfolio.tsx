import { Box, Flex, Icon, Image } from "@chakra-ui/react";
import Headers from "../Headers";
import { AiOutlineRight, AiOutlineLeft } from "react-icons/ai";
import { portfolio } from "../../utils/data";
import useElementWidth from "../../hooks/useElementWidth";
import { AiOutlineSend } from "react-icons/ai";

const Portfolio = () => {
  const { elementWidth, elementRef } = useElementWidth();

  const scroll = (direction: string) => {
    const { current } = elementRef;
    if (current) {
      direction === "left"
        ? (current.scrollLeft -= elementWidth)
        : (current.scrollLeft += elementWidth);
    }
  };

  return (
    <Box id="portfolio" mb={"100px"}>
      <Headers title="Portfolio" subTitle="Some of my works" />
      <Flex justify={"space-between"} align={"center"}>
        <Icon
          className="text-blue cursor"
          boxSize={{ base: "25px", md: "40px" }}
          as={AiOutlineLeft}
          onClick={() => scroll("left")}
        />
        <Box
          className="scroller snaps scrollbody"
          ref={elementRef}
          width={"80%"}
          overflowX={"scroll"}
          py={"30px"}
          boxShadow={"rgba(0, 0, 0, 0.24) 0px 3px 8px"}
        >
          {portfolio.map((each) => (
            <Flex
              px={"20px"}
              key={each.id}
              width={`${elementWidth}px`}
              direction={{ base: "column", md: "row" }}
              justify={"space-between"}
              gap={{ base: "20px", md: 0 }}
            >
              <Box width={{ base: "100%", md: "45%" }} h={"220px"}>
                <Image
                  w={"100%"}
                  h={"100%"}
                  objectFit={"cover"}
                  src={each.image}
                  borderRadius={"10px"}
                />
              </Box>
              <Box width={{ base: "100%", md: "45%" }}>
                <h4 style={{marginBottom:"10px"}} className="text-white medium-text fw-bold">{each.name}</h4>
                <p className="text-fade-white">{each.about}</p>
                <a
                  href={each.demoLink}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Flex
                    mt={"25px"}
                    padding={"20px 15px"}
                    className="bg-blue bg-hover-dark-3-blue"
                    width={"max-content"}
                    align={"center"}
                    gap={"15px"}
                    borderRadius={"10px"}
                  >
                    <p className="text-white fw-bold">Demo</p>
                    <Icon
                      boxSize={5}
                      className="text-white"
                      as={AiOutlineSend}
                    />
                  </Flex>
                </a>
              </Box>
            </Flex>
          ))}
        </Box>
        <Icon
          className="text-blue cursor"
          boxSize={{ base: "25px", md: "40px" }}
          as={AiOutlineRight}
          onClick={() => scroll("right")}
        />
      </Flex>
    </Box>
  );
};

export default Portfolio;
