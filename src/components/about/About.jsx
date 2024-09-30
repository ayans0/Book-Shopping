function About() {
    return(
       <div className="about_container">
        <img className="girlWithBook" src="/images/49790a25b182b01f0cd10d4658eaef75.jpg" alt="" />
        <div className="circle"></div>
        <div className="texts">
            <h2>About</h2>
            <hr />
            <p className="first_p">Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci vitae placeat id laudantium reiciendis porro, fugiat debitis a aperiam magni nihil aspernatur quidem ex similique. Veritatis inventore eius harum ad.</p>
            <p className="second_p">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quasi minima, atque iure repellendus corrupti fugiat voluptatibus veniam libero nemo officia. Consectetur placeat reprehenderit minima velit!</p>
           <div className="d-flex .justify-content-between">
            <img className="phoneIcon" src="/images/phone.png" alt="" />
            <a className="phoneNumber" href="">+1 (234) 567-8910</a>
           </div>
        </div>
       </div>
    )
}


export default About;