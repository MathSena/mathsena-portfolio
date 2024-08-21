import { styled } from "@mui/material";
import { ReactNode } from "react";

interface StyledButtonProps {
    children: ReactNode;
}

const StyledButton: React.FC<StyledButtonProps> = ({ children }) => {
    // Define the button style outside the component function to avoid re-creating the styled component on each render
    const CustomButton = styled("button")(({ theme }) => ({
        backgroundColor: "transparent",
        border: `1px solid ${theme.palette.primary.contrastText}`,
        borderRadius: "8px", // Slightly increased for better aesthetics
        padding: "8px 20px",
        minWidth: "150px", // Minimum width for better control
        maxWidth: "300px", // Maximum width to avoid overly wide buttons
        color: theme.palette.primary.contrastText,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        gap: "10px",
        cursor: "pointer",
        transition: "all 0.3s ease", // Smooth transition for hover effects
        '&:hover': {
            backgroundColor: theme.palette.secondary.light,
            transform: "translateY(-2px)", // Subtle lift effect on hover
            boxShadow: "0 4px 8px rgba(0,0,0,0.1)" // Adding shadow for depth
        }
    }));

    return (
        <CustomButton>
            {children}
        </CustomButton>
    );
}

export default StyledButton;
