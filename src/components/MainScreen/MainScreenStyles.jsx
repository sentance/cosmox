import { TextField, FormHelperText } from "@mui/material";
import styled from "@emotion/styled";

export const CssTextField = styled(TextField)({
  "& label.Mui-focused": {
    color: "#fff",
  },
  "& .MuiInput-underline:after": {
    borderBottom: "none", // Remove the underline after
  },
  "& .MuiFormLabel-asterisk": { color: "#FF0000" },
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
  width: "48%",
  color: "#ffffffcc",
});
export const WhiteInputLabel = styled("label")`
  color: white;
  font-size: 12px;
`;
