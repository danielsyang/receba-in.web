import { useForm } from "react-hook-form"
import { object, string } from "yup"
import { yupResolver } from "@hookform/resolvers/yup"

type LoginData = {
  login: string
  password: string
  remindMe: string
}

const schema = object().shape({
  login: string()
    .email("E-mail inválido")
    .required("E-mail é campo obrigatório"),
  password: string().required("Senha é campo obrigatório"),
})

export const useLogin = () => {
  const { control, handleSubmit, errors } = useForm<LoginData>({
    mode: "onChange",
    resolver: yupResolver(schema),
  })

  const onSubmit = (data: LoginData) => {
    console.log(data)
  }

  return {
    control,
    errors,
    handleSubmit: handleSubmit(onSubmit),
  }
}
