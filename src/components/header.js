/** @jsx jsx */
import { jsx, css } from "@emotion/react"
import styled from "@emotion/styled"

import ScrollButton from "./scrollButton"
import { boxShadow, colours } from "../constants"

import bannerImage from "../images/banner.svg"
import logo from "../images/logo.svg"

const CIRCLE_SIZE = 210

const Circle = styled.div({
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: colours.white,
    color: colours.magenta,
    width: CIRCLE_SIZE,
    height: CIRCLE_SIZE,
    borderRadius: CIRCLE_SIZE / 2,
    fontSize: 38,
    fontWeight: "bold",
    textTransform: "uppercase",
    boxShadow: boxShadow,
})
const buttonStyles = css({
    marginRight: 126,
    borderRadius: CIRCLE_SIZE / 2,

    "&:focus": {
        outline: 0,
    },
    "&:focus-visible": {
        boxShadow: `0 0 0 3px ${colours.pink}`,
    },
})

const Header = () => (
    <header>
        <div
            css={{
                width: "100%",
                height: "50vh",
                backgroundColor: colours.pink,
            }}
        />
        <div
            css={{
                backgroundImage: `url(${bannerImage})`,
                height: "50vh",
                backgroundPosition: "center",
            }}
        >
            <div
                css={{
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "center",
                    transform: "translateY(-50%)",
                }}
            >
                <img
                    src={logo}
                    alt="Annie Rose"
                    style={{
                        width: "30%",
                        marginRight: 82,
                    }}
                />
                <ScrollButton targetId="about" style={buttonStyles}>
                    <Circle>About</Circle>
                </ScrollButton>
                <ScrollButton targetId="work" style={buttonStyles}>
                    <Circle>Work</Circle>
                </ScrollButton>
                <ScrollButton targetId="contact" style={buttonStyles}>
                    <Circle>Contact</Circle>
                </ScrollButton>
            </div>
        </div>
    </header>
)

export default Header
