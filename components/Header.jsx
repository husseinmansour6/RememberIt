import Link from "next/link"
import { css } from "@emotion/core"

const linkStyle = css`
  margin-right: 15px;
  cursor: pointer;
`

const Header = () => (
  <div>
    <Link href="/">
      <a css={linkStyle}>Home</a>
    </Link>
    <Link href="/about">
      <a css={linkStyle}>About</a>
    </Link>
  </div>
)

export default Header
