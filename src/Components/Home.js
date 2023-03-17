import photo from '../assets/Andry.jpg';

function Home() {

  const onButtonClick = () => {
    
    fetch('CV.pdf').then(response => {
        response.blob().then(blob => {
            
            const fileURL = window.URL.createObjectURL(blob);
            
            let alink = document.createElement('a');
            alink.href = fileURL;
            alink.download = 'CV.pdf';
            alink.click();
        })
    })
}


    return (

  <div class="content" >
      <div class="div-text">
          <h4>Hello I'm</h4>
          <h1>Andry RAVELOARISON</h1>
          <span>L3 IRD2</span>
          <div class="social-link">
              <a href="https://www.instagram.com/andry_raveloarison/"><i class="fa-brands fa-instagram"></i></a>
              <a href="https://www.facebook.com/andry.raveloarison.96/"><i class="fa-brands fa-facebook-f"></i></a>
              <a href="#"><i class="fa-brands fa-linkedin-in"></i></a>
          </div>
          <button class="btn "onClick={onButtonClick}>
                    Download CV
                </button>
      </div>
        <div class="div-img">
        <img src={photo} alt="Logo"></img>
        </div>
      
  </div>
    
    );
  }
  export default Home;


