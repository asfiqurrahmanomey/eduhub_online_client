
import { Link } from "react-router-dom";


const subTitle = "FORM OUR BLOG POSTS";
const title = "More Articles From Resource Library";


const blogList = [
    {
        imgUrl: 'assets/images/blog/01.jpg',
        imgAlt: 'blog thumb EduHub',
        title: 'What is the future of an Developer.',
        author: 'ARO OMEY',
        date: 'April 23,2022',
        desc: 'In fact, web developers can take advantage of a strong job market. According to Projections Central, web developer jobs in 46 states and US territories are expected to grow by ....',
        btnText: 'Read more',
        commentCount: '3',
    },
    {
        imgUrl: 'assets/images/blog/02.jpg',
        imgAlt: 'blog thumb EduHub',
        title: 'How to start as a Developer.',
        author: 'ARO OMEY',
        date: 'April 23,2022',
        desc: 'Freecodecamp is the best place to learn web development. org. There is very little organized research like them. Go there, open an account and take 6 months to learn ....',
        btnText: 'Read more',
        commentCount: '4',
    },
    {
        imgUrl: 'assets/images/blog/03.jpg',
        imgAlt: 'blog thumb EduHub',
        title: 'Roadmap to Learn React.',
        author: 'ARO OMEY',
        date: 'April 23,2022',
        desc: 'Developers needed a framework or library that allowed them to break down complex components and reuse code to complete their projects faster. This is where React is very ....',
        btnText: 'Read more',
        commentCount: '6',
    },
]

const Blog = () => {
    return (
        <div className="blog-section padding-tb section-bg">
            <div className="container">
                <div className="section-header text-center">
                    <span className="subtitle">{subTitle}</span>
                    <h2 className="title">{title}</h2>
                </div>
                <div className="section-wrapper">
                    <div className="row row-cols-1 row-cols-md-2 row-cols-xl-3 justify-content-center g-4">
                        {blogList.map((val, i) => (
                            <div className="col" key={i}>
                                <div className="post-item">
                                    <div className="post-inner">
                                        <div className="post-thumb">
                                            <Link to="/blog-single"><img src={`${val.imgUrl}`} alt={`${val.imgAlt}`} /></Link>
                                        </div>
                                        <div className="post-content">
                                            <Link to="/blog-single"><h4>{val.title}</h4></Link>
                                            <div className="meta-post">
                                                <ul className="lab-ul">
                                                    <li><i className="icofont-ui-user"></i>{val.author}</li>
                                                    <li><i className="icofont-calendar"></i>{val.date}</li>
                                                </ul>
                                            </div>
                                            <p>{val.desc}</p>
                                        </div>
                                        <div className="post-footer">
                                            <div className="pf-left">
                                                <Link to="/blog-single" className="lab-btn-text">{val.btnText} <i className="icofont-external-link"></i></Link>
                                            </div>
                                            <div className="pf-right">
                                                <i className="icofont-comment"></i>
                                                <span className="comment-count">{val.commentCount}</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
 
export default Blog;