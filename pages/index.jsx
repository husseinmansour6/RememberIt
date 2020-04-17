import fetch from "isomorphic-unfetch"
import useSWR from "swr"
import { css } from "@emotion/core"
import { useRouter } from "next/router"

function fetcher(url) {
  return fetch(url).then(r => r.json())
}

export default function Index() {
  const { query } = useRouter()
  const { data, error } = useSWR(
    `/api/randomQuote${query.author ? "?author=" + query.author : ""}`,
    fetcher
  )
  const author = data && data.author
  let quote = data && data.quote
  if (!data) quote = "Loading ..."
  if (error) quote = "Failed to fetch the quote."

  return (
    <main
      css={css`
        width: 90%;
        max-width: 900px;
        margin: 300px auto;
        text-align: center;
      `}
    >
      <div
        css={css`
          font-family: cursive;
          color: #e243de;
          font-size: 24px;
          padding-bottom: 10px;
        `}
      >
        {quote}
      </div>
      {author && (
        <span
          css={css`
            font-family: sans-serif;
            color: #559834;
            font-size: 20px;
          `}
        >
          - {author}
        </span>
      )}
    </main>
  )
}
