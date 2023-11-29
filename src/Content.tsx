import {
  Card,
  CardHeader,
  Heading,
  CardBody,
  Stack,
  StackDivider,
  Box,
  Text,
  VStack,
} from "@chakra-ui/react";
import { Item } from "./Item";

const Content = ({ sections }) => {
  const item = sections.map((x) => <Item key={x} name={x} />);

  return (
    <VStack
      overflow={"auto"}
      display={"flex"}
      alignItems={"start"}
      flexGrow={1}
      w={"100%"}
    >
      {item}
    </VStack>
  );
};

export default Content;
