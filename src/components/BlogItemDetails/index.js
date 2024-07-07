// Write your JS code here
import {Component} from 'react'
import './index.css'

class BlogItemDetails extends Component {
  state = {
    blogData: {},
  }

  componentDidMount() {
    this.getBlogsData()
  }

  getBlogsData = async () => {
    const {match} = this.props
    const {params} = match
    const {id} = params
    const response = await fetch(`https://apis.ccbp.in/blogs/${id}`)
    const data = await response.json()
    const updatedData = {
      author: data.author,
      avatarUrl: data.avatar_url,
      content: data.content,
      imageUrl: data.image_url,
      title: data.title,
      id: data.id,
      topic: data.topic,
    }
    this.setState({blogData: updatedData})
  }

  renderBlogDataDetails = () => {
    const {blogData} = this.state
    const {title, avatarUrl, author, imageUrl, content} = blogData

    return (
      <div className="blog-item-details-container">
        <h2 className="blog-heading">{title}</h2>
        <div className="author-container">
          <img src={avatarUrl} alt={author} className="avatar-image" />
          <p className="author-name">{author}</p>
        </div>
        <img src={imageUrl} alt={title} className="blog-data-image" />
        <p className="blog-description">{content}</p>
      </div>
    )
  }

  render() {
    return (
      <div className="blog-data-container">{this.renderBlogDataDetails()}</div>
    )
  }
}

export default BlogItemDetails
