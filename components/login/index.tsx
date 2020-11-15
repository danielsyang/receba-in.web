import { makeStyles } from "@material-ui/core/styles"

import {
  FacebookLoginButton,
  GoogleLoginButton,
} from "react-social-login-buttons"
import { LoginForm } from "./form"

const useStyles = makeStyles({
  container: {
    margin: "auto",
    display: "flex",
    height: "100%",
  },
  innerContainer: {
    margin: "auto",
    display: "flex",
    minWidth: 700,
  },
  divider: {
    borderRight: "1px solid",
    margin: "0 30px",
  },
  socialMidiaContainer: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-around",
  },
})

export const LoginComponent = () => {
  const {
    container,
    divider,
    socialMidiaContainer,
    innerContainer,
  } = useStyles()
  return (
    <div className={container}>
      <div className={innerContainer}>
        <LoginForm />
        <div className={divider} />
        <div className={socialMidiaContainer}>
          <FacebookLoginButton />
          <GoogleLoginButton />
        </div>
      </div>
    </div>
  )
}
