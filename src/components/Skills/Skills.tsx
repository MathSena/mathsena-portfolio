import { Box, Container, Typography, Grid, Chip } from "@mui/material";
import { FaJava, FaAws, FaNodeJs } from 'react-icons/fa'; // FaAws e FaNodeJs são disponíveis no Font Awesome
import { SiSpring, SiGitlab, SiJira, SiTypescript, SiAngular, SiReact, SiPostgresql, SiMongodb, SiPython, SiDocker, SiKubernetes } from 'react-icons/si';

const skills = [
    { name: "Java 11/17", icon: <FaJava /> },
    { name: "Spring Boot", icon: <SiSpring /> },
    { name: "AWS", icon: <FaAws /> },
    { name: "Git/GitLab", icon: <SiGitlab /> },
    { name: "JIRA", icon: <SiJira /> },
    { name: "TypeScript", icon: <SiTypescript /> },
    { name: "NodeJS", icon: <FaNodeJs /> },
    { name: "Angular", icon: <SiAngular /> },
    { name: "React", icon: <SiReact /> },
    { name: "PostgreSQL", icon: <SiPostgresql /> },
    { name: "MongoDB", icon: <SiMongodb /> },
    { name: "Python", icon: <SiPython /> },
    { name: "Kubernetes", icon: <SiKubernetes /> },
    { name: "Docker", icon: <SiDocker /> }
];

const Skills = () => {
    return (
        <Box py={8} id="skills" bgcolor="primary.main" color="primary.contrastText" data-aos="fade-left">
            <Container maxWidth="lg">
                <Typography variant="h4" gutterBottom>Skills</Typography>
                <Grid container spacing={2}>
                    {skills.map(skill => (
                        <Grid item key={skill.name}>
                            <Chip icon={skill.icon} label={skill.name} color="secondary" />
                        </Grid>
                    ))}
                </Grid>
            </Container>
        </Box>
    );
}

export default Skills;
