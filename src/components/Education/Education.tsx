import { Box, Container, Typography, Grid, Paper, List, ListItem, ListItemText } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { FaGraduationCap, FaCertificate, FaLanguage, FaGlobe } from 'react-icons/fa';

const education = [
    {
        degree: "Master of Business Administration (MBA) in Java Architecture and Development",
        institution: "FIAP - Faculdade de Informática e Administração Paulista, São Paulo, Brazil",
        period: "April 2023 – March 2024",
        details: [
            "Focused on advanced Java architecture strategies and development practices."
        ],
        icon: <FaGraduationCap />
    },
    {
        degree: "Master of Business Administration (MBA) in Full Stack Development: Design, Engineering & Deployment",
        institution: "FIAP - Faculdade de Informática e Administração Paulista, São Paulo, Brazil",
        period: "April 2022 – March 2023",
        details: [
            "Emphasized comprehensive full stack development skills from design to deployment."
        ],
        icon: <FaGraduationCap />
    },
    {
        degree: "Bachelor of Science in Systems Analysis and Development",
        institution: "Universidade Presbiteriana Mackenzie, São Paulo, Brazil",
        period: "February 2017 – June 2020",
        details: [
            "Relevant coursework: Software Development, Database Management, System Analysis"
        ],
        icon: <FaGraduationCap />
    },
    {
        degree: "AWS Cloud Practitioner",
        institution: "Amazon Web Services, Online",
        period: "August/2023",
        details: [],
        icon: <FaCertificate />
    },
    {
        degree: "Languages",
        institution: "",
        period: "",
        details: [
            "Portuguese: Native",
            "English: C1 (Reading, Writing, Speaking)"
        ],
        icon: <FaLanguage />
    },
    {
        degree: "International Experience",
        institution: "Study Abroad: Bayswater School, Liverpool, UK",
        period: "June 2022",
        details: [
            "Participated in an intensive English language and cultural immersion program."
        ],
        icon: <FaGlobe />
    }
];

const Education = () => {
    const theme = useTheme();

    return (
        <Box py={8} id="education" bgcolor={theme.palette.primary.main} color={theme.palette.primary.contrastText} data-aos="fade-right">
            <Container maxWidth="lg">
                <Typography variant="h4" gutterBottom sx={{ color: theme.palette.primary.contrastText }}>
                    Education
                </Typography>
                <Grid container spacing={4}>
                    {education.map((edu, index) => (
                        <Grid item xs={12} md={6} lg={4} key={index}>
                            <Paper elevation={6} sx={{
                                padding: theme.spacing(3),
                                borderRadius: theme.shape.borderRadius,
                                backgroundColor: theme.palette.background.paper,  // Use a lighter color for the paper to ensure readability
                                color: theme.palette.text.primary,  // Dark text for contrast
                                '&:hover': {
                                    backgroundColor: theme.palette.background.default  // Slightly lighter on hover for interaction feedback
                                }
                            }}>
                                <Box display="flex" alignItems="center" mb={2}>
                                    {edu.icon}
                                    <Typography variant="h6" sx={{ fontWeight: 'bold', ml: 1 }}>{edu.degree}</Typography>
                                </Box>
                                <Typography variant="subtitle1" sx={{ color: theme.palette.text.secondary }}>{edu.institution}</Typography>
                                <Typography variant="subtitle2" sx={{ mb: 2, color: theme.palette.text.secondary }}>{edu.period}</Typography>
                                <List dense>
                                    {edu.details.map((detail, idx) => (
                                        <ListItem key={idx}>
                                            <ListItemText primary={detail} primaryTypographyProps={{ variant: 'body2' }} />
                                        </ListItem>
                                    ))}
                                </List>
                            </Paper>
                        </Grid>
                    ))}
                </Grid>
            </Container>
        </Box>
    );
}

export default Education;