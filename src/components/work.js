/** @jsx jsx */
import { jsx, css } from "@emotion/react"

import WorkCarousel from "./workCarousel"
import Project from "./project"
import Marker from "./marker"
import ScrollButton from "./scrollButton"

import artimiss1 from "../images/artimiss/artimiss1.jpg"
import artimiss2 from "../images/artimiss/artimiss2.jpg"
import artimiss3 from "../images/artimiss/artimiss3.jpg"
import sharepair1 from "../images/sharepair/sharepair1.jpg"
import sharepair2 from "../images/sharepair/sharepair2.jpg"
import sharepair3 from "../images/sharepair/sharepair3.jpg"
import skinfuel1 from "../images/skinfuel/skinfuel1.jpg"
import skinfuel2 from "../images/skinfuel/skinfuel2.jpg"
import skinfuel3 from "../images/skinfuel/skinfuel3.jpg"
import thatsit1 from "../images/thatsit/thatsit1.jpg"
import thatsit2 from "../images/thatsit/thatsit2.jpg"
import thatsit3 from "../images/thatsit/thatsit3.png"
import votemoji1 from "../images/votemoji/votemoji1.jpg"
import votemoji2 from "../images/votemoji/votemoji2.jpg"
import votemoji3 from "../images/votemoji/votemoji3.jpg"
import { colours } from "../constants"
import styled from "@emotion/styled"

const items = [
    {
        title: "Artimiss",
        description:
            "Be heard not hurt! A jewellery line with an in-built alarm system that connects to your smartphone. With this app, you can share your location, contact authorities and loved ones, and record audio!",
        targetId: "artimiss",
        images: [artimiss1, artimiss2, artimiss3],
        primaryColour: colours.artimissPrimary,
        secondaryColour: colours.artimisSecondary,
    },
    {
        title: "That's It AKL",
        description:
            "This social media campaign was a collaboration piece with Auckland Council. Our goal was to engage the general public and inspire them to have their say in the Auckland Council’s 10 Year Plan.",
        targetId: "thatsit",
        images: [thatsit1, thatsit2, thatsit3],
        primaryColour: colours.thatsItPrimary,
        secondaryColour: colours.thatsItSecondary,
        mirror: true,
    },
    {
        title: "Skin Fuel",
        description:
            "This app creates custom DIY skin care to help you, and the environment. This easy to use app only takes a few quick questions about your skin before you receive a personalised recipe!",
        targetId: "skinfuel",
        images: [skinfuel1, skinfuel2, skinfuel3],
        primaryColour: colours.skinFuelPrimary,
        secondaryColour: colours.skinFuelSecondary,
    },
    {
        title: "Votemoji",
        description:
            "This activation was created to coincide with the 2020 election. With a voting poll upstairs, we helped today’s youth identify their core values by creating their own personalised avatar and badge.",
        targetId: "votemoji",
        images: [votemoji1, votemoji2, votemoji3],
        primaryColour: colours.votemojiPrimary,
        secondaryColour: colours.votemojiSecondary,
        mirror: true,
    },
    {
        title: "Sharepair",
        description:
            "We all know how bad fast fashion is for the environment. This platform allows you to sell, swap and recycle old clothes using tutorial videos and blog posts. Share your clothes, repair the planet!",
        targetId: "sharepair",
        images: [sharepair1, sharepair2, sharepair3],
        primaryColour: colours.sharePairPrimary,
        secondaryColour: colours.sharePairSecondary,
    },
]

const CIRCLE_SIZE = 100

const Circle = styled.div({
    transition: "all 0.1s ease",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: colours.blue,
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
    marginBottom: 50,

    "&:focus": {
        outline: 0,
    },
    "&:focus-visible": {
        boxShadow: `0 0 0 3px ${colours.white}`,
    },
})

const Work = ({ style }) => (
    <div
        css={
            ([style],
            {
                position: "relative",
            })
        }
    >
        <div id="work" />
        <Marker
            text="Work"
            size={275}
            left={200}
            colour={colours.blue}
            style={{ marginTop: 150, zIndex: 1 }}
        />
        <div css={{ position: "absolute", top: 480, left: 287.5, zIndex: 1 }}>
            <ScrollButton targetId="about" style={buttonStyles}>
                <Circle>About</Circle>
            </ScrollButton>
            <ScrollButton targetId="contact" style={buttonStyles}>
                <Circle>Contact</Circle>
            </ScrollButton>
        </div>
        <WorkCarousel items={items} defaultBackground={artimiss1} />

        <div
            css={{
                height: 200,
                width: "100%",
                display: "flex",
                justifyContent: "center",
            }}
        >
            <div
                css={{
                    width: 10,
                    height: "100%",
                    backgroundColor: colours.lightblue,
                }}
            />
        </div>
        <div>
            {items.map(item => (
                <div key={item.title}>
                    <Project {...item} />
                </div>
            ))}
        </div>
    </div>
)

export default Work