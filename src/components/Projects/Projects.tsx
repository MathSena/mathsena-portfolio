import { Box, Container, Typography } from "@mui/material";

const Projects = () => {
    return (
        <Box py={8} id="projects" bgcolor="background.paper" color="text.primary" data-aos="fade-up">
            <Container maxWidth="lg">
                <Typography variant="h4" gutterBottom>Projects</Typography>
                <Typography variant="h6" gutterBottom>Work in Progress - Check back soon!</Typography>
            </Container>
        </Box>
    );
}

export default Projects;
