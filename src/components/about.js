/** @jsx jsx */
import { css, jsx } from "@emotion/react"
import styled from "@emotion/styled"

import ScrollButton from "./scrollButton"
import Section from "./section"
import Marker from "./marker"
import { boxShadow, colours, mq } from "../constants"

import ae from "../images/adobe/ae.svg"
import ai from "../images/adobe/ai.svg"
import id from "../images/adobe/id.svg"
import ps from "../images/adobe/ps.svg"
import xd from "../images/adobe/xd.svg"
import qualifications from "../images/qualifications.svg"
import photo from "../images/photo.jpg"

const CIRCLE_SIZE = 100

const Adobe = styled.img({
    margin: 0,
    height: 124,
    [mq[1]]: {
        height: 90,
    },
    [mq[2]]: {
        height: 60,
    },
})

const Circle = styled.div({
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: colours.red,
    border: `8px solid ${colours.white}`,
    color: colours.white,
    width: 100,
    height: 100,
    borderRadius: 100 / 2,
    fontSize: 15,
    fontWeight: "bold",
    textTransform: "uppercase",
    [mq[2]]: {
        borderColor: colours.red,
        width: 70,
        height: 70,
        borderRadius: 70 / 2,
        fontSize: 12,
    },
})
const buttonStyles = css({
    display: "inline-block",
    marginRight: 25,
    borderRadius: 100 / 2,
    [mq[2]]: {
        marginBottom: 20,
        borderRadius: 70 / 2,
    },

    "&:focus": {
        outline: 0,
    },
    "&:focus-visible": {
        boxShadow: `0 0 0 3px ${colours.red}`,
    },
})

const About = ({ style }) => (
    <div
        id="about"
        css={[
            style,
            {
                padding: "35px 0",
                marginTop: 90,

                [mq[2]]: {
                    marginTop: 0,
                },
            },
        ]}
    >
        <Marker text="About" size={275} left={260} />
        <div
            css={{
                position: "absolute",
                display: "flex",
                top: 200,
                left: 15,
                [mq[2]]: {
                    flexDirection: "column",
                    top: 30,
                    left: 60,
                },
            }}
        >
            <ScrollButton targetId="work" style={buttonStyles}>
                <Circle>Work</Circle>
            </ScrollButton>
            <ScrollButton targetId="contact" style={buttonStyles}>
                <Circle>Contact</Circle>
            </ScrollButton>
        </div>

        <Section
            css={{
                [mq[0]]: {
                    flexDirection: "column",
                },
            }}
        >
            <img
                src={photo}
                alt="Annie"
                css={{
                    width: "30vw",
                    height: "30vw",
                    borderRadius: "15vw",
                    background: colours.pink,
                    border: `10px solid ${colours.white}`,
                    marginLeft: 140,
                    marginRight: 75,
                    marginTop: 350,
                    boxShadow: boxShadow,

                    [mq[0]]: {
                        margin: 0,
                        marginRight: "10%",
                        alignSelf: "flex-end",
                    },
                    [mq[1]]: {
                        alignSelf: "center",
                        margin: "300px 0 0",
                        width: "60vw",
                        height: "60vw",
                        borderRadius: "30vw",
                    },
                    [mq[2]]: {
                        margin: "200px 0 0",
                        width: "80vw",
                        height: "80vw",
                        borderRadius: "40vw",
                    },
                }}
            />
            <Section
                css={{
                    flexDirection: "column",
                    flex: 1,
                }}
            >
                <Section
                    css={{
                        height: 300,
                        alignItems: "center",
                        justifyContent: "space-between",
                        marginRight: 155,

                        [mq[0]]: {
                            justifyContent: "space-around",
                            marginRight: 0,
                            padding: "0 10%",
                        },
                        [mq[1]]: {
                            margin: "20px 0",
                            height: "initial",
                        },
                    }}
                >
                    <Adobe src={ps} />
                    <Adobe src={ai} />
                    <Adobe src={id} />
                    <Adobe src={xd} />
                    <Adobe src={ae} />
                </Section>
                <div
                    css={{
                        flex: 1,
                        marginRight: 230,
                        [mq[0]]: {
                            marginRight: 0,
                            padding: "0 10%",
                        },
                        [mq[2]]: {
                            padding: "0 10px",
                        },
                    }}
                >
                    <div css={{ marginLeft: 20 }}>
                        <h1
                            css={{
                                color: colours.red,
                                fontSize: 66,
                                textTransform: "uppercase",

                                [mq[0]]: {
                                    fontSize: 50,
                                },
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

                                [mq[0]]: {
                                    fontSize: 30,
                                    lineHeight: "60px",
                                },
                                [mq[2]]: {
                                    fontSize: 18,
                                    lineHeight: "24px",
                                },
                            }}
                        >
                            I’m Annie, a graphic designer with a passion for
                            colour! I’m here to help you bring your ideas to
                            life through branding, web design, and social media
                            campaigns.
                        </p>
                    </div>
                    <img
                        src={qualifications}
                        alt="Media Design School"
                        css={{
                            [mq[0]]: {
                                display: "block",
                                margin: "auto",
                            },
                        }}
                    />
                </div>
            </Section>
        </Section>
    </div>
)

export default About
