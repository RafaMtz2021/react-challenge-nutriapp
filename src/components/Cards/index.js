import React from "react";
import { Link } from "react-router-dom";


const Cards = ({date,likes,title,tags,url,body}) => {
  return (
    <>
      {/* id={id}
      <h6>body: {body}</h6> */}

      <div className="card rounded-3 mb-2">
      <img src={url}alt="" className="img-fluid"/>
        <article className="card-body">
            <div className="d-flex">
                <div>
                    <a href="" className="row p-0 m-0 w-50">
                        <img className="rounded-circle p-0"
                            src="https://res.cloudinary.com/practicaldev/image/fetch/s--Qv9nP2Ud--/c_fill,f_auto,fl_progressive,h_90,q_auto,w_90/https://dev-to-uploads.s3.amazonaws.com/uploads/user/profile_image/592016/ac52b742-ede9-4335-9692-80b246d53ce7.png"
                            alt=""/>
                    </a>
                </div>
                <div className="row pe-0 mb-3 lh-sm" style={{marginLeft: -50 + 'px'}}>
                    <a href="#" className="text-dark">Maria Simon</a>
                    <a href="#" className="text-black-50"><time>{date}</time></a>
                </div>
            </div>
            <div className="ms-5">
                <div className="card-title mb-3">
                    
                    {/* <h2> */}
                        {/* <a href="#" className="text-dark fw-bolder">{title}
                        </a>
                        <Link to= "post">{title}</Link>
                        </h2> */}
                        <Link className = "text-dark fw-bolder" to= "post">{title}</Link>
                </div>
                <div className="mb-3 text-black-50">
                    <a href="#" className="text-black-50 me-3"><span
                            className="text-black-50">#</span>{tags[0]}</a>
                    <a href="#" className="text-black-50 me-3"><span
                            className="text-black-50">#</span>{tags[1]}</a>
                    <a href="#" className="text-black-50 me-3"><span
                            className="text-black-50">#</span>{tags[2]}</a>
                    <a href="#" className="text-black-50 me-3"><span
                            className="text-black-50">#</span>{tags[3]}</a>
                </div>
                <div className="d-flex justify-content-between">
                    <div className="d-flex align-items-center ">
                        <a href="#" className="me-3 ">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24">
                                <path
                                    d="M18.884 12.595l.01.011L12 19.5l-6.894-6.894.01-.01A4.875 4.875 0 0112 5.73a4.875 4.875 0 016.884 6.865zM6.431 7.037a3.375 3.375 0 000 4.773L12 17.38l5.569-5.569a3.375 3.375 0 10-4.773-4.773L9.613 10.22l-1.06-1.062 2.371-2.372a3.375 3.375 0 00-4.492.25v.001z">
                                </path>
                            </svg>
                            <p className="d-inline-block text-dark m-0">{likes}</p>
                            <span className="text-dark"> reactions</span>
                        </a>
                        <a href="#">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24">
                                <path
                                    d="M10.5 5h3a6 6 0 110 12v2.625c-3.75-1.5-9-3.75-9-8.625a6 6 0 016-6zM12 15.5h1.5a4.501 4.501 0 001.722-8.657A4.5 4.5 0 0013.5 6.5h-3A4.5 4.5 0 006 11c0 2.707 1.846 4.475 6 6.36V15.5z">
                                </path>
                            </svg>
                            <p className="d-inline-block text-dark  m-0">12</p>
                            <span className="text-dark">Comment</span>
                        </a>
                    </div>
                    <div>
                        <small className="me-2">3 min read</small>
                        <button className="btn btn-light">
                            Save
                        </button>
                    </div>
                </div>
            </div>
        </article>
      </div>
    </>
  )
}

export default Cards
