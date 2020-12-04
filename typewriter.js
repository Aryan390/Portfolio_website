let i = 0

function typeWriter(para,text,speed){
  // console.log(text);
  speed = 70
  if(i < text.length){
    para.innerHTML += text.charAt(i)
    i++
    if(i===text.length){
      speed = 3000
    }
  }else if(i === text.length){
    para.innerHTML = ''
    i = 0;
  }
  setTimeout(()=>typeWriter(para,text,speed),speed)
}

export default typeWriter