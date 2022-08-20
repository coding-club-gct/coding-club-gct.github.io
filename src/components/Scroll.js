import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import { common } from "@mui/material/colors";
function Scroll() {
  return (
    <ArrowUpwardIcon
      fontSize="large"
      className="scrollup"
      id="scroll-up"
      sx={{ color: common.white }}
      onClick={() => window.scrollTo(0, 0)}
    />
  );
}

export default Scroll;
