import { Box } from "@chakra-ui/react";
import { Footer } from "@/features/Footer";
import { Header } from "./features/Header";
import { Landing } from "./features/Landing";
import { LatestProjects } from "./features/LatestProjects";

export function App() {

    
    return (
        <>
        <Box p={20}>
            <Header/>
            <Landing />
            <LatestProjects />
        </Box>
        <Footer />
        </>
    )
}