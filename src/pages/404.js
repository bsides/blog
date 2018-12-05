import React from 'react'
import Layout from '../components/Layout'

class NotFoundPage extends React.Component {
  render() {
    return (
      <Layout location={this.props.location}>
        <h1>Não achei!</h1>
        <p>Você achou uma página que não consigo achar... 😢</p>
      </Layout>
    )
  }
}

export default NotFoundPage
