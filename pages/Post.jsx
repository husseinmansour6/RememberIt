import { useRouter } from "next/router"
import Container from "../components/Container"

const Page = () => {
  const router = useRouter()
  return (
    <Container>
      <h1>{router.query.title}</h1>
      <p>This is the blog post content.</p>
    </Container>
  )
}

export default Page
