import { BsGithub, BsLinkedin, BsTwitter } from "react-icons/bs";
import { HStack, Link } from "@chakra-ui/react";

import { Icon } from "@chakra-ui/react";

export function Footer() {
    return <HStack justify={"center"} h={130} bg={"secondary"}>
        <Link href="#" isExternal>
            <Icon as={BsTwitter} w={8} h={8} color={"#03A9F4"} />
        </Link>
        <Link href="#" isExternal>
            <Icon borderRadius={5} as={BsLinkedin} w={8} h={8} color={"#0D73c6"} bg={"white"}/>
        </Link>
        <Link href="#" isExternal>
            <Icon as={BsGithub} w={8} h={8} color={"white"} />
        </Link>
    </HStack>;
}