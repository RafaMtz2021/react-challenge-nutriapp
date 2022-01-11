import "./DetailPost.css";
import React, {useState, useEffect} from "react";
import {getPosts} from "../../services/post";

function DetailPost(){


    // useEffect(() => {
    //     const fetchData = async () => {
    //         const data = await getPosts();
    //         const collection = data.data.post 

    //         console.log(collection)
    //     }
    // })    


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
                                aria-label="Search"/>
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
                                            <img class="avatar_image" alt="" id="nav-profile-image" src="/img/avatar.png" />
                                        </span>
                                    </a>
                                    <ul class="dropdown-menu menu-user" aria-labelledby="navbarDropdown">
                                        <li><a class="dropdown-item" href="#">Koder</a></li>
                                        <li><a class="dropdown-item" href="#">@koder</a></li>
                                        <li>
                                            <hr class="dropdown-divider" />
                                        </li>
                                        <li><a class="dropdown-item" href="#">Dashboard</a></li>
                                        <li><a class="dropdown-item" href="#">Create Post</a></li>
                                        <li><a class="dropdown-item" href="#">Reading list</a></li>
                                        <li><a class="dropdown-item" href="#">Settings</a></li>
                                        <hr class="dropdown-divider" />
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
            
        </main>

        

        

        

    </>
    );
};