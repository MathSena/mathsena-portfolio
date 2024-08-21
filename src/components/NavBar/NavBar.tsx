import { AppBar, MenuItem, Toolbar, styled } from "@mui/material"

const NavBar = () => {
    const StyledToolbar = styled(Toolbar)(() => ({
        display: "flex",
        justifyContent: "space-evenly"
    }));

    return (
        <AppBar position="fixed">
            <StyledToolbar>
                <MenuItem component="a" href="#about">About</MenuItem>
                <MenuItem component="a" href="#skills">Skills</MenuItem>
                <MenuItem component="a" href="#projects">Projects</MenuItem>
            </StyledToolbar>
        </AppBar>
    );
}


export default NavBar