import ProfilePic from '../profilePic.jpg';


function About() {
    return(
        <div id="About">
        
            <div className="bio-skills">
                <div className="biography">
                    <img src={ProfilePic} alt="Matthew Larson" />
                    <p>I have done web development boot-camps through the University of Utah and Lambda School.  
                    <br />
                    Im passionate about website design and functionality and I'm always looking for ways to improve my designs.  
                    <br />
                    I have also done graphic design for 7 years and plan on continuing to do so alongside my development projects.
                    <br />
                    Feel free to contact me if you have any questions.
                    </p>
                </div>
                <div class="skills-list">
                  <h2>
                      My Skills
                  </h2>
                  <div class="skills-boxes">
                    <div class="box"><p>HTML</p></div>
                    <div class="box"><p>JavaScript</p></div>
                    <div class="box"><p>CSS</p></div>
                    <div class="box"><p>ReactJs</p></div>
                    <div class="box"><p>Redux</p></div>
                    <div class="box"><p>Bootstrap</p></div>
                    <div class="box"><p>SASS</p></div>
                    <div class="box"><p>Photoshop</p></div>
                    <div class="box"><p>Illustrator</p></div>
                    <div class="box"><p>InDesign</p></div>
                    <div class="box"><p>Styled-Components</p></div>
                    <div class="box"><p>ExpressJs</p></div>
                    <div class="box"><p>Node.js</p></div>
                    <div class="box"><p>SQL</p></div>
                  </div>
                </div>
            </div>
        </div>
   );
}

export default About;