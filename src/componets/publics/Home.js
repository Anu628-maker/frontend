import React, { Component, Fragment } from "react";
// import "../CSS/Home.css";

class Home extends Component {
  render() {
    return (
      <Fragment>
        
    
  
<div class="banner ">
  <div>
  <section id="section1" className="" style={{ marginTop: 80 + "px" }}>
         
          
          <div className="rightside rollIn animated wow animated">
            <div className="container ">
           
            
            <img
              src="https://st4.depositphotos.com/2760050/23926/i/450/depositphotos_239267662-stock-photo-different-people-in-team-of.jpg"
              alt=""
            />
            
            </div>
          </div>
          <div className="leftside rollIn animated wow animated">
            
           
           <div className="container ">
           
            <h4 className="text-dark1"> Welcome To Our Studio!</h4>
              <h1 className="text-dark1">Connecting Blue-Collar Labour With Industries</h1>
           
              <a href="/Home#product" className="btn btn-success welcome">
              Tell Me More
              </a>
             
            </div>
            
          </div> 
        </section>
        <div className="area">
          <ul className="circles">
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
          </ul>
        </div>
  </div>

</div>
 {/*  */}
 {/* <div class="banner">
   <div> */}
 
 <section id="service">
 <div class="feat bg-gray pt-5 pb-5">
    <div class="container">
      <div class="row">
        <div class="section-head col-sm-12">
          <h4><span>Why Choose</span> Me?</h4>
          {/* <p>Lorem Ipsum is simply dummy text of the printing and type setting industry. Lorem Ipsum has been the industry'sstandard dummy text ever since the 1500s, when an unknown book.</p> */}
        </div>
        <div class="col-lg-4 col-sm-6">
          <div class="item"> <span class="icon feature_box_col_one"><i class="fa fa-globe"></i></span>
            <h6>Modern Design</h6>
            {/* <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor Aenean massa.</p> */}
          </div>
        </div>
        <div class="col-lg-4 col-sm-6">
          <div class="item"> <span class="icon feature_box_col_two"><i class="fa fa-anchor"></i></span>
            <h6>Creative Design</h6>
            {/* <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor Aenean massa.</p> */}
          </div>
        </div>
        <div class="col-lg-4 col-sm-6">
          <div class="item"> <span class="icon feature_box_col_three"><i class="fa fa-clock-o fa-1x"></i></span>
            <h6>24 Hours service</h6>
            {/* <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor Aenean massa.</p> */}
          </div>
        </div>
        <div class="col-lg-4 col-sm-6">
          <div class="item"> <span class="icon feature_box_col_four"><i class="fa fa-database"></i></span>
            <h6>Business Growth</h6>
            {/* <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor Aenean massa.</p> */}
          </div>
        </div>
        <div class="col-lg-4 col-sm-6">
          <div class="item"> <span class="icon feature_box_col_five"><i class="fa fa-upload"></i></span>
            <h6>Market Strategy</h6>
            {/* <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor Aenean massa.</p> */}
          </div>
        </div>
        <div class="col-lg-4 col-sm-6">
          <div class="item"> <span class="icon feature_box_col_six"><i class="fa fa-cogs"></i></span>
            <h6>Security</h6>
            {/* <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor Aenean massa.</p> */}
          </div>
        </div>
      </div>
    </div>
  </div>
  

        </section> 
        <div className="area">
          <ul className="circles">
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
          </ul>
        </div>
        {/* </div>
        </div> */}
        {/*  */}
        {/*  */}
        {/*  */}

      

        {/* <div className="container-fluid mt-5">
      <div className="footer_section " id="contact">
        <div className="container"> */}
          <section className="main-section contact" id="contact">
          <div className="contact_section">
            <div className="row">
              <div className="col-lg-6 wow fadeInLeft animated">
              
                <div className="contact-info-box address clearfix">
                  <h2>Contact Us</h2>
                  <p>
                  LaboureNET is a web platform for connecting different Blue-collar labour to the industries
                  </p>
                  <p>If any suggestions or tips let us know</p>
                  <ul className="social-link">
                  <li >
                    <a href="(0)">
                      <i className="fa fa-twitter "></i>
                    </a>
                  </li>
                  <li className="facebook animated bounceIn wow delay-03s animated">
                    <a href="(0)">
                      <i className="fa fa-facebook "></i>
                    </a>
                  </li>
                  <li className="pinterest animated bounceIn wow delay-04s animated">
                    <a href="(0)">
                      <i className="fa fa-pinterest "></i>
                    </a>
                  </li>
                  <li className="dribbble animated bounceIn wow delay-06s animated">
                    <a href="(0)">
                      <i className="fa fa-instagram "></i>
                    </a>
                  </li>
               
                
                </ul>
                </div>
               
              </div>
              <div className="col-lg-6 wow fadeInUp delay-06s animated">
                <div className="form">
                  <div id="sendmessage">
                  
                  </div>
                  <div id="errormessage"></div>
                  <form
                    action=""
                    method="post"
                    role="form"
                    className="contactForm"
                  >
                    <div className="form-group">
                      <input
                        type="text"
                        name="name"
                        className="form-control input-text"
                        id="name"
                        placeholder="Your Name"
                        data-rule="minlen:4"
                        data-msg="Please enter at least 4 chars"
                      />
                      <div className="validation"></div>
                    </div>
                    <div className="form-group">
                      <input
                        type="email"
                        className="form-control input-text"
                        name="email"
                        id="email"
                        placeholder="Your Email"
                        data-rule="email"
                        data-msg="Please enter a valid email"
                      />
                      <div className="validation"></div>
                    </div>
                    <div className="form-group">
                      <input
                        type="text"
                        className="form-control input-text"
                        name="subject"
                        id="subject"
                        placeholder="Subject"
                        data-rule="minlen:4"
                        data-msg="Please enter at least 8 chars of subject"
                      />
                      <div className="validation"></div>
                    </div>
                    <div className="form-group">
                      <textarea
                        className="form-control"
                        name="message"
                        rows="5"
                        data-rule="required"
                        data-msg="Please write something for us"
                        placeholder="Message"
                      ></textarea>
                      <div className="validation"></div>
                    </div>

                    <button type="submit" className="btn input-btn">
                      SEND MESSAGE
                    </button>
                  </form>
                </div>
              </div>
              
            </div>
      
            </div>
          </section>
        {/* </div>
      </div>
    </div> */}
        {/*  */}
        {/*  */}
        {/*  */}

        {/* <section className="subscribe-section">
  <div className="subscribe-form">
  <form action="#" className="subscribe-form">
    <label for="text"className="clr" >Join our exclusive newsletter</label>
    <input type="email" name="email" className="clr" placeholder="Enter your email address"/>
    <span className="submit">
      <input type="submit" value="subscribe"/> <a  className="clr" >Subscribe</a>
    </span> 
  </form>
</div>
</section> */}
        {/*  */}
        {/*  */}
        
        
      </Fragment>
    );
  }
}

export default Home;
