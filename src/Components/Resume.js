import educations from '../datas/Education';
import experiences from '../datas/Experience';

function Resume() {

  const vuEducation=(
    <div>
    {educations.map((educ) => (  

                <div>

                  <div class="resume-item mb-4">
                    <span class="date"><span class="icon-calendar"></span> {educ.date}</span>
                    <h3>{educ.titre}</h3>
                    <p>{educ.contenu}</p>

                  </div>

                </div>

                
    ))}
  </div>
    
  );

  const vuExperience=(
    <div>
    {experiences.map((exp) => (  

                <div>
          
                  <div class="resume-item mb-4">
                    <span class="date"><span class="icon-calendar"></span> {exp.date}</span>
                    <h3>{exp.titre}</h3>
                    <p>{exp.contenu}</p>

                  </div>

                </div>
    ))}
  </div>
    
  );
    return (

     <div>
      <section class="site-section " id="section-resume">
            <div class="container">
              <div class="row">
                
                
                <div class="col-md-12 mb-5">
                  <div class="section-heading text-center">
                    <h2>My <strong>Resume</strong></h2>
                  </div>
                </div>
                <div class="col-md-6">
                <h2 class="mb-5">Education</h2>
                {vuEducation}
                </div>
                <div class="col-md-6">
                   <h2 class="mb-5">Experience</h2>
                {vuExperience}
                </div>
               
                </div>
            </div>
      </section> 
     </div>

    );

    
  }
  export default Resume;




  