import { Box, Flex, Heading, Image, Text, Wrap, WrapItem } from "@chakra-ui/react";

import { Badge } from "@/components/ Badge"
import humanImg from "@/assets/images/human.png"
import { useTranslation } from 'react-i18next';

const SKILLS = [
    {label: "React"},
    {label: "Redux"},
    {label: "Typescript"},
    {label: "Node.JS"}
]

export function Landing() {
    const { t } = useTranslation("home")
    const leftSection = 
    <Box>
        <Heading fontSize={{base: "2xl", md: "4xl", xl: "7xl"}} color={"secondary"} whiteSpace={"pre-line"}>
            {t("greetings")}
            <Text as={"span"} color={"primary.dark"}>
                .
            </Text>
        </Heading>
        <Text fontSize={"lg"} color={"secondary"}>
            {t("iAm")}
            <Text as={"span"} fontWeight={"bold"}>
                {" " + t("job")}
            </Text> 
            <br />{t("location")}
        </Text> 
        <Wrap mt={"14"}>
            {SKILLS.map((skill) => (
                <WrapItem key={skill.label}>
                    <Badge bg={skill.label}>{skill.label}</Badge>
                </WrapItem>
                ))}
        </Wrap>
    </Box>

    const badgeExperience = <Badge bg="primary.light" borderRadius={7} p={3} textAlign="Center">
        <Text fontSize={"xl"}>{new Date().getFullYear()-2013}</Text>
        <Text>{t("experience")}</Text>
    </Badge>;
    const rightSection = (
        <Box mt={{ base: 10, md: 0}}>
            <Flex justify={"flex-end"}>{badgeExperience}</Flex>
            <Image src={humanImg} w={400}/>
        </Box>
    );

    return <Flex 
        pl={20} 
        direction={{base:"column", md: "row"}} 
        justify="space-evenly" 
        mt={{base: 50, md: 150}}
    >
        {leftSection}
        {rightSection}
    </Flex>;
}