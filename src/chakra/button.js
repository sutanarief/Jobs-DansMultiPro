export const Button = {
  baseStyle: {
    borderRadius: "60px",
    fontSize: "10pt",
    fontWeight: 700,
    _focus: {
      boxShadow: "none",
    },
  },
  sizes: {
    sm: {
      fontSize: "8pt",
    },
    md: {
      fontSize: "10pt",
    },
  },
  variants: {
    solid: {
      color: "white",
      bg: "blue.500",
      _hover: {
        color: "white",
        border: "1px solid",
        bg: "blue.400"
      },
    },
    signup: {
      color: "blue.500",
      bg: "white",
      _hover: {
        color: "white",
        border: "1px solid",
        bg: "blue.500"
      },
    },
    outline: {
      color: "white",
      border: "1px solid",
      borderColor: "white",
      _hover: {
        borderCOlor: "white",
        color: "blue.500",
        border: "1px solid",
        bg: "white"
      }
    },
    oauth: {
      height: "34px",
      border: "1px solid",
      borderColor: "gray.300",
      _hover: {
        bg: "gray.50",
      },
    },
  },
};