/** @jsx jsx */
import { jsx } from "@emotion/react"
import React from "react"
import { boxShadow, colours } from "../constants"

import Section from "./section"

const Fork = ({ colour, mirror, style }) => (
    <div
        css={[
            {
                height: 200,
                width: "100%",
                display: "flex",
                alignItems: "center",
                flexDirection: mirror ? "column-reverse" : "column",
            },
            style,
        ]}
    >
        <div css={{ width: 10, height: 140, backgroundColor: colour }} />
        <div
            css={{
                border: `10px solid ${colour}`,
                height: 60,
                width: 120,
                ...(mirror
                    ? {
                          borderBottomLeftRadius: 60,
                          borderBottomRightRadius: 60,
                          borderTop: 0,
                      }
                    : {
                          borderTopLeftRadius: 60,
                          borderTopRightRadius: 60,
                          borderBottom: 0,
                      }),
            }}
        />
    </div>
)

const Project = ({
    targetId,
    title,
    description,
    images,
    primaryColour,
    secondaryColour,
    mirror,
}) => (
    <React.Fragment>
        <Fork
            colour={secondaryColour}
            style={{ "*:first-child>&": { display: "none" } }}
            mirror
        />
        <div id={targetId} />
        <div
            css={{
                backgroundColor: secondaryColour,
                margin: "0 56px",
                padding: "42px 95px",
                height: "100vh",
            }}
        >
            <Section
                css={{
                    marginBottom: 53,
                    flexDirection: mirror ? "row-reverse" : "row",
                }}
            >
                <div
                    css={{
                        width: "33%",
                        marginLeft: mirror ? 75 : 0,
                        height: "50vh",
                        overflow: "hidden",
                    }}
                >
                    <h1
                        css={{
                            color: primaryColour,
                            fontSize: 56,
                            textTransform: "uppercase",
                        }}
                    >
                        {title}
                    </h1>
                    <p
                        css={{
                            width: 440,
                            color: primaryColour,
                            fontSize: 30,
                            lineHeight: "72px",
                            letterSpacing: 1.38,
                        }}
                    >
                        {description}
                    </p>
                </div>
                <div
                    css={{
                        width: "50vh",
                        height: "60%",
                    }}
                />
                <img
                    src={images?.[0]}
                    alt={`${title} 1`}
                    style={{
                        position: "absolute",
                        height: "50vh",
                        width: "60%",
                        background: colours.white,
                        boxShadow: boxShadow,
                        ...(mirror ? { left: 0 } : { right: 0 }),
                    }}
                />
            </Section>
            <Section
                css={{
                    justifyContent: "space-between",
                }}
            >
                <img
                    src={images?.[1]}
                    alt={`${title} 2`}
                    style={{
                        width: "40%",
                        height: 325,
                        background: colours.white,
                        boxShadow: boxShadow,
                    }}
                />
                <img
                    src={images?.[2]}
                    alt={`${title} 3`}
                    style={{
                        width: "40%",
                        height: 325,
                        background: colours.white,
                        boxShadow: boxShadow,
                    }}
                />
            </Section>
        </div>
        <Fork
            colour={secondaryColour}
            style={{ "*:last-child>&": { display: "none" } }}
        />
    </React.Fragment>
)

export default Project
