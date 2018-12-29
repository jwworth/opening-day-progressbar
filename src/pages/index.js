import { Line } from 'rc-progress'
import React from 'react'

import Layout from '../components/layout'
import SEO from '../components/seo'

class IndexPage extends React.Component {
  state = {
    percentage: 0,
  }

  calculatePercentage = () => {
    const openingDay2018 = Date.parse('03-29-2018')
    const openingDay2019 = Date.parse('03-28-2019')
    const baseballYear = openingDay2019 - openingDay2018

    const todayRelative = Date.now() - openingDay2018
    const percentage = Math.round((todayRelative / baseballYear) * 100)
    return percentage
  }

  componentDidMount() {
    const percentage = this.calculatePercentage()
    this.setState({ percentage })
  }

  render() {
    const { percentage } = this.state
    return (
      <Layout>
        <SEO
          title="Home"
          keywords={['gatsby', 'application', 'react', 'baseball']}
        />
        <h3>
          How close are we to MLB{' '}
          <a href="https://en.wikipedia.org/wiki/Opening_Day">Opening Day</a>?!
        </h3>
        <p>Progress: {percentage}%</p>
        <Line
          percent={percentage}
          strokeWidth="2"
          strokeColor="cornflowerblue"
        />
        <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }} />
      </Layout>
    )
  }
}

export default IndexPage
