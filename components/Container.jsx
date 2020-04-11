import { css } from "@emotion/core"
import Header from "./Header"

const ContainerWrapperStyle = css`
  margin: 20px;
  padding: 20px;
  border: "1px solid #DDD";
`

const Container = ({ children }) => (
  <div css={ContainerWrapperStyle}>
    <Header />
    {children}
  </div>
)

export default Container
