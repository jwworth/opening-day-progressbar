import { Line } from 'rc-progress'
import React from 'react'

import Layout from '../components/layout'
import SEO from '../components/seo'
import { getDayOfYear } from 'date-fns'

class IndexPage extends React.Component {
  state = {
    percentage: 0,
  }

  calculatePercentage = () => {
    const today = getDayOfYear(Date.now())
    const openingDay = getDayOfYear(Date.parse('28 Mar 2019'))
    const diff = openingDay - today

    let percentage
    if (today < openingDay) {
      percentage = 1 - diff / 365
    } else {
      percentage = 1 - (diff + 365) / 365
    }

    percentage = Math.floor(percentage * 100)
    this.setState({ percentage })
  }

  componentDidMount() {
    this.calculatePercentage()
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
