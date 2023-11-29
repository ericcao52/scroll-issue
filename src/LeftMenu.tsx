import {
  Card,
  CardHeader,
  Heading,
  CardBody,
  Stack,
  StackDivider,
  Box,
  Text,
} from "@chakra-ui/react";

const LeftMenu = ({ sections }) => {
  const clickItem = (name) => {
    const el = document.getElementById(name);
    const y = el?.getBoundingClientRect().top + window.scrollY - 90;
    window.scroll({
      top: y,
      behavior: "smooth",
    });

    //el?.scrollIntoView();
  };
  return (
    <Card
      display="flex"
      verticalAlign={"start"}
      position={"sticky"}
      top={0}
      height={"100vh"}
      overflow={"auto"}
    >
      <CardHeader>
        <Heading size="md">Client Report</Heading>
      </CardHeader>

      <CardBody>
        <Stack divider={<StackDivider />} spacing="4">
          {sections.map((x) => (
            <Box
              key={x}
              _hover={{ backgroundColor: "gray" }}
              cursor={"pointer"}
              onClick={() => clickItem(x)}
            >
              <Heading size="xs" textTransform="uppercase">
                {x}
              </Heading>
              <Text pt="2" fontSize="sm">
                View a summary of all your clients over the last month.
              </Text>
            </Box>
          ))}
        </Stack>
      </CardBody>
    </Card>
  );
};

export default LeftMenu;
