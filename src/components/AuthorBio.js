import React, { Fragment } from 'react'

import Content from './Content'
import AuthorHandles from './AuthorHandles'

class AuthorBio extends React.Component {
  render() {
    const { author } = this.props

    return (
      <Fragment>
        <AuthorHandles author={author}/>
        <Content
          content={author.html}
        />
      </Fragment>
    )
  }
}
export default AuthorBio 
