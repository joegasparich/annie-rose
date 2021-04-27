/** @jsx jsx */
import { css, jsx } from "@emotion/react"
import styled from "@emotion/styled"

import Form from "./form"
import Section from "./section"
import Marker from "./marker"
import ScrollButton from "./scrollButton"
import { colours } from "../constants"

const CIRCLE_SIZE = 100

const Circle = styled.div({
    transition: "all 0.1s ease",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: colours.red,
    color: colours.white,
    width: CIRCLE_SIZE,
    height: CIRCLE_SIZE,
    borderRadius: CIRCLE_SIZE / 2,
    fontSize: 15,
    lineHeight: "52px",
    fontWeight: "bold",
    textTransform: "uppercase",
    padding: 20,
    textAlign: "center",
})
const buttonStyles = css({
    borderRadius: CIRCLE_SIZE / 2,
    marginBottom: 65,

    "&:focus": {
        outline: 0,
    },
    "&:focus-visible": {
        boxShadow: `0 0 0 3px ${colours.white}`,
    },
})

const Contact = ({ style }) => (
    <div
        id="contact"
        css={[
            style,
            {
                backgroundColor: "white",
                paddingTop: 160,
                paddingBottom: 100,
                position: "relative",
            },
        ]}
    >
        <Marker
            text="Contact"
            size={275}
            left={260}
            style={{
                fontSize: 41,
            }}
        />
        <div css={{ position: "absolute", top: 165, left: 120, zIndex: 1 }}>
            <ScrollButton targetId="about" style={buttonStyles}>
                <Circle>About</Circle>
            </ScrollButton>
            <ScrollButton targetId="work" style={buttonStyles}>
                <Circle>Work</Circle>
            </ScrollButton>
        </div>
        <Section
            css={{
                margin: `0 150px`,
            }}
        >
            <div
                css={{
                    flex: 1,
                    marginTop: 365,
                    fontSize: 30,
                    lineHeight: "55px",
                    letterSpacing: 1.38,
                    color: colours.red,
                    width: 690,
                    p: {
                        margin: 0,
                    },
                }}
            >
                <p>
                    <b>+64 21 026 48861</b>
                </p>
                <p>
                    <b>annie.gasparich@hotmail.com</b>
                </p>
                <br />
                <p>Get in touch!</p>
                <p>
                    Fill out the form or contact me directly through email and
                    phone.
                </p>
            </div>
            <Form style={{ flex: 1 }} />
        </Section>
    </div>
)

export default Contact
