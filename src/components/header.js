/** @jsx jsx */
import { jsx, css } from "@emotion/react"
import styled from "@emotion/styled"

import ScrollButton from "./scrollButton"
import { boxShadow, colours, mq } from "../constants"

import bannerImage from "../images/banner.svg"
import logo from "../images/logo.svg"

const Circle = styled.div({
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: colours.white,
    color: colours.magenta,
    width: 200,
    height: 200,
    borderRadius: 200 / 2,
    fontSize: 38,
    fontWeight: "bold",
    textTransform: "uppercase",
    boxShadow: boxShadow,

    [mq[1]]: {
        width: 150,
        height: 150,
        borderRadius: 150 / 2,
        fontSize: 25,
    },
    [mq[2]]: {
        width: 100,
        height: 100,
        borderRadius: 100 / 2,
        fontSize: 19,
    },
})
const buttonStyles = css({
    borderRadius: 200 / 2,

    "&:focus": {
        outline: 0,
    },
    "&:focus-visible": {
        boxShadow: `0 0 0 3px ${colours.pink}`,
    },

    [mq[1]]: {
        borderRadius: 100 / 2,
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
                    alignItems: "center",
                    transform: "translateY(-50%)",

                    [mq[0]]: {
                        flexDirection: "column",
                        transform: "none",
                    },
                }}
            >
                <div
                    css={{
                        paddingLeft: 50,

                        [mq[0]]: {
                            height: 0,
                            paddingLeft: 0,
                            overflow: "visible",
                            maxWidth: "50%",
                        },
                    }}
                >
                    <img
                        src={logo}
                        alt="Annie Rose"
                        css={{
                            [mq[0]]: {
                                transform: "translateY(-50%)",
                                width: "100%",
                                maxHeight: "30vh",
                                paddingLeft: 0,
                            },
                        }}
                    />
                </div>
                <div
                    css={{
                        display: "flex",
                        flexDirection: "row",
                        alignItems: "center",
                        justifyContent: "space-around",
                        flex: 1,
                        padding: "0 50px",

                        [mq[0]]: {
                            width: "100%",
                            marginTop: "17vh",
                            padding: 0,
                        },
                    }}
                >
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
        </div>
    </header>
)

export default Header
