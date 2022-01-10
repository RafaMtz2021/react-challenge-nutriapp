import "./DetailPost.css";
import React, {useState, useEffect} from "react";
import Cards from "../../components/Cards";

function DetailPost(){

    return(
        <>
            <header>
            <div class="container-fluid c-fluid">
                <nav class="navbar navbar-expand-lg navbar_bar">
                    <div class="container container_bar">
                        <a class="navbar-logo" href="../index.html">
                            <svg width="50" height="40" viewBox="0 0 50 40" fill="#fff" xmlns="http://www.w3.org/2000/svg">
                                <rect width="50" height="40" rx="3" style="fill: #000;"></rect>
                                <path
                                    d="M19.099 23.508c0 1.31-.423 2.388-1.27 3.234-.838.839-1.942 1.258-3.312 1.258h-4.403V12.277h4.492c1.31 0 2.385.423 3.224 1.27.846.838 1.269 1.912 1.269 3.223v6.738zm-2.808 0V16.77c0-.562-.187-.981-.562-1.258-.374-.285-.748-.427-1.122-.427h-1.685v10.107h1.684c.375 0 .75-.138 1.123-.415.375-.285.562-.708.562-1.27zM28.185 28h-5.896c-.562 0-1.03-.187-1.404-.561-.375-.375-.562-.843-.562-1.404V14.243c0-.562.187-1.03.562-1.404.374-.375.842-.562 1.404-.562h5.896v2.808H23.13v3.65h3.088v2.808h-3.088v3.65h5.054V28zm7.12 0c-.936 0-1.684-.655-2.246-1.965l-3.65-13.758h3.089l2.807 10.804 2.808-10.804H41.2l-3.65 13.758C36.99 27.345 36.241 28 35.305 28z"
                                    style="fill: var(--base-inverted);"></path>
                            </svg>
                        </a>
                        <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
                            data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                            aria-expanded="false" aria-label="Toggle navigation">
                            <span class="navbar-toggler-icon"></span>
                        </button>
                        <form class="d-flex d-flex_bar">
                            <input class="form-control me-2 form-control_bar" type="search" placeholder="Search..."
                                aria-label="Search">
                            <button class="btn btn-outline-success btn-sucess" type="submit">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                    class="crayons-icon">
                                    <path
                                        d="M18.031 16.617l4.283 4.282-1.415 1.415-4.282-4.283A8.96 8.96 0 0111 20c-4.968 0-9-4.032-9-9s4.032-9 9-9 9 4.032 9 9a8.96 8.96 0 01-1.969 5.617zm-2.006-.742A6.977 6.977 0 0018 11c0-3.868-3.133-7-7-7-3.868 0-7 3.132-7 7 0 3.867 3.132 7 7 7a6.977 6.977 0 004.875-1.975l.15-.15z">
                                    </path>
                                </svg>
                            </button>
                        </form>
                        <div class="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul class="navbar-nav mb-2 mb-lg-0 navbar-nav_bar">
                                <li class="nav-item">
                                    <a class="nav-link active create_post" aria-current="page" href="#">Create Post</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link active action" aria-current="page" href="#">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                            role="img" aria-labelledby="a41cvmxi3r1lero45hkubzuujy4jlv0j"
                                            class="crayons-icon">
                                            <title id="a41cvmxi3r1lero45hkubzuujy4jlv0j">Connect</title>
                                            <path
                                                d="M2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10H2l2.929-2.929A9.969 9.969 0 012 12zm4.828 8H12a8 8 0 10-8-8c0 2.152.851 4.165 2.343 5.657l1.414 1.414-.929.929zM8 13h8a4 4 0 11-8 0z">
                                            </path>
                                        </svg>
                                    </a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link action" href="./notification.html">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                            role="img" aria-labelledby="a6d4t764l2b3c64midpz699jmmh662u0"
                                            class="crayons-icon">
                                            <title id="a6d4t764l2b3c64midpz699jmmh662u0">Notifications</title>
                                            <path
                                                d="M20 17h2v2H2v-2h2v-7a8 8 0 1116 0v7zm-2 0v-7a6 6 0 10-12 0v7h12zm-9 4h6v2H9v-2z">
                                            </path>
                                        </svg>
                                        <span class="indicator" id="notifications-number">1</span>
                                    </a>
                                </li>
                                <li class="nav-item dropdown">
                                    <a class="nav-link" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown"
                                        aria-expanded="false">
                                        <span class="avatar_bar">
                                            <img class="avatar_image" alt="" id="nav-profile-image" src="/img/avatar.png">
                                        </span>
                                    </a>
                                    <ul class="dropdown-menu menu-user" aria-labelledby="navbarDropdown">
                                        <li><a class="dropdown-item" href="#">Koder</a></li>
                                        <li><a class="dropdown-item" href="#">@koder</a></li>
                                        <li>
                                            <hr class="dropdown-divider">
                                        </li>
                                        <li><a class="dropdown-item" href="#">Dashboard</a></li>
                                        <li><a class="dropdown-item" href="#">Create Post</a></li>
                                        <li><a class="dropdown-item" href="#">Reading list</a></li>
                                        <li><a class="dropdown-item" href="#">Settings</a></li>
                                        <hr class="dropdown-divider">
                                        <li><a class="dropdown-item" href="#">Sign Out</a></li>
                                    </ul>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </div>
        </header>   
        
        <main>
        <div class="container">
            <div class="row d-flex justify-content-center">
                <div class="sideIzquierda col-1 mt-5">
                    <div class="columna">
                        <!-- reacción -->
                        <div class="left-item pb-3">
                            <a class="left_icons" href="#">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                    aria-hidden="true" class="crayons-icon">
                                    <path
                                        d="M21.179 12.794l.013.014L12 22l-9.192-9.192.013-.014A6.5 6.5 0 0112 3.64a6.5 6.5 0 019.179 9.154zM4.575 5.383a4.5 4.5 0 000 6.364L12 19.172l7.425-7.425a4.5 4.5 0 10-6.364-6.364L8.818 9.626 7.404 8.21l3.162-3.162a4.5 4.5 0 00-5.99.334l-.001.001z">
                                    </path>
                                </svg>
                            </a>
                            <p class="numbers">34</p>
                        </div>
                        <!-- unicornio -->
                        <div class="left-item pb-3">
                            <a class="left_icons" href="#">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" aria-hidden="true"
                                    class="crayons-icon">
                                    <path
                                        d="M5.645 8.013c.013-.265-.261-.323-.4-.183-1.16 1.17-1.822 3.865-.344 7.32.294.961 1.938 3.19.84 6.131l-.003.006c-.094.255.206.404.366.263 1.395-1.226 1.933-3.593 1.1-6.375-.488-1.657-1.955-4.226-1.559-7.162zm-3.22 2.738c.05-.137-.124-.417-.326-.225-.939.893-1.316 2.863-.976 4.605.547 2.878 2.374 3.526 2.066 6.629-.028.102.176.38.348.154 1.546-2.033.409-4.453-.241-6.006-1.005-2.386-1.087-4.118-.871-5.157z"
                                        fill="#08090A"></path>
                                    <path fill-rule="evenodd" clip-rule="evenodd"
                                        d="M13.622 7.223l8.579-3.68c.598-.256 1.087.547.6.985l-6.618 5.941c.881 2.043 2.738 6.34 2.931 6.775 1.348 3.031-2.055 4.918-3.807 3.583a7.027 7.027 0 01-.623-.574c-.974-.965-2.419-2.398-5.207-1.877.284-2.115-.313-3.737-.883-5.288-.38-1.032-.747-2.032-.837-3.124-.346-3.329 3.763-8.23 4.696-7.953.386.115.326 1.229.266 2.319-.051.948-.102 1.88.143 2.12.145.142.428.43.76.773zM11.5 16.5l2.5.5 2.5 2 1-.5-2-4.5-1.5-4-1.5-1-1-1-1-1.5L10 8l-.5 1.5 1 2.5 1 4.5z">
                                    </path>
                                </svg>
                            </a>
                            <p class="numbers">9</p>
                        </div>
                        <!-- guardar -->
                        <div class="left-item pb-3">
                            <a class="left_icons" href="#">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                    aria-hidden="true" class="crayons-icon">
                                    <path
                                        d="M5 2h14a1 1 0 011 1v19.143a.5.5 0 01-.766.424L12 18.03l-7.234 4.536A.5.5 0 014 22.143V3a1 1 0 011-1zm13 2H6v15.432l6-3.761 6 3.761V4z">
                                    </path>
                                </svg>
                            </a>
                            <p class="numbers">33</p>
                        </div>
                        <!-- puntos -->
                        <div class="left-item pb-3">
                            <a class="left_icons" href="#">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" aria-hidden="true"
                                    class="dropdown-icon crayons-icon">
                                    <title>More...</title>
                                    <path fill-rule="evenodd" clip-rule="evenodd"
                                        d="M7 12a2 2 0 11-4 0 2 2 0 014 0zm7 0a2 2 0 11-4 0 2 2 0 014 0zm5 2a2 2 0 100-4 2 2 0 000 4z">
                                    </path>
                                </svg>
                            </a>
                        </div>
                    </div>
                </div>
                <div class="center-section col-lg-8 col-md-10 bg-white">
                    <div class="post_card rounded-3">
                        <img src="#" class="card-img-top" alt="...">
                        <div class="card-body">
                            //TITLE GOES IN THE NEXT LINE
                            <h1 class="fs-3xl m:fs-4xl l:fs-5xl fw-bold s:fw-heavy lh-tight mb-4 long"></h1>
                            // NEXT SPACE IS FOR TAGS
                            <div class="badges mt-2 mb-4">
                                <a href="#"><span class="badge bg-dark">#showdev</span></a>
                                <a href="#"><span class="badge bg-primary">#nextjs</span></a>
                                <a href="#"><span class="badge bg-secondary">#react</span></a>
                                <a href="#"><span class="badge bg-warning text-dark">#javascript</span></a>
                            </div>

                            <div class="subhead d-flex align-items-center mb-3 flex-wrap">
                                // POST ACTOR PICTURE IN THE NEXT LINE
                                <img src= "#"
                                    class="border border-light border border-1 rounded-circle avatar" alt="...">
                                
                                // AUTHOR NAME GOES IN THE NEXT LINE
                                <a href="#"><span class="badge bg-light text-dark names">Nitin Ranganath</span></a>

                                // DATE AND READ TIME
                                <p class="dates">20 sep. - 2 min read</p>
                            </div>
                            
                            //POST CONTENT IN THE NEXT PARAGRAPH
                            <p></p>

                            // NEXT COMMENTED LINES ARE OF CONTENT OF THE POST
                            {/* <h2>Introducing Driwwwle</h2>
                            <div class="ratio ratio-16x9">
                                <iframe src="https://www.youtube.com/embed/WVLHpSwEmYE" title="YouTube video"
                                    allowfullscreen></iframe>
                            </div>
                            <p>Driwwwle is a social network for developers to showcase their projects or products with
                                other developers across the globe. Just like any other social network out there, you can
                                like posts, save them privately, leave a comment and follow your favorite developers to
                                build your own personal feed.</p>
                            <p>Some of the other features include:</p>
                            <ul>
                                <li>⚡ Server-side rendering with Next.js</li>
                                <li>🍪 Cookie-based authorization with JSON web tokens.</li>
                                <li>📜 Infinite scrolling feed with React Query.</li>
                                <li>🖼️ Cloud image upload with Cloudinary.</li>
                                <li>❤️ Like, save, and comment on posts.</li>
                                <li>💬 Realtime chat with Socket.io.</li>
                                <li>🤝 Follow developers and build personal feed.</li>
                            </ul>
                            <p>and a lot more..</p>
                            <p>Sounds interesting? I would love for you to create an account on Driwwwle and post your
                                awesome creations.</p>
                            <p>Did I mention that Driwwwle is also open-source? You can browse through the code on this
                                GitHub repo:</p>
                        </div> */}


                        {/* <div class="post_card">
                            <ul class="list-group list-group-flush border border-secondary shadow mb-3">
                                <li class="list-group-item">
                                    <h2 class="titles"><img class="avatar"
                                            src="https://res.cloudinary.com/practicaldev/image/fetch/s--i3JOwpme--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880/https://dev.to/assets/github-logo-ba8488d21cd8ee1fee097b8410db9deaa41d0ca30b004c0c63de0a479114156f.svg"
                                            alt="GitHub logo" loading="lazy">
                                        <a href="#">itsnitinr</a> / <a href="#">driwwwle-v2</a>
                                    </h2>
                                    <h3 class="subcontent">
                                        The social network for developers. Discover creative websites and build a
                                        community.
                                    </h3>
                                </li>
                                <li class="list-group-item d-flex justify-content-center">
                                    <div class="driwwwle">
                                        <a href="#" class=""><img src="../img/at.png"
                                                class="card-img-top pinkImage ms-4" alt="..."></a>
                                        <p class="lastSection">Driwwwle</p>
                                    </div>
                                </li>
                                <li class="list-group-item d-flex flex-column align-items-center">
                                    <h5 align="center">The Social Network for Developers</h5>
                                    <a target="_blank" rel="noopener noreferrer" href="#"><img
                                            src="https://camo.githubusercontent.com/b350ea89143d830fd3bec1143820119897deec9fb163e911f6a547781cfcdbc0/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f2d4e6578742e6a732d3030303030303f7374796c653d666c61742d737175617265266c6f676f3d6e6578742e6a73"
                                            data-canonical-src="https://img.shields.io/badge/-Next.js-000000?style=flat-square&amp;logo=next.js"
                                            style="max-width: 100%;"></a><a target="_blank" rel="noopener noreferrer"
                                        href="#"><img
                                            src="https://camo.githubusercontent.com/994f4f1f9cf771cf63f7117720af5cebe66cf7d9851abfc05ad402fad2f9ee74/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f2d5461696c77696e644353532d3338423241433f7374796c653d666c61742d737175617265266c6f676f3d7461696c77696e642d637373266c6f676f436f6c6f723d7768697465"
                                            data-canonical-src="https://img.shields.io/badge/-TailwindCSS-38B2AC?style=flat-square&amp;logo=tailwind-css&amp;logoColor=white"
                                            style="max-width: 100%;"></a><a target="_blank" rel="noopener noreferrer"
                                        href="https://camo.githubusercontent.com/713265309efc25edcf85261d9812b9c6df09528cdaa2c468b6d5e4f9a2440c96/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f2d4a6176615363726970742d4637444631453f7374796c653d666c61742d737175617265266c6f676f3d6a617661736372697074266c6f676f436f6c6f723d626c61636b"><img
                                            src="https://camo.githubusercontent.com/713265309efc25edcf85261d9812b9c6df09528cdaa2c468b6d5e4f9a2440c96/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f2d4a6176615363726970742d4637444631453f7374796c653d666c61742d737175617265266c6f676f3d6a617661736372697074266c6f676f436f6c6f723d626c61636b"
                                            data-canonical-src="https://img.shields.io/badge/-JavaScript-F7DF1E?style=flat-square&amp;logo=javascript&amp;logoColor=black"
                                            style="max-width: 100%;"></a><a target="_blank" rel="noopener noreferrer"
                                        href="https://camo.githubusercontent.com/efd62dbd0acc4459f0e97d75e26c0475eeb385078d542cad1d13e8bb0b2cb8ce/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f2d457870726573732d3030303030303f7374796c653d666c61742d737175617265266c6f676f3d65787072657373266c6f676f436f6c6f723d7768697465"><img
                                            src="https://camo.githubusercontent.com/efd62dbd0acc4459f0e97d75e26c0475eeb385078d542cad1d13e8bb0b2cb8ce/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f2d457870726573732d3030303030303f7374796c653d666c61742d737175617265266c6f676f3d65787072657373266c6f676f436f6c6f723d7768697465"
                                            data-canonical-src="https://img.shields.io/badge/-Express-000000?style=flat-square&amp;logo=express&amp;logoColor=white"
                                            style="max-width: 100%;"></a><a target="_blank" rel="noopener noreferrer"
                                        href="#"><img
                                            src="https://camo.githubusercontent.com/7d1185f225f6a50bec4b592550f74887647c5acf33d02324b51294e0674487ce/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f2d4d6f6e676f44422d3437413234383f7374796c653d666c61742d737175617265266c6f676f3d6d6f6e676f6462266c6f676f436f6c6f723d7768697465"
                                            data-canonical-src="#" style="max-width: 100%;"></a>
                                    <button type="button" class="btn btn-outline-secondary"><a href="#">View on
                                            GitHub</a></button>
                                </li>
                            </ul>
                        </div> */}

                        {/* <h3>Some more screenshots</h3>
                        <p>A picture speaks a thousand words but more importantly, I hope it excites you enough to give
                            Driwwwle a try. Here are some screenshots, thanks to <a
                                href="https://mockupbro.com/">MockupBro</a> for the awesome mockups.</p>
                        <img src="../img/1.jpeg" class="card-img-top rounded-3 mb-3" alt="...">
                        <img src="../img/2.jpeg" class="card-img-top rounded-3 mb-3" alt="...">
                        <img src="../img/3.jpeg" class="card-img-top rounded-3 mb-3" alt="...">
                        <img src="../img/4.jpeg" class="card-img-top rounded-3 mb-3" alt="...">
                        <img src="../img/5.jpeg" class="card-img-top rounded-3 mb-3" alt="..."> */}

                        {/* <h2>
                            <a name="suggestions-and-feedback-welcome" href="#">
                            </a>
                            Suggestions and feedback welcome!
                        </h2> */}
                        {/* <p>Driwwwle is in its initial stages at the moment and I would highly appreciate any feedback,
                            suggestions and questions you would like to provide. What features would you like to see?
                            What seems unnecessary or what's causing difficulties? </p>
                        <p>Thank you for your time and I await to see your posts on Driwwwle soon. Until then, have a
                            nice day!</p> */}


                         //NEXT SECTION IS FOR DISCUSSION
                        <div class="post_card">
                            <div class="card-body d-flex justify-content-between align-items-center px-5">
                                <h3 class="card-subtitle mb-2">Discussion (12)</h3>
                                <button type="button" class="btn btn-outline-secondary">Subscribe</button>
                            </div>
                        </div>

                        <!-- Capturar un comentario -->
                        <div class="pt-3 d-flex w-100 justify-content-center">
                            <img src="../img/suscriber.png" class="card-img-top rounded-circle avatar2" alt="...">
                            <textarea class="form-floating txt-area" id="floatingTextarea" rows="5"
                                placeholder="Add to the discussion"></textarea>

                        </div>

                        <div class="comment">
                            <!-- Comentario de un suscriptor 1-->
                            <div class="subhead d-flex my-3 justify-content-center">
                                <div class="imagen">
                                    <img src="../img/people1.png"
                                        class=" align-self-center border-light border border-1 rounded-circle avatar2"
                                        alt="...">
                                </div>
                                <div
                                    class="opinion d-flex flex-wrap flex-column border border-secondary comment1 rounded-3">
                                    <div class="container d-flex align-items-center justify-content-start">
                                        <a href="#"><span class="badge bg-light text-dark names">Jay Jeckel</span></a>
                                        <p>.</p>
                                        <p class="dates mx-2">Sep 20</p>
                                    </div>
                                    <!-- <div class="actions">
                                        <a href="#">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" aria-hidden="true" class="dropdown-icon crayons-icon"><title>More...</title><path fill-rule="evenodd" clip-rule="evenodd" d="M7 12a2 2 0 11-4 0 2 2 0 014 0zm7 0a2 2 0 11-4 0 2 2 0 014 0zm5 2a2 2 0 100-4 2 2 0 000 4z"></path></svg>
                                        </a>
                                    </div> -->
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
                            <!-- Respuesta del autor -->
                            <div class="subhead d-flex my-3 me-5 justify-content-end">
                                <div class="imagen">
                                    <img src="../img/avatar.jpeg" class="card-img-top rounded-circle avatar2" alt="...">
                                </div>
                                <div
                                    class="opinion d-flex flex-wrap flex-column border border-secondary comment2 rounded-3">
                                    <div class="container d-flex align-items-center justify-content-start">
                                        <a href="#"><span class="badge bg-light text-dark names">Nitin
                                                Ranganath</span></a>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                            viewBox="0 0 24 24" role="img"
                                            aria-labelledby="aez12f7f6o87u158kqzikdu5aw94pdym" class="crayons-icon">
                                            <title id="aez12f7f6o87u158kqzikdu5aw94pdym">Author</title>
                                            <path
                                                d="M12 8.25a6 6 0 110 12 6 6 0 010-12zm0 2.625l-.992 2.01-2.218.322 1.605 1.564-.379 2.21L12 15.937l1.984 1.043-.379-2.209 1.605-1.564-2.218-.323L12 10.875zm.75-6.376l3.75.001v2.25l-1.022.854a7.45 7.45 0 00-2.728-.817V4.5zm-1.5 0v2.288a7.451 7.451 0 00-2.727.816L7.5 6.75V4.5h3.75z">
                                            </path>
                                        </svg>
                                        <p>.</p>
                                        <p class="dates mx-2">Sep 20</p>
                                    </div>
                                    <p>
                                        Hi Jay, these are some extremely valid points. Thanks for bringing them up. It
                                        must've slipped through my mind but I'll get started right away. Appreciate you
                                        taking your time for letting me know!
                                    </p>
                                </div>
                                <!-- Reacciones -->
                                <!-- <div class="reactions">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" role="img" aria-labelledby="anfh9sj69b56poy72cbv6dnth88xucav" class="crayons-icon reaction-icon not-reacted"><title id="anfh9sj69b56poy72cbv6dnth88xucav">Like comment:</title><path d="M18.884 12.595l.01.011L12 19.5l-6.894-6.894.01-.01A4.875 4.875 0 0112 5.73a4.875 4.875 0 016.884 6.865zM6.431 7.037a3.375 3.375 0 000 4.773L12 17.38l5.569-5.569a3.375 3.375 0 10-4.773-4.773L9.613 10.22l-1.06-1.062 2.371-2.372a3.375 3.375 0 00-4.492.25v.001z"></path></svg>
                                    <span class="reactions-count" id="reactions-count-778262">6</span>
                                    <span class="reactions-label hidden m:inline-block">&nbsp;likes</span>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" role="img" aria-labelledby="a9kth866xe7e89zxghp5q9kuhzyhmjt7" class="crayons-icon reaction-icon not-reacted"><title id="a9kth866xe7e89zxghp5q9kuhzyhmjt7">Comment button</title><path d="M10.5 5h3a6 6 0 110 12v2.625c-3.75-1.5-9-3.75-9-8.625a6 6 0 016-6zM12 15.5h1.5a4.501 4.501 0 001.722-8.657A4.5 4.5 0 0013.5 6.5h-3A4.5 4.5 0 006 11c0 2.707 1.846 4.475 6 6.36V15.5z"></path></svg>
                                    <span class="reactions-label hidden m:inline-block">&nbsp;Reply</span>
                                </div> -->
                            </div>
                        </div>

                        <div class="comment">
                            <!-- Comentario de un suscriptor 2-->
                            <div class="subhead d-flex my-3 justify-content-center">
                                <div class="imagen">
                                    <img src="../img/people2.png"
                                        class=" align-self-center border-light border border-1 rounded-circle avatar2"
                                        alt="...">
                                </div>
                                <div
                                    class="opinion d-flex flex-wrap flex-column border border-secondary comment1 rounded-3">
                                    <div class="container d-flex align-items-center justify-content-start">
                                        <a href="#"><span class="badge bg-light text-dark names">Padelis
                                                Theodosiou</span></a>
                                        <p>.</p>
                                        <p class="dates mx-2">Sep 20</p>
                                    </div>
                                    <!-- <div class="actions">
                                        <a href="#">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" aria-hidden="true" class="dropdown-icon crayons-icon"><title>More...</title><path fill-rule="evenodd" clip-rule="evenodd" d="M7 12a2 2 0 11-4 0 2 2 0 014 0zm7 0a2 2 0 11-4 0 2 2 0 014 0zm5 2a2 2 0 100-4 2 2 0 000 4z"></path></svg>
                                        </a>
                                    </div> -->
                                    <p>Hello @itsnitinr , looks awesome project!
                                        Nice work!

                                        Note: still waiting for the verification email :)
                                    </p>
                                </div>

                            </div>
                            <!-- Respuesta del autor -->
                            <div class="subhead d-flex my-3 me-5 justify-content-end">
                                <div class="imagen">
                                    <img src="../img/avatar.jpeg" class="card-img-top rounded-circle avatar2" alt="...">
                                </div>
                                <div
                                    class="opinion d-flex flex-wrap flex-column border border-secondary comment2 rounded-3">
                                    <div class="container d-flex align-items-center justify-content-start">
                                        <a href="#"><span class="badge bg-light text-dark names">Nitin
                                                Ranganath</span></a>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                            viewBox="0 0 24 24" role="img"
                                            aria-labelledby="aez12f7f6o87u158kqzikdu5aw94pdym" class="crayons-icon">
                                            <title id="aez12f7f6o87u158kqzikdu5aw94pdym">Author</title>
                                            <path
                                                d="M12 8.25a6 6 0 110 12 6 6 0 010-12zm0 2.625l-.992 2.01-2.218.322 1.605 1.564-.379 2.21L12 15.937l1.984 1.043-.379-2.209 1.605-1.564-2.218-.323L12 10.875zm.75-6.376l3.75.001v2.25l-1.022.854a7.45 7.45 0 00-2.728-.817V4.5zm-1.5 0v2.288a7.451 7.451 0 00-2.727.816L7.5 6.75V4.5h3.75z">
                                            </path>
                                        </svg>
                                        <p>.</p>
                                        <p class="dates mx-2">Sep 20</p>
                                    </div>
                                    <p>
                                        Hi there! Thanks for signing up. Could you please check your promotions tab if
                                        you're using Gmail? If you're using Yahoo, you might find the email in the
                                        'Unread' folder. It would've probably ended up there :)

                                        Let me know if you still haven't received it. I'll be happy to send you from my
                                        personal email.
                                    </p>
                                </div>
                                <!-- Reacciones -->
                                <!-- <div class="reactions">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" role="img" aria-labelledby="anfh9sj69b56poy72cbv6dnth88xucav" class="crayons-icon reaction-icon not-reacted"><title id="anfh9sj69b56poy72cbv6dnth88xucav">Like comment:</title><path d="M18.884 12.595l.01.011L12 19.5l-6.894-6.894.01-.01A4.875 4.875 0 0112 5.73a4.875 4.875 0 016.884 6.865zM6.431 7.037a3.375 3.375 0 000 4.773L12 17.38l5.569-5.569a3.375 3.375 0 10-4.773-4.773L9.613 10.22l-1.06-1.062 2.371-2.372a3.375 3.375 0 00-4.492.25v.001z"></path></svg>
                                    <span class="reactions-count" id="reactions-count-778262">6</span>
                                    <span class="reactions-label hidden m:inline-block">&nbsp;likes</span>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" role="img" aria-labelledby="a9kth866xe7e89zxghp5q9kuhzyhmjt7" class="crayons-icon reaction-icon not-reacted"><title id="a9kth866xe7e89zxghp5q9kuhzyhmjt7">Comment button</title><path d="M10.5 5h3a6 6 0 110 12v2.625c-3.75-1.5-9-3.75-9-8.625a6 6 0 016-6zM12 15.5h1.5a4.501 4.501 0 001.722-8.657A4.5 4.5 0 0013.5 6.5h-3A4.5 4.5 0 006 11c0 2.707 1.846 4.475 6 6.36V15.5z"></path></svg>
                                    <span class="reactions-label hidden m:inline-block">&nbsp;Reply</span>
                                </div> -->
                            </div>
                        </div>

                        <div class="comment">
                            <!-- Comentario de un suscriptor 3-->
                            <div class="subhead d-flex my-3 justify-content-center">
                                <div class="imagen">
                                    <img src="../img/people3.png"
                                        class=" align-self-center border-light border border-1 rounded-circle avatar2"
                                        alt="...">
                                </div>
                                <div
                                    class="opinion d-flex flex-wrap flex-column border border-secondary comment1 rounded-3">
                                    <div class="container d-flex align-items-center justify-content-start">
                                        <a href="#"><span class="badge bg-light text-dark names">Pandademic
                                            </span></a>
                                        <p>.</p>
                                        <p class="dates mx-2">Sep 20</p>
                                    </div>
                                    <!-- <div class="actions">
                                        <a href="#">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" aria-hidden="true" class="dropdown-icon crayons-icon"><title>More...</title><path fill-rule="evenodd" clip-rule="evenodd" d="M7 12a2 2 0 11-4 0 2 2 0 014 0zm7 0a2 2 0 11-4 0 2 2 0 014 0zm5 2a2 2 0 100-4 2 2 0 000 4z"></path></svg>
                                        </a>
                                    </div> -->
                                    <p>
                                        Wow, great idea. I will join soon! How have you done the video ? It’s amazing!
                                    </p>
                                </div>

                            </div>
                            <!-- Respuesta del autor -->
                            <div class="subhead d-flex my-3 me-5 justify-content-end">
                                <div class="imagen">
                                    <img src="../img/avatar.jpeg" class="card-img-top rounded-circle avatar2" alt="...">
                                </div>
                                <div
                                    class="opinion d-flex flex-wrap flex-column border border-secondary comment2 rounded-3">
                                    <div class="container d-flex align-items-center justify-content-start">
                                        <a href="#"><span class="badge bg-light text-dark names">Nitin
                                                Ranganath</span></a>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                            viewBox="0 0 24 24" role="img"
                                            aria-labelledby="aez12f7f6o87u158kqzikdu5aw94pdym" class="crayons-icon">
                                            <title id="aez12f7f6o87u158kqzikdu5aw94pdym">Author</title>
                                            <path
                                                d="M12 8.25a6 6 0 110 12 6 6 0 010-12zm0 2.625l-.992 2.01-2.218.322 1.605 1.564-.379 2.21L12 15.937l1.984 1.043-.379-2.209 1.605-1.564-2.218-.323L12 10.875zm.75-6.376l3.75.001v2.25l-1.022.854a7.45 7.45 0 00-2.728-.817V4.5zm-1.5 0v2.288a7.451 7.451 0 00-2.727.816L7.5 6.75V4.5h3.75z">
                                            </path>
                                        </svg>
                                        <p>.</p>
                                        <p class="dates mx-2">Sep 20</p>
                                    </div>
                                    <p>
                                        Thank you! Excited for you to join :)

                                        The video is made using Adobe After Effects and free template that you can find
                                        here: <a href="#">youtube.com/watch?v=GzTQFCHzgok</a>
                                    </p>
                                </div>
                                <!-- Reacciones -->
                                <!-- <div class="reactions">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" role="img" aria-labelledby="anfh9sj69b56poy72cbv6dnth88xucav" class="crayons-icon reaction-icon not-reacted"><title id="anfh9sj69b56poy72cbv6dnth88xucav">Like comment:</title><path d="M18.884 12.595l.01.011L12 19.5l-6.894-6.894.01-.01A4.875 4.875 0 0112 5.73a4.875 4.875 0 016.884 6.865zM6.431 7.037a3.375 3.375 0 000 4.773L12 17.38l5.569-5.569a3.375 3.375 0 10-4.773-4.773L9.613 10.22l-1.06-1.062 2.371-2.372a3.375 3.375 0 00-4.492.25v.001z"></path></svg>
                                    <span class="reactions-count" id="reactions-count-778262">6</span>
                                    <span class="reactions-label hidden m:inline-block">&nbsp;likes</span>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" role="img" aria-labelledby="a9kth866xe7e89zxghp5q9kuhzyhmjt7" class="crayons-icon reaction-icon not-reacted"><title id="a9kth866xe7e89zxghp5q9kuhzyhmjt7">Comment button</title><path d="M10.5 5h3a6 6 0 110 12v2.625c-3.75-1.5-9-3.75-9-8.625a6 6 0 016-6zM12 15.5h1.5a4.501 4.501 0 001.722-8.657A4.5 4.5 0 0013.5 6.5h-3A4.5 4.5 0 006 11c0 2.707 1.846 4.475 6 6.36V15.5z"></path></svg>
                                    <span class="reactions-label hidden m:inline-block">&nbsp;Reply</span>
                                </div> -->
                            </div>
                        </div>

                        <div class="comment">
                            <!-- Comentario de un suscriptor 1-->
                            <div class="subhead d-flex my-3 justify-content-center">
                                <div class="imagen">
                                    <img src="../img/people4.png"
                                        class=" align-self-center border-light border border-1 rounded-circle avatar2"
                                        alt="...">
                                </div>
                                <div
                                    class="opinion d-flex flex-wrap flex-column border border-secondary comment1 rounded-3">
                                    <div class="container d-flex align-items-center justify-content-start">
                                        <a href="#"><span class="badge bg-light text-dark names">Jay Jeckel</span></a>
                                        <p>.</p>
                                        <p class="dates mx-2">Sep 20</p>
                                    </div>
                                    <!-- <div class="actions">
                                        <a href="#">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" aria-hidden="true" class="dropdown-icon crayons-icon"><title>More...</title><path fill-rule="evenodd" clip-rule="evenodd" d="M7 12a2 2 0 11-4 0 2 2 0 014 0zm7 0a2 2 0 11-4 0 2 2 0 014 0zm5 2a2 2 0 100-4 2 2 0 000 4z"></path></svg>
                                        </a>
                                    </div> -->
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
                            <!-- Respuesta del autor -->
                            <div class="subhead d-flex my-3 me-5 justify-content-end">
                                <div class="imagen">
                                    <img src="../img/avatar.jpeg" class="card-img-top rounded-circle avatar2" alt="...">
                                </div>
                                <div
                                    class="opinion d-flex flex-wrap flex-column border border-secondary comment2 rounded-3">
                                    <div class="container d-flex align-items-center justify-content-start">
                                        <a href="#"><span class="badge bg-light text-dark names">Nitin
                                                Ranganath</span></a>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                            viewBox="0 0 24 24" role="img"
                                            aria-labelledby="aez12f7f6o87u158kqzikdu5aw94pdym" class="crayons-icon">
                                            <title id="aez12f7f6o87u158kqzikdu5aw94pdym">Author</title>
                                            <path
                                                d="M12 8.25a6 6 0 110 12 6 6 0 010-12zm0 2.625l-.992 2.01-2.218.322 1.605 1.564-.379 2.21L12 15.937l1.984 1.043-.379-2.209 1.605-1.564-2.218-.323L12 10.875zm.75-6.376l3.75.001v2.25l-1.022.854a7.45 7.45 0 00-2.728-.817V4.5zm-1.5 0v2.288a7.451 7.451 0 00-2.727.816L7.5 6.75V4.5h3.75z">
                                            </path>
                                        </svg>
                                        <p>.</p>
                                        <p class="dates mx-2">Sep 20</p>
                                    </div>
                                    <p>
                                        Hi Jay, these are some extremely valid points. Thanks for bringing them up. It
                                        must've slipped through my mind but I'll get started right away. Appreciate you
                                        taking your time for letting me know!
                                    </p>
                                </div>
                                <!-- Reacciones -->
                                <!-- <div class="reactions">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" role="img" aria-labelledby="anfh9sj69b56poy72cbv6dnth88xucav" class="crayons-icon reaction-icon not-reacted"><title id="anfh9sj69b56poy72cbv6dnth88xucav">Like comment:</title><path d="M18.884 12.595l.01.011L12 19.5l-6.894-6.894.01-.01A4.875 4.875 0 0112 5.73a4.875 4.875 0 016.884 6.865zM6.431 7.037a3.375 3.375 0 000 4.773L12 17.38l5.569-5.569a3.375 3.375 0 10-4.773-4.773L9.613 10.22l-1.06-1.062 2.371-2.372a3.375 3.375 0 00-4.492.25v.001z"></path></svg>
                                    <span class="reactions-count" id="reactions-count-778262">6</span>
                                    <span class="reactions-label hidden m:inline-block">&nbsp;likes</span>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" role="img" aria-labelledby="a9kth866xe7e89zxghp5q9kuhzyhmjt7" class="crayons-icon reaction-icon not-reacted"><title id="a9kth866xe7e89zxghp5q9kuhzyhmjt7">Comment button</title><path d="M10.5 5h3a6 6 0 110 12v2.625c-3.75-1.5-9-3.75-9-8.625a6 6 0 016-6zM12 15.5h1.5a4.501 4.501 0 001.722-8.657A4.5 4.5 0 0013.5 6.5h-3A4.5 4.5 0 006 11c0 2.707 1.846 4.475 6 6.36V15.5z"></path></svg>
                                    <span class="reactions-label hidden m:inline-block">&nbsp;Reply</span>
                                </div> -->
                            </div>
                        </div>

                        <div class="comment">
                            <!-- Comentario de un suscriptor 1-->
                            <div class="subhead d-flex my-3 justify-content-center">
                                <div class="imagen">
                                    <img src="../img/people5.png"
                                        class=" align-self-center border-light border border-1 rounded-circle avatar2"
                                        alt="...">
                                </div>
                                <div
                                    class="opinion d-flex flex-wrap flex-column border border-secondary comment1 rounded-3">
                                    <div class="container d-flex align-items-center justify-content-start">
                                        <a href="#"><span class="badge bg-light text-dark names">Jay Jeckel</span></a>
                                        <p>.</p>
                                        <p class="dates mx-2">Sep 20</p>
                                    </div>
                                    <!-- <div class="actions">
                                        <a href="#">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" aria-hidden="true" class="dropdown-icon crayons-icon"><title>More...</title><path fill-rule="evenodd" clip-rule="evenodd" d="M7 12a2 2 0 11-4 0 2 2 0 014 0zm7 0a2 2 0 11-4 0 2 2 0 014 0zm5 2a2 2 0 100-4 2 2 0 000 4z"></path></svg>
                                        </a>
                                    </div> -->
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
                            <!-- Respuesta del autor -->
                            <div class="subhead d-flex my-3 me-5 justify-content-end">
                                <div class="imagen">
                                    <img src="../img/avatar.jpeg" class="card-img-top rounded-circle avatar2" alt="...">
                                </div>
                                <div
                                    class="opinion d-flex flex-wrap flex-column border border-secondary comment2 rounded-3">
                                    <div class="container d-flex align-items-center justify-content-start">
                                        <a href="#"><span class="badge bg-light text-dark names">Nitin
                                                Ranganath</span></a>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                            viewBox="0 0 24 24" role="img"
                                            aria-labelledby="aez12f7f6o87u158kqzikdu5aw94pdym" class="crayons-icon">
                                            <title id="aez12f7f6o87u158kqzikdu5aw94pdym">Author</title>
                                            <path
                                                d="M12 8.25a6 6 0 110 12 6 6 0 010-12zm0 2.625l-.992 2.01-2.218.322 1.605 1.564-.379 2.21L12 15.937l1.984 1.043-.379-2.209 1.605-1.564-2.218-.323L12 10.875zm.75-6.376l3.75.001v2.25l-1.022.854a7.45 7.45 0 00-2.728-.817V4.5zm-1.5 0v2.288a7.451 7.451 0 00-2.727.816L7.5 6.75V4.5h3.75z">
                                            </path>
                                        </svg>
                                        <p>.</p>
                                        <p class="dates mx-2">Sep 20</p>
                                    </div>
                                    <p>
                                        Hi Jay, these are some extremely valid points. Thanks for bringing them up. It
                                        must've slipped through my mind but I'll get started right away. Appreciate you
                                        taking your time for letting me know!
                                    </p>
                                </div>
                                <!-- Reacciones -->
                                <!-- <div class="reactions">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" role="img" aria-labelledby="anfh9sj69b56poy72cbv6dnth88xucav" class="crayons-icon reaction-icon not-reacted"><title id="anfh9sj69b56poy72cbv6dnth88xucav">Like comment:</title><path d="M18.884 12.595l.01.011L12 19.5l-6.894-6.894.01-.01A4.875 4.875 0 0112 5.73a4.875 4.875 0 016.884 6.865zM6.431 7.037a3.375 3.375 0 000 4.773L12 17.38l5.569-5.569a3.375 3.375 0 10-4.773-4.773L9.613 10.22l-1.06-1.062 2.371-2.372a3.375 3.375 0 00-4.492.25v.001z"></path></svg>
                                    <span class="reactions-count" id="reactions-count-778262">6</span>
                                    <span class="reactions-label hidden m:inline-block">&nbsp;likes</span>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" role="img" aria-labelledby="a9kth866xe7e89zxghp5q9kuhzyhmjt7" class="crayons-icon reaction-icon not-reacted"><title id="a9kth866xe7e89zxghp5q9kuhzyhmjt7">Comment button</title><path d="M10.5 5h3a6 6 0 110 12v2.625c-3.75-1.5-9-3.75-9-8.625a6 6 0 016-6zM12 15.5h1.5a4.501 4.501 0 001.722-8.657A4.5 4.5 0 0013.5 6.5h-3A4.5 4.5 0 006 11c0 2.707 1.846 4.475 6 6.36V15.5z"></path></svg>
                                    <span class="reactions-label hidden m:inline-block">&nbsp;Reply</span>
                                </div> -->
                            </div>
                        </div>

                        <div class="comment">
                            <!-- Comentario de un suscriptor 1-->
                            <div class="subhead d-flex my-3 justify-content-center">
                                <div class="imagen">
                                    <img src="../img/people6.png"
                                        class=" align-self-center border-light border border-1 rounded-circle avatar2"
                                        alt="...">
                                </div>
                                <div
                                    class="opinion d-flex flex-wrap flex-column border border-secondary comment1 rounded-3">
                                    <div class="container d-flex align-items-center justify-content-start">
                                        <a href="#"><span class="badge bg-light text-dark names">Jay Jeckel</span></a>
                                        <p>.</p>
                                        <p class="dates mx-2">Sep 20</p>
                                    </div>
                                    <!-- <div class="actions">
                                        <a href="#">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" aria-hidden="true" class="dropdown-icon crayons-icon"><title>More...</title><path fill-rule="evenodd" clip-rule="evenodd" d="M7 12a2 2 0 11-4 0 2 2 0 014 0zm7 0a2 2 0 11-4 0 2 2 0 014 0zm5 2a2 2 0 100-4 2 2 0 000 4z"></path></svg>
                                        </a>
                                    </div> -->
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
                            <!-- Respuesta del autor -->
                            <div class="subhead d-flex my-3 me-5 justify-content-end">
                                <div class="imagen">
                                    <img src="../img/avatar.jpeg" class="card-img-top rounded-circle avatar2" alt="...">
                                </div>
                                <div
                                    class="opinion d-flex flex-wrap flex-column border border-secondary comment2 rounded-3">
                                    <div class="container d-flex align-items-center justify-content-start">
                                        <a href="#"><span class="badge bg-light text-dark names">Nitin
                                                Ranganath</span></a>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                            viewBox="0 0 24 24" role="img"
                                            aria-labelledby="aez12f7f6o87u158kqzikdu5aw94pdym" class="crayons-icon">
                                            <title id="aez12f7f6o87u158kqzikdu5aw94pdym">Author</title>
                                            <path
                                                d="M12 8.25a6 6 0 110 12 6 6 0 010-12zm0 2.625l-.992 2.01-2.218.322 1.605 1.564-.379 2.21L12 15.937l1.984 1.043-.379-2.209 1.605-1.564-2.218-.323L12 10.875zm.75-6.376l3.75.001v2.25l-1.022.854a7.45 7.45 0 00-2.728-.817V4.5zm-1.5 0v2.288a7.451 7.451 0 00-2.727.816L7.5 6.75V4.5h3.75z">
                                            </path>
                                        </svg>
                                        <p>.</p>
                                        <p class="dates mx-2">Sep 20</p>
                                    </div>
                                    <p>
                                        Hi Jay, these are some extremely valid points. Thanks for bringing them up. It
                                        must've slipped through my mind but I'll get started right away. Appreciate you
                                        taking your time for letting me know!
                                    </p>
                                </div>
                                <!-- Reacciones -->
                                <!-- <div class="reactions">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" role="img" aria-labelledby="anfh9sj69b56poy72cbv6dnth88xucav" class="crayons-icon reaction-icon not-reacted"><title id="anfh9sj69b56poy72cbv6dnth88xucav">Like comment:</title><path d="M18.884 12.595l.01.011L12 19.5l-6.894-6.894.01-.01A4.875 4.875 0 0112 5.73a4.875 4.875 0 016.884 6.865zM6.431 7.037a3.375 3.375 0 000 4.773L12 17.38l5.569-5.569a3.375 3.375 0 10-4.773-4.773L9.613 10.22l-1.06-1.062 2.371-2.372a3.375 3.375 0 00-4.492.25v.001z"></path></svg>
                                    <span class="reactions-count" id="reactions-count-778262">6</span>
                                    <span class="reactions-label hidden m:inline-block">&nbsp;likes</span>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" role="img" aria-labelledby="a9kth866xe7e89zxghp5q9kuhzyhmjt7" class="crayons-icon reaction-icon not-reacted"><title id="a9kth866xe7e89zxghp5q9kuhzyhmjt7">Comment button</title><path d="M10.5 5h3a6 6 0 110 12v2.625c-3.75-1.5-9-3.75-9-8.625a6 6 0 016-6zM12 15.5h1.5a4.501 4.501 0 001.722-8.657A4.5 4.5 0 0013.5 6.5h-3A4.5 4.5 0 006 11c0 2.707 1.846 4.475 6 6.36V15.5z"></path></svg>
                                    <span class="reactions-label hidden m:inline-block">&nbsp;Reply</span>
                                </div> -->
                            </div>
                        </div>

                        <div class="x_card border border-secondary rounded-3 mb-3">
                            <p class="lastSection">Read next</p>
                            <ul class="list-group list-group-flush">
                                <li class="group d-flex my-3">
                                    <div class="imagen">
                                        <img src="../img/people6.png" class="card-img-top rounded-circle avatar2 me-3"
                                            alt="...">
                                    </div>
                                    <div class="next d-flex flex-column">
                                        <h3 class="lastSectionTitle"><a href="#">How to build a React FAQ accordion</a>
                                        </h3>
                                        <h3 class="lastSectionUser">cesaruseche18 - Sep 16</h3>
                                    </div>
                                </li>
                                <li class="group d-flex my-3">
                                    <div class="imagen">
                                        <img src="../img/people5.png" class="card-img-top rounded-circle avatar2 me-3"
                                            alt="...">
                                    </div>
                                    <div class="next d-flex flex-column">
                                        <h3 class="lastSectionTitle"><a href="#">UI Dev Newsletter #73</a></h3>
                                        <h3 class="lastSectionUser">Silverstar Bistrovic- Sep 8</h3>
                                    </div>
                                </li>
                                <li class="group d-flex my-3">
                                    <div class="imagen">
                                        <img src="../img/people4.png" class="card-img-top rounded-circle avatar2 me-3"
                                            alt="...">
                                    </div>
                                    <div class="next d-flex flex-column">
                                        <h3 class="lastSectionTitle"><a href="#">Entendendo o Node.js e seu
                                                funcionamiento</a></h3>
                                        <h3 class="lastSectionUser">Leonardo de Sá - Sep 17</h3>
                                    </div>
                                </li>
                                <li class="group d-flex my-3">
                                    <div class="imagen">
                                        <img src="../img/people3.png" class="card-img-top rounded-circle avatar2 me-3"
                                            alt="...">
                                    </div>
                                    <div class="next d-flex flex-column">
                                        <h3 class="lastSectionTitle"><a href="#">What is CSS in JS?</a></h3>
                                        <h3 class="lastSectionUser">Anjan Shomooder - Sep 17</h3>
                                    </div>
                                </li>

                            </ul>

                        </div>

                    </div>




                </div>

                //HERE START THE RIGHT SIDE-BAR
                <div class="side_right col-lg-3">
                    <div class="p_card rounded-3 mb-3">
                        <ul class="list-group list-group-flush">
                            <li class="list-group-item">
                                <div>
                                    //IN THE NEXT LINE GOES THE PROFILE PICTURE AUTHOR
                                    <img src="#"
                                        class="border border-light border border-1 rounded-circle avatar" alt="...">
                                    //IN THE NEXT LINE GOES THE NAME OF THE AUTHOR
                                    <a href="#"><span class="names_r pb-3">Nitin Ranganath</span></a>
                                </div>
                                <div class="boton-derecha py-3">
                                    <button type="button" class="btn btn-primary btn-r">Follow</button>
                                </div>
                                <div class="card_author">
                                    <p>An avid MERN stack developer, building websites that you'd love using.</p>
                                    <p class="negrita">LOCATION</p>
                                    <p>Mumbai</p>
                                    <p class="negrita">EDUCATION</p>
                                    <p>Bachelor of Engineering</p>
                                    <p class="negrita">WORK</p>
                                    <p>Student & Freelancer</p>
                                    <p class="negrita">JOINED</p>
                                    <p>6 de oct. 2019</p>
                                </div>
                            </li>
                        </ul>
                    </div>
                    <div class="p_card2 rounded-3">
                        <ul class="list-group list-group-flush">
                            <li class="list-group-item names_r">More from <a href="#">Nitin Ranganath</a></li>
                            <li class="list-group-item card_author py-3">
                                <div class="tecs pb-3">
                                    <a class="more_title" href="#">I Built a VSCode Inspired Developer Portfolio</a>
                                </div>
                                <div>
                                    <a class="more_tags" href="#">#showdev</a>
                                    <a class="more_tags" href="#">#webdev</a>
                                    <a class="more_tags" href="#">#react</a>
                                    <a class="more_tags" href="#">#nextjs</a>
                                </div>
                            </li>

                            <li class="list-group-item card_author py-3">
                                <div class="tecs pb-3">
                                    <a class="more_title" href="#">Build a Crypto Discord Bot using Discord.js</a>
                                </div>
                                <div>
                                    <a class="more_tags" href="#">#tutorial</a>
                                    <a class="more_tags" href="#">#javascript</a>
                                    <a class="more_tags" href="#">#programming</a>
                                </div>
                            </li>

                            <li class="list-group-item card_author py-3">
                                <div class="tecs pb-3">
                                    <a class="more_title" href="#">You Need to Try These 10 NPM Packages as a React
                                        Developer</a>
                                </div>
                                <div>
                                    <a class="more_tags" href="#">#react</a>
                                    <a class="more_tags" href="#">#javascript</a>
                                    <a class="more_tags" href="#">#webdev</a>
                                    <a class="more_tags" href="#">#beginners</a>
                                </div>
                            </li>

                        </ul>
                    </div>
                </div>
            </div>
        </div>

        </main>

        <footer class="container-footer">
        <div class="container-fluid c-footer">
            <div class="row justify-content-center">
                <div class="col-lg-5">
                    <p class="footer-description">
                        <a href="#" class="link-footer">
                            DEV Community
                        </a>
                        – A constructive and inclusive social network for
                        software developers. With you every step of your
                        journey.
                    </p>
                </div>
                <div class="row justify-content-center">
                    <div class="col-lg-5 col-md-8 col-sm-11">
                        <p id="p_footer">
                            Built on
                            <a href="#" class="link-footer">Forem</a>
                            — the
                            <a href="#" class="link-footer">open source</a>
                            software that powers
                            <a href="#" class="link-footer">DEV</a>
                            and other inclusive communities.
                        </p>
                        <p>Made with love and
                            <a href="#" class="link-footer">Ruby on Rails</a>
                            . DEV Community
                            <span title="copyright">©</span>
                            2016 - 2021
                        </p>
                    </div>
                </div>
                <div class="row justify-content-center">
                    <div class="col-lg-5 col-md-8 col-sm-11">
                        <a href="https://www.forem.com" target="_blank" rel="noopener">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                fill="none" role="img" aria-labelledby="a90ameo99abv4mvu74q8kbippd0v8ehc"
                                class="crayons-icon crayons-icon--default">
                                <title id="a90ameo99abv4mvu74q8kbippd0v8ehc">Forem logo</title>
                                <g clip-path="url(#clip0)" fill="#1AB3A6">
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