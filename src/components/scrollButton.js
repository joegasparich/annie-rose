/** @jsx jsx */
import { jsx } from "@emotion/react"

const ScrollButton = ({ children, style, targetId, ...props }) => {
    const handleClick = () => {
        document
            .getElementById(targetId)
            ?.scrollIntoView({ behavior: "smooth" })
    }

    return (
        <div
            css={[
                {
                    cursor: "pointer",
                },
                style,
            ]}
            role="button"
            tabIndex={0}
            onClick={handleClick}
            onKeyDown={handleClick}
            {...props}
        >
            {children}
        </div>
    )
}

export default ScrollButton
