import * as React from "react"
import { ButtonLink } from "../components/Button"
import Layout from "../components/layout"
import Seo from "../components/seo"
import { H1, Paragraph } from "../components/Texts"

const NotFoundPage = () => (
  <Layout>
    <Seo title="404: Not found" />
    <H1>404: Not Found</H1>
    <Paragraph>
      You just hit a route that doesn&#39;t exist... the sadness.
    </Paragraph>
    <ButtonLink to="/">Back to Home</ButtonLink>
  </Layout>
)

export default NotFoundPage
