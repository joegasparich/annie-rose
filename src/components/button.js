import styled from "@emotion/styled"
import { colours } from "../constants"

const Button = styled.button({
    color: colours.red,
    border: `10px solid ${colours.red}`,
    background: colours.pink,
    fontSize: 41,
    fontWeight: "bold",
    padding: "15px 40px",
    float: "right",
})

export default Button
