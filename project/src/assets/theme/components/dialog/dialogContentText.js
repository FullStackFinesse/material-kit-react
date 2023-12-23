import typography from '../../base/typography';
import colors from '../../base/colors';
import pxToRem from "../../functions/pxToRem";

const { size } = typography;
const { text } = colors;

export default {
  styleOverrides: {
    root: {
      fontSize: size.md,
      color: text.main,
      padding: pxToRem(16),
    },
  },
};
