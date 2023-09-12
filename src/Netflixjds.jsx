
import React, { Component } from 'react';
import { BsFillBellFill } from "react-icons/bs";
import {AiOutlineSearch} from "react-icons/ai";

class Netflixjds extends Component {
  componentDidMount() {
  
    window.addEventListener('scroll', this.handleScroll);
  }

  componentWillUnmount() {

    window.removeEventListener('scroll', this.handleScroll);
  }

  handleScroll() {
    const nav = document.getElementById('nav');
    if (window.scrollY >= 100) {
      nav.classList.add('nav__black');
    } else {
      nav.classList.remove('nav__black');
    }
  }

  render() {

  return (
             
        <div>
          {/* nav */}
          <div id="nav" className="nav">
            <img className="nav__logo" src={require("./images/netflix-logo.png")}  alt="" />
            <div className='nav-left'>
            <h5 className='nav_home'>Home</h5>
            <h5 className='nav_tv'>TV Shows</h5>
            <h5 className='nav_movies'>Movies</h5>
            <h5 className='nav_news'>News & Popular</h5>
            <h5 className='nav_mylist'>MyList</h5>
            <h5 className='nav_browse'>Browse By Language</h5>
            <h5><AiOutlineSearch style={{marginLeft:'520px',marginTop:'5px'}} size={24} color="white" /></h5>
            <h5 className='nav_name'> Jaiser</h5>
              <h5><BsFillBellFill style={{marginLeft:'10px', marginTop:'5px'}} size={24} color="white" /></h5>
            <img className="nav__avatar" src={require("./images/netflix-avatar.png")} style={{marginLeft:'20px'}} alt="" />
            </div>
            
          </div>
    
          {/* header */}
          <header className="banner">
            <div className="banner__contents">
              <h1 className="banner__title">Money Heist</h1>
              <div className="banner__buttons">
                <button className="banner__button">Play</button>
                <button className="banner__button">My List</button>
              </div>
              <h1 className="banner__description">
                To carry out the biggest heist in history, a mysterious man called The Professor recruits
                a band of eight robbers who have a single characteristic: n...
              </h1>
            </div>
            <div className="banner--fadeBottom"></div>
          </header>
    
          {/* Netflix Originals */}
          <div className="row">
            <h2>NETFLIX ORIGINALS</h2>
            <div className="row__posters">
              <img className="row__poster row__posterLarge" src={require("./images/large-movie1.jpg")} alt="" />
              <img className="row__poster row__posterLarge" src={require("./images/large-movie2.jpg")}  alt="" />
              <img className="row__poster row__posterLarge" src={require("./images/imgog1.jpg")}  alt="" />
              <img className="row__poster row__posterLarge" src={require("./images/large-movie3.jpg")}  alt="" />
              <img className="row__poster row__posterLarge" src={require("./images/large-movie4.jpg")} alt="" />
              <img className="row__poster row__posterLarge" src={require("./images/large-movie5.jpg")}  alt="" />
              <img className="row__poster row__posterLarge" src={require("./images/large-movie7.jpg")}  alt="" />
              <img className="row__poster row__posterLarge" src={require("./images/large-movie8.jpg")}  alt="" />
              <img className="row__poster row__posterLarge" src={require("./images/large-movie6.jpg")}  alt="" />
              <img className="row__poster row__posterLarge" src={require("./images/imgog2.jpg")}  alt="" />
              <img className="row__poster row__posterLarge" src={require("./images/imgog3.jpg")}  alt="" />
              <img className="row__poster row__posterLarge" src={require("./images/imgog4.jpg")}  alt="" />
            </div>
          </div>
    
          {/* Trending Now */}
          <div className="row">
            <h2>Trending Now</h2>
            <div className="row__posters">
              <img className="row__poster row__posterSmall" src={require("./Popularimages/popularimg1.jpg")} alt="" />
              <img className="row__poster row__posterSmall" src={require("./Popularimages/popularimg2.jpg")} alt="" />
              <img className="row__poster row__posterSmall" src={require("./Popularimages/popularimg3.jpg")} alt="" />
              <img className="row__poster row__posterSmall" src={require("./Popularimages/popularimg4.jpg")} alt="" />
              <img className="row__poster row__posterSmall" src={require("./Popularimages/popularimg5.jpg")} alt="" />
              <img className="row__poster row__posterSmall" src={require("./Popularimages/popularimg6.jpg")} alt="" />
              <img className="row__poster row__posterSmall" src={require("./Popularimages/popularimg7.jpg")} alt="" />
              <img className="row__poster row__posterSmall" src={require("./Popularimages/popularimg8.jpg")} alt="" />
              <img className="row__poster row__posterSmall" src={require("./Popularimages/popularimg9.jpg")} alt="" />
              <img className="row__poster row__posterSmall" src={require("./Popularimages/popularimg10.jpg")} alt="" />
            </div>
          </div>
    
          <div className="row">
            <h2>Top</h2>
            <div className="row__posters">
              <img className="row__poster row__posterSmall" src={require("./Topimg/Topimg1.jpg")} alt="" />
              <img className="row__poster row__posterSmall" src={require("./Topimg/Topimg2.jpg")} alt="" />
              <img className="row__poster row__posterSmall" src={require("./Topimg/Topimg3.jpg")} alt="" />
              <img className="row__poster row__posterSmall" src={require("./Topimg/Topimg4.jpg")} alt="" />
              <img className="row__poster row__posterSmall" src={require("./Topimg/Topimg5.jpg")} alt="" />
              <img className="row__poster row__posterSmall" src={require("./Topimg/Topimg6.jpg")} alt="" />
              <img className="row__poster row__posterSmall" src={require("./Topimg/Topimg7.jpg")} alt="" />
              <img className="row__poster row__posterSmall" src={require("./Topimg/Topimg8.jpg")} alt="" />
              <img className="row__poster row__posterSmall" src={require("./Topimg/Topimg9.jpg")} alt="" />
              <img className="row__poster row__posterSmall" src={require("./Topimg/Topimg10.jpg")} alt="" />
            </div>
          </div> 

          <div className="row">
            <h2>Thriller</h2>
            <div className="row__posters">
              <img className="row__poster row__posterSmall" src={require("./Thrillimages/thrillimg1.jpg")} alt="" />
              <img className="row__poster row__posterSmall" src={require("./Thrillimages/thrillimg2.jpg")} alt="" />
              <img className="row__poster row__posterSmall" src={require("./Thrillimages/thrillimg3.jpg")} alt="" />
              <img className="row__poster row__posterSmall" src={require("./Thrillimages/thrillimg4.jpg")} alt="" />
              <img className="row__poster row__posterSmall" src={require("./Thrillimages/thrillimg5.jpg")} alt="" />
              <img className="row__poster row__posterSmall" src={require("./Thrillimages/thrillimg6.jpg")} alt="" />
              <img className="row__poster row__posterSmall" src={require("./Thrillimages/thrillimg7.jpg")} alt="" />
              <img className="row__poster row__posterSmall" src={require("./Thrillimages/thrillimg8.jpg")} alt="" />
              <img className="row__poster row__posterSmall" src={require("./Thrillimages/thrillimg9.jpg")} alt="" />
              <img className="row__poster row__posterSmall" src={require("./Thrillimages/thrillimg10.jpg")} alt="" />
            </div>
          </div> 

          <div className="row">
            <h2>New Releases</h2>
            <div className="row__posters">
              <img className="row__poster row__posterSmall" src={require("./Newimages/newimg1.jpg")} alt="" />
              <img className="row__poster row__posterSmall" src={require("./Newimages/newimg2.jpg")} alt="" />
              <img className="row__poster row__posterSmall" src={require("./Newimages/newimg3.jpg")} alt="" />
              <img className="row__poster row__posterSmall" src={require("./Newimages/newimg4.jpg")} alt="" />
              <img className="row__poster row__posterSmall" src={require("./Newimages/newimg5.jpg")} alt="" />
              <img className="row__poster row__posterSmall" src={require("./Newimages/newimg6.jpg")} alt="" />
              <img className="row__poster row__posterSmall" src={require("./Newimages/newimg7.jpg")} alt="" />
              <img className="row__poster row__posterSmall" src={require("./Newimages/newimg8.jpg")} alt="" />
              <img className="row__poster row__posterSmall" src={require("./Newimages/newimg9.jpg")} alt="" />
              <img className="row__poster row__posterSmall" src={require("./Newimages/newimg10.jpg")} alt="" />
            </div>
          </div> 
 
          <div className="row">
            <h2>Children & Family films</h2>
            <div className="row__posters">
              <img className="row__poster row__posterSmall" src={require("./Kidsimages/kidsimg1.jpg")} alt="" />
              <img className="row__poster row__posterSmall" src={require("./Kidsimages/kidsimg2.jpg")} alt="" />
              <img className="row__poster row__posterSmall" src={require("./Kidsimages/kidsimg3.jpg")} alt="" />
              <img className="row__poster row__posterSmall" src={require("./Kidsimages/kidsimg4.jpg")} alt="" />
              <img className="row__poster row__posterSmall" src={require("./Kidsimages/kidsimg5.jpg")} alt="" />
              <img className="row__poster row__posterSmall" src={require("./Kidsimages/kidsimg6.jpg")} alt="" />
              <img className="row__poster row__posterSmall" src={require("./Kidsimages/kidsimg7.jpg")} alt="" />
              <img className="row__poster row__posterSmall" src={require("./Kidsimages/kidsimg8.jpg")} alt="" />
              <img className="row__poster row__posterSmall" src={require("./Kidsimages/kidsimg9.jpg")} alt="" />
              <img className="row__poster row__posterSmall" src={require("./Kidsimages/kidsimg10.jpg")} alt="" />
            </div>
          </div> 

          <div className="row">
            <h2>Action</h2>
            <div className="row__posters">
              <img className="row__poster row__posterSmall" src={require("./Actionimages/Actionimg1.jpg")} alt="" />
              <img className="row__poster row__posterSmall" src={require("./Actionimages/Actionimg2.jpg")} alt="" />
              <img className="row__poster row__posterSmall" src={require("./Actionimages/Actionimg3.jpg")} alt="" />
              <img className="row__poster row__posterSmall" src={require("./Actionimages/Actionimg4.jpg")} alt="" />
              <img className="row__poster row__posterSmall" src={require("./Actionimages/Actionimg5.jpg")} alt="" />
              <img className="row__poster row__posterSmall" src={require("./Actionimages/Actionimg6.jpg")} alt="" />
              <img className="row__poster row__posterSmall" src={require("./Actionimages/Actionimg7.jpg")} alt="" />
              <img className="row__poster row__posterSmall" src={require("./Actionimages/Actionimg8.jpg")} alt="" />
              <img className="row__poster row__posterSmall" src={require("./Actionimages/Actionimg9.jpg")} alt="" />
              <img className="row__poster row__posterSmall" src={require("./Actionimages/Actionimg10.jpg")} alt="" />
            </div>
          </div> 


         </div>
  
  )
}
}
export default Netflixjds;