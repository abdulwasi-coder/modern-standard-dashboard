import react, { useEffect, useState } from 'react'
import './App.css'
import Section2 from './components/Section2.jsx'
import Section3 from './components/Section3.jsx'
import Section4 from './components/Section4.jsx'
import Section5 from './components/Section5.jsx'


const App = () => {

  const [sidebutton, setsidebutton] = useState(false)
  const sideevent = () => { setsidebutton(!sidebutton), setmain(!mainlook) }
  const [mainlook, setmain] = useState(true)
  const handleNavClick = (e, id) => {
    e.preventDefault();
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
      setsidebutton(false)
    }
  }

  return (
    // this is the header of our dashboard
    <div>
      <header className="section1-header">
        <span>Portfolio</span>
        <nav>
          <a href="#section1">Home</a>
          <a href='#section2' onClick={(e) => { handleNavClick(e, 'section2') }}>About</a>
          <a href='#section3' onClick={(e) => { handleNavClick(e, 'section3') }}>Skills</a>
          <a href='#section4' onClick={(e) => { handleNavClick(e, 'section4') }}>Project</a>
          <a href='#section5' onClick={(e) => { handleNavClick(e, 'section5') }}>Contact</a>
        </nav>
        <svg onClick={sideevent} id="menu" xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 640 640">
          <path
            d="M96 160C96 142.3 110.3 128 128 128L512 128C529.7 128 544 142.3 544 160C544 177.7 529.7 192 512 192L128 192C110.3 192 96 177.7 96 160zM96 320C96 302.3 110.3 288 128 288L512 288C529.7 288 544 302.3 544 320C544 337.7 529.7 352 512 352L128 352C110.3 352 96 337.7 96 320zM544 480C544 497.7 529.7 512 512 512L128 512C110.3 512 96 497.7 96 480C96 462.3 110.3 448 128 448L512 448C529.7 448 544 462.3 544 480z" />
        </svg>
        {
          sidebutton ?
            <div>
              <nav id="side-menu">
                <span id="x" onClick={sideevent}>X</span>
                <a href="#section1" onClick={(e) => { handleNavClick(e, 'section1') }}>Home</a>
                <a href="#Section2" onClick={(e) => { handleNavClick(e, 'section2') }}>About</a>
                <a href="#Section3" onClick={(e) => { handleNavClick(e, 'section3') }}>Skills</a>
                <a href="#Section4" onClick={(e) => { handleNavClick(e, 'section4') }}>Project</a>
                <a href="#Section5" onClick={(e) => { handleNavClick(e, 'section5') }}>Contact</a>
                <a href="#">Help</a>
                <a href="#">Complain</a>
                <a href="#">Assistance</a>
              </nav>
            </div>
            : ''
        }
      </header>

      {/* this is section 1 of our dashboard */}

      <section id="section1">
        <h1>Hi, I'm <span>Abdul Wasi Shirzai</span></h1>
        <span id="sp">A creative Web Developer</span>
        <div>
          <button><a href="#section3">View Work</a></button>
          <button><a href="#section5">Contact Me</a></button>
        </div>
        {mainlook && (<svg xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 640 640">
          <path
            d="M297.4 470.6C309.9 483.1 330.2 483.1 342.7 470.6L534.7 278.6C547.2 266.1 547.2 245.8 534.7 233.3C522.2 220.8 501.9 220.8 489.4 233.3L320 402.7L150.6 233.4C138.1 220.9 117.8 220.9 105.3 233.4C92.8 245.9 92.8 266.2 105.3 278.7L297.3 470.7z" />
        </svg>)}
      </section>


      {/* these are other parts of our project */}

      <Section2 />
      <Section3 />
      <Section4 />
      <Section5 />

      {/* this is the footer of our dashboard */}
      <footer>
        <span>@ Abdul Wasi Shirzai. All rights reserved</span>
        <div>
          <svg xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 640 640">
            <path
              d="M237.9 461.4C237.9 463.4 235.6 465 232.7 465C229.4 465.3 227.1 463.7 227.1 461.4C227.1 459.4 229.4 457.8 232.3 457.8C235.3 457.5 237.9 459.1 237.9 461.4zM206.8 456.9C206.1 458.9 208.1 461.2 211.1 461.8C213.7 462.8 216.7 461.8 217.3 459.8C217.9 457.8 216 455.5 213 454.6C210.4 453.9 207.5 454.9 206.8 456.9zM251 455.2C248.1 455.9 246.1 457.8 246.4 460.1C246.7 462.1 249.3 463.4 252.3 462.7C255.2 462 257.2 460.1 256.9 458.1C256.6 456.2 253.9 454.9 251 455.2zM316.8 72C178.1 72 72 177.3 72 316C72 426.9 141.8 521.8 241.5 555.2C254.3 557.5 258.8 549.6 258.8 543.1C258.8 536.9 258.5 502.7 258.5 481.7C258.5 481.7 188.5 496.7 173.8 451.9C173.8 451.9 162.4 422.8 146 415.3C146 415.3 123.1 399.6 147.6 399.9C147.6 399.9 172.5 401.9 186.2 425.7C208.1 464.3 244.8 453.2 259.1 446.6C261.4 430.6 267.9 419.5 275.1 412.9C219.2 406.7 162.8 398.6 162.8 302.4C162.8 274.9 170.4 261.1 186.4 243.5C183.8 237 175.3 210.2 189 175.6C209.9 169.1 258 202.6 258 202.6C278 197 299.5 194.1 320.8 194.1C342.1 194.1 363.6 197 383.6 202.6C383.6 202.6 431.7 169 452.6 175.6C466.3 210.3 457.8 237 455.2 243.5C471.2 261.2 481 275 481 302.4C481 398.9 422.1 406.6 366.2 412.9C375.4 420.8 383.2 435.8 383.2 459.3C383.2 493 382.9 534.7 382.9 542.9C382.9 549.4 387.5 557.3 400.2 555C500.2 521.8 568 426.9 568 316C568 177.3 455.5 72 316.8 72zM169.2 416.9C167.9 417.9 168.2 420.2 169.9 422.1C171.5 423.7 173.8 424.4 175.1 423.1C176.4 422.1 176.1 419.8 174.4 417.9C172.8 416.3 170.5 415.6 169.2 416.9zM158.4 408.8C157.7 410.1 158.7 411.7 160.7 412.7C162.3 413.7 164.3 413.4 165 412C165.7 410.7 164.7 409.1 162.7 408.1C160.7 407.5 159.1 407.8 158.4 408.8zM190.8 444.4C189.2 445.7 189.8 448.7 192.1 450.6C194.4 452.9 197.3 453.2 198.6 451.6C199.9 450.3 199.3 447.3 197.3 445.4C195.1 443.1 192.1 442.8 190.8 444.4zM179.4 429.7C177.8 430.7 177.8 433.3 179.4 435.6C181 437.9 183.7 438.9 185 437.9C186.6 436.6 186.6 434 185 431.7C183.6 429.4 181 428.4 179.4 429.7z" />
          </svg>

          <svg xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 640 640">
            <path
              d="M196.3 512L103.4 512L103.4 212.9L196.3 212.9L196.3 512zM149.8 172.1C120.1 172.1 96 147.5 96 117.8C96 103.5 101.7 89.9 111.8 79.8C121.9 69.7 135.6 64 149.8 64C164 64 177.7 69.7 187.8 79.8C197.9 89.9 203.6 103.6 203.6 117.8C203.6 147.5 179.5 172.1 149.8 172.1zM543.9 512L451.2 512L451.2 366.4C451.2 331.7 450.5 287.2 402.9 287.2C354.6 287.2 347.2 324.9 347.2 363.9L347.2 512L254.4 512L254.4 212.9L343.5 212.9L343.5 253.7L344.8 253.7C357.2 230.2 387.5 205.4 432.7 205.4C526.7 205.4 544 267.3 544 347.7L544 512L543.9 512z" />
          </svg>

          <svg xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 640 640">
            <path
              d="M160 96C124.7 96 96 124.7 96 160L96 480C96 515.3 124.7 544 160 544L480 544C515.3 544 544 515.3 544 480L544 160C544 124.7 515.3 96 480 96L160 96zM447.3 263.3C447.3 350 381.3 449.9 260.7 449.9C223.5 449.9 189 439.1 160 420.5C165.3 421.1 170.4 421.3 175.8 421.3C206.5 421.3 234.7 410.9 257.2 393.3C228.4 392.7 204.2 373.8 195.9 347.8C206 349.3 215.1 349.3 225.5 346.6C195.5 340.5 173 314.1 173 282.2L173 281.4C181.7 286.3 191.9 289.3 202.6 289.7C193.6 283.7 186.2 275.6 181.1 266.1C176 256.6 173.3 245.9 173.4 235.1C173.4 222.9 176.6 211.7 182.3 202C214.6 241.8 263.1 267.8 317.5 270.6C308.2 226.1 341.5 190 381.5 190C400.4 190 417.4 197.9 429.4 210.7C444.2 207.9 458.4 202.4 471 194.9C466.1 210.1 455.8 222.9 442.2 231C455.4 229.6 468.2 225.9 480 220.8C471.1 233.9 459.9 245.5 447.1 254.8C447.3 257.6 447.3 260.5 447.3 263.3z" />
          </svg>
        </div>



      </footer>
    </div>
  )
}

export default App
