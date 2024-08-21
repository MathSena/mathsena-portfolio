import { Box, Container, Typography } from "@mui/material";

const Footer = () => {
    return (
        <Box mt={5} py={3} bgcolor="primary.main" color="primary.contrastText">
            <Container maxWidth="lg">
                <Typography variant="body2" align="center">
                    © 2024 Matheus Sena
                </Typography>
            </Container>
        </Box>
    );
}

export default Footer;
