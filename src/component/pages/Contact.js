import React from 'react'
import '../Home/contact.css'

const Contact = () => {
  return (
    <div className='con'>
       <div class="container1">
    <div class="content">
      <div class="left-side">
        <div class="address details">
          <i class="fas fa-map-marker-alt"></i>
          <div class="topic">Address</div>
          <div class="text-one">Cairo</div>
          <div class="text-two">Egypt</div>
        </div>
        <div class="phone details">
          <i class="fas fa-phone-alt"></i>
          <div class="topic">Phone</div>
          <div class="text-one">01068281261</div>
          
        </div>
        <div class="email details">
          <i class="fas fa-envelope"></i>
          <div class="topic">Email</div>
          <div class="text-one">hadeerahmedg000@gmail.com</div>
      
        </div>
      </div>
      <div class="right-side">
        <div class="topic-text">Send  message</div>
        <p>If you have any work from me or any types of quries related to my tutorial, you can send me message from here. It's my pleasure to help you.</p>
      <form action="#">
        <div class="input-box">
          <input type="text" placeholder="Enter your name"/>
        </div>
        <div class="input-box">
          <input type="text" placeholder="Enter your email"/>
        </div>
        <div class="input-box">
          <input type="text" placeholder="Enter your phone"/>
        </div>
        <div class="input-box message-box">
          
        </div>
        <div class="button">
          <input type="button" value="Send Message" />
        </div>
      </form>
    </div>
    </div>
  </div>
    </div>
  )
}

export default Contact
