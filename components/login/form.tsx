import { makeStyles } from "@material-ui/core/styles"
import TextField from "@material-ui/core/TextField"
import Button from "@material-ui/core/Button"
import Checkbox from "@material-ui/core/Checkbox"
import FormControlLabel from "@material-ui/core/FormControlLabel"
import Typography from "@material-ui/core/Typography"
import Link from "@material-ui/core/Link"
import { useLogin } from "./useLogin"
import { useForm, Controller } from "react-hook-form"

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
  const { control, handleSubmit, errors } = useLogin()

  return (
    <form className={container} onSubmit={handleSubmit}>
      <Controller
        as={
          <TextField
            required={true}
            label="E-mail"
            helperText={errors.login?.message || undefined}
            error={!!errors.login?.message}
          />
        }
        name="login"
        control={control}
        defaultValue=""
      />

      <Controller
        as={
          <TextField
            required={true}
            type="password"
            label="Senha"
            className={passwordStyle}
            helperText={errors.password?.message || undefined}
            error={!!errors.password?.message}
          />
        }
        name="password"
        control={control}
        defaultValue=""
      />

      <div className={formController}>
        <Controller
          as={
            <FormControlLabel
              control={<Checkbox color="primary" />}
              label="Lembrar de mim"
            />
          }
          name="remindMe"
          control={control}
          defaultValue={false}
        />

        <Typography>
          <Link href="#">Esqueceu a senha?</Link>
        </Typography>
      </div>

      <Button
        type="submit"
        variant="outlined"
        color="primary"
        className={loginStyle}
      >
        Login
      </Button>
    </form>
  )
}
