import React from 'react';
import { loginDemoUser } from '../actions/session_actions'
import { connect } from 'react-redux';

const mapDispatchToProps = dispatch => ({
  loginDemoUser: () => dispatch(loginDemoUser()),
});

const HomePage = ({ loginDemoUser }) => (
  <div className="home-page">
    <div className="home-page-text">
        <h1>"Investing" for Everyone</h1>
        <p>StockFox, a completely derivative player in the world of commission-free investing, gives you very few ways to make your money work harder.</p>
        <button onClick={() => loginDemoUser()}>Demo Login</button>
    </div>
      <video autoPlay="autoPlay" loop="loop" muted="muted" className="home-page-video" src="/assets/homepage_video_2-1a0e3a448938b8b806171d54cc000f0946768ee9d307d30535ac4bdfaf04835b.mp4"></video>
    <img className="home-page-img" src="/assets/homepage_video_background-91db2d9f7fd4918147679b4c16508364c8190148d6e4d8c5b5279ff0fa4d674d.png" alt=""/>
    <div className="home-page-information">
      <div className="about-creator">
        <ul className="links-list">
        <li>by <strong>Tim Harding</strong></li>
        <li><a href="https://timharding.io" target="_blank">timharding.io</a></li>
        <li><a href="mailto:timharding31@gmail.com" target="_blank">timharding31@gmail.com</a></li>
        <li><a href="https://www.linkedin.com/in/timharding31/" target="_blank">LinkedIn</a></li>
        <li><a href="https://www.github.com/timharding31" target="_blank">GitHub</a></li>
        </ul>
      </div>
    </div>
  </div>
);
export default connect(null, mapDispatchToProps)(HomePage);