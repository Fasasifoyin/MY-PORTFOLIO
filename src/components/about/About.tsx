import { Box, Flex, Image, Icon } from "@chakra-ui/react";
import Headers from "../Headers";
import { AiOutlineDownload } from "react-icons/ai";

const About = () => {
  return (
    <Box id="about" mb={"100px"}>
      <Headers title="About me" subTitle="Get to know me" />
      <Flex
        direction={{ base: "column", md: "row" }}
        justify={"space-between"}
        align={"center"}
        gap={{ base: "20px", md: 0 }}
      >
        <Box
          width={{ base: "100%", md: "46%" }}
          display={"grid"}
          placeItems={"center"}
        >
          <Box
            width={{ base: "260px", sm: "320px" }}
            h={{ base: "260px", sm: "320px" }}
            borderRadius={"50%"}
            border={"5px solid #576ee0"}
          >
            <Image
              width={"100%"}
              h={"100%"}
              alt="Picture"
              objectFit={"cover"}
              borderRadius={"50%"}
              src="https://res.cloudinary.com/dbxvk3apv/image/upload/v1697877950/Metaversus/WhatsApp_Image_2023-10-20_at_22.44.13_w8gcfv.webp"
            />
          </Box>
        </Box>

        <Box width={{ base: "100%", md: "46%" }}>
          <p className="text-white" style={{ marginBottom: "15px" }}>
            I'm Fasasi Oluwafoyinkanla John, proficient in both front-end and
            back-end development i.e I work on both user interface(UI) and the
            server side of a web application
          </p>

          <p className="text-fade-white" style={{ marginBottom: "25px" }}>
            I build visually appealing, responsive and mobile-friendly websites
            with modern tools and also develop highly scalable, robust and
            efficient server applications using powerful tools{" "}
          </p>

          <p className="text-fade-white" style={{ marginBottom: "10px" }}>
            I'm also a 100l Microbiology student at University of Lagos.
          </p>
          <p className="text-white">
            Got a project? Hire me and enjoy quality & excellence in delivery.
          </p>
          <a
            href="OLUWAFOYINKANLA FASASI.pdf"
            download="OLUWAFOYINKANLA FASASI.pdf"
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
              <p className="text-white fw-bold">Download CV</p>
              <Icon boxSize={6} className="text-white" as={AiOutlineDownload} />
            </Flex>
          </a>
        </Box>
      </Flex>
    </Box>
  );
};

export default About;
