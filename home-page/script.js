const nav= document.querySelector("#nav");
const navbtn= document.querySelector(".hide-nav-btn");

navbtn.addEventListener('click', ()=>{
    const visi= nav.getAttribute('data-visible');
    if(visi==="false")
      {
          nav.setAttribute('data-visible',true);
      }
    else if(visi==="true")
    {
        nav.setAttribute('data-visible',false);
    }
      console.log(visi);
});


