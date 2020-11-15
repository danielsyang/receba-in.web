import Head from "next/head"
import { LoginComponent } from "../components/login"

export default function Home() {
  return (
    <div>
      <Head>
        <title>Login</title>
      </Head>

      <div>
        <LoginComponent />
      </div>
    </div>
  )
}
