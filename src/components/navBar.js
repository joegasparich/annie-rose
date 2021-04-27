/** @jsx jsx */
import { jsx, css } from "@emotion/react"
import styled from "@emotion/styled"

import ScrollButton from "./scrollButton"
import { colours } from "../constants"

const CIRCLE_SIZE = 100

const Circle = styled.div({
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: CIRCLE_SIZE,
    height: CIRCLE_SIZE,
    borderRadius: CIRCLE_SIZE / 2,
    background: colours.red,
    color: colours.white,
    fontSize: 16,
    fontWeight: "bold",
    textDecoration: "none",
    textTransform: "uppercase",
    boxShadow: "0px 2px 17px 0px rgba(0,0,0,0.5)",
    textAlign: "center",
})
const buttonStyles = css({
    display: "inline-block",
    marginLeft: 100,
    zIndex: 1,
    position: "relative",
    borderRadius: CIRCLE_SIZE / 2,
    overflow: "hidden",
    verticalAlign: "middle",

    "&:focus": {
        outline: 0,
    },
    "&:focus-visible": {
        boxShadow: `0 0 0 3px ${colours.white}`,
    },
})

const NavBar = ({ style, items }) => (
    <div
        css={[
            {
                display: "inline-block",
                position: "relative",
                verticalAlign: "middle",

                "&:before": {
                    content: "''",
                    display: "inline-block",
                    verticalAlign: "middle",
                    height: "100%",
                },
            },
            style,
        ]}
    >
        <div
            css={{
                position: "absolute",
                top: 0,
                width: "100%",
                height: "100%",
                display: "flex",
                alignItems: "center",
            }}
        >
            <div
                css={{
                    background: colours.white,
                    width: "100%",
                    height: 10,
                }}
            />
        </div>
        {items?.map(item => (
            <ScrollButton
                targetId={item.targetId}
                style={buttonStyles}
                key={item.name}
            >
                <Circle>{item.name}</Circle>
            </ScrollButton>
        ))}
    </div>
)

export default NavBar
