import { Box, Container, Typography, Grid, Link } from "@mui/material";
import Avatar from "../../assets/images/about.jpg";
import StyledButton from "../StyledButton/StyledButton";

const About = () => {
    return (
        <Box py={8} id="about" bgcolor="background.paper" color="text.primary" data-aos="fade-left">
            <Container maxWidth="lg">
                <Grid container spacing={4} alignItems="center">
                    <Grid item xs={12} md={6}>
                        <Box display="flex" justifyContent="center">
                            <img src={Avatar} alt="Matheus Sena" style={{ width: '50%', borderRadius: '70%' }} />
                        </Box>
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <Typography variant="h4" gutterBottom>About Me</Typography>
                        <Typography variant="body1" paragraph>
                            Software Developer with 5 years of professional experience, focusing on Java development and microservices with Spring Boot. Skilled in leveraging AWS cloud technologies to enhance application performance. I hold an MBA in Full Stack Development and am certified in AWS Cloud Practitioner.
                        </Typography>
                        <Typography variant="body1" paragraph>
                            I have collaborated on projects with industry leaders such as KPMG and C&A, using Agile methodologies to deliver effective software solutions.
                        </Typography>
                        <Box display="flex" gap={2}>
                            <StyledButton>
                                <Link href="https://www.linkedin.com/in/mathsena/" target="_blank" color="primary">LinkedIn</Link>
                            </StyledButton>
                            <StyledButton>
                                <Link href="https://github.com/MathSena" target="_blank" color="primary">GitHub</Link>
                            </StyledButton>
                        </Box>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
}

export default About;