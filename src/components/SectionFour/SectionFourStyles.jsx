import { TextField } from "@mui/material";
import styled from "@emotion/styled";

export const CssTextField = styled(TextField)({
  "& label.Mui-focused": {
    color: "#A0AAB4",
  },
  "& .MuiFormLabel-asterisk": { color: "#FF0000" },
  "& .MuiInput-underline:after": {
    borderBottom: "none", // Remove the underline after
  },
  "& .MuiOutlinedInput-root": {
    "& fieldset": {
      borderColor: "transparent", // Set the border color to transparent
    },
    "&:hover fieldset": {
      borderColor: "transparent", // Set the border color to transparent on hover
    },
    "&.Mui-focused fieldset": {
      borderColor: "transparent", // Set the border color to transparent when focused
    },
  },
  borderRadius: "20px", // Set the border radius
  background: "rgba(135, 135, 135, 0.2)", // Set the background color
  fontsize: "14px",
  width: "48%",
  marginBottom: "8px",
});

export const CssTextArea = styled(TextField)({
  "& label.Mui-focused": {
    color: "#A0AAB4",
  },
  "& .MuiFormLabel-asterisk": { color: "#FF0000" },
  "& .MuiInput-underline:after": {
    borderBottom: "none", // Remove the underline after
  },
  "& .MuiOutlinedInput-root": {
    "& fieldset": {
      borderColor: "transparent", // Set the border color to transparent
    },
    "&:hover fieldset": {
      borderColor: "transparent", // Set the border color to transparent on hover
    },
    "&.Mui-focused fieldset": {
      borderColor: "transparent", // Set the border color to transparent when focused
    },
  },
  height: "150px",
  padding: "12px 18px",
  borderRadius: "20px",
  background: "rgba(135, 135, 135, 0.2)",
  border: "none",
  resize: "none",
  fontFamily: "inherit",
  fontsize: "14px",
  outline: "none",
  width: "100%",
  marginBottom: "8px",
});

export const WhiteInputLabel = styled("label")`
  color: black;
`;
export const BottomInputLabel = styled("label")`
  color: black;
`;
