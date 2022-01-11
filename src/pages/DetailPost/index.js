import "./DetailPost.css";
import React, {useState, useEffect} from "react";
import {getPostsById} from "../../services/post";
import { useParams } from "react-router-dom";

function DetailPost(){
  const params = useParams();

  const [detail, setDetail] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await getPostsById(params.postId);
      const result = data
      const collection = result.data.post
      setDetail(collection)

    };
    fetchData();
  }, []);

    return(
        <>
            <header>
            <div className="container-fluid c-fluid">
                <nav className="navbar navbar-expand-lg navbar_bar">
                    <div className="container container_bar">
                        <a className="navbar-logo" href="../index.html">
                            <svg width="50" height="40" viewBox="0 0 50 40" fill="#fff" xmlns="http://www.w3.org/2000/svg">
                                <rect width="50" height="40" rx="3" >
                                // style="fill: #000;"

                                </rect>
                                <path
                                    d="M19.099 23.508c0 1.31-.423 2.388-1.27 3.234-.838.839-1.942 1.258-3.312 1.258h-4.403V12.277h4.492c1.31 0 2.385.423 3.224 1.27.846.838 1.269 1.912 1.269 3.223v6.738zm-2.808 0V16.77c0-.562-.187-.981-.562-1.258-.374-.285-.748-.427-1.122-.427h-1.685v10.107h1.684c.375 0 .75-.138 1.123-.415.375-.285.562-.708.562-1.27zM28.185 28h-5.896c-.562 0-1.03-.187-1.404-.561-.375-.375-.562-.843-.562-1.404V14.243c0-.562.187-1.03.562-1.404.374-.375.842-.562 1.404-.562h5.896v2.808H23.13v3.65h3.088v2.808h-3.088v3.65h5.054V28zm7.12 0c-.936 0-1.684-.655-2.246-1.965l-3.65-13.758h3.089l2.807 10.804 2.808-10.804H41.2l-3.65 13.758C36.99 27.345 36.241 28 35.305 28z"
                                    // style="fill: var(--base-inverted);"
                                    ></path>
                            </svg>
                        </a>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                            data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                            aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <form className="d-flex d-flex_bar">
                            <input className="form-control me-2 form-control_bar" type="search" placeholder="Search..."
                                aria-label="Search"/>
                            <button className="btn btn-outline-success btn-sucess" type="submit">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                    className="crayons-icon">
                                    <path
                                        d="M18.031 16.617l4.283 4.282-1.415 1.415-4.282-4.283A8.96 8.96 0 0111 20c-4.968 0-9-4.032-9-9s4.032-9 9-9 9 4.032 9 9a8.96 8.96 0 01-1.969 5.617zm-2.006-.742A6.977 6.977 0 0018 11c0-3.868-3.133-7-7-7-3.868 0-7 3.132-7 7 0 3.867 3.132 7 7 7a6.977 6.977 0 004.875-1.975l.15-.15z">
                                    </path>
                                </svg>
                            </button>
                        </form>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav mb-2 mb-lg-0 navbar-nav_bar">
                                <li className="nav-item">
                                    <a className="nav-link active create_post" aria-current="page" href="#">Create Post</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link active action" aria-current="page" href="#">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                            role="img" aria-labelledby="a41cvmxi3r1lero45hkubzuujy4jlv0j"
                                            className="crayons-icon">
                                            <title id="a41cvmxi3r1lero45hkubzuujy4jlv0j">Connect</title>
                                            <path
                                                d="M2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10H2l2.929-2.929A9.969 9.969 0 012 12zm4.828 8H12a8 8 0 10-8-8c0 2.152.851 4.165 2.343 5.657l1.414 1.414-.929.929zM8 13h8a4 4 0 11-8 0z">
                                            </path>
                                        </svg>
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link action" href="./notification.html">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                            role="img" aria-labelledby="a6d4t764l2b3c64midpz699jmmh662u0"
                                            className="crayons-icon">
                                            <title id="a6d4t764l2b3c64midpz699jmmh662u0">Notifications</title>
                                            <path
                                                d="M20 17h2v2H2v-2h2v-7a8 8 0 1116 0v7zm-2 0v-7a6 6 0 10-12 0v7h12zm-9 4h6v2H9v-2z">
                                            </path>
                                        </svg>
                                        <span className="indicator" id="notifications-number">1</span>
                                    </a>
                                </li>
                                <li className="nav-item dropdown">
                                    <a className="nav-link" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown"
                                        aria-expanded="false">
                                        <span className="avatar_bar">
                                            <img className="avatar_image" alt="" id="nav-profile-image" src="https://images.generated.photos/XRFe2Mz871sS6svQqjD-wwE7sAny0M7rjdoN5qgApEo/rs:fit:512:512/wm:0.95:sowe:18:18:0.33/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy92M18w/NzQzOTM2LmpwZw.jpg" />
                                        </span>
                                    </a>
                                    <ul className="dropdown-menu menu-user" aria-labelledby="navbarDropdown">
                                        <li><a className="dropdown-item" href="#">Koder</a></li>
                                        <li><a className="dropdown-item" href="#">@koder</a></li>
                                        <li>
                                            <hr className="dropdown-divider" />
                                        </li>
                                        <li><a className="dropdown-item" href="#">Dashboard</a></li>
                                        <li><a className="dropdown-item" href="#">Create Post</a></li>
                                        <li><a className="dropdown-item" href="#">Reading list</a></li>
                                        <li><a className="dropdown-item" href="#">Settings</a></li>
                                        <hr className="dropdown-divider" />
                                        <li><a className="dropdown-item" href="#">Sign Out</a></li>
                                    </ul>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </div>
            </header>   

            <main>
            <div className="container">
                <div className="row d-flex justify-content-center">
                    <div className="sideIzquierda col-1 mt-5">
                        <div className="columna">
                            {/* reacción */}
                            <div className="left-item pb-3">
                                <a className="left_icons" href="#">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                        aria-hidden="true" className="crayons-icon">
                                        <path
                                            d="M21.179 12.794l.013.014L12 22l-9.192-9.192.013-.014A6.5 6.5 0 0112 3.64a6.5 6.5 0 019.179 9.154zM4.575 5.383a4.5 4.5 0 000 6.364L12 19.172l7.425-7.425a4.5 4.5 0 10-6.364-6.364L8.818 9.626 7.404 8.21l3.162-3.162a4.5 4.5 0 00-5.99.334l-.001.001z">
                                        </path>
                                    </svg>
                                </a>
                                <p className="numbers">34</p>
                            </div>
                            {/* unicornio */}
                            <div className="left-item pb-3">
                                <a className="left_icons" href="#">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" aria-hidden="true"
                                        className="crayons-icon">
                                        <path
                                            d="M5.645 8.013c.013-.265-.261-.323-.4-.183-1.16 1.17-1.822 3.865-.344 7.32.294.961 1.938 3.19.84 6.131l-.003.006c-.094.255.206.404.366.263 1.395-1.226 1.933-3.593 1.1-6.375-.488-1.657-1.955-4.226-1.559-7.162zm-3.22 2.738c.05-.137-.124-.417-.326-.225-.939.893-1.316 2.863-.976 4.605.547 2.878 2.374 3.526 2.066 6.629-.028.102.176.38.348.154 1.546-2.033.409-4.453-.241-6.006-1.005-2.386-1.087-4.118-.871-5.157z"
                                            fill="#08090A"></path>
                                        <path fillRule="evenodd" clipRule="evenodd"
                                            d="M13.622 7.223l8.579-3.68c.598-.256 1.087.547.6.985l-6.618 5.941c.881 2.043 2.738 6.34 2.931 6.775 1.348 3.031-2.055 4.918-3.807 3.583a7.027 7.027 0 01-.623-.574c-.974-.965-2.419-2.398-5.207-1.877.284-2.115-.313-3.737-.883-5.288-.38-1.032-.747-2.032-.837-3.124-.346-3.329 3.763-8.23 4.696-7.953.386.115.326 1.229.266 2.319-.051.948-.102 1.88.143 2.12.145.142.428.43.76.773zM11.5 16.5l2.5.5 2.5 2 1-.5-2-4.5-1.5-4-1.5-1-1-1-1-1.5L10 8l-.5 1.5 1 2.5 1 4.5z">
                                        </path>
                                    </svg>
                                </a>
                                <p className="numbers">9</p>
                            </div>
                            {/* guardar */}
                            <div className="left-item pb-3">
                                <a className="left_icons" href="#">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                        aria-hidden="true" className="crayons-icon">
                                        <path
                                            d="M5 2h14a1 1 0 011 1v19.143a.5.5 0 01-.766.424L12 18.03l-7.234 4.536A.5.5 0 014 22.143V3a1 1 0 011-1zm13 2H6v15.432l6-3.761 6 3.761V4z">
                                        </path>
                                    </svg>
                                </a>
                                <p className="numbers">33</p>
                            </div>
                            {/* puntos */}
                            <div className="left-item pb-3">
                                <a className="left_icons" href="#">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" aria-hidden="true"
                                        className="dropdown-icon crayons-icon">
                                        <title>More...</title>
                                        <path fillRule="evenodd" clipRule="evenodd"
                                            d="M7 12a2 2 0 11-4 0 2 2 0 014 0zm7 0a2 2 0 11-4 0 2 2 0 014 0zm5 2a2 2 0 100-4 2 2 0 000 4z">
                                        </path>
                                    </svg>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="center-section col-lg-8 col-md-10 bg-white">
                        <div className="post_card rounded-3">
                            <img src={detail.url} className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h1 className="fs-3xl m:fs-4xl l:fs-5xl fw-bold s:fw-heavy lh-tight mb-4 long">{detail.title}</h1>
                             
                                <div className="badges mt-2 mb-4">
                                    <a href="#"><span className="badge bg-dark">webdev</span></a>
                                    <a href="#"><span className="badge bg-primary">javascript</span></a>
                                    <a href="#"><span className="badge bg-secondary">html</span></a>
                                    <a href="#"><span className="badge bg-warning text-dark">programming</span></a>
                                </div>

                                <div className="subhead d-flex align-items-center mb-3 flex-wrap">
                                    <img src="https://res.cloudinary.com/practicaldev/image/fetch/s--Qv9nP2Ud--/c_fill,f_auto,fl_progressive,h_90,q_auto,w_90/https://dev-to-uploads.s3.amazonaws.com/uploads/user/profile_image/592016/ac52b742-ede9-4335-9692-80b246d53ce7.png"
                                        className="border border-light border border-1 rounded-circle avatar" alt="..." />
                                    <a href="#"><span className="badge bg-light text-dark names">Maria Simon</span></a>
                                    <p className="dates">{detail.date}</p>
                                </div>
                              
                                <h4>{detail.body}</h4>


                            <div className="post_card">
                                <div className="card-body d-flex justify-content-between align-items-center px-5">
                                    <h3 className="card-subtitle mb-2">Discussion (12)</h3>
                                    <button type="button" className="btn btn-outline-secondary">Subscribe</button>
                                </div>
                            </div>

                            {/* Capturar un comentario */}
                            <div className="pt-3 d-flex w-100 justify-content-center">
                                <img src="https://images.generated.photos/XRFe2Mz871sS6svQqjD-wwE7sAny0M7rjdoN5qgApEo/rs:fit:512:512/wm:0.95:sowe:18:18:0.33/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy92M18w/NzQzOTM2LmpwZw.jpg" className="card-img-top rounded-circle avatar2" alt="..." />
                                <textarea className="form-floating txt-area" id="floatingTextarea" rows="5"
                                    placeholder="Add to the discussion"></textarea>

                            </div>

                            <div className="comment">
                                {/* Comentario de un suscriptor1 */}
                                <div className="subhead d-flex my-3 justify-content-center">
                                    <div className="imagen">
                                        <img src="https://images.generated.photos/h1BqFDk9ykpPBu3y0TrO1YquiXfPFNhMp73806nMX6k/rs:fit:512:512/wm:0.95:sowe:18:18:0.33/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy92M18w/NDQ5NjM3LmpwZw.jpg"
                                            className=" align-self-center border-light border border-1 rounded-circle avatar2"
                                            alt="..." />
                                    </div>
                                    <div
                                        className="opinion d-flex flex-wrap flex-column border border-secondary comment1 rounded-3">
                                        <div className="container d-flex align-items-center justify-content-start">
                                            <a href="#"><span className="badge bg-light text-dark names">Jay Jeckel</span></a>
                                            <p>.</p>
                                            <p className="dates mx-2">Sep 20</p>
                                        </div>
                                        {/* <div className="actions">
                                            <a href="#">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" aria-hidden="true" className="dropdown-icon crayons-icon"><title>More...</title><path fill-rule="evenodd" clip-rule="evenodd" d="M7 12a2 2 0 11-4 0 2 2 0 014 0zm7 0a2 2 0 11-4 0 2 2 0 014 0zm5 2a2 2 0 100-4 2 2 0 000 4z"></path></svg>
                                            </a>
                                        </div> */}
                                        <p>Interesting idea and much props for building a site! However, there are a few
                                            things that should be pointed out.

                                            First, looking at the site's github repo, the project source is publicly visible
                                            but it isn't open source. To be open source a project must have a permissible
                                            license, such as MIT, GPL, Apache, etc. Without a license, the project is
                                            proprietary and using the source is technically copyright infringement.

                                            Additionally, the site's landing page doesn't have links to any of the
                                            information a cautious user wants to see before signing up, such as Terms of
                                            Use, Privacy Policy, and an About page. Every website should have these three
                                            pages available from every other page of the site and especially from the
                                            landing page.
                                        </p>
                                    </div>

                                </div>
                                {/* Respuesta del autor */}
                                <div className="subhead d-flex my-3 me-5 justify-content-end">
                                    <div className="imagen">
                                        <img src="https://res.cloudinary.com/practicaldev/image/fetch/s--Qv9nP2Ud--/c_fill,f_auto,fl_progressive,h_90,q_auto,w_90/https://dev-to-uploads.s3.amazonaws.com/uploads/user/profile_image/592016/ac52b742-ede9-4335-9692-80b246d53ce7.png" className="card-img-top rounded-circle avatar2" alt="..." />
                                    </div>
                                    <div
                                        className="opinion d-flex flex-wrap flex-column border border-secondary comment2 rounded-3">
                                        <div className="container d-flex align-items-center justify-content-start">
                                            <a href="#"><span className="badge bg-light text-dark names">Maria Simon</span></a>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                                viewBox="0 0 24 24" role="img"
                                                aria-labelledby="aez12f7f6o87u158kqzikdu5aw94pdym" className="crayons-icon">
                                                <title id="aez12f7f6o87u158kqzikdu5aw94pdym">Author</title>
                                                <path
                                                    d="M12 8.25a6 6 0 110 12 6 6 0 010-12zm0 2.625l-.992 2.01-2.218.322 1.605 1.564-.379 2.21L12 15.937l1.984 1.043-.379-2.209 1.605-1.564-2.218-.323L12 10.875zm.75-6.376l3.75.001v2.25l-1.022.854a7.45 7.45 0 00-2.728-.817V4.5zm-1.5 0v2.288a7.451 7.451 0 00-2.727.816L7.5 6.75V4.5h3.75z">
                                                </path>
                                            </svg>
                                            <p>.</p>
                                            <p className="dates mx-2">Sep 20</p>
                                        </div>
                                        <p>
                                            Hi Jay, these are some extremely valid points. Thanks for bringing them up. It
                                            must've slipped through my mind but I'll get started right away. Appreciate you
                                            taking your time for letting me know!
                                        </p>
                                    </div>
                                    {/* Reacciones */}
                                    {/* <div className="reactions">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" role="img" aria-labelledby="anfh9sj69b56poy72cbv6dnth88xucav" className="crayons-icon reaction-icon not-reacted"><title id="anfh9sj69b56poy72cbv6dnth88xucav">Like comment:</title><path d="M18.884 12.595l.01.011L12 19.5l-6.894-6.894.01-.01A4.875 4.875 0 0112 5.73a4.875 4.875 0 016.884 6.865zM6.431 7.037a3.375 3.375 0 000 4.773L12 17.38l5.569-5.569a3.375 3.375 0 10-4.773-4.773L9.613 10.22l-1.06-1.062 2.371-2.372a3.375 3.375 0 00-4.492.25v.001z"></path></svg>
                                        <span className="reactions-count" id="reactions-count-778262">6</span>
                                        <span className="reactions-label hidden m:inline-block">&nbsp;likes</span>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" role="img" aria-labelledby="a9kth866xe7e89zxghp5q9kuhzyhmjt7" className="crayons-icon reaction-icon not-reacted"><title id="a9kth866xe7e89zxghp5q9kuhzyhmjt7">Comment button</title><path d="M10.5 5h3a6 6 0 110 12v2.625c-3.75-1.5-9-3.75-9-8.625a6 6 0 016-6zM12 15.5h1.5a4.501 4.501 0 001.722-8.657A4.5 4.5 0 0013.5 6.5h-3A4.5 4.5 0 006 11c0 2.707 1.846 4.475 6 6.36V15.5z"></path></svg>
                                        <span className="reactions-label hidden m:inline-block">&nbsp;Reply</span>
                                    </div> */}
                                </div>
                            </div>

                            <div className="comment">
                                {/* Comentario de un suscriptor 2 */}
                                <div className="subhead d-flex my-3 justify-content-center">
                                    <div className="imagen">
                                        <img src="https://images.generated.photos/0y6Il5_Qg5LCKVlImKNs9uOVPyeD5NwtaVTk4l9jX0A/rs:fit:512:512/wm:0.95:sowe:18:18:0.33/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy92M18w/OTM1MTQ4LmpwZw.jpg"
                                            className=" align-self-center border-light border border-1 rounded-circle avatar2"
                                            alt="..."/>
                                    </div>
                                    <div
                                        className="opinion d-flex flex-wrap flex-column border border-secondary comment1 rounded-3">
                                        <div className="container d-flex align-items-center justify-content-start">
                                            <a href="#"><span className="badge bg-light text-dark names">Padelis
                                                    Theodosiou</span></a>
                                            <p>.</p>
                                            <p className="dates mx-2">Sep 20</p>
                                        </div>
                                        {/* <div className="actions">
                                            <a href="#">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" aria-hidden="true" className="dropdown-icon crayons-icon"><title>More...</title><path fill-rule="evenodd" clip-rule="evenodd" d="M7 12a2 2 0 11-4 0 2 2 0 014 0zm7 0a2 2 0 11-4 0 2 2 0 014 0zm5 2a2 2 0 100-4 2 2 0 000 4z"></path></svg>
                                            </a>
                                        </div> */}
                                        <p>Hello @itsnitinr , looks awesome project!
                                            Nice work!

                                            Note: still waiting for the verification email :)
                                        </p>
                                    </div>

                                </div>
                                {/* Respuesta del autor */}
                                <div className="subhead d-flex my-3 me-5 justify-content-end">
                                    <div className="imagen">
                                        <img src="https://res.cloudinary.com/practicaldev/image/fetch/s--Qv9nP2Ud--/c_fill,f_auto,fl_progressive,h_90,q_auto,w_90/https://dev-to-uploads.s3.amazonaws.com/uploads/user/profile_image/592016/ac52b742-ede9-4335-9692-80b246d53ce7.png" className="card-img-top rounded-circle avatar2" alt="..." />
                                    </div>
                                    <div
                                        className="opinion d-flex flex-wrap flex-column border border-secondary comment2 rounded-3">
                                        <div className="container d-flex align-items-center justify-content-start">
                                            <a href="#"><span className="badge bg-light text-dark names">Maria Simon</span></a>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                                viewBox="0 0 24 24" role="img"
                                                aria-labelledby="aez12f7f6o87u158kqzikdu5aw94pdym" className="crayons-icon">
                                                <title id="aez12f7f6o87u158kqzikdu5aw94pdym">Author</title>
                                                <path
                                                    d="M12 8.25a6 6 0 110 12 6 6 0 010-12zm0 2.625l-.992 2.01-2.218.322 1.605 1.564-.379 2.21L12 15.937l1.984 1.043-.379-2.209 1.605-1.564-2.218-.323L12 10.875zm.75-6.376l3.75.001v2.25l-1.022.854a7.45 7.45 0 00-2.728-.817V4.5zm-1.5 0v2.288a7.451 7.451 0 00-2.727.816L7.5 6.75V4.5h3.75z">
                                                </path>
                                            </svg>
                                            <p>.</p>
                                            <p className="dates mx-2">Sep 20</p>
                                        </div>
                                        <p>
                                            Hi there! Thanks for signing up. Could you please check your promotions tab if
                                            you're using Gmail? If you're using Yahoo, you might find the email in the
                                            'Unread' folder. It would've probably ended up there :)

                                            Let me know if you still haven't received it. I'll be happy to send you from my
                                            personal email.
                                        </p>
                                    </div>
                                    {/* Reacciones */}
                                    {/* <div className="reactions">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" role="img" aria-labelledby="anfh9sj69b56poy72cbv6dnth88xucav" className="crayons-icon reaction-icon not-reacted"><title id="anfh9sj69b56poy72cbv6dnth88xucav">Like comment:</title><path d="M18.884 12.595l.01.011L12 19.5l-6.894-6.894.01-.01A4.875 4.875 0 0112 5.73a4.875 4.875 0 016.884 6.865zM6.431 7.037a3.375 3.375 0 000 4.773L12 17.38l5.569-5.569a3.375 3.375 0 10-4.773-4.773L9.613 10.22l-1.06-1.062 2.371-2.372a3.375 3.375 0 00-4.492.25v.001z"></path></svg>
                                        <span className="reactions-count" id="reactions-count-778262">6</span>
                                        <span className="reactions-label hidden m:inline-block">&nbsp;likes</span>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" role="img" aria-labelledby="a9kth866xe7e89zxghp5q9kuhzyhmjt7" className="crayons-icon reaction-icon not-reacted"><title id="a9kth866xe7e89zxghp5q9kuhzyhmjt7">Comment button</title><path d="M10.5 5h3a6 6 0 110 12v2.625c-3.75-1.5-9-3.75-9-8.625a6 6 0 016-6zM12 15.5h1.5a4.501 4.501 0 001.722-8.657A4.5 4.5 0 0013.5 6.5h-3A4.5 4.5 0 006 11c0 2.707 1.846 4.475 6 6.36V15.5z"></path></svg>
                                        <span className="reactions-label hidden m:inline-block">&nbsp;Reply</span>
                                    </div> */}
                                </div>
                            </div>

                            <div className="comment">
                                {/* Comentario de un suscriptor 3 */}
                                <div className="subhead d-flex my-3 justify-content-center">
                                    <div className="imagen">
                                        <img src="https://images.generated.photos/XoEAlx-wjFMYu1Qq-9KjUBVrINsxBJr_foHhdznBLSE/rs:fit:512:512/wm:0.95:sowe:18:18:0.33/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy92M18w/MzAzMTE0LmpwZw.jpg"
                                            className=" align-self-center border-light border border-1 rounded-circle avatar2"
                                            alt="..." />
                                    </div>
                                    <div
                                        className="opinion d-flex flex-wrap flex-column border border-secondary comment1 rounded-3">
                                        <div className="container d-flex align-items-center justify-content-start">
                                            <a href="#"><span className="badge bg-light text-dark names">Pandademic
                                                </span></a>
                                            <p>.</p>
                                            <p className="dates mx-2">Sep 20</p>
                                        </div>
                                        {/* <div className="actions">
                                            <a href="#">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" aria-hidden="true" className="dropdown-icon crayons-icon"><title>More...</title><path fill-rule="evenodd" clip-rule="evenodd" d="M7 12a2 2 0 11-4 0 2 2 0 014 0zm7 0a2 2 0 11-4 0 2 2 0 014 0zm5 2a2 2 0 100-4 2 2 0 000 4z"></path></svg>
                                            </a>
                                        </div> */}
                                        <p>
                                            Wow, great idea. I will join soon! How have you done the video ? It’s amazing!
                                        </p>
                                    </div>

                                </div>
                                {/* Respuesta del autor */}
                                <div className="subhead d-flex my-3 me-5 justify-content-end">
                                    <div className="imagen">
                                        <img src="https://res.cloudinary.com/practicaldev/image/fetch/s--Qv9nP2Ud--/c_fill,f_auto,fl_progressive,h_90,q_auto,w_90/https://dev-to-uploads.s3.amazonaws.com/uploads/user/profile_image/592016/ac52b742-ede9-4335-9692-80b246d53ce7.png" className="card-img-top rounded-circle avatar2" alt="..." />
                                    </div>
                                    <div
                                        className="opinion d-flex flex-wrap flex-column border border-secondary comment2 rounded-3">
                                        <div className="container d-flex align-items-center justify-content-start">
                                            <a href="#"><span className="badge bg-light text-dark names">Maria Simon</span></a>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                                viewBox="0 0 24 24" role="img"
                                                aria-labelledby="aez12f7f6o87u158kqzikdu5aw94pdym" className="crayons-icon">
                                                <title id="aez12f7f6o87u158kqzikdu5aw94pdym">Author</title>
                                                <path
                                                    d="M12 8.25a6 6 0 110 12 6 6 0 010-12zm0 2.625l-.992 2.01-2.218.322 1.605 1.564-.379 2.21L12 15.937l1.984 1.043-.379-2.209 1.605-1.564-2.218-.323L12 10.875zm.75-6.376l3.75.001v2.25l-1.022.854a7.45 7.45 0 00-2.728-.817V4.5zm-1.5 0v2.288a7.451 7.451 0 00-2.727.816L7.5 6.75V4.5h3.75z">
                                                </path>
                                            </svg>
                                            <p>.</p>
                                            <p className="dates mx-2">Sep 20</p>
                                        </div>
                                        <p>
                                            Thank you! Excited for you to join :)

                                            The video is made using Adobe After Effects and free template that you can find
                                            here: <a href="#">youtube.com/watch?v=GzTQFCHzgok</a>
                                        </p>
                                    </div>
                                    {/* Reacciones */}
                                    {/* <div className="reactions">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" role="img" aria-labelledby="anfh9sj69b56poy72cbv6dnth88xucav" className="crayons-icon reaction-icon not-reacted"><title id="anfh9sj69b56poy72cbv6dnth88xucav">Like comment:</title><path d="M18.884 12.595l.01.011L12 19.5l-6.894-6.894.01-.01A4.875 4.875 0 0112 5.73a4.875 4.875 0 016.884 6.865zM6.431 7.037a3.375 3.375 0 000 4.773L12 17.38l5.569-5.569a3.375 3.375 0 10-4.773-4.773L9.613 10.22l-1.06-1.062 2.371-2.372a3.375 3.375 0 00-4.492.25v.001z"></path></svg>
                                        <span className="reactions-count" id="reactions-count-778262">6</span>
                                        <span className="reactions-label hidden m:inline-block">&nbsp;likes</span>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" role="img" aria-labelledby="a9kth866xe7e89zxghp5q9kuhzyhmjt7" className="crayons-icon reaction-icon not-reacted"><title id="a9kth866xe7e89zxghp5q9kuhzyhmjt7">Comment button</title><path d="M10.5 5h3a6 6 0 110 12v2.625c-3.75-1.5-9-3.75-9-8.625a6 6 0 016-6zM12 15.5h1.5a4.501 4.501 0 001.722-8.657A4.5 4.5 0 0013.5 6.5h-3A4.5 4.5 0 006 11c0 2.707 1.846 4.475 6 6.36V15.5z"></path></svg>
                                        <span className="reactions-label hidden m:inline-block">&nbsp;Reply</span>
                                    </div> */}
                                </div>
                            </div>

                            <div className="comment">
                                {/* Comentario de un suscriptor 1 */}
                                <div className="subhead d-flex my-3 justify-content-center">
                                    <div className="imagen">
                                        <img src="https://images.generated.photos/6JWVKVEhWTTb1am2Pzdjr4z-B8Bfeh-ubWSIhB1kPzs/rs:fit:512:512/wm:0.95:sowe:18:18:0.33/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy92M18w/NTE0MTQwLmpwZw.jpg"
                                            className=" align-self-center border-light border border-1 rounded-circle avatar2"
                                            alt="..." />
                                    </div>
                                    <div
                                        className="opinion d-flex flex-wrap flex-column border border-secondary comment1 rounded-3">
                                        <div className="container d-flex align-items-center justify-content-start">
                                            <a href="#"><span className="badge bg-light text-dark names">Robert Smith</span></a>
                                            <p>.</p>
                                            <p className="dates mx-2">Sep 20</p>
                                        </div>
                                        {/* <div className="actions">
                                            <a href="#">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" aria-hidden="true" className="dropdown-icon crayons-icon"><title>More...</title><path fill-rule="evenodd" clip-rule="evenodd" d="M7 12a2 2 0 11-4 0 2 2 0 014 0zm7 0a2 2 0 11-4 0 2 2 0 014 0zm5 2a2 2 0 100-4 2 2 0 000 4z"></path></svg>
                                            </a>
                                        </div> */}
                                        <p>Interesting idea and much props for building a site! However, there are a few
                                            things that should be pointed out.

                                            First, looking at the site's github repo, the project source is publicly visible
                                            but it isn't open source. To be open source a project must have a permissible
                                            license, such as MIT, GPL, Apache, etc. Without a license, the project is
                                            proprietary and using the source is technically copyright infringement.

                                            Additionally, the site's landing page doesn't have links to any of the
                                            information a cautious user wants to see before signing up, such as Terms of
                                            Use, Privacy Policy, and an About page. Every website should have these three
                                            pages available from every other page of the site and especially from the
                                            landing page.
                                        </p>
                                    </div>

                                </div>
                                {/* Respuesta del autor */}
                                <div className="subhead d-flex my-3 me-5 justify-content-end">
                                    <div className="imagen">
                                        <img src="https://res.cloudinary.com/practicaldev/image/fetch/s--Qv9nP2Ud--/c_fill,f_auto,fl_progressive,h_90,q_auto,w_90/https://dev-to-uploads.s3.amazonaws.com/uploads/user/profile_image/592016/ac52b742-ede9-4335-9692-80b246d53ce7.png" className="card-img-top rounded-circle avatar2" alt="..." />
                                    </div>
                                    <div
                                        className="opinion d-flex flex-wrap flex-column border border-secondary comment2 rounded-3">
                                        <div className="container d-flex align-items-center justify-content-start">
                                            <a href="#"><span className="badge bg-light text-dark names">Maria Simon</span></a>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                                viewBox="0 0 24 24" role="img"
                                                aria-labelledby="aez12f7f6o87u158kqzikdu5aw94pdym" className="crayons-icon">
                                                <title id="aez12f7f6o87u158kqzikdu5aw94pdym">Author</title>
                                                <path
                                                    d="M12 8.25a6 6 0 110 12 6 6 0 010-12zm0 2.625l-.992 2.01-2.218.322 1.605 1.564-.379 2.21L12 15.937l1.984 1.043-.379-2.209 1.605-1.564-2.218-.323L12 10.875zm.75-6.376l3.75.001v2.25l-1.022.854a7.45 7.45 0 00-2.728-.817V4.5zm-1.5 0v2.288a7.451 7.451 0 00-2.727.816L7.5 6.75V4.5h3.75z">
                                                </path>
                                            </svg>
                                            <p>.</p>
                                            <p className="dates mx-2">Sep 20</p>
                                        </div>
                                        <p>
                                            Hi Jay, these are some extremely valid points. Thanks for bringing them up. It
                                            must've slipped through my mind but I'll get started right away. Appreciate you
                                            taking your time for letting me know!
                                        </p>
                                    </div>
                                        {/* Reacciones */}
                                    {/* <div className="reactions">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" role="img" aria-labelledby="anfh9sj69b56poy72cbv6dnth88xucav" className="crayons-icon reaction-icon not-reacted"><title id="anfh9sj69b56poy72cbv6dnth88xucav">Like comment:</title><path d="M18.884 12.595l.01.011L12 19.5l-6.894-6.894.01-.01A4.875 4.875 0 0112 5.73a4.875 4.875 0 016.884 6.865zM6.431 7.037a3.375 3.375 0 000 4.773L12 17.38l5.569-5.569a3.375 3.375 0 10-4.773-4.773L9.613 10.22l-1.06-1.062 2.371-2.372a3.375 3.375 0 00-4.492.25v.001z"></path></svg>
                                        <span className="reactions-count" id="reactions-count-778262">6</span>
                                        <span className="reactions-label hidden m:inline-block">&nbsp;likes</span>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" role="img" aria-labelledby="a9kth866xe7e89zxghp5q9kuhzyhmjt7" className="crayons-icon reaction-icon not-reacted"><title id="a9kth866xe7e89zxghp5q9kuhzyhmjt7">Comment button</title><path d="M10.5 5h3a6 6 0 110 12v2.625c-3.75-1.5-9-3.75-9-8.625a6 6 0 016-6zM12 15.5h1.5a4.501 4.501 0 001.722-8.657A4.5 4.5 0 0013.5 6.5h-3A4.5 4.5 0 006 11c0 2.707 1.846 4.475 6 6.36V15.5z"></path></svg>
                                        <span className="reactions-label hidden m:inline-block">&nbsp;Reply</span>
                                    </div> */}
                                </div>
                            </div>

                            <div className="comment">
                                {/* Comentario de un suscriptor 1 */}
                                <div className="subhead d-flex my-3 justify-content-center">
                                    <div className="imagen">
                                        <img src="https://images.generated.photos/yyhbdyOfCG4mwh3WxPoQ4jwCuNOukND1BrEi6MpG1MY/rs:fit:512:512/wm:0.95:sowe:18:18:0.33/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy92M18w/OTcxMjk4LmpwZw.jpg"
                                            className=" align-self-center border-light border border-1 rounded-circle avatar2"
                                            alt="..."/>
                                    </div>
                                    <div
                                        className="opinion d-flex flex-wrap flex-column border border-secondary comment1 rounded-3">
                                        <div className="container d-flex align-items-center justify-content-start">
                                            <a href="#"><span className="badge bg-light text-dark names">Amanda Johns</span></a>
                                            <p>.</p>
                                            <p className="dates mx-2">Sep 20</p>
                                        </div>
                                        {/* <div className="actions">
                                            <a href="#">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" aria-hidden="true" className="dropdown-icon crayons-icon"><title>More...</title><path fill-rule="evenodd" clip-rule="evenodd" d="M7 12a2 2 0 11-4 0 2 2 0 014 0zm7 0a2 2 0 11-4 0 2 2 0 014 0zm5 2a2 2 0 100-4 2 2 0 000 4z"></path></svg>
                                            </a>
                                        </div> */}
                                        <p>Interesting idea and much props for building a site! However, there are a few
                                            things that should be pointed out.

                                            First, looking at the site's github repo, the project source is publicly visible
                                            but it isn't open source. To be open source a project must have a permissible
                                            license, such as MIT, GPL, Apache, etc. Without a license, the project is
                                            proprietary and using the source is technically copyright infringement.

                                            Additionally, the site's landing page doesn't have links to any of the
                                            information a cautious user wants to see before signing up, such as Terms of
                                            Use, Privacy Policy, and an About page. Every website should have these three
                                            pages available from every other page of the site and especially from the
                                            landing page.
                                        </p>
                                    </div>

                                </div>
                                {/* Respuesta del autor */}
                                <div className="subhead d-flex my-3 me-5 justify-content-end">
                                    <div className="imagen">
                                        <img src="https://res.cloudinary.com/practicaldev/image/fetch/s--Qv9nP2Ud--/c_fill,f_auto,fl_progressive,h_90,q_auto,w_90/https://dev-to-uploads.s3.amazonaws.com/uploads/user/profile_image/592016/ac52b742-ede9-4335-9692-80b246d53ce7.png" className="card-img-top rounded-circle avatar2" alt="..." />
                                    </div>
                                    <div
                                        className="opinion d-flex flex-wrap flex-column border border-secondary comment2 rounded-3">
                                        <div className="container d-flex align-items-center justify-content-start">
                                            <a href="#"><span className="badge bg-light text-dark names">Maria Simon</span></a>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                                viewBox="0 0 24 24" role="img"
                                                aria-labelledby="aez12f7f6o87u158kqzikdu5aw94pdym" className="crayons-icon">
                                                <title id="aez12f7f6o87u158kqzikdu5aw94pdym">Author</title>
                                                <path
                                                    d="M12 8.25a6 6 0 110 12 6 6 0 010-12zm0 2.625l-.992 2.01-2.218.322 1.605 1.564-.379 2.21L12 15.937l1.984 1.043-.379-2.209 1.605-1.564-2.218-.323L12 10.875zm.75-6.376l3.75.001v2.25l-1.022.854a7.45 7.45 0 00-2.728-.817V4.5zm-1.5 0v2.288a7.451 7.451 0 00-2.727.816L7.5 6.75V4.5h3.75z">
                                                </path>
                                            </svg>
                                            <p>.</p>
                                            <p className="dates mx-2">Sep 20</p>
                                        </div>
                                        <p>
                                            Hi Jay, these are some extremely valid points. Thanks for bringing them up. It
                                            must've slipped through my mind but I'll get started right away. Appreciate you
                                            taking your time for letting me know!
                                        </p>
                                    </div>
                                    {/* Reacciones */}
                                    {/* <div className="reactions">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" role="img" aria-labelledby="anfh9sj69b56poy72cbv6dnth88xucav" className="crayons-icon reaction-icon not-reacted"><title id="anfh9sj69b56poy72cbv6dnth88xucav">Like comment:</title><path d="M18.884 12.595l.01.011L12 19.5l-6.894-6.894.01-.01A4.875 4.875 0 0112 5.73a4.875 4.875 0 016.884 6.865zM6.431 7.037a3.375 3.375 0 000 4.773L12 17.38l5.569-5.569a3.375 3.375 0 10-4.773-4.773L9.613 10.22l-1.06-1.062 2.371-2.372a3.375 3.375 0 00-4.492.25v.001z"></path></svg>
                                        <span className="reactions-count" id="reactions-count-778262">6</span>
                                        <span className="reactions-label hidden m:inline-block">&nbsp;likes</span>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" role="img" aria-labelledby="a9kth866xe7e89zxghp5q9kuhzyhmjt7" className="crayons-icon reaction-icon not-reacted"><title id="a9kth866xe7e89zxghp5q9kuhzyhmjt7">Comment button</title><path d="M10.5 5h3a6 6 0 110 12v2.625c-3.75-1.5-9-3.75-9-8.625a6 6 0 016-6zM12 15.5h1.5a4.501 4.501 0 001.722-8.657A4.5 4.5 0 0013.5 6.5h-3A4.5 4.5 0 006 11c0 2.707 1.846 4.475 6 6.36V15.5z"></path></svg>
                                        <span className="reactions-label hidden m:inline-block">&nbsp;Reply</span>
                                    </div> */}
                                </div>
                            </div>

                            <div className="comment">
                                {/* Comentario de un suscriptor 1 */}
                                <div className="subhead d-flex my-3 justify-content-center">
                                    <div className="imagen">
                                        <img src="https://images.generated.photos/2VpyIcPDypHCDv6URqLmuaS0ZKzcHLDNb0wd8tpG9Fc/rs:fit:512:512/wm:0.95:sowe:18:18:0.33/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy92M18w/NDQ2Mjc1LmpwZw.jpg"
                                            className=" align-self-center border-light border border-1 rounded-circle avatar2"
                                            alt="..."/>
                                    </div>
                                    <div
                                        className="opinion d-flex flex-wrap flex-column border border-secondary comment1 rounded-3">
                                        <div className="container d-flex align-items-center justify-content-start">
                                            <a href="#"><span className="badge bg-light text-dark names">Simon Thersus</span></a>
                                            <p>.</p>
                                            <p className="dates mx-2">Sep 20</p>
                                        </div>
                                        {/* <div className="actions">
                                            <a href="#">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" aria-hidden="true" className="dropdown-icon crayons-icon"><title>More...</title><path fill-rule="evenodd" clip-rule="evenodd" d="M7 12a2 2 0 11-4 0 2 2 0 014 0zm7 0a2 2 0 11-4 0 2 2 0 014 0zm5 2a2 2 0 100-4 2 2 0 000 4z"></path></svg>
                                            </a>
                                        </div> */}
                                        <p>Interesting idea and much props for building a site! However, there are a few
                                            things that should be pointed out.

                                            First, looking at the site's github repo, the project source is publicly visible
                                            but it isn't open source. To be open source a project must have a permissible
                                            license, such as MIT, GPL, Apache, etc. Without a license, the project is
                                            proprietary and using the source is technically copyright infringement.

                                            Additionally, the site's landing page doesn't have links to any of the
                                            information a cautious user wants to see before signing up, such as Terms of
                                            Use, Privacy Policy, and an About page. Every website should have these three
                                            pages available from every other page of the site and especially from the
                                            landing page.
                                        </p>
                                    </div>

                                </div>
                                {/* Respuesta del autor */}
                                <div className="subhead d-flex my-3 me-5 justify-content-end">
                                    <div className="imagen">
                                        <img src="https://res.cloudinary.com/practicaldev/image/fetch/s--Qv9nP2Ud--/c_fill,f_auto,fl_progressive,h_90,q_auto,w_90/https://dev-to-uploads.s3.amazonaws.com/uploads/user/profile_image/592016/ac52b742-ede9-4335-9692-80b246d53ce7.png" className="card-img-top rounded-circle avatar2" alt="..." />
                                    </div>
                                    <div
                                        className="opinion d-flex flex-wrap flex-column border border-secondary comment2 rounded-3">
                                        <div className="container d-flex align-items-center justify-content-start">
                                            <a href="#"><span className="badge bg-light text-dark names">Maria Simon</span></a>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                                viewBox="0 0 24 24" role="img"
                                                aria-labelledby="aez12f7f6o87u158kqzikdu5aw94pdym" className="crayons-icon">
                                                <title id="aez12f7f6o87u158kqzikdu5aw94pdym">Author</title>
                                                <path
                                                    d="M12 8.25a6 6 0 110 12 6 6 0 010-12zm0 2.625l-.992 2.01-2.218.322 1.605 1.564-.379 2.21L12 15.937l1.984 1.043-.379-2.209 1.605-1.564-2.218-.323L12 10.875zm.75-6.376l3.75.001v2.25l-1.022.854a7.45 7.45 0 00-2.728-.817V4.5zm-1.5 0v2.288a7.451 7.451 0 00-2.727.816L7.5 6.75V4.5h3.75z">
                                                </path>
                                            </svg>
                                            <p>.</p>
                                            <p className="dates mx-2">Sep 20</p>
                                        </div>
                                        <p>
                                            Hi Jay, these are some extremely valid points. Thanks for bringing them up. It
                                            must've slipped through my mind but I'll get started right away. Appreciate you
                                            taking your time for letting me know!
                                        </p>
                                    </div>
                                    {/* Reacciones */}
                                    {/* <div className="reactions">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" role="img" aria-labelledby="anfh9sj69b56poy72cbv6dnth88xucav" className="crayons-icon reaction-icon not-reacted"><title id="anfh9sj69b56poy72cbv6dnth88xucav">Like comment:</title><path d="M18.884 12.595l.01.011L12 19.5l-6.894-6.894.01-.01A4.875 4.875 0 0112 5.73a4.875 4.875 0 016.884 6.865zM6.431 7.037a3.375 3.375 0 000 4.773L12 17.38l5.569-5.569a3.375 3.375 0 10-4.773-4.773L9.613 10.22l-1.06-1.062 2.371-2.372a3.375 3.375 0 00-4.492.25v.001z"></path></svg>
                                        <span className="reactions-count" id="reactions-count-778262">6</span>
                                        <span className="reactions-label hidden m:inline-block">&nbsp;likes</span>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" role="img" aria-labelledby="a9kth866xe7e89zxghp5q9kuhzyhmjt7" className="crayons-icon reaction-icon not-reacted"><title id="a9kth866xe7e89zxghp5q9kuhzyhmjt7">Comment button</title><path d="M10.5 5h3a6 6 0 110 12v2.625c-3.75-1.5-9-3.75-9-8.625a6 6 0 016-6zM12 15.5h1.5a4.501 4.501 0 001.722-8.657A4.5 4.5 0 0013.5 6.5h-3A4.5 4.5 0 006 11c0 2.707 1.846 4.475 6 6.36V15.5z"></path></svg>
                                        <span className="reactions-label hidden m:inline-block">&nbsp;Reply</span>
                                    </div> */}
                                </div>
                            </div>

                            <div className="x_card border border-secondary rounded-3 mb-3">
                                <p className="lastSection">Read next</p>
                                <ul className="list-group list-group-flush">
                                    <li className="group d-flex my-3">
                                        <div className="imagen">
                                            <img src="https://images.generated.photos/d8QMHv_DiHRwe_TcWoqgs6g3VehOJiTo8qgpTqSJh0k/rs:fit:512:512/wm:0.95:sowe:18:18:0.33/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy92M18w/MzIwOTE4LmpwZw.jpg" className="card-img-top rounded-circle avatar2 me-3"
                                                alt="..." />
                                        </div>
                                        <div className="next d-flex flex-column">
                                            <h3 className="lastSectionTitle"><a href="#">How to build a React FAQ accordion</a>
                                            </h3>
                                            <h3 className="lastSectionUser">cesaruseche18 - Sep 16</h3>
                                        </div>
                                    </li>
                                    <li className="group d-flex my-3">
                                        <div className="imagen">
                                            <img src="https://images.generated.photos/4XVnD62caNtW5AFWSkhIaXzfexEUxnw0TQ0cIfo3TNM/rs:fit:512:512/wm:0.95:sowe:18:18:0.33/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy92M18w/NTc4NjgwLmpwZw.jpg" className="card-img-top rounded-circle avatar2 me-3"
                                                alt="..." />
                                        </div>
                                        <div className="next d-flex flex-column">
                                            <h3 className="lastSectionTitle"><a href="#">UI Dev Newsletter #73</a></h3>
                                            <h3 className="lastSectionUser">Silverstar Bistrovic- Sep 8</h3>
                                        </div>
                                    </li>
                                    <li className="group d-flex my-3">
                                        <div className="imagen">
                                            <img src="https://images.generated.photos/guqIF1UcisisoNytydmhQejd5X9aCOKRilsi3IS7330/rs:fit:512:512/wm:0.95:sowe:18:18:0.33/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy92M18w/MjY1MDY3LmpwZw.jpg" className="card-img-top rounded-circle avatar2 me-3"
                                                alt="..." />
                                        </div>
                                        <div className="next d-flex flex-column">
                                            <h3 className="lastSectionTitle"><a href="#">Entendendo o Node.js e seu
                                                    funcionamiento</a></h3>
                                            <h3 className="lastSectionUser">Leonardo de Sá - Sep 17</h3>
                                        </div>
                                    </li>
                                    <li className="group d-flex my-3">
                                        <div className="imagen">
                                            <img src="https://images.generated.photos/6uVuemEdeL-ByaIR504IuRVKX0bULoIGhMQrl7unbtA/rs:fit:512:512/wm:0.95:sowe:18:18:0.33/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy92M18w/MTIyNTcyLmpwZw.jpg" className="card-img-top rounded-circle avatar2 me-3"
                                                alt="..." />
                                        </div>
                                        <div className="next d-flex flex-column">
                                            <h3 className="lastSectionTitle"><a href="#">What is CSS in JS?</a></h3>
                                            <h3 className="lastSectionUser">Anjan Shomooder - Sep 17</h3>
                                        </div>
                                    </li>

                                </ul>

                            </div>

                        </div>




                    </div>


                    <div className="side_right col-lg-3">
                        <div className="p_card rounded-3 mb-3">
                            <ul className="list-group list-group-flush">
                                <li className="list-group-item">
                                    <div>
                                        <img src="https://res.cloudinary.com/practicaldev/image/fetch/s--Qv9nP2Ud--/c_fill,f_auto,fl_progressive,h_90,q_auto,w_90/https://dev-to-uploads.s3.amazonaws.com/uploads/user/profile_image/592016/ac52b742-ede9-4335-9692-80b246d53ce7.png"
                                            className="border border-light border border-1 rounded-circle avatar" alt="..."/>
                                        <a href="#"><span className="names_r pb-3">Maria Simon</span></a>
                                    </div>
                                    <div className="boton-derecha py-3">
                                        <button type="button" className="btn btn-primary btn-r">Follow</button>
                                    </div>
                                    <div className="card_author">
                                        <p>An avid MERN stack developer, building websites that you'd love using.</p>
                                        <p className="negrita">LOCATION</p>
                                        <p>Mumbai</p>
                                        <p className="negrita">EDUCATION</p>
                                        <p>Bachelor of Engineering</p>
                                        <p className="negrita">WORK</p>
                                        <p>Student & Freelancer</p>
                                        <p className="negrita">JOINED</p>
                                        <p>6 de oct. 2019</p>
                                    </div>
                                </li>
                            </ul>
                        </div>
                        <div className="p_card2 rounded-3">
                            <ul className="list-group list-group-flush">
                                <li className="list-group-item names_r">More from <a href="#">Maria Simon</a></li>
                                <li className="list-group-item card_author py-3">
                                    <div className="tecs pb-3">
                                        <a className="more_title" href="#">I Built a VSCode Inspired Developer Portfolio</a>
                                    </div>
                                    <div>
                                        <a className="more_tags" href="#">#showdev</a>
                                        <a className="more_tags" href="#">#webdev</a>
                                        <a className="more_tags" href="#">#react</a>
                                        <a className="more_tags" href="#">#nextjs</a>
                                    </div>
                                </li>

                                <li className="list-group-item card_author py-3">
                                    <div className="tecs pb-3">
                                        <a className="more_title" href="#">Build a Crypto Discord Bot using Discord.js</a>
                                    </div>
                                    <div>
                                        <a className="more_tags" href="#">#tutorial</a>
                                        <a className="more_tags" href="#">#javascript</a>
                                        <a className="more_tags" href="#">#programming</a>
                                    </div>
                                </li>

                                <li className="list-group-item card_author py-3">
                                    <div className="tecs pb-3">
                                        <a className="more_title" href="#">You Need to Try These 10 NPM Packages as a React
                                            Developer</a>
                                    </div>
                                    <div>
                                        <a className="more_tags" href="#">#react</a>
                                        <a className="more_tags" href="#">#javascript</a>
                                        <a className="more_tags" href="#">#webdev</a>
                                        <a className="more_tags" href="#">#beginners</a>
                                    </div>
                                </li>

                            </ul>
                        </div>
                    </div>
                    </div>
                </div>
            </div>
            </main>


        <footer className="container-footer">
         <div className="container-fluid c-footer">
            <div className="row justify-content-center">
                <div className="col-lg-5">
                    <p className="footer-description">
                        <a href="#" className="link-footer">
                            DEV Community
                        </a>
                        – A constructive and inclusive social network for
                        software developers. With you every step of your
                        journey.
                    </p>
                </div>
                <div className="row justify-content-center">
                    <div className="col-lg-5 col-md-8 col-sm-11">
                        <p id="p_footer">
                            Built on
                            <a href="#" className="link-footer">Forem</a>
                            — the
                            <a href="#" className="link-footer">open source</a>
                            software that powers
                            <a href="#" className="link-footer">DEV</a>
                            and other inclusive communities.
                        </p>
                        <p>Made with love and
                            <a href="#" className="link-footer">Ruby on Rails</a>
                            . DEV Community
                            <span title="copyright">©</span>
                            2016 - 2021
                        </p>
                    </div>
                </div>
                <div className="row justify-content-center">
                    <div className="col-lg-5 col-md-8 col-sm-11">
                        <a href="https://www.forem.com" target="_blank" rel="noopener">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                fill="none" role="img" aria-labelledby="a90ameo99abv4mvu74q8kbippd0v8ehc"
                                className="crayons-icon crayons-icon--default">
                                <title id="a90ameo99abv4mvu74q8kbippd0v8ehc">Forem logo</title>
                                <g clipPath="url(#clip0)" fill="#1AB3A6">
                                    <path
                                        d="M4.603 1.438a8.056 8.056 0 017.643 5.478 8.543 8.543 0 00-3.023 5.968H8.054C3.606 12.884 0 9.296 0 4.87V1.468a.03.03 0 01.03-.03h4.573zM23.97 6.515a.03.03 0 01.03.03v2.833c0 4.11-3.354 7.442-7.491 7.442h-2.881v5.726h-2.305V14.53l.022-1.145c.294-3.843 3.526-6.87 7.469-6.87h5.155z">
                                    </path>
                                </g>
                                <defs>
                                    <clipPath id="clip0">
                                        <path fill="#fff" d="M0 0h24v24H0z"></path>
                                    </clipPath>
                                </defs>
                            </svg>
                        </a>
                    </div>
                </div>
            </div>
         </div>
        </footer>

    </>
    );
};

export default DetailPost;