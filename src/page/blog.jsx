import { Fragment } from "react";
import { Link } from "react-router-dom";
import Footer from "../component/layout/footer";
import Header from "../component/layout/header";
import PageHeader from "../component/layout/pageheader";
import Pagination from "../component/sidebar/pagination";


const blogList = [
    {
        imgUrl: 'assets/images/blog/01.jpg',
        imgAlt: 'blog thumb EduHub',
        title: 'What is the future of an Developer.',
        desc: 'In fact, web developers can take advantage of a strong job market. According to Projections Central, web developer jobs in 46 states and US territories are expected to grow by ....',
        commentCount: '3',
        btnText: 'Read More',
        metaList: [
            {
                iconName: 'icofont-ui-user',
                text: 'ARO OMEY',
            },
            {
                iconName: 'icofont-calendar',
                text: 'Jun 05,2022',
            },
        ],
    },
    {
        imgUrl: 'assets/images/blog/02.jpg',
        imgAlt: 'blog thumb EduHub',
        title: 'How to start as a Developer.',
        desc: 'Freecodecamp is the best place to learn web development. org. There is very little organized research like them. Go there, open an account and take 6 months to learn ....',
        btnText: 'Read more',
        commentCount: '3',
        btnText: 'Read More',
        metaList: [
            {
                iconName: 'icofont-ui-user',
                text: 'ARO OMEY',
            },
            {
                iconName: 'icofont-calendar',
                text: 'Jun 05,2022',
            },
        ],
    },
    {
        imgUrl: 'assets/images/blog/03.jpg',
        imgAlt: 'blog thumb EduHub',
        title: 'Roadmap to Learn React.',
        desc: 'Developers needed a framework or library that allowed them to break down complex components and reuse code to complete their projects faster. This is where React is very ....',
        commentCount: '3',
        btnText: 'Read More',
        metaList: [
            {
                iconName: 'icofont-ui-user',
                text: 'ARO OMEY',
            },
            {
                iconName: 'icofont-calendar',
                text: 'Jun 05,2022',
            },
        ],
    },
    {
        imgUrl: 'assets/images/blog/04.jpg',
        imgAlt: 'Blog Thumb',
        title: 'Guide for Begainer',
        desc: 'When I was new to learning computer programming, there were many questions in my mind, such as where to learn, how to become a good programmer, etc.',
        commentCount: '3',
        btnText: 'Read More',
        metaList: [
            {
                iconName: 'icofont-ui-user',
                text: 'ARO OMEY',
            },
            {
                iconName: 'icofont-calendar',
                text: 'Jun 05,2022',
            },
        ],
    },
    {
        imgUrl: 'assets/images/blog/05.jpg',
        imgAlt: 'Blog Thumb',
        title: 'Whay is Cyber Security?',
        desc: 'Internet usage is increasing day by day, along with it the importance of Internet security is increasing. Using the internet can do a lot of good as well as harm. Hacking seems to ....',
        commentCount: '3',
        btnText: 'Read More',
        metaList: [
            {
                iconName: 'icofont-ui-user',
                text: 'ARO OMEY',
            },
            {
                iconName: 'icofont-calendar',
                text: 'Jun 05,2022',
            },
        ],
    },
    {
        imgUrl: 'assets/images/blog/06.jpg',
        imgAlt: 'Blog Thumb',
        title: 'What is C Language?',
        desc: 'Computer is one of the modern devices in this universe. Various researches and large calculations are being done using the power of computers for ages. But do you know....',
        commentCount: '3',
        btnText: 'Read More',
        metaList: [
            {
                iconName: 'icofont-ui-user',
                text: 'ARO OMEY',
            },
            {
                iconName: 'icofont-calendar',
                text: 'Jun 05,2022',
            },
        ],
    },
      
]



const BlogPage = () => {
    return ( 
        <Fragment>
            <Header />
            <PageHeader title={'Our Blog Posts'} curPage={'Blog'} />
            <div className="blog-section padding-tb section-bg">
                <div className="container">
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
                                                        {val.metaList.map((val, i) => (
                                                            <li key={i}><i className={val.iconName}></i>{val.text}</li>
                                                        ))}
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
                        <Pagination />
                    </div>
                </div>
            </div>
            <Footer />
        </Fragment>
    );
}

export default BlogPage;