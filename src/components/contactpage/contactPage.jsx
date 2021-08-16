import React from 'react'
import Navbar from '../navbar/navbar'
import logo from './download.png'
import question from './question.jpg'
import './contactPage.css'
export default function contactPage() {
    return (
      <>
      <Navbar/>
      <div className=" contact-form">
        <div className="contact-image">
          <img src={logo} alt='tech-x logo'></img>
        </div>
        <form method='post'>
          <h3>Have questions? Drop us a message.</h3>
          <div className="row">
            <div className="col-md-6">
              <div className="form-group">
                <input type="text" name="txtName" className="form-control" placeholder="Your Name *" value=""/>
              </div>
              <div className="form-group">
                <input type="text" name="txtEmail" className="form-control" placeholder="Your Email *" value=""/>
              </div>
              <div className="form-group">
                <textarea name="txtMsg" className="form-control txt-msg" placeholder='Your message *'></textarea>
              </div>
              <div className="form-group">
                <input type="submit" name="btnSubmit" className="btnContactSubmit" value="Send Message"/>
              </div>
              <img className="question" src={question} alt="question?"></img>
           </div>   
          </div>
        </form>
      </div>
      </>
    )
    }