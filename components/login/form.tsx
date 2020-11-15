import { makeStyles } from "@material-ui/core/styles"
import TextField from "@material-ui/core/TextField"

const useStyles = makeStyles({
  container: {
    display: "flex",
    flexDirection: "column",
    width: "50%",
  },
})

export const LoginForm = () => {
  const { container } = useStyles()
  return (
    <div className={container}>
      <TextField label="E-mail" />
      <TextField label="Senha" />
    </div>
  )
}
