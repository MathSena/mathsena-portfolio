import { Box, Container, Typography, Grid, Paper, List, ListItem, ListItemText, useTheme } from "@mui/material";
import { FaJava, FaAws, FaNodeJs } from 'react-icons/fa';
import { SiSpring, SiGitlab, SiJira, SiTypescript, SiAngular, SiReact, SiPostgresql, SiMongodb, SiPython, SiDocker, SiKubernetes } from 'react-icons/si';

const experiences = [
    {
        title: "Java Developer",
        company: "KWAN, Lisbon, Portugal",
        period: "June 2023 to Present",
        responsibilities: [
            "Actively participated in the Development Squad for a KYC platform, providing application support and developing enhancements and requests from the business area.",
            "Created and implemented a Quick Response Framework (QRF) within the squad, which involved designing SLA and ticketing processes to improve response times and service quality.",
            "Employed Apache Kafka and Spring Cloud to develop robust and scalable solutions."
        ],
        technologies: "Java 11/17, TypeScript, NodeJS, MySQL, PostgreSQL, MongoDB, Spring Boot, Spring Data JPA, Apache Kafka, Kubernetes, JUnit5, Mockito, Git/GitLab, Sonar, Swagger, Docker, Postman, JIRA/Scrum",
        icon: <FaJava />
    },
    {
        title: "Systems Analyst",
        company: "C&A Modas, Barueri, Brazil",
        period: "March 2019 – June 2023",
        responsibilities: [
            "Provided ongoing support for the logistical systems at C&A.",
            "Reviewed and analyzed systems using COBOL, Java, and Visual Age for Java, contributing to enhanced system performance and functionality.",
            "Participated in the digital transformation of logistic processes, progressing from a Junior Developer to a Mid-Level Developer."
        ],
        technologies: "Java 8/11, SQL, COBOL, Visual Age for Java, IBM DB2, MySQL, PostgreSQL, Spring Boot, Spring Data JPA, Hibernate, Apache Kafka, JUnit5, Mockito, Git/GitLab, Sonar, Swagger, Docker, Postman, JIRA/Scrum",
        icon: <SiSpring />
    },
    {
        title: "Systems Analyst",
        company: "Resource IT Solutions, São Paulo, Brazil",
        period: "February 2018 – March 2019",
        responsibilities: [
            "Provided continuous support for the logistical systems of C&A.",
            "Created and executed SQL scripts and database queries.",
            "Coordinated with the development team for system PRs and enhancements."
        ],
        technologies: "Java 8/11, SQL, IBM DB2, Oracle, COBOL, Visual Age for Java, JIRA/Scrum",
        icon: <SiGitlab />
    }
];

const Experience = () => {
    const theme = useTheme();

    return (
        <Box py={8} id="experience" bgcolor={theme.palette.secondary.main} color={theme.palette.secondary.contrastText} data-aos="fade-right">
            <Container maxWidth="lg">
                <Typography variant="h4" gutterBottom sx={{ color: theme.palette.secondary.contrastText }}>
                    Experience
                </Typography>
                <Grid container spacing={4}>
                    {experiences.map((exp, index) => (
                        <Grid item xs={12} md={6} key={index}>
                            <Paper elevation={6} sx={{
                                padding: theme.spacing(3),
                                borderRadius: theme.shape.borderRadius,
                                backgroundColor: theme.palette.background.paper, // Light background for readability
                                color: theme.palette.text.primary, // Dark text for contrast
                                marginBottom: theme.spacing(2)  // Spacing between items
                            }}>
                                <Box display="flex" alignItems="center" mb={2}>
                                    {exp.icon}
                                    <Typography variant="h6" sx={{ fontWeight: 'bold', ml: 1 }}>{exp.title}</Typography>
                                </Box>
                                <Typography variant="subtitle1" sx={{ color: theme.palette.text.secondary }}>{exp.company}</Typography>
                                <Typography variant="subtitle2" sx={{ mb: 2, color: theme.palette.text.secondary }}>{exp.period}</Typography>
                                <List dense sx={{ mb: 2 }}>
                                    {exp.responsibilities.map((resp, idx) => (
                                        <ListItem key={idx} sx={{ py: 0.5 }}>
                                            <ListItemText primary={resp} primaryTypographyProps={{ variant: 'body2' }} />
                                        </ListItem>
                                    ))}
                                </List>
                                <Typography variant="body2" sx={{ fontWeight: 'bold' }}>
                                    Key Technologies and Tools: <span style={{ fontWeight: 'normal' }}>{exp.technologies}</span>
                                </Typography>
                            </Paper>
                        </Grid>
                    ))}
                </Grid>
            </Container>
        </Box>
    );
}

export default Experience;