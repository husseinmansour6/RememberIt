import { useRouter } from "next/router"
import Container from "../../components/Container"

export default function Post() {
  const router = useRouter()

  return (
    <Container>
      <h1>{router.query.id}</h1>
      <p>This is the blog post content.</p>
    </Container>
  )
}
