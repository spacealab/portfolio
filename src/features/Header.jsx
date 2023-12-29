import { Flex, HStack, Image, Link } from "@chakra-ui/react";

import bubbleImg from "@/assets/images/bubble.png"
import flagDEImg from "@/assets/images/flag-de.png"
import flagENImg from "@/assets/images/flag-en.png"
import logoImg from "@/assets/images/logo.png"
import { useTranslation } from "react-i18next";

export function Header() {
    const { t, i18n } = useTranslation("home")

    const switchLanguage = () => {
        i18n.changeLanguage(i18n.language ==="en" ? "de" : "en")
    }

    return (
        <Flex justify={"space-between"}>
            <Flex p={20}>
                <Image src={logoImg} h={10}/>
            </Flex>
            <HStack p={20}>
                <Image src={bubbleImg} h={10}/>
                <Link 
                    href="mailto:9.alialipour.0@gmail.com?subject=Contacting you from your portfolio" 
                    fontSize="lg" 
                    fontWeight="bold" 
                >
                    {t("hireMe")}
                </Link>
                <Image 
                onClick={switchLanguage}
                    pl={20} 
                    src={i18n.language==="en" ? flagENImg: flagDEImg} 
                    h={8} 
                    cursor={"pointer"}
                />
            </HStack>
        </Flex>
    );
}