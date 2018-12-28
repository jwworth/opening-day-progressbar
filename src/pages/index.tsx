import { Link } from 'gatsby'
import React from 'react'

import Image from '../components/image'
import Layout from '../components/layout'
import SEO from '../components/seo'

type IndexState = {
  percentage: undefined,
}

class IndexPage extends React.Component<{}, IndexState> {
  state = {
    percentage: undefined
  }

  componentDidMount() {
    const millisecondsToDays = 216000000
    const startDate2018 = Date.parse('03-29-2018') / millisecondsToDays
    const startDate2019 = Date.parse('03-28-2019') / millisecondsToDays
    const diff = startDate2019 - startDate2018

    const todayRelative = new Date() / millisecondsToDays - startDate2018
    const percentage = Math.round((todayRelative / diff) * 100)

    this.setState({ percentage })
  }

  render() {
    return (
      <Layout>
        <SEO title="Home" keywords={['gatsby', 'application', 'react', 'baseball']} />
        <h3>How close are we to MLB <Link to="https://en.wikipedia.org/wiki/Opening_Day">Opening Day</Link>?</h3>
        <p>{this.state.percentage}%</p>
        <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }} />
      </Layout>
    )
  }
}

export default IndexPage
