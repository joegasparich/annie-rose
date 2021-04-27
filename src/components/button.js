import styled from "@emotion/styled"
import { colours, mq } from "../constants"

const Button = styled.button({
    color: colours.red,
    border: `10px solid ${colours.red}`,
    background: colours.pink,
    fontSize: 41,
    fontWeight: "bold",
    padding: "15px 40px",
    float: "right",

    [mq[2]]: {
        borderWidth: 5,
        fontSize: 18,
    },
})

export default Button
