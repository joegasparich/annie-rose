/** @jsx jsx */
import { css, jsx } from "@emotion/react"
import styled from "@emotion/styled"
import emailjs from "emailjs-com"

import { colours } from "../constants"
import Button from "./button"

const Label = styled.label({
    display: "inline-block",
    color: colours.red,
    fontWeight: "bold",
    marginTop: "1rem",
    fontSize: 28,
    lineHeight: "50px",
})
const fieldStyles = css({
    display: "block",
    color: colours.red,
    border: `10px solid ${colours.red}`,
    background: colours.pink,
    padding: "2px 20px",
    outline: 0,
    width: "100%",
    fontSize: 28,
    lineHeight: "50px",
    resize: "none",
})
const Input = styled.input(fieldStyles)
const TextArea = styled.textarea(fieldStyles)

const Form = ({ style }) => {
    function sendEmail(e) {
        e.preventDefault()

        const form = e.target

        if (
            !form.user_email.value ||
            !form.subject.value ||
            !form.message.value
        ) {
            return
        }

        emailjs.sendForm(
            "service_hlmho64",
            "template_4mrupjm",
            form,
            "user_P13SLSHz5qe0L7mjiiuQX"
        )

        form.reset()
    }

    return (
        <div
            css={[
                {
                    padding: "2rem",
                },
                style,
            ]}
        >
            <form onSubmit={sendEmail}>
                <Label>Email</Label>
                <Input
                    type="email"
                    name="user_email"
                    placeholder="Your Email Address..."
                ></Input>
                <Label>Subject</Label>
                <span
                    css={{
                        color: colours.red,
                        fontSize: 28,
                        marginLeft: 10,
                    }}
                >
                    (Optional)
                </span>
                <Input
                    type="text"
                    name="subject"
                    placeholder="Summary of your enquiry..."
                    css={{ padding: "20px 20px" }}
                ></Input>
                <Label>Message</Label>
                <TextArea
                    name="message"
                    rows="5"
                    placeholder="Type your message..."
                ></TextArea>
                <Button
                    type="submit"
                    value="Submit"
                    css={{
                        marginTop: 32,
                        cursor: "pointer",
                        outline: "none",
                    }}
                >
                    Submit
                </Button>
            </form>
        </div>
    )
}

export default Form
