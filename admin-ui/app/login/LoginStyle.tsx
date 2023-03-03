const LoginStyle = {
  grid: {
    position: "absolute" as "absolute",
    top: "5%",
  },
  login_button: {
    width: "100%",
    color: "white" as "white",
    textTransform: "capitalize" as "capitalize",
  },
  background_style: {
    backgroundImage: `url(${"./images/loginbackground1.png"})`,
    position: "relative" as "relative",
    backgroundRepeat: "no-repeat" as "no-repeat",
    backgroundSize: "cover" as "cover",
    height: "100vh",
    backgroundPosition: "center" as "center",
  },
  card_style: {
    padding: "1.5rem",
    width: "20rem",
    marginTop: "1rem",
    boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
    borderRadius: "5px",
  },
};
export { LoginStyle };
