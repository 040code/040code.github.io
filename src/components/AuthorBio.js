import React from 'react'

import Content from './Content'

class AuthorBio extends React.Component {
  render() {
    const { author } = this.props

    return (
        <Content
          content={author.html}
          tags={author.frontmatter.tags}
        />
    )
  }
}
export default AuthorBio 
