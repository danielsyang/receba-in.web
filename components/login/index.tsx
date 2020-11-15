import { makeStyles } from "@material-ui/core/styles"

import { FacebookLoginButton } from "react-social-login-buttons"
import { LoginForm } from "./form"

const useStyles = makeStyles({
  container: {
    margin: "auto",
    maxWidth: 800,
    display: "flex",
    minHeight: 800,
  },
})

export const LoginComponent = () => {
  const { container } = useStyles()
  return (
    <div className={container}>
      <LoginForm />
      <div>
        <FacebookLoginButton />
      </div>
    </div>
  )
}
