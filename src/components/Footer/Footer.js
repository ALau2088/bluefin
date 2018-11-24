import React from "react";
import "./Footer.css";

export default function Footer() {
  return (
    <footer>
      <div className="links">
      <div>
        <a href="/">About</a>
      </div>
      <div>
        <a href="/">Press</a>
      </div>
      <div>
        <a href="/">Investor Relations</a>
      </div>
      <div>
        <a href="/">Research</a>
      </div>
      <div>
        <a href="/">Blog</a>
      </div>
      <div>
        <a href="/">Jobs</a>
      </div>
      <div>
        <a href="/">Referrals</a>
      </div>
      <div>
        <a href="/">Mobile</a>
      </div>
      <div>
        <a href="/">Feedback</a>
      </div>
      <div>
        <a href="/">Contact Us</a>
      </div>
      <div>
        <a href="/">Help</a>
      </div>
      </div>
      <div className="social">
      <ul>
        <li><a href="/"><i className="fab fa-facebook fa-1x"/></a></li>
        <li><a href="/"><i className="fab fa-twitter fa-1x"/></a></li>
        <li><a href="/"><i className="fab fa-google fa-1x"/></a></li>
        <li><a href="/"><i className="fab fa-pinterest fa-1x"/></a></li>
        <li><a href="/"><i className="fab fa-instagram fa-1x"/></a></li>
      </ul>
      </div>
      <div className="legal">
      <p className="tou-pp">
      Updated February 2018: By searching, you agree to the <a href="/">Terms of Use</a>, and <a href="/">Privacy Policy</a>.
      </p>
      <p className="copyright">Copyright:© 2018 Redfin. All rights reserved. Patent pending.</p>
      <p className="eho">
        <a href="/" title="Equal Housing Opportunity">
        <svg className="equal-housing">
        <svg viewBox="0 0 24 24">
        <path d="M8.157 16.553h7.715v-2H8.157v2zm10.849 3.64V8.83l-6.982-4.522-6.976 4.516v9.114l.013 2.256h13.945zm2.008 2.001H3.024v-12.16H1v-.97L12.024 2l11.024 7.064v.97H21.03l-.016 12.16zM8.157 12.551h7.715v-2H8.157v2z" fill-rule="evenodd"></path>
        </svg>
        </svg>
        </a>
        <span>California BRE #01521930</span>
      </p>
      <p className="trec">TREC: <a href="/">Info About Brokerage Services</a>, <a href="/">Consumer Protection Notice</a></p>
      <p className="help-reading">If you are using a screen reader, or having trouble reading this website, please call Redfin Customer Support for help at <a href="/">1-844-759-7732</a>.</p>
      </div>
    </footer>
  );
}
