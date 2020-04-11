import Link from "next/link"
import fetch from "isomorphic-unfetch"
import Container from "../components/Container"

const Index = props => {
  return (
    <Container>
      <h1>Batman TV Shows</h1>
      <ul>
        {props.shows.map(show => {
          return (
            <li key={show.id}>
              <Link href="/p/[id]" as={`/p/${show.id}`}>
                <a>{show.name}</a>
              </Link>
            </li>
          )
        })}
      </ul>
    </Container>
  )
}

Index.getInitialProps = async function() {
  const res = await fetch("https://api.tvmaze.com/search/shows?q=batman")
  const data = await res.json()
  console.log(data)
  return {
    shows: data.map(entry => entry.show)
  }
}

export default Index
