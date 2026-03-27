import { useEffect, useState } from "react"

const Section5 = () => {
  const [name, setname] = useState('')
  const [email, setemail] = useState('')
  const [message, setmessage] = useState('')
  const [wasclicked, setwasclicked] = useState(false)
  const [issucced, setissucced] = useState(false)
  const handleCheck = () => {
    setwasclicked(true)
    if (name && email && message) {
      setissucced(true)
      setwasclicked(false)
      setname('')
      setemail('')
      setmessage('')
    } else {
      setissucced(false)
    }

  }

  return (

    <section id="section5">
      <h1 id="header">Get In Touch</h1>
      <div id="Message">
        <input className={`input1 ${wasclicked && !name ? 'red-border' : ''} ${wasclicked && name ? 'green-border' : ''}`} type="name" placeholder="Your Name" value={name} onChange={(e) => { setname(e.target.value) }} />

        <input className={`input3 ${wasclicked && !email ? 'red-border' : ''} ${wasclicked && email ? 'green-border' : ''}`} type="email" placeholder="Your Email" value={email} onChange={(e) => { setemail(e.target.value) }} />
        <textarea className={`input2 ${wasclicked && !message ? 'red-border' : ''} ${wasclicked && message ? 'green-border' : ''}`} type="text" placeholder="Your Message" value={message} onChange={(e) => { setmessage(e.target.value) }} />
        <button id="sendButton" onClick={handleCheck}>Send Message</button>
        {
          issucced ? <span style={{ color: 'green' }}>Thanks for sending message</span> : ''
        }

      </div>


    </section>
  )
}
export default Section5