import "./Home.css";
import React, { useEffect, useState } from "react";
import { getPosts } from "../../services/post";
import Cards from "../../components/Cards/"

function Home() {
  const [square, setSquare] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await getPosts();
      const collection = data.data.post
      
      setSquare(collection)
    };
    fetchData();
  }, []);

  console.log(square);

  
  
  
  return (
    <>
      <header>
        <div className="container-fluid c-fluid">
          <nav className="navbar navbar-expand-lg navbar_bar">
            <div className="container container_bar">
              <a className="navbar-logo" href="#">
                <svg
                  width="50"
                  height="40"
                  viewBox="0 0 50 40"
                  fill="#fff"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect
                    width="50"
                    height="40"
                    rx="3"
                    // style="fill: #000;"
                  ></rect>
                  <path
                    d="M19.099 23.508c0 1.31-.423 2.388-1.27 3.234-.838.839-1.942 1.258-3.312 1.258h-4.403V12.277h4.492c1.31 0 2.385.423 3.224 1.27.846.838 1.269 1.912 1.269 3.223v6.738zm-2.808 0V16.77c0-.562-.187-.981-.562-1.258-.374-.285-.748-.427-1.122-.427h-1.685v10.107h1.684c.375 0 .75-.138 1.123-.415.375-.285.562-.708.562-1.27zM28.185 28h-5.896c-.562 0-1.03-.187-1.404-.561-.375-.375-.562-.843-.562-1.404V14.243c0-.562.187-1.03.562-1.404.374-.375.842-.562 1.404-.562h5.896v2.808H23.13v3.65h3.088v2.808h-3.088v3.65h5.054V28zm7.12 0c-.936 0-1.684-.655-2.246-1.965l-3.65-13.758h3.089l2.807 10.804 2.808-10.804H41.2l-3.65 13.758C36.99 27.345 36.241 28 35.305 28z"
                    // style="fill: var(--base-inverted);"
                  ></path>
                </svg>
              </a>
              <button
                className="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon"></span>
              </button>
              <form className="d-flex d-flex_bar">
                <input
                  className="form-control me-2 form-control_bar"
                  type="search"
                  placeholder="Search..."
                  aria-label="Search"
                />
                <div className="button-container">
                  <a id="lupa" className="icon-container" href="#">
                    <span className="material-icons search-icon">search</span>
                  </a>
                </div>
              </form>

              <div
                className="collapse navbar-collapse"
                id="navbarSupportedContent"
              >
                <ul className="navbar-nav mb-2 mb-lg-0 navbar-nav_bar">
                  <li className="nav-item">
                    <a
                      className="nav-link active create_post"
                      aria-current="page"
                      href="#"
                    >
                      Create Post
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      className="nav-link active action"
                      aria-current="page"
                      href="#"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        role="img"
                        aria-labelledby="a41cvmxi3r1lero45hkubzuujy4jlv0j"
                        className="crayons-icon"
                      >
                        <title id="a41cvmxi3r1lero45hkubzuujy4jlv0j">
                          Connect
                        </title>
                        <path d="M2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10H2l2.929-2.929A9.969 9.969 0 012 12zm4.828 8H12a8 8 0 10-8-8c0 2.152.851 4.165 2.343 5.657l1.414 1.414-.929.929zM8 13h8a4 4 0 11-8 0z"></path>
                      </svg>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      className="nav-link action"
                      href="#"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        role="img"
                        aria-labelledby="a6d4t764l2b3c64midpz699jmmh662u0"
                        className="crayons-icon"
                      >
                        <title id="a6d4t764l2b3c64midpz699jmmh662u0">
                          Notifications
                        </title>
                        <path d="M20 17h2v2H2v-2h2v-7a8 8 0 1116 0v7zm-2 0v-7a6 6 0 10-12 0v7h12zm-9 4h6v2H9v-2z"></path>
                      </svg>
                      <span className="indicator" id="notifications-number">
                        1
                      </span>
                    </a>
                  </li>
                  <li className="nav-item dropdown">
                    <a
                      className="nav-link"
                      href="#"
                      id="navbarDropdown"
                      role="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      <span className="avatar_bar">
                        <img
                          className="avatar_image"
                          alt=""
                          id="nav-profile-image"
                          src="https://res.cloudinary.com/practicaldev/image/fetch/s--Qv9nP2Ud--/c_fill,f_auto,fl_progressive,h_90,q_auto,w_90/https://dev-to-uploads.s3.amazonaws.com/uploads/user/profile_image/592016/ac52b742-ede9-4335-9692-80b246d53ce7.png"
                        />
                      </span>
                    </a>
                    <ul
                      className="dropdown-menu menu-user"
                      aria-labelledby="navbarDropdown"
                    >
                      <li>
                        <a className="dropdown-item" href="#">
                          Koder
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#">
                          @koder
                        </a>
                      </li>
                      <li>
                        <hr className="dropdown-divider" />
                      </li>
                      <li>
                        <a className="dropdown-item" href="#">
                          Dashboard
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#">
                          Create Post
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#">
                          Reading list
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#">
                          Settings
                        </a>
                      </li>
                      <hr className="dropdown-divider" />
                      <li>
                        <a className="dropdown-item" href="#">
                          Sign Out
                        </a>
                      </li>
                    </ul>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
        </div>
      </header>
     

      <main>
        <div className="container-fluid" id="banner">
          <div className="row justify-content-center">
            <div className="col-xxl-10 col-xl-11 col-lg-11 col-md-12 banner">
              <div className="row justify-content-center">
                <button
                  className="closebutton"
                  id="js-hero-banner__x"
                  aria-label="Close campaign banner"
                >
                  ×
                </button>
                <div className="col-lg-8 col-md-12 col-sm-12 campaing">
                  <div className="banner_top">
                    <div className="campaign_banner">
                      <h4>Join us at</h4>
                      <img
                        height="193"
                        width="420"
                        className="campaignmode-hackathon--mainimage"
                        src="https://res.cloudinary.com/practicaldev/image/fetch/s--5x6JJFTC--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_420/https://jess.forem.lol/images/2kqlhLiqBBFHkqLwx86vrfjlg-PDWbCl47PIBeUDO3E/w:420/mb:500000/aHR0cHM6Ly9qZXNz/LmZvcmVtLmxvbC9y/ZW1vdGVpbWFnZXMv/dXBsb2Fkcy9hcnRp/Y2xlcy9wemJ1bzZv/eDE3NHZjZmg5YTFv/ci5wbmc"
                      />
                      <h2>
                        The community-first coding conference designed to level
                        you up! Sep 23-24 🌈
                      </h2>
                      <a href="https://ti.to/codenewbie/codeland-2021">
                        <h3>Get your ticket (starting @ $0!)</h3>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row justify-content-center">
            {/* <!--LeftSide Bar--> */}
            <div className="col-lg-3 col-md-2" id="lsBar">
              <div className="LBcontIntro">
                <ul className="nav nav-pills flex-column">
                  <li className="nav-item">
                    <div className="nav-link" href="#">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 44 44"
                        width="24"
                        height="24"
                        aria-hidden="true"
                        className="crayons-icon crayons-icon--default"
                        id="LBicon1"
                      >
                        <g className="nc-icon-wrapper">
                          <path
                            fill="#A0041E"
                            d="M13.344 18.702h-2a.5.5 0 01-.5-.5v-7a.5.5 0 01.5-.5h2a.5.5 0 01.5.5v7a.5.5 0 01-.5.5z"
                          ></path>
                          <path
                            fill="#FFE8B6"
                            d="M9 20L22 7l13 13v17H9z"
                          ></path>
                          <path fill="#FFCC4D" d="M22 20h1v16h-1z"></path>
                          <path
                            fill="#66757F"
                            d="M35 21a.997.997 0 01-.707-.293L22 8.414 9.707 20.707a1 1 0 11-1.414-1.414l13-13a.999.999 0 011.414 0l13 13A.999.999 0 0135 21z"
                          ></path>
                          <path
                            fill="#66757F"
                            d="M22 21a.999.999 0 01-.707-1.707l6.5-6.5a1 1 0 111.414 1.414l-6.5 6.5A.997.997 0 0122 21z"
                          ></path>
                          <path fill="#C1694F" d="M14 30h4v6h-4z"></path>
                          <path
                            fill="#55ACEE"
                            d="M14 21h4v4h-4zm12.5 0h4v4h-4zm0 9h4v4h-4z"
                          ></path>
                          <path
                            fill="#5C913B"
                            d="M37.5 37.5A1.5 1.5 0 0136 39H8a1.5 1.5 0 010-3h28a1.5 1.5 0 011.5 1.5z"
                          ></path>
                        </g>
                      </svg>
                    </div>
                    <div className="tagName">Home</div>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="./pages/notification.html">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 44 44"
                        width="24"
                        height="24"
                        aria-hidden="true"
                        className="crayons-icon crayons-icon--default"
                        id="LBicon2"
                      >
                        <g className="nc-icon-wrapper">
                          <path
                            fill="#EF9645"
                            d="M21 22s-6.031 5.274-7.74 6.832c-1.323 1.203.88 3.498 2.135 2.452 3.333-2.785 6.493-4.85 6.493-4.85l.367.526c-1.309.79-4.693 2.858-6.449 4.438-1.324 1.19.767 3.553 2.093 2.365 1.822-1.634 5.995-4.565 5.995-4.565l.368.384c-1.08.679-2.772 1.94-4.985 3.958-1.332 1.215.619 2.485 1.764 1.534 3.116-2.586 3.232-4.383 6.661-5.85C32.935 26.986 21 22 21 22z"
                          ></path>
                          <path
                            fill="#FFCC4D"
                            d="M33.979 12.836c.881-.438 1.653.144 2.106 1.053.448.911 2.532 5.015 2.953 5.869.425.852.191 2.103-.719 2.553-.911.453-2.234 1.054-3.092 2.512-.465.794-2.396 2.887-7.629 5.129-3.427 1.462-6.165 3.938-7.261 4.8-.886.698-2.673-.637-1.343-1.85 2.214-2.02 3.906-3.281 4.985-3.958l-.368-.386s-4.381 3.056-6.238 4.65c-1.261 1.085-2.938-.953-1.613-2.142 1.757-1.58 4.902-3.954 6.211-4.744l-.366-.529s-3.43 2.231-6.765 5.02c-1.113.93-2.847-1.159-1.525-2.364 1.71-1.555 5.043-4.343 7.093-5.499l-.196-.609s-3.218 1.805-5.996 4.494c-.994.961-2.974-.818-1.525-2.293 3.462-3.522 7.958-5.609 9.154-6.413 1.606-1.08 2.451-1.754 1.606-2.133-1.274-.573-3.396-2.582-4.21-4.21-1.053-2.106.44-3.77 2.105-2.106 1.053 1.053 3.159 3.158 5.263 3.158 2.829 0 3.262 1.053 5.264 1.053 1.054-.002 2.106-1.055 2.106-1.055"
                          ></path>
                          <path
                            fill="#EF9645"
                            d="M29.048 19.167c-.334.001-1.439-.15-2.684-.725-1.073-.494-1.905-1.39-2.597-2.142.039.161-.065.354-.283.58.681.792 1.723 1.696 2.654 2.146 1.082.525 2.315.79 2.871.767.572-.024.385-.622.039-.626zm2.167 8.58c-2.264-1.054-4.062-1.934-.974-.66 1.277.525 3.194-2.06 1.315-2.917C27.774 22.444 16 16 16 16s-6.368 7.437-5.58 7.914c.789.474 1.118 3.849 5.665 6.818 4.298 2.808 6.975 4.015 7.981 4.518 2.107 1.053 3.477-1.678 1.833-2.412-2.833-1.266-2.734-1.343 1.418.382 1.537.64 2.829-2.25 1.205-2.981-2.422-1.089-2.64-1.221 1.239.527 1.435.643 3.073-2.264 1.454-3.019z"
                          ></path>
                          <path
                            fill="#FFDC5D"
                            d="M11.09 13.278a1.808 1.808 0 00-2.485.615c-.525.871-2.828 4.683-3.319 5.5-.492.816-.364 2.079.506 2.604.87.526 2.447 1.477 3.236 1.952.789.477 4.011 4.477 8.662 7.279 4.648 2.808 6.366 3.286 7.412 3.697 1.05.41 2.437-1.683.793-2.416-2.837-1.268-4.836-2.438-5.859-3.205l.318-.585s2.837 2.12 6.987 3.848c1.537.64 2.79-1.754 1.167-2.487-2.423-1.089-5.412-2.894-6.651-3.79l.346-.571s3.946 2.494 7.825 4.242c1.431.645 2.632-1.786 1.013-2.542-2.26-1.054-5.448-2.955-7.394-4.277l.338-.5s3.615 2.551 6.705 3.823c1.277.528 2.78-1.861.899-2.721C27.81 22.019 23.525 19 22.401 18.1c-.918-.737-1.181-2.413 1.052-3.158 3.158-1.053 4.211-3.158 4.211-4.211 0-1.489-1.376-2.146-2.104-1.053-2.107 3.158-3.166 2.082-5.263 3.158-2.514 1.291-5.466 2.662-7.179 1.628-.733-.441-2.028-1.186-2.028-1.186"
                          ></path>
                          <path
                            fill="#FFCC4D"
                            d="M22.948 15.721l5.426-2.712a8.282 8.282 0 00-1.763-.172c-2.104 0-4.21-2.105-5.263-3.158-1.665-1.664-3.158 0-2.105 2.106.715 1.428 2.433 3.148 3.705 3.936z"
                          ></path>
                        </g>
                      </svg>
                    </a>
                    <div className="tagName">SignIn/Up</div>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 44 44"
                        width="24"
                        height="24"
                        aria-hidden="true"
                        className="crayons-icon crayons-icon--default"
                        id="LBicon3"
                      >
                        <g className="nc-icon-wrapper">
                          <path
                            fill="#EF9645"
                            d="M21 22s-6.031 5.274-7.74 6.832c-1.323 1.203.88 3.498 2.135 2.452 3.333-2.785 6.493-4.85 6.493-4.85l.367.526c-1.309.79-4.693 2.858-6.449 4.438-1.324 1.19.767 3.553 2.093 2.365 1.822-1.634 5.995-4.565 5.995-4.565l.368.384c-1.08.679-2.772 1.94-4.985 3.958-1.332 1.215.619 2.485 1.764 1.534 3.116-2.586 3.232-4.383 6.661-5.85C32.935 26.986 21 22 21 22z"
                          ></path>
                          <path
                            fill="#FFCC4D"
                            d="M33.979 12.836c.881-.438 1.653.144 2.106 1.053.448.911 2.532 5.015 2.953 5.869.425.852.191 2.103-.719 2.553-.911.453-2.234 1.054-3.092 2.512-.465.794-2.396 2.887-7.629 5.129-3.427 1.462-6.165 3.938-7.261 4.8-.886.698-2.673-.637-1.343-1.85 2.214-2.02 3.906-3.281 4.985-3.958l-.368-.386s-4.381 3.056-6.238 4.65c-1.261 1.085-2.938-.953-1.613-2.142 1.757-1.58 4.902-3.954 6.211-4.744l-.366-.529s-3.43 2.231-6.765 5.02c-1.113.93-2.847-1.159-1.525-2.364 1.71-1.555 5.043-4.343 7.093-5.499l-.196-.609s-3.218 1.805-5.996 4.494c-.994.961-2.974-.818-1.525-2.293 3.462-3.522 7.958-5.609 9.154-6.413 1.606-1.08 2.451-1.754 1.606-2.133-1.274-.573-3.396-2.582-4.21-4.21-1.053-2.106.44-3.77 2.105-2.106 1.053 1.053 3.159 3.158 5.263 3.158 2.829 0 3.262 1.053 5.264 1.053 1.054-.002 2.106-1.055 2.106-1.055"
                          ></path>
                          <path
                            fill="#EF9645"
                            d="M29.048 19.167c-.334.001-1.439-.15-2.684-.725-1.073-.494-1.905-1.39-2.597-2.142.039.161-.065.354-.283.58.681.792 1.723 1.696 2.654 2.146 1.082.525 2.315.79 2.871.767.572-.024.385-.622.039-.626zm2.167 8.58c-2.264-1.054-4.062-1.934-.974-.66 1.277.525 3.194-2.06 1.315-2.917C27.774 22.444 16 16 16 16s-6.368 7.437-5.58 7.914c.789.474 1.118 3.849 5.665 6.818 4.298 2.808 6.975 4.015 7.981 4.518 2.107 1.053 3.477-1.678 1.833-2.412-2.833-1.266-2.734-1.343 1.418.382 1.537.64 2.829-2.25 1.205-2.981-2.422-1.089-2.64-1.221 1.239.527 1.435.643 3.073-2.264 1.454-3.019z"
                          ></path>
                          <path
                            fill="#FFDC5D"
                            d="M11.09 13.278a1.808 1.808 0 00-2.485.615c-.525.871-2.828 4.683-3.319 5.5-.492.816-.364 2.079.506 2.604.87.526 2.447 1.477 3.236 1.952.789.477 4.011 4.477 8.662 7.279 4.648 2.808 6.366 3.286 7.412 3.697 1.05.41 2.437-1.683.793-2.416-2.837-1.268-4.836-2.438-5.859-3.205l.318-.585s2.837 2.12 6.987 3.848c1.537.64 2.79-1.754 1.167-2.487-2.423-1.089-5.412-2.894-6.651-3.79l.346-.571s3.946 2.494 7.825 4.242c1.431.645 2.632-1.786 1.013-2.542-2.26-1.054-5.448-2.955-7.394-4.277l.338-.5s3.615 2.551 6.705 3.823c1.277.528 2.78-1.861.899-2.721C27.81 22.019 23.525 19 22.401 18.1c-.918-.737-1.181-2.413 1.052-3.158 3.158-1.053 4.211-3.158 4.211-4.211 0-1.489-1.376-2.146-2.104-1.053-2.107 3.158-3.166 2.082-5.263 3.158-2.514 1.291-5.466 2.662-7.179 1.628-.733-.441-2.028-1.186-2.028-1.186"
                          ></path>
                          <path
                            fill="#FFCC4D"
                            d="M22.948 15.721l5.426-2.712a8.282 8.282 0 00-1.763-.172c-2.104 0-4.21-2.105-5.263-3.158-1.665-1.664-3.158 0-2.105 2.106.715 1.428 2.433 3.148 3.705 3.936z"
                          ></path>
                        </g>
                      </svg>
                    </a>
                    <div className="tagName">Listings</div>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 44 44"
                        width="24"
                        height="24"
                        id="LBicon4"
                      >
                        <g className="nc-icon-wrapper">
                          <path
                            fill="#292F33"
                            d="M10 19h24v2H10zm15 15c0 2.208-.792 4-3 4-2.209 0-3-1.792-3-4s.791-2 3-2c2.208 0 3-.208 3 2z"
                          ></path>
                          <path
                            fill="#66757F"
                            d="M22 35c-6.627 0-10 1.343-10 3v2h20v-2c0-1.657-3.373-3-10-3z"
                          ></path>
                          <path
                            fill="#99AAB5"
                            d="M22 4a9 9 0 00-9 9v7h18v-7a9 9 0 00-9-9z"
                          ></path>
                          <g fill="#292F33" transform="translate(4 4)">
                            <circle cx="15.5" cy="2.5" r="1.5"></circle>
                            <circle cx="20.5" cy="2.5" r="1.5"></circle>
                            <circle cx="17.5" cy="6.5" r="1.5"></circle>
                            <circle cx="22.5" cy="6.5" r="1.5"></circle>
                            <circle cx="12.5" cy="6.5" r="1.5"></circle>
                            <circle cx="15.5" cy="10.5" r="1.5"></circle>
                            <circle cx="10.5" cy="10.5" r="1.5"></circle>
                            <circle cx="20.5" cy="10.5" r="1.5"></circle>
                            <circle cx="25.5" cy="10.5" r="1.5"></circle>
                            <circle cx="17.5" cy="14.5" r="1.5"></circle>
                            <circle cx="22.5" cy="14.5" r="1.5"></circle>
                            <circle cx="12.5" cy="14.5" r="1.5"></circle>
                          </g>
                          <path
                            fill="#66757F"
                            d="M13 19.062V21c0 4.971 4.029 9 9 9s9-4.029 9-9v-1.938H13z"
                          ></path>
                          <path
                            fill="#66757F"
                            d="M34 18a1 1 0 00-1 1v2c0 6.074-4.925 11-11 11s-11-4.926-11-11v-2a1 1 0 00-2 0v2c0 7.18 5.82 13 13 13s13-5.82 13-13v-2a1 1 0 00-1-1z"
                          ></path>
                        </g>
                      </svg>
                    </a>
                    <div className="tagName">Podcasts</div>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 44 44"
                        width="24"
                        height="24"
                        id="LBicon5"
                      >
                        <g transform="translate(4 4)">
                          <path
                            fill="#31373D"
                            d="M34.074 18l-4.832 3H28v-4c0-.088-.02-.169-.026-.256C31.436 15.864 34 12.735 34 9a8 8 0 00-16.001 0c0 1.463.412 2.822 1.099 4H14.92c.047-.328.08-.66.08-1a7 7 0 10-14 0 6.995 6.995 0 004 6.317V29a4 4 0 004 4h15a4 4 0 004-4v-3h1.242l4.832 3H35V18h-.926zM28.727 3.977a5.713 5.713 0 012.984 4.961L28.18 8.35a2.276 2.276 0 00-.583-.982l1.13-3.391zm-.9 6.342l3.552.592a5.713 5.713 0 01-4.214 3.669 3.985 3.985 0 00-1.392-1.148l.625-2.19a2.425 2.425 0 001.429-.923zM26 3.285c.282 0 .557.027.828.067l-1.131 3.392c-.404.054-.772.21-1.081.446L21.42 5.592A5.703 5.703 0 0126 3.285zM20.285 9c0-.563.085-1.106.236-1.62l3.194 1.597-.002.023c0 .657.313 1.245.771 1.662L23.816 13h-1.871a5.665 5.665 0 01-1.66-4zm-9.088-.385A4.64 4.64 0 0112.667 12c0 .344-.043.677-.113 1H10.1c.145-.304.233-.641.233-1a2.32 2.32 0 00-.392-1.292l1.256-2.093zM8 7.333c.519 0 1.01.105 1.476.261L8.22 9.688c-.073-.007-.145-.022-.22-.022a2.32 2.32 0 00-1.292.392L4.615 8.803A4.64 4.64 0 018 7.333zM3.333 12c0-.519.105-1.01.261-1.477l2.095 1.257c-.007.073-.022.144-.022.22 0 .75.36 1.41.91 1.837a3.987 3.987 0 00-1.353 1.895C4.083 14.881 3.333 13.533 3.333 12z"
                          ></path>
                          <circle fill="#8899A6" cx="24" cy="19" r="2"></circle>
                          <circle fill="#8899A6" cx="9" cy="19" r="2"></circle>
                          <path
                            fill="#8899A6"
                            d="M24 27a2 2 0 00-2-2H11a2 2 0 00-2 2v6a2 2 0 002 2h11a2 2 0 002-2v-6z"
                          ></path>
                        </g>
                      </svg>
                    </a>
                    <div className="tagName">Videos</div>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 44 44"
                        width="24"
                        height="24"
                        id="LBicon6"
                      >
                        <g className="nc-icon-wrapper">
                          <path
                            fill="#FFD983"
                            d="M36.017 24.181L21.345 9.746C20.687 9.087 19.823 9 18.96 9H8.883C7.029 9 6 10.029 6 11.883v10.082c0 .861.089 1.723.746 2.38L21.3 39.017a3.287 3.287 0 004.688 0l10.059-10.088c1.31-1.312 1.28-3.438-.03-4.748zm-23.596-8.76a1.497 1.497 0 11-2.118-2.117 1.497 1.497 0 012.118 2.117z"
                          ></path>
                          <path
                            fill="#D99E82"
                            d="M13.952 11.772a3.66 3.66 0 00-5.179 0 3.663 3.663 0 105.18 5.18 3.664 3.664 0 00-.001-5.18zm-1.53 3.65a1.499 1.499 0 11-2.119-2.12 1.499 1.499 0 012.119 2.12z"
                          ></path>
                          <path
                            fill="#C1694F"
                            d="M12.507 14.501a1 1 0 11-1.415-1.414l8.485-8.485a1 1 0 111.415 1.414l-8.485 8.485z"
                          ></path>
                        </g>
                      </svg>
                    </a>
                    <div className="tagName">Tags</div>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 44 44"
                        width="24"
                        height="24"
                        id="LBicon7"
                      >
                        <g className="nc-icon-wrapper">
                          <path
                            fill="#FFD983"
                            d="M33 15.06c0 6.439-5 7.439-5 13.44 0 3.098-3.123 3.359-5.5 3.359-2.053 0-6.586-.779-6.586-3.361C15.914 22.5 11 21.5 11 15.06c0-6.031 5.285-10.92 11.083-10.92C27.883 4.14 33 9.029 33 15.06z"
                          ></path>
                          <path
                            fill="#CCD6DD"
                            d="M26.167 36.5c0 .828-2.234 2.5-4.167 2.5-1.933 0-4.167-1.672-4.167-2.5 0-.828 2.233-.5 4.167-.5 1.933 0 4.167-.328 4.167.5z"
                          ></path>
                          <path
                            fill="#FFCC4D"
                            d="M26.707 14.293a.999.999 0 00-1.414 0L22 17.586l-3.293-3.293a1 1 0 10-1.414 1.414L21 19.414V30a1 1 0 102 0V19.414l3.707-3.707a.999.999 0 000-1.414z"
                          ></path>
                          <path
                            fill="#99AAB5"
                            d="M28 35a2 2 0 01-2 2h-8a2 2 0 01-2-2v-6h12v6z"
                          ></path>
                          <path
                            fill="#CCD6DD"
                            d="M15.999 36a1 1 0 01-.163-1.986l12-2a.994.994 0 011.15.822.999.999 0 01-.822 1.15l-12 2a.927.927 0 01-.165.014zm0-4a1 1 0 01-.163-1.986l12-2a.995.995 0 011.15.822.999.999 0 01-.822 1.15l-12 2a.927.927 0 01-.165.014z"
                          ></path>
                        </g>
                      </svg>
                    </a>
                    <div className="tagName">FAQ</div>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 44 44"
                        width="24"
                        height="24"
                        id="LBicon8"
                      >
                        <g className="nc-icon-wrapper">
                          <path
                            fill="#F4900C"
                            d="M15 4a8 8 0 00-8 8v8h2v-8a6 6 0 0112 0v8h2v-8a8 8 0 00-8-8z"
                          ></path>
                          <path
                            fill="#DD2E44"
                            d="M5 12l2 2 2-2 2 2 2-2 2 2 2-2 2 2 2-2 2 2 2-2v23H5z"
                          ></path>
                          <path
                            fill="#FFCC4D"
                            d="M29 9a8 8 0 00-8 8v8h2v-8a6 6 0 0112 0v8h2v-8a8 8 0 00-8-8z"
                          ></path>
                          <path
                            fill="#744EAA"
                            d="M19 17l2 2 2-2 2 2 2-2 2 2 2-2 2 2 2-2 2 2 2-2v23H19z"
                          ></path>
                        </g>
                      </svg>
                    </a>
                    <div className="tagName">DEV Shop</div>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 44 44"
                        width="24"
                        height="24"
                        id="LBicon9"
                      >
                        <path
                          fill="#DD2E44"
                          d="M39.885 15.833c0-5.45-4.418-9.868-9.867-9.868-3.308 0-6.227 1.633-8.018 4.129-1.791-2.496-4.71-4.129-8.017-4.129-5.45 0-9.868 4.417-9.868 9.868 0 .772.098 1.52.266 2.241C5.751 26.587 15.216 35.568 22 38.034c6.783-2.466 16.249-11.447 17.617-19.959.17-.721.268-1.469.268-2.242z"
                        ></path>
                      </svg>
                    </a>
                    <div className="tagName">Sponsors</div>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link">
                      <svg
                        viewBox="0 0 235 234"
                        xmlns="http://www.w3.org/2000/svg"
                        className="rainbow-logo"
                        width="24"
                        height="24"
                        preserveAspectRatio="xMinYMin meet"
                        id="LBicon10"
                      >
                        <g fill="none" fillRule="evenodd">
                          <path
                            fill="#88AEDC"
                            d="M234.04 175.67l-75.69 58.28h47.18L234.04 212z"
                          ></path>
                          <path d="M234.04 140.06l-121.93 93.89h.02l121.91-93.87zM133.25.95L.04 103.51v.02L133.27.95z"></path>
                          <path
                            fill="#F58F8E"
                            fillRule="nonzero"
                            d="M.04.95v30.16L39.21.95z"
                          ></path>
                          <path
                            fill="#FEE18A"
                            fillRule="nonzero"
                            d="M39.21.95L.04 31.11v35.9L85.84.95z"
                          ></path>
                          <path
                            fill="#F3F095"
                            fillRule="nonzero"
                            d="M85.84.95L.04 67.01v36.5L133.25.95z"
                          ></path>
                          <path
                            fill="#55C1AE"
                            fillRule="nonzero"
                            d="M133.27.95L.04 103.53v35.59L179.49.95z"
                          ></path>
                          <path
                            fill="#F7B3CE"
                            fillRule="nonzero"
                            d="M234.04.95h-7.37L.04 175.45v35.93l234-180.18z"
                          ></path>
                          <path
                            fill="#88AEDC"
                            fillRule="nonzero"
                            d="M179.49.95L.04 139.12v36.33L226.67.95z"
                          ></path>
                          <path
                            fill="#F58F8E"
                            fillRule="nonzero"
                            d="M234.04 31.2L.04 211.38v22.57h18.03l215.97-166.3z"
                          ></path>
                          <path
                            fill="#FEE18A"
                            fillRule="nonzero"
                            d="M234.04 67.65L18.07 233.95H64.7l169.34-130.39z"
                          ></path>
                          <path
                            fill="#F3F095"
                            fillRule="nonzero"
                            d="M234.04 103.56L64.7 233.95h47.41l121.93-93.89z"
                          ></path>
                          <path
                            fill="#55C1AE"
                            fillRule="nonzero"
                            d="M234.04 140.08l-121.91 93.87h46.22l75.69-58.28z"
                          ></path>
                          <path
                            fill="#F7B3CE"
                            fillRule="nonzero"
                            d="M234.04 212l-28.51 21.95h28.51z"
                          ></path>
                          <path
                            d="M65.237 77.75c4.514.95 7.774 2.8 11.135 6.3 3.059 3.2 4.965 6.85 5.767 10.95.652 3.45.652 40.55 0 44.05-1.705 9.1-9.479 16.2-19.109 17.45-2.006.25-8.727.5-14.845.5H37V77h12.438c8.828 0 13.342.2 15.8.75zM51.545 117v25.6l5.166-.2c4.464-.15 5.417-.35 7.423-1.5 3.912-2.3 3.962-2.45 3.962-24.2 0-21.2 0-21.2-3.661-23.6-1.806-1.2-2.558-1.35-7.473-1.55l-5.417-.15V117zm79.245-32.75v7.25h-25.58v18h15.549V124H105.21l.1 9.1.15 9.15 12.69.15 12.638.1V157h-14.795c-16.451 0-19.009-.3-21.617-2.6-3.661-3.2-3.46-1.15-3.611-36.3-.1-21.9.05-32.25.401-33.65.702-2.6 3.661-5.8 6.27-6.7 1.554-.55 5.466-.7 17.704-.75h15.648v7.25zm31.647 20.85c3.712 14.25 6.821 25.6 6.922 25.25.15-.35 3.31-12.4 7.071-26.85l6.872-26.25 7.824-.15c5.918-.1 7.874.05 7.874.5s-17.354 66.2-18.357 69.5c-.702 2.3-4.463 7-6.57 8.25-2.658 1.5-6.57 1.75-8.978.5-2.156-1.1-5.015-4.4-6.47-7.5-.902-1.9-15.648-56-19.058-70l-.352-1.35h7.825c7.673 0 7.874 0 8.275 1.1.2.65 3.41 12.8 7.122 27z"
                            fill="#FFF"
                          ></path>
                        </g>
                      </svg>
                    </a>
                    <div className="tagName">About</div>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 44 44"
                        width="24"
                        height="24"
                        id="LBicon11"
                      >
                        <g className="nc-icon-wrapper">
                          <path
                            fill="#FFAC33"
                            d="M38.724 33.656c-1.239-.01-1.241 1.205-1.241 1.205H22.5c-5.246 0-9.5-4.254-9.5-9.5s4.254-9.5 9.5-9.5 9.5 4.254 9.5 9.5c0 3.062-1.6 5.897-3.852 7.633h5.434C35.022 30.849 36 28.139 36 25.361c0-7.456-6.045-13.5-13.5-13.5-7.456 0-13.5 6.044-13.5 13.5 0 7.455 6.044 13.5 13.5 13.5h14.982s-.003 1.127 1.241 1.139c1.238.012 1.228-1.245 1.228-1.245l.014-3.821s.001-1.267-1.241-1.278zM9 18.26a16.047 16.047 0 014-4.739V13c0-5 5-7 5-8s-1-1-1-1H5C4 4 4 5 4 5c0 1 5 3.333 5 7.69v5.57z"
                          ></path>
                          <path
                            fill="#BE1931"
                            d="M17.091 33.166a9.487 9.487 0 01-4.045-8.72l-3.977-.461c-.046.452-.069.911-.069 1.376 0 4.573 2.28 8.608 5.76 11.051l2.331-3.246z"
                          ></path>
                          <path
                            fill="#BE1931"
                            d="M10 29.924s-5.188-.812-5 1 5-1 5-1zm0 .312s-4.125 2.688-2.938 3.75S10 30.236 10 30.236z"
                          ></path>
                        </g>
                      </svg>
                    </a>
                    <div className="tagName">Contact</div>
                  </li>
                </ul>
              </div>

              {/* <!--3-OtherSection--> */}
              <div className="LBcontOther">
                <div className="LBOcont0">Other</div>
                <ul className="nav nav-pills flex-column" />
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 44 44"
                      width="24"
                      height="24"
                      id="LBOIcon1"
                    >
                      <g className="nc-icon-wrapper">
                        <path
                          fill="#FFDB5E"
                          d="M38.956 21.916c0-.503-.12-.975-.321-1.404-1.341-4.326-7.619-4.01-16.549-4.221-1.493-.035-.639-1.798-.115-5.668.341-2.517-1.282-6.382-4.01-6.382-4.498 0-.171 3.548-4.148 12.322-2.125 4.688-6.875 2.062-6.875 6.771v10.719c0 1.833.18 3.595 2.758 3.885 2.499.281 1.937 2.062 5.542 2.062h18.044a3.337 3.337 0 003.333-3.334c0-.762-.267-1.456-.698-2.018 1.02-.571 1.72-1.649 1.72-2.899 0-.76-.266-1.454-.696-2.015 1.023-.57 1.725-1.649 1.725-2.901 0-.909-.368-1.733-.961-2.336a3.311 3.311 0 001.251-2.581z"
                        ></path>
                        <path
                          fill="#EE9547"
                          d="M27.02 25.249h8.604c1.17 0 2.268-.626 2.866-1.633a.876.876 0 00-1.506-.892 1.588 1.588 0 01-1.361.775h-8.81c-.873 0-1.583-.71-1.583-1.583s.71-1.583 1.583-1.583H32.7a.875.875 0 000-1.75h-5.888a3.337 3.337 0 00-3.333 3.333c0 1.025.475 1.932 1.205 2.544a3.32 3.32 0 00-.998 2.373c0 1.028.478 1.938 1.212 2.549a3.318 3.318 0 00.419 5.08 3.305 3.305 0 00-.852 2.204 3.337 3.337 0 003.333 3.333h5.484a3.35 3.35 0 002.867-1.632.875.875 0 00-1.504-.894 1.594 1.594 0 01-1.363.776h-5.484c-.873 0-1.583-.71-1.583-1.583s.71-1.583 1.583-1.583h6.506a3.35 3.35 0 002.867-1.633.875.875 0 10-1.504-.894 1.572 1.572 0 01-1.363.777h-7.063a1.585 1.585 0 010-3.167h8.091a3.35 3.35 0 002.867-1.632.875.875 0 00-1.504-.894 1.573 1.573 0 01-1.363.776H27.02a1.585 1.585 0 010-3.167z"
                        ></path>
                      </g>
                    </svg>
                  </a>
                  <div className="tagName">Code of Conduct</div>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 44 44"
                      width="24"
                      height="24"
                      id="LBOicon2"
                    >
                      <g transform="translate(4 4)">
                        <circle fill="#FFCC4D" cx="18" cy="18" r="18"></circle>
                        <path
                          fill="#664500"
                          d="M27.335 23.629a.501.501 0 00-.635-.029c-.039.029-3.922 2.9-8.7 2.9-4.766 0-8.662-2.871-8.7-2.9a.5.5 0 10-.729.657C8.7 24.472 11.788 29.5 18 29.5s9.301-5.028 9.429-5.243a.499.499 0 00-.094-.628z"
                        ></path>
                        <path
                          fill="#65471B"
                          d="M18 26.591c-.148 0-.291-.011-.438-.016v4.516h.875v-4.517c-.145.005-.289.017-.437.017z"
                        ></path>
                        <path
                          fill="#FFF"
                          d="M22 26c.016-.004-1.45.378-2.446.486-.366.042-.737.076-1.117.089v4.517H20c1.1 0 2-.9 2-2V26zm-8 0c-.016-.004 1.45.378 2.446.486.366.042.737.076 1.117.089v4.517H16c-1.1 0-2-.9-2-2V26z"
                        ></path>
                        <path
                          fill="#65471B"
                          d="M27.335 23.629a.501.501 0 00-.635-.029c-.03.022-2.259 1.668-5.411 2.47-.443.113-1.864.43-3.286.431-1.424 0-2.849-.318-3.292-.431-3.152-.802-5.381-2.448-5.411-2.47a.501.501 0 00-.729.657c.097.162 1.885 3.067 5.429 4.481v-1.829c-.016-.004 1.45.378 2.446.486.366.042.737.076 1.117.089.146.005.289.016.437.016.148 0 .291-.011.438-.016.38-.013.751-.046 1.117-.089.996-.108 2.462-.49 2.446-.486v1.829c3.544-1.414 5.332-4.319 5.429-4.481a.5.5 0 00-.095-.628zm-.711-9.605c0 1.714-.938 3.104-2.096 3.104-1.157 0-2.096-1.39-2.096-3.104s.938-3.104 2.096-3.104c1.158 0 2.096 1.39 2.096 3.104zm-17.167 0c0 1.714.938 3.104 2.096 3.104 1.157 0 2.096-1.39 2.096-3.104s-.938-3.104-2.096-3.104c-1.158 0-2.096 1.39-2.096 3.104z"
                        ></path>
                        <path
                          fill="#292F33"
                          d="M34.808 9.627c-.171-.166-1.267.274-2.376-.291-2.288-1.166-8.07-2.291-11.834.376-.403.285-2.087.333-2.558.313-.471.021-2.155-.027-2.558-.313-3.763-2.667-9.545-1.542-11.833-.376-1.109.565-2.205.125-2.376.291-.247.239-.247 1.196.001 1.436.246.239 1.477.515 1.722 1.232.247.718.249 4.958 2.213 6.424 1.839 1.372 6.129 1.785 8.848.238 2.372-1.349 2.289-4.189 2.724-5.881.155-.603.592-.907 1.26-.907s1.105.304 1.26.907c.435 1.691.351 4.532 2.724 5.881 2.719 1.546 7.009 1.133 8.847-.238 1.965-1.465 1.967-5.706 2.213-6.424.245-.717 1.476-.994 1.722-1.232.248-.24.249-1.197.001-1.436zm-20.194 3.65c-.077 1.105-.274 3.227-1.597 3.98-.811.462-1.868.743-2.974.743h-.001c-1.225 0-2.923-.347-3.587-.842-.83-.619-1.146-3.167-1.265-4.12-.076-.607-.28-2.09.388-2.318 1.06-.361 2.539-.643 4.052-.643.693 0 3.021.043 4.155.741 1.005.617.872 1.851.829 2.459zm16.278-.253c-.119.954-.435 3.515-1.265 4.134-.664.495-2.362.842-3.587.842h-.001c-1.107 0-2.163-.281-2.975-.743-1.323-.752-1.52-2.861-1.597-3.966-.042-.608-.176-1.851.829-2.468 1.135-.698 3.462-.746 4.155-.746 1.513 0 2.991.277 4.052.638.668.228.465 1.702.389 2.309z"
                        ></path>
                      </g>
                    </svg>
                  </a>
                  <div className="tagName">Privacy Policy</div>
                </li>

                <li className="nav-item">
                  <a className="nav-link" href="#">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 44 44"
                      width="24"
                      height="24"
                    >
                      <g transform="translate(4 4)">
                        <ellipse
                          fill="#F5F8FA"
                          cx="8.828"
                          cy="18"
                          rx="7.953"
                          ry="13.281"
                        ></ellipse>
                        <path
                          fill="#E1E8ED"
                          d="M8.828 32.031C3.948 32.031.125 25.868.125 18S3.948 3.969 8.828 3.969 17.531 10.132 17.531 18s-3.823 14.031-8.703 14.031zm0-26.562C4.856 5.469 1.625 11.09 1.625 18s3.231 12.531 7.203 12.531S16.031 24.91 16.031 18 12.8 5.469 8.828 5.469z"
                        ></path>
                        <circle
                          fill="#8899A6"
                          cx="6.594"
                          cy="18"
                          r="4.96"
                        ></circle>
                        <circle
                          fill="#292F33"
                          cx="6.594"
                          cy="18"
                          r="3.565"
                        ></circle>
                        <circle
                          fill="#F5F8FA"
                          cx="7.911"
                          cy="15.443"
                          r="1.426"
                        ></circle>
                        <ellipse
                          fill="#F5F8FA"
                          cx="27.234"
                          cy="18"
                          rx="7.953"
                          ry="13.281"
                        ></ellipse>
                        <path
                          fill="#E1E8ED"
                          d="M27.234 32.031c-4.88 0-8.703-6.163-8.703-14.031s3.823-14.031 8.703-14.031S35.938 10.132 35.938 18s-3.824 14.031-8.704 14.031zm0-26.562c-3.972 0-7.203 5.622-7.203 12.531 0 6.91 3.231 12.531 7.203 12.531S34.438 24.91 34.438 18 31.206 5.469 27.234 5.469z"
                        ></path>
                        <circle
                          fill="#8899A6"
                          cx="25"
                          cy="18"
                          r="4.96"
                        ></circle>
                        <circle
                          fill="#292F33"
                          cx="25"
                          cy="18"
                          r="3.565"
                        ></circle>
                        <circle
                          fill="#F5F8FA"
                          cx="26.317"
                          cy="15.443"
                          r="1.426"
                        ></circle>
                      </g>
                    </svg>
                  </a>
                  <div className="tagName">Terms of use</div>
                </li>
              </div>

              {/* <!--4-SocialNetwork--> */}
              <div className="LBcontRedS">
                <div
                  className="btn-group d-flex"
                  role="group"
                  aria-label="Basic example"
                >
                  <div className="btn">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      color="#efefef;"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      role="img"
                      aria-labelledby="ai4pdf64bypf8q80ywn553hvgqbrl1jp"
                      id="LBiconRS1"
                      className="crayons-icon"
                    >
                      <title>Twitter</title>
                      <path
                        d="M22.162 5.656a8.383 8.383 0 01-2.402.658A4.196 4.196 0 0021.6 4c-.82.488-1.719.83-2.656 1.015a4.182 4.182 0 00-7.126 3.814 11.874 11.874 0 01-8.62-4.37 4.168 4.168 0 00-.566 2.103c0 1.45.738 2.731 1.86 3.481a4.168 4.168 0 01-1.894-.523v.052a4.185 4.185 0 003.355 4.101 4.211 4.211 0 01-1.89.072A4.185 4.185 0 007.97 16.65a8.395 8.395 0 01-6.191 1.732 11.83 11.83 0 006.41 1.88c7.693 0 11.9-6.373 11.9-11.9 0-.18-.005-.362-.013-.54a8.495 8.495 0 002.087-2.165l-.001-.001z"
                        fill="##7c7a7a"
                      ></path>
                    </svg>
                  </div>
                  <div className="btn">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      role="img"
                      aria-labelledby="amdtg958ehcf4servl7s3trcpskvnoki"
                      className="crayons-icon"
                      id="LBiconRS2"
                    >
                      <title>Facebook</title>
                      <path d="M15.402 21v-6.966h2.333l.349-2.708h-2.682V9.598c0-.784.218-1.319 1.342-1.319h1.434V5.857a19.188 19.188 0 00-2.09-.107c-2.067 0-3.482 1.262-3.482 3.58v1.996h-2.338v2.708h2.338V21H4a1 1 0 01-1-1V4a1 1 0 011-1h16a1 1 0 011 1v16a1 1 0 01-1 1h-4.598z"></path>
                    </svg>
                  </div>
                  <div className="btn">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      role="img"
                      aria-labelledby="abf06n84py7jjo9xf3s959qj9bv1w4l0"
                      className="crayons-icon"
                      id="LBiconRS3"
                    >
                      <title>Github</title>
                      <path d="M12 2C6.475 2 2 6.475 2 12a9.994 9.994 0 006.838 9.488c.5.087.687-.213.687-.476 0-.237-.013-1.024-.013-1.862-2.512.463-3.162-.612-3.362-1.175-.113-.288-.6-1.175-1.025-1.413-.35-.187-.85-.65-.013-.662.788-.013 1.35.725 1.538 1.025.9 1.512 2.338 1.087 2.912.825.088-.65.35-1.087.638-1.337-2.225-.25-4.55-1.113-4.55-4.938 0-1.088.387-1.987 1.025-2.688-.1-.25-.45-1.275.1-2.65 0 0 .837-.262 2.75 1.026a9.28 9.28 0 012.5-.338c.85 0 1.7.112 2.5.337 1.912-1.3 2.75-1.024 2.75-1.024.55 1.375.2 2.4.1 2.65.637.7 1.025 1.587 1.025 2.687 0 3.838-2.337 4.688-4.562 4.938.362.312.675.912.675 1.85 0 1.337-.013 2.412-.013 2.75 0 .262.188.574.688.474A10.016 10.016 0 0022 12c0-5.525-4.475-10-10-10z"></path>
                    </svg>
                  </div>
                  <div className="btn">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      role="img"
                      aria-labelledby="a840zosj3uvz7e41xbf70nom69z3k0ox"
                      className="crayons-icon"
                      id="LBiconRS4"
                    >
                      <title>Instagram</title>
                      <path d="M12 2c2.717 0 3.056.01 4.122.06 1.065.05 1.79.217 2.428.465.66.254 1.216.598 1.772 1.153.509.5.902 1.105 1.153 1.772.247.637.415 1.363.465 2.428.047 1.066.06 1.405.06 4.122 0 2.717-.01 3.056-.06 4.122-.05 1.065-.218 1.79-.465 2.428a4.883 4.883 0 01-1.153 1.772c-.5.508-1.105.902-1.772 1.153-.637.247-1.363.415-2.428.465-1.066.047-1.405.06-4.122.06-2.717 0-3.056-.01-4.122-.06-1.065-.05-1.79-.218-2.428-.465a4.89 4.89 0 01-1.772-1.153 4.904 4.904 0 01-1.153-1.772c-.248-.637-.415-1.363-.465-2.428C2.013 15.056 2 14.717 2 12c0-2.717.01-3.056.06-4.122.05-1.066.217-1.79.465-2.428a4.88 4.88 0 011.153-1.772A4.897 4.897 0 015.45 2.525c.638-.248 1.362-.415 2.428-.465C8.944 2.013 9.283 2 12 2zm0 5a5 5 0 100 10 5 5 0 000-10zm6.5-.25a1.25 1.25 0 10-2.5 0 1.25 1.25 0 002.5 0zM12 9a3 3 0 110 6 3 3 0 010-6z"></path>
                    </svg>
                  </div>
                  <div className="btn">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      role="img"
                      aria-labelledby="aku177oz4ckizrnc4xhuqlxpugrj8y27"
                      className="crayons-icon"
                      id="LBiconRS5"
                    >
                      <title>Twitch</title>
                      <path d="M4.3 3H21v11.7l-4.7 4.7h-3.9l-2.5 2.4H7v-2.4H3V6.2L4.3 3zM5 17.4h4v2.4h.095l2.5-2.4h3.877L19 13.872V5H5v12.4zM15 8h2v4.7h-2V8zm0 0h2v4.7h-2V8zm-5 0h2v4.7h-2V8z"></path>
                    </svg>
                  </div>
                </div>
              </div>

              {/* <!--5-PopularTags--> */}
              <div className="LBcontTags">
                <div className="contHeadTags">
                  <div className="LBheadTags">My Tags</div>
                  <a
                    id="tag-priority-link"
                    href="/dashboard/following_tags"
                    className="crayons-btn crayons-btn--icon crayons-btn--ghost-dimmed"
                    aria-label="Customize tag priority"
                    title="Customize tag priority"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      className="crayons-icon"
                    >
                      <path d="M12 1l9.5 5.5v11L12 23l-9.5-5.5v-11L12 1zm0 2.311L4.5 7.653v8.694l7.5 4.342 7.5-4.342V7.653L12 3.311zM12 16a4 4 0 110-8 4 4 0 010 8zm0-2a2 2 0 100-4 2 2 0 000 4z"></path>
                    </svg>
                  </a>
                </div>

                <div className="list-group">
                  <a
                    href="#"
                    className="list-group-item list-group-item-action"
                  >
                    #javascript
                  </a>
                  <a
                    href="#"
                    className="list-group-item list-group-item-action"
                  >
                    #webdev
                  </a>
                  <a
                    href="#"
                    className="list-group-item list-group-item-action"
                  >
                    #beginners
                  </a>
                  <a
                    href="#"
                    className="list-group-item list-group-item-action"
                  >
                    #react
                  </a>
                  <a
                    href="#"
                    className="list-group-item list-group-item-action"
                  >
                    #programming
                  </a>
                  <a
                    href="#"
                    className="list-group-item list-group-item-action"
                  >
                    #tutorial
                  </a>
                  <a
                    href="#"
                    className="list-group-item list-group-item-action"
                  >
                    #python
                  </a>
                  <a
                    href="#"
                    className="list-group-item list-group-item-action"
                  >
                    #css
                  </a>
                  <a
                    href="#"
                    className="list-group-item list-group-item-action"
                  >
                    #showdev
                  </a>
                  <a
                    href="#"
                    className="list-group-item list-group-item-action"
                  >
                    #docker
                  </a>
                  <a
                    href="#"
                    className="list-group-item list-group-item-action"
                  >
                    #angular
                  </a>
                </div>
              </div>

              {/* <!--6-Publicity--> */}
              <div className="LBcontPub">
                <img
                  src="https://res.cloudinary.com/practicaldev/image/fetch/s--Th3frs95--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_350/https://thepracticaldev.s3.amazonaws.com/i/a7tz6hpmtwmgx2pe2ch2.jpg"
                  // style="margin-top:15px;" loading="lazy"
                />
                <h4 className="LBpub">DEV Up Your Style</h4>
              </div>
            </div>
            {/* <!-- Main body --> */}
            <div className="col-lg-6 col-md-6 col-sm-10 main__body">
              <nav className="d-flex justify-content-between ">
                <ul className="d-flex ms-3">
                  <li>
                    <a
                      href="#"
                      className="li-select me-3 text-dark headFilter headSelected"
                      id="feed"
                    >
                      Feed
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="me-3 text-dark headFilter"
                      id="latest"
                    >
                      Latest
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-dark headFilter" id="top">
                      Top
                    </a>
                  </li>
                </ul>
                <ul className="d-flex ms-3 topLinked">
                  <li>
                    <a
                      href="#"
                      className="li-select me-3 text-dark headFilterByTime headSelected"
                      id="week"
                    >
                      Week
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="me-3 text-dark headFilterByTime"
                      id="month"
                    >
                      Month
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-dark headFilterByTime"
                      id="year"
                    >
                      Year
                    </a>
                  </li>
                </ul>
              </nav>

              <section className="authentication__card">
                <article className="authentication__body">
                  <div className="feed__container">
                    <figure className="feed__image-container">
                      <img
                        className="feed__image"
                        src="https://res.cloudinary.com/practicaldev/image/fetch/s--pcSkTMZL--/c_limit,f_auto,fl_progressive,q_80,w_190/https://practicaldev-herokuapp-com.freetls.fastly.net/assets/devlogo-pwa-512.png"
                        alt=""
                      />
                    </figure>
                    <div className="feed__title">
                      <h2>
                        <a href="">DEV Community</a> is a community of 696,623
                        amazing developers
                      </h2>
                      <p>
                        We're a place where coders share, stay up-to-date and
                        grow their careers.
                      </p>
                    </div>
                  </div>
                  <div className="feed__actions">
                    <a href="#" className="btn btn-blue">
                      Create new account
                    </a>
                    <a href="#" className="btn btn-transparent">
                      Log in
                    </a>
                  </div>
                </article>
              </section>

              
              {square.map(i=>
             
                <Cards 
                   key={i._id}
                   id={i._id}
		               date={i.date}
		               likes={i.likes}
		               title={i.title}
		               tags={i.tags}
		               url={i.url}
                />)
              }

            </div>
            <div className="col-3" id="asideR">
              <div className="row">
                <div className="col-12">
                  <div className="row">
                    <div className="p-3 card_g_ar">
                      <p>
                        <a href="https://dev.to/devteam/listen-to-s6e6-of-devdiscuss-vs-code-and-the-extended-vs-code-universe-with-jonathan-carter-cassidy-williams-487f">
                          <img
                            className="image_ar"
                            src="https://res.cloudinary.com/practicaldev/image/fetch/s--EDoP9zp7--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_350/https://res.cloudinary.com/practicaldev/image/fetch/s--otY2jCJh--/c_fill%2Cf_auto%2Cfl_progressive%2Ch_420%2Cq_auto%2Cw_420/https://dev-to-uploads.s3.amazonaws.com/uploads/podcast/image/235/08786d8b-7ef4-4c00-bc40-f4b3cbca5834.jpg"
                            // style="float:left;width:115px;margin-right:15px;"
                            alt="The logo for the DevDiscuss podcast."
                            loading="lazy"
                          />
                        </a>
                      </p>
                      <h4>Listen to DevDiscuss S6E6! 🎧</h4>
                      <p>
                        <small>
                          "VS Code &amp; the Extended VS Code Universe"
                          <a href="https://dev.to/devteam/listen-to-s6e6-of-devdiscuss-vs-code-and-the-extended-vs-code-universe-with-jonathan-carter-cassidy-williams-487f">
                            <b>→ tune in!</b>
                          </a>
                        </small>
                      </p>
                    </div>
                  </div>
                  <div className="row">
                    <div className="p-3 card_g_ar">
                      <header className="card_header_ar">
                        <h3>Listings</h3>
                        <div className="actions_ar">
                          <a
                            href="/listings"
                            className="crayons-link--branded fw-medium fs-s"
                          >
                            See all
                          </a>
                        </div>
                      </header>
                      <div>
                        <a
                          className="card_link_ar"
                          href="/listings/jobs/ruby-on-rails-developer-full-time-remote-49em"
                        >
                          <div className="primer_ar">
                            Ruby on Rails Developer – Full-Time, Remote
                          </div>
                          <div className="card_link_secon_ar">jobs</div>
                        </a>
                        <a
                          className="card_link_ar"
                          href="/listings/collabs/choose-build-get-rewarded-1-3m-funding-268n"
                        >
                          <div className="primer_ar">
                            Choose. Build. Get rewarded. $1.3M+ funding.
                          </div>
                          <div className="card_link_secon_ar">collabs</div>
                        </a>
                        <a
                          className="card_link_ar"
                          href="/listings/events/free-live-devops-careers-q-a-session-4bea"
                        >
                          <div>Free Live DevOps Careers Q&amp;A session</div>
                          <div className="card_link_secon_ar">events</div>
                        </a>
                        <a
                          className="card_link_ar"
                          href="/listings/events/the-future-of-html-controls-free-session-sep-23-1pm-et-gmt-4-902"
                        >
                          <div className="primer_ar">
                            The Future of HTML Controls - Free Session - Sep 23,
                            1pm ET (GMT -4)
                          </div>
                          <div className="card_link_secon_ar">events</div>
                        </a>
                        <a
                          className="card_link_ar"
                          href="/listings/events/top-devternity-conference-2ebo"
                        >
                          <div className="primer_ar">
                            ❗ ATTENTION ❗ DevTernity is coming!
                          </div>
                          <div className="card_link_secon_ar">events</div>
                        </a>
                        <a id="final_link" href="/listings/new">
                          Create a Listing
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="p-3 card_g_ar">
                      <header className="crayons-card__header">
                        <h3 className="subtitle_ar">
                          <a href="/t/news" className="link_sub">
                            #news
                          </a>
                        </h3>
                      </header>
                      <div>
                        <a
                          className="card_link_ar"
                          href="/o1lab/how-my-open-source-project-got-angel-investment-from-its-user-12dp"
                        >
                          How my open source project got angel investment from a
                          user itself!
                          <div className="card_link_secon_ar">1 comment</div>
                        </a>
                        <a
                          className="card_link_ar"
                          href="/dgbarreto/mudanca-de-privacidade-chegando-k0g"
                        >
                          Mudança de Privacidade Chegando
                          <div className="card_link_secon_ar">
                            <span className="indicator-ar">New</span>
                          </div>
                        </a>
                        <a
                          className="card_link_ar"
                          href="/ats1999/save-your-application-from-crashing-by-wrong-use-of-web-storage-api-or-localstorage-in-browser-i53"
                        >
                          Save your application from crashing by wrong use of
                          Web Storage API or localStorage in browser
                          <div className="card_link_secon_ar">2 comments</div>
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="p-3 card_g_ar">
                      <header className="crayons-card__header">
                        <h3 className="subtitle_ar">
                          <a href="/t/help" className="link_sub">
                            #help
                          </a>
                        </h3>
                      </header>
                      <div>
                        <a
                          className="card_link_ar"
                          href="/robins/hello-world-gaf"
                        >
                          Hello, World!
                          <div className="card_link_secon_ar">
                            <span className="indicator-ar">New</span>
                          </div>
                        </a>
                        <a
                          className="card_link_ar"
                          href="/hurdacitelefonu/i-stanbul-da-hurdacilik-hizmeti-veriyoruz-36dl"
                        >
                          My first website...
                          <div className="card_link_secon_ar">
                            <span className="indicator-ar">New</span>
                          </div>
                        </a>
                        <a
                          className="card_link_ar"
                          href="/mrdulin/when-i-create-a-post-how-to-automatically-complete-the-tag-metadata-gn1"
                        >
                          When I create a post, how to automatically complete
                          the tag metadata?
                          <div className="card_link_secon_ar">1 comment</div>
                        </a>
                        <a
                          className="card_link_ar"
                          href="/yobretyo/esp-eye-what-package-library-do-i-use-3pgb"
                        >
                          Esp-eye, what package / library do I use?
                          <div className="card_link_secon_ar">
                            <span className="indicator-ar">New</span>
                          </div>
                        </a>
                        <a
                          className="card_link_ar"
                          href="/esaldivar/how-to-write-a-readme-3ge9"
                        >
                          How to write a README
                          <div className="card_link_secon_ar">2 comments</div>
                        </a>
                      </div>
                    </div>
                  </div>
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
                – A constructive and inclusive social network for software
                developers. With you every step of your journey.
              </p>
            </div>
            <div className="row justify-content-center">
              <div className="col-lg-5 col-md-8 col-sm-11">
                <p id="p_footer">
                  Built on
                  <a href="#" className="link-footer">
                    Forem
                  </a>
                  — the
                  <a href="#" className="link-footer">
                    open source
                  </a>
                  software that powers
                  <a href="#" className="link-footer">
                    DEV
                  </a>
                  and other inclusive communities.
                </p>
                <p>
                  Made with love and
                  <a href="#" className="link-footer">
                    Ruby on Rails
                  </a>
                  . DEV Community
                  <span title="copyright">©</span>
                  2016 - 2021
                </p>
              </div>
            </div>
            <div className="row justify-content-center">
              <div className="col-lg-5 col-md-8 col-sm-11">
                <a href="https://www.forem.com" target="_blank" rel="noopener">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    role="img"
                    aria-labelledby="a90ameo99abv4mvu74q8kbippd0v8ehc"
                    className="crayons-icon crayons-icon--default"
                  >
                    <title id="a90ameo99abv4mvu74q8kbippd0v8ehc">
                      Forem logo
                    </title>
                    <g clipPath="url(#clip0)" fill="#1AB3A6">
                      <path d="M4.603 1.438a8.056 8.056 0 017.643 5.478 8.543 8.543 0 00-3.023 5.968H8.054C3.606 12.884 0 9.296 0 4.87V1.468a.03.03 0 01.03-.03h4.573zM23.97 6.515a.03.03 0 01.03.03v2.833c0 4.11-3.354 7.442-7.491 7.442h-2.881v5.726h-2.305V14.53l.022-1.145c.294-3.843 3.526-6.87 7.469-6.87h5.155z"></path>
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
}

export default Home;
