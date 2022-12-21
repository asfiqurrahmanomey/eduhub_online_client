
import { Link } from "react-router-dom";
import Rating from "../sidebar/rating";


const subTitle = "Loved by students";
const title = "Students Community Feedback";


const studentList = [
    {
        imgUrl: 'assets/images/feedback/student/01.jpg',
        imgAlt: 'student Amina Khan',
        name: 'Amina Khan',
        degi: 'Web Developer',
        desc: 'It is not just a course. It is a complete guideline for the career. If you are determined, you surely get a path. You will learn from scratch and becomes an entry-level developer',
    },
    {
        imgUrl: 'assets/images/feedback/student/02.jpg',
        imgAlt: 'student Robin Ronu',
        name: 'Robin Ronu',
        degi: 'Full Stack Dev',
        desc: 'EduHub makes me a hard worker and dedicated. The teaching environment is very organized. The support team is beneficial.',
    },
]


const Student = () => {
    return (
        <div className="student-feedbak-section padding-tb shape-img">
            <div className="container">
                <div className="section-header text-center">
                    <span className="subtitle">{subTitle}</span>
                    <h2 className="title">{title}</h2>
                </div>
                <div className="section-wrapper">
                    <div className="row justify-content-center row-cols-lg-2 row-cols-1">
                        <div className="col">
                            <div className="sf-left">
                                <div className="sfl-thumb">
                                    <img src="assets/images/feedback/01.jpg" alt="student feedback" />
                                    <a href="https://youtu.be/l7eEJxyu9gQ" className="video-button popup" target="_self"><i className="icofont-ui-play"></i></a>
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            {studentList.map((val, i) => (
                                <div className="stu-feed-item" key={i}>
                                    <div className="stu-feed-inner">
                                        <div className="stu-feed-top">
                                            <div className="sft-left">
                                                <div className="sftl-thumb">
                                                    <img src={`${val.imgUrl}`} alt={val.imgAlt} />
                                                </div>
                                                <div className="sftl-content">
                                                    <Link to="/team-single"><h6>{val.name}</h6></Link>
                                                    <span>{val.degi}</span>
                                                </div>
                                            </div>
                                            <div className="sft-right">
                                                <Rating />
                                            </div>
                                        </div>
                                        <div className="stu-feed-bottom">
                                            <p>{val.desc}</p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
 
export default Student;