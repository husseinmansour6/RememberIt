import fetch from "isomorphic-unfetch"
import Container from "../../components/Container"

const Post = props => (
  <Container>
    <h1>{props.show.name}</h1>
    <p>{props.show.summary.replace(/<[/]?[pb]>/g, "")}</p>{" "}
    {/* replace is for removing the <p> tag from the summery data */}
    {props.show.image ? <img src={props.show.image.medium} /> : null}
  </Container>
)

Post.getInitialProps = async function(context) {
  const { id } = context.query
  const res = await fetch(`https://api.tvmaze.com/shows/${id}`)
  const show = await res.json()

  return { show }
}

export default Post
