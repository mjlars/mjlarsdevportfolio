

function Projects() {

    // import images then use them without quotes under the image key-value pair
    // title = the name of the project
    // tools = languages/tools/apps used
    // link = direct link to the github repo or art 
    // image = background image in 1:2 ratio (name of project as image)
    const projectArray = [
        {
            title: 'Degasi Regrets',
            tools: 'Photoshop/Illustrator',
            link: 'https://displate.com/displate/4270986',
            image: '',
        },
        {
            title: 'Neotheater',
            tools: 'Illustrator',
            link: 'https://displate.com/displate/1543735',
            image: '',
        },
        {
            title: 'Secret Family Recipes',
            tools: 'React/Redux/Styled-Components',
            link: 'https://github.com/Build-Week-Secret-FamilyRecipes',
            image: '',
        },
        {
            title: 'Book Worm',
            tools: 'Handlebars/Css/Nodejs',
            link: 'https://agile-bastion-07410.herokuapp.com',
            image: '',
        },
        {
            title: 'Build a Computer',
            tools: 'React/Styled-Components/MongoDB',
            link: 'https://bob-the-build-a-computer.herokuapp.com',
            image: '',
        }
    ];
    
    return(
        <div id="work">
            <h1>My Projects</h1>
            <div className='projects'>
                {/* map over the array above to populate all the projects without needing to create a new box every time */}
                    {projectArray.map((data) => {
                        return(
                            // image is set as the background for the initial box before the hover state for project-popup is displayed
                            <div id={data.title}  class="project-box" style={{backgroundImage: `url(${data.image})`}}>
                            <div class='project-popup'>
                                <div>
                                    <h4>
                                    {data.title}
                                    </h4>
                                    <p>
                                        {data.tools}
                                    </p> 
                                </div>
                                <a href={data.link} target="_blank" rel="noreferrer">Learn More</a>
                            </div>
                        </div>

                        )
                    })}
            </div>
        </div>
    )
}

export default Projects;