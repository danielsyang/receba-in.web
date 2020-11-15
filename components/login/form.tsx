import { makeStyles } from "@material-ui/core/styles"
import TextField from "@material-ui/core/TextField"
import Button from "@material-ui/core/Button"
import Checkbox from "@material-ui/core/Checkbox"
import FormControlLabel from "@material-ui/core/FormControlLabel"
import Typography from "@material-ui/core/Typography"
import Link from "@material-ui/core/Link"

const useStyles = makeStyles({
  container: {
    display: "flex",
    flexDirection: "column",
    width: "50%",
  },
  passwordStyle: {
    margin: "30px 0 10px",
  },
  loginStyle: {
    marginRight: "auto",
    padding: "5px 30px",
  },
  formController: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 20,
  },
})

export const LoginForm = () => {
  const { container, passwordStyle, loginStyle, formController } = useStyles()
  return (
    <div className={container}>
      <TextField label="E-mail" />
      <TextField label="Senha" className={passwordStyle} />
      <div className={formController}>
        <FormControlLabel
          control={<Checkbox color="primary" />}
          label="Lembrar de mim"
        />
        <Typography>
          <Link href="#">Esqueceu a senha?</Link>
        </Typography>
      </div>
      <Button variant="outlined" color="primary" className={loginStyle}>
        Login
      </Button>
    </div>
  )
}
