import Head from "next/head"
import { LoginComponent } from "../components/login"

export default function Home() {
  return (
    <>
      <Head>
        <title>Login</title>
      </Head>
      <LoginComponent />
    </>
  )
}
