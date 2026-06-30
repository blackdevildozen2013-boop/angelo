const toggle=document.querySelector('.mobile-toggle');
const links=document.querySelector('.links');
if(toggle&&links){toggle.addEventListener('click',()=>links.classList.toggle('open'));}
const form=document.querySelector('#contactForm');
if(form){form.addEventListener('submit',e=>{e.preventDefault();const notice=document.querySelector('#formNotice');notice.style.display='block';notice.textContent='Thank you. Your message is ready to be sent. Connect Formspree, EmailJS, Resend, or your backend endpoint in script.js to deliver it to angelopu1990@icloud.com.';form.reset();});}
const observer=new IntersectionObserver(entries=>{entries.forEach(entry=>{if(entry.isIntersecting){entry.target.animate([{opacity:0,transform:'translateY(24px)'},{opacity:1,transform:'translateY(0)'}],{duration:650,easing:'cubic-bezier(.2,.8,.2,1)',fill:'both'});observer.unobserve(entry.target);}})},{threshold:.12});
document.querySelectorAll('.card,.shot-card,.section-head').forEach(el=>observer.observe(el));
