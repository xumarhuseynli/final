export default function About() {
    return (
      <>
      


    <section>
      <div className="section_text">
        <span>Branding & website design agency</span>
        <p>
          We specialize in visual storytelling by creating cohesive brand and
          website design solutions for small businesses, giving lasting
          impressions to audiences in a digital world.
        </p>
        <button>Learn more</button>
      </div>
      <div className="section_img">
        <img
          src="./src/assets/bitmap.svg"
          alt=""
        />
      </div>
      <div className="section_img_mask">
        <img src="./src/Rectangle.png" alt="" />
      </div>
    
    </section>
    <div className="mask">
      <svg width="600" height="800" viewBox="0 0 600 800" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="600" height="800" fill="url(#paint0_linear_0_426)"/>
        <defs>
        <linearGradient id="paint0_linear_0_426" x1="0" y1="891.843" x2="600" y2="891.843" gradientUnits="userSpaceOnUse">
         {/* <stop stop-color="white"/>
        <stop offset="1" stop-color="white" stop-opacity="0.01"/>  */}
        </linearGradient>
        </defs>
        </svg>
        
    </div>


      </>
    );
  }