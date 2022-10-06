import Image from "next/image";
import { Box } from "@chakra-ui/layout";

const CustomImage = (props) => {
  const { src, alt, ...rest } = props;
  return (
    <Box position="relative" {...rest}>
      <Image objectFit="cover" layout="fill" src={src} alt={alt} />
    </Box>
  );
};

export default CustomImage;
