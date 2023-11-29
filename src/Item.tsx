import {
  Card,
  CardHeader,
  Heading,
  CardBody,
  Stack,
  StackDivider,
  Box,
  Text,
  Spinner,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import RenderIfVisible from "react-render-if-visible";
function randomIntFromInterval(min, max) {
  // min and max included
  return Math.floor(Math.random() * (max - min + 1) + min);
}

const Renderer = ({ name }) => {
  const [height, setHeight] = useState<number | null>(null);
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    if (height === null) {
      setLoading(true);
      setTimeout(() => {
        const n = randomIntFromInterval(400, 800);
        console.log("rendering", name, n);
        setHeight(n);
        setLoading(false);
      }, Math.floor(randomIntFromInterval(500, 3000)));
    }
  }, []);
  return (
    <Card
      height={height || 300}
      w={"100%"}
      flexGrow={1}
      position={"relative"}
      border={"1px solid black"}
    >
      <CardHeader>
        <Heading size="md">{name}</Heading>
      </CardHeader>

      <CardBody>
        <Box width={"100%"} height={"100%"}>
          <Heading size="xs" textTransform="uppercase">
            Summary
          </Heading>
          <Text pt="2" fontSize="sm">
            View a summary of all your clients over the last month. height :{" "}
            {height}
          </Text>
        </Box>
        {loading && (
          <Box
            position={"absolute"}
            width={"100%"}
            height={"100%"}
            backgroundColor={"#00000040"}
            top={0}
            left={0}
            display={"flex"}
            alignItems={"center"}
            justifyContent={"center"}
          >
            <Spinner color="red.500" />
          </Box>
        )}
      </CardBody>
    </Card>
  );
};

export const Item = (props) => {
  return (
    <Box id={props.name} flexGrow={1} w={"100%"}>
      <RenderIfVisible defaultHeight={300} stayRendered={false}>
        <Renderer {...props} />
      </RenderIfVisible>
    </Box>
  );
};
