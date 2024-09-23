import '../App.css'

function Title(){
    return(
        <h1>
          Hi, I'm Rashik!
      </h1>
    )
}

function Projects(){
  return (
    <div>
      <p>Here's some projects I worked on</p>

    </div>
  )
}

function Links(){
  return(
    <div>

    </div>
  )
}

function Photo(props){
    return(
      <div >
        <p>Here's a picture of me in the woods</p>
      <img className="photo" src={props.url} />
      </div>
      
    )
}
function About() {

  return (
    <div>
      <Title/>
      <Photo url='../public/prof_n.jpg'/>
      <h3>Here's a bit more about me</h3>
      <p>I am software engineer. I graduated from McMaster University with a bachelor's degree in Engineering Physics. After graduation I worked 2 years at nference.ai as a software engineer doing backend, machine learning and distributed systems engineering.</p>
    
    </div>
  );
}

export default About
