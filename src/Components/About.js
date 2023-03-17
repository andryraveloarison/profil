
import photo from '../assets/Andry.jpg';

function About() {
    return (
      <section class="site-section" id="section-about">
		<div class="container">
			<div class="row mb-5 align-items-center">
				<div class="col-lg-7 pr-lg-5 mb-5 mb-lg-0">
					<img src={photo} alt="Image placeholder" class="img-fluid"/>
				</div>
				<div class="col-lg-5 pl-lg-5">
					<div class="section-heading">
						<h2>About <strong>Me</strong></h2>
					</div>
					
					<p class="mb-5  ">Je suis un développeur de logiciels doté de solides compétences en résolution de problèmes et d'une expérience éprouvée dans la création et la conception de logiciels dans le domaine informatique.</p>

				
				</div>
			</div>


		</div>
	</section>
    );
  }
  export default About;
