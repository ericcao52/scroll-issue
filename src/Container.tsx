import { HStack } from "@chakra-ui/react";
import Content from "./Content";
import LeftMenu from "./LeftMenu";

const sections = [...Array(50).keys()].slice(1).map((x, i) => `Item ${i}`);

export default function () {
  return (
    <HStack alignItems={"start"} w={"100%"}>
      <LeftMenu sections={sections} />
      <Content sections={sections} />
    </HStack>
  );
}
