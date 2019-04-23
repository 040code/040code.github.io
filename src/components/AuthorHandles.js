import React, { Fragment } from 'react'

class AuthorHandles extends React.Component {
  render() {
    const { github, linkedin, twitter, email } = this.props.author.frontmatter

    return (
      <Fragment>
        <div>
          {github}
          {linkedin}
          {twitter}
          {email}
        </div>
      </Fragment>
    )
  }
}
export default AuthorHandles 
