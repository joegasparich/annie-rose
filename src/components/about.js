/** @jsx jsx */
import { css, jsx } from "@emotion/react"
import styled from "@emotion/styled"

import ScrollButton from "./scrollButton"
import Section from "./section"
import Marker from "./marker"
import { boxShadow, colours } from "../constants"

import ae from "../images/adobe/ae.svg"
import ai from "../images/adobe/ai.svg"
import id from "../images/adobe/id.svg"
import ps from "../images/adobe/ps.svg"
import xd from "../images/adobe/xd.svg"
import qualifications from "../images/qualifications.svg"
import photo from "../images/photo.jpg"

const CIRCLE_SIZE = 100

const Adobe = styled.img({ height: 124 })

const Circle = styled.div({
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: colours.red,
    border: `8px solid ${colours.white}`,
    color: colours.white,
    width: CIRCLE_SIZE,
    height: CIRCLE_SIZE,
    borderRadius: CIRCLE_SIZE / 2,
    fontSize: 15,
    fontWeight: "bold",
    textTransform: "uppercase",
})
const buttonStyles = css({
    display: "inline-block",
    marginRight: 25,
    borderRadius: CIRCLE_SIZE / 2,

    "&:focus": {
        outline: 0,
    },
    "&:focus-visible": {
        boxShadow: `0 0 0 3px ${colours.red}`,
    },
})

const About = ({ style }) => (
    <div id="about" css={[style]}>
        <Marker text="About" size={275} left={260} />
        <div css={{ position: "absolute", top: 212, left: 15 }}>
            <ScrollButton targetId="work" style={buttonStyles}>
                <Circle>Work</Circle>
            </ScrollButton>
            <ScrollButton targetId="contact" style={buttonStyles}>
                <Circle>Contact</Circle>
            </ScrollButton>
        </div>

        <Section css={{}}>
            <img
                src={photo}
                alt="Annie"
                css={{
                    width: "30vw",
                    height: "30vw",
                    background: colours.pink,
                    border: `10px solid ${colours.white}`,
                    borderRadius: "15vw",
                    marginLeft: 140,
                    marginRight: 75,
                    marginTop: 350,
                    boxShadow: boxShadow,
                }}
            />
            <Section css={{ flexDirection: "column", flex: 1 }}>
                <Section
                    css={{
                        height: 300,
                        alignItems: "center",
                        justifyContent: "space-between",
                        marginRight: 155,
                    }}
                >
                    <Adobe src={ps} />
                    <Adobe src={ai} />
                    <Adobe src={id} />
                    <Adobe src={xd} />
                    <Adobe src={ae} />
                </Section>
                <div css={{ flex: 1, marginRight: 230 }}>
                    <div css={{ marginLeft: 20 }}>
                        <h1
                            css={{
                                color: colours.red,
                                fontSize: 66,
                                textTransform: "uppercase",
                            }}
                        >
                            Meet Me!
                        </h1>
                        <p
                            css={{
                                fontSize: 40,
                                lineHeight: "72px",
                                color: colours.red,
                                letterSpacing: 1.85,
                                marginBottom: 50,
                            }}
                        >
                            I’m Annie, a graphic designer with a passion for
                            colour! I’m here to help you bring your ideas to
                            life through branding, web design, and social media
                            campaigns.
                        </p>
                    </div>
                    <img src={qualifications} alt="Media Design School" />
                </div>
            </Section>
        </Section>
    </div>
)

export default About
