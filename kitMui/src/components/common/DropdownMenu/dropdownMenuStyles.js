import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles((theme) => ({
  content: {
    border: "1px dashed blue",
    borderRadius: "10px",
    marginTop: "1rem",
  },
  icon: {
    color: "white",
    // border: "1px dashed blue",
    marginTop: "-1.5rem",
  },
  contentRoutes: {
    border: "1px dashed red",
    borderRadius: "10px",
    boxShadow: " 0px 0px 10px rgba(0,0,0,0.2)",
  },
}));
