import * as React from "react"

import Layout from "../components/layout"
import About from "../components/about"
import Work from "../components/work"
import Contact from "../components/contact"

const IndexPage = () => (
    <Layout style={{}}>
        <About />
        <Work style={{ paddingTop: 50 }} />
        <Contact />
    </Layout>
)

export default IndexPage
