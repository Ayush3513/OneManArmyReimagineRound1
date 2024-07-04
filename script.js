function locoScroll(){
  

gsap.registerPlugin(ScrollTrigger);

// Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

const locoScroll = new LocomotiveScroll({
  el: document.querySelector(".main"),
  smooth: true
});
// each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
locoScroll.on("scroll", ScrollTrigger.update);

// tell ScrollTrigger to use these proxy methods for the ".main" element since Locomotive Scroll is hijacking things
ScrollTrigger.scrollerProxy(".main", {
  scrollTop(value) {
    return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
  }, // we don't have to define a scrollLeft because we're only scrolling vertically.
  getBoundingClientRect() {
    return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
  },
  // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
  pinType: document.querySelector(".main").style.transform ? "transform" : "fixed"
});

// each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

// after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
ScrollTrigger.refresh();




}
locoScroll()



function scramble(){
  $(document).ready(function () {
    // ELEMENTS
    var $scramble = $(".scramble");
  
    $scramble.scramble(3500, 80, "alphabet", true);
  });
}
scramble()
function firstloader(){
  var tl = gsap.timeline()
  var loader = document.querySelector(".loader")
    tl.to(".loader",{
      delay:4,
      y:"-=100%",
      ease:Expo.easeInOut,
      duration:1,
      stagger:0.05,
    }
  )
    tl.to(".neon",{
      y:"-=100%",
      ease:Expo.easeOut,
      duration:1,
      delay:-.4
    }
  )
}
firstloader()
function secondLoader(){
  
var a = document.querySelector(".page1 h4 ")
a.addEventListener("click",function(){
  var tl = gsap.timeline()

  tl.to(".page1 h4",{
    scale:2,
    opacity:0,
    duration:0.6,
    ease:Expo.easeOut,
  })
  tl.to(".page1 .can",{
    scale:0,
    duration:0.7,
    delay:-0.5,
    ease:Expo.easeInOut
  })
  tl.to(".page1 .mover",{
    scale:0,
    duration:1.5,
    ease:Expo.easeOut,
    delay:-1,
  })
  tl.to(".page1 ",{
    y:"-=100%",
    duration:1.5,
    ease:Expo.easeInOut,
    delay:-0.5,
    backgroundColor:"#02FF01"
   
  })
  tl.from(".menu h4",{
    y:30,
    duration:0.7,
    stagger:0.09,
    opacity:0,
    delay:-0.5,
    onComplete:function(){
      gsap.to(".page1",{
        display:"none"
      })
    }
  })
  tl.from(".page2 #wrap1 h1 span,.page2 #wrap2 h1 span",{
    y:200,
    duration:0.7,
    stagger:0.02,
    delay:-.5
  },"chalo")
  tl.to("#upimg",{
    y:"-=100%",
    scrollTrigger:{
      trigger:"#upimg",
      scroller:".main",
      scrub:2,
      start:"top top",
      end:"top -5%",
      // markers:true,
      ease:Expo.easeInOut
    }
  },"nav")
  tl.to(".menu h4 a",{
    opacity:0,
    scrollTrigger:{
      trigger:"#upimg",
      scroller:".main",
      scrub:true,
      start:"top 5%",
      end:"top -5%",
      // markers:true,
      ease:Expo.easeInOut
    }
  },"nav")
  tl.to(".nav-right",{
    opacity:0,
    scrollTrigger:{
      trigger:"#upimg",
      scroller:".main",
      scrub:true,
      start:"top top",
      end:"top -5%",
      // markers:true,
      ease:Expo.easeInOut
    }
  },"nav")
  tl.from(".page3-left img",{
    left:"-30%",
    bottom:"-30%",
    rotate:-45,
    scrollTrigger:{
      trigger:".page3-left img",
      scroller:".main",
      start:"top 100%",
      end:"top 65%",
      scrub:1,
      // ease:easeInOut
    }
  },"can")
  tl.from(".page3-right .elem-wraper h1,.page3-right .elem-wraper p",{
    y:100,
    duration:1.5,
    sragger:0.1,
    scrollTrigger:{
      trigger:".page3-right .elem-wraper h1",
      scroller:".main",
      start:"top 90%",
      end:"top 65%",
      ease:Power4,
      scrub:1,
      // ease:easeInOut
    }
  },)
  tl.from(".page3-left svg",{
    height:"80vw",
    width:"50vw",
    rotate:-45,
    scrollTrigger:{
      trigger:".page3-left img",
      scroller:".main",
      start:"top 50%",
      end:"top 10%",
      // markers:true,
      scrub:1,
      // ease:easeInOut
    }
  },"can")
  tl.to(".page3-left img",{
    y:"100%",
    x:"-150%",
    scrollTrigger:{
      trigger:".page4",
      scroller:".main",
      start:"top 60%",
      end:"top 30%",
      scrub:true,
      // markers:true
    }
  },"pro")
  tl.to(".page3-left svg",{
    scale:0,
    scrollTrigger:{
      trigger:".page4",
      scroller:".main",
      start:"top 60%",
      end:"top 30%",
      scrub:true,
      // markers:true
    }
  },"pro")
  tl.from(".pro #white",{
    rotate:-90,
    scrollTrigger:{
      trigger:".page4",
      scroller:".main",
      start:"top 50%",
      end:"top -15%",
      scrub:true,
      // markers:true
    }
  },"pro")
  tl.from(".pro .blue",{
    
    rotate:90,
    scrollTrigger:{
      trigger:".page4",
      scroller:".main",
      start:"top 50%",
      end:"top -15%",
      scrub:true,
      // markers:true
    },
  },"pro")
  tl.from(".pro .kala",{
    
    y:400,
    scrollTrigger:{
      trigger:".page4",
      scroller:".main",
      start:"top 50%",
      end:"top -15%",
      scrub:true,
      // markers:true
    },
  },"pro")
  tl.to(".pro",{
    boxShadow: `0 8px 32px 0 #01ff018e`,
    border:`2px solid #fff`,
    scrollTrigger:{
      trigger:".page4",
      scroller:".main",
      start:"top 20%",
      end:"top 15%",
      scrub:true,
    }
  })
  tl.to(".main",{
    backgroundColor:"#fff",
    scrollTrigger:{
      trigger:".page5",
      scroller:".main",
      scrub:2,
      start:"top 50%",
      end:"top 30%",
      ease:Power2
    }
  },"sath")
  tl.to(".page5>h1",{
    color:"#000",
    scrollTrigger:{
      trigger:".page5",
      scroller:".main",
      scrub:2,
      start:"top 50%",
      end:"top 30%",
      ease:Power2
    }
  },"sath")
  tl.to(".main",{
    backgroundColor:"#040A03",
    scrollTrigger:{
      trigger:".page5",
      scroller:".main",
      scrub:3,
      start:"top -150%",
      end:"top -160%",
      ease:Power2,
    }
  },"sath")
  
  tl.to("#upimg",{
    scale:0,
    ease:Power2,
    scrollTrigger:{
      trigger:"#page7",
      scroller:".main",
      start:"top 10%",
      end:"top 5%",
      scrub:true,
    }
  })
})
}
secondLoader()

  
function sheryjs (){
  if(window.innerWidth > 768){
    Shery.makeMagnet(".can" /* Element to target.*/, {
      //Parameters are optional.
      ease: "cubic-bezier(0.23, 1, 0.320, 1)",
      duration: 1,
    });
  
    Shery.mouseFollower({
      //Parameters are optional.
      skew: true,
      ease: "cubic-bezier(0.23, 1, 0.320, 1)",
      duration: 1,
    });
  
    Shery.imageEffect(".page5-img", {
      style: 2,
      gooey: true,
      config:{"resolutionXY":{"value":100},"distortion":{"value":true},"mode":{"value":-3},"mousemove":{"value":0},"modeA":{"value":1},"modeN":{"value":0},"speed":{"value":1,"range":[-500,500],"rangep":[-10,10]},"frequency":{"value":50,"range":[-800,800],"rangep":[-50,50]},"angle":{"value":0.5,"range":[0,3.141592653589793]},"waveFactor":{"value":1.4,"range":[-3,3]},"color":{"value":10212607},"pixelStrength":{"value":3,"range":[-20,100],"rangep":[-20,20]},"quality":{"value":5,"range":[0,10]},"contrast":{"value":1,"range":[-25,25]},"brightness":{"value":1,"range":[-1,25]},"colorExposer":{"value":0.18,"range":[-5,5]},"strength":{"value":0.2,"range":[-40,40],"rangep":[-5,5]},"exposer":{"value":8,"range":[-100,100]},"zindex":{"value":"9996999","range":[-9999999,9999999]},"aspect":{"value":1.1606906928153362},"ignoreShapeAspect":{"value":true},"shapePosition":{"value":{"x":0,"y":0}},"shapeScale":{"value":{"x":0.5,"y":0.5}},"shapeEdgeSoftness":{"value":0,"range":[0,0.5]},"shapeRadius":{"value":0,"range":[0,2]},"currentScroll":{"value":0},"scrollLerp":{"value":0.07},"gooey":{"value":true},"infiniteGooey":{"value":true},"growSize":{"value":4.95,"range":[1,15]},"durationOut":{"value":1,"range":[0.1,5]},"durationIn":{"value":1.5,"range":[0.1,5]},"displaceAmount":{"value":0.5},"masker":{"value":false},"maskVal":{"value":1,"range":[1,5]},"scrollType":{"value":0},"geoVertex":{"range":[1,64],"value":1},"noEffectGooey":{"value":true},"onMouse":{"value":1},"noise_speed":{"value":1.45,"range":[0,10]},"metaball":{"value":0.2,"range":[0,2],"_gsap":{"id":52}},"discard_threshold":{"value":0.5,"range":[0,1]},"antialias_threshold":{"value":0,"range":[0,0.1]},"noise_height":{"value":0.46,"range":[0,2]},"noise_scale":{"value":10.69,"range":[0,100]}}
    });
  }
  
}
sheryjs()


function clutter(){
  
var clutter = ""
var h1 = document.querySelector(".page2 #wrap1 h1")
  h1.textContent.split("").forEach(function(e){
    clutter += `<span> ${e}</span>`
    h1.innerHTML = clutter
    })

var butter = ""    
var h12 = document.querySelector(".page2 #wrap2>h1")
  h12.textContent.split("").forEach(function(f){
    butter += `<span>${f}</span>`
    h12.innerHTML = butter
    })



}
clutter()


function canvas(){
  


  const canvas = document.querySelector(".page6>canvas");
  const context = canvas.getContext("2d");
  
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  
  
  window.addEventListener("resize", function () {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  render();
  });
  
  function files(index) {
  var data = `
  ./clipchamp_000.jpg
  ./clipchamp_001.jpg
  ./clipchamp_002.jpg
  ./clipchamp_003.jpg
  ./clipchamp_004.jpg
  ./clipchamp_005.jpg
  ./clipchamp_006.jpg
  ./clipchamp_007.jpg
  ./clipchamp_008.jpg
  ./clipchamp_009.jpg
  ./clipchamp_010.jpg
  ./clipchamp_011.jpg
  ./clipchamp_012.jpg
  ./clipchamp_013.jpg
  ./clipchamp_014.jpg
  ./clipchamp_015.jpg
  ./clipchamp_016.jpg
  ./clipchamp_017.jpg
  ./clipchamp_018.jpg
  ./clipchamp_019.jpg
  ./clipchamp_020.jpg
  ./clipchamp_021.jpg
  ./clipchamp_022.jpg
  ./clipchamp_023.jpg
  ./clipchamp_024.jpg
  ./clipchamp_025.jpg
  ./clipchamp_026.jpg
  ./clipchamp_027.jpg
  ./clipchamp_028.jpg
  ./clipchamp_029.jpg
  ./clipchamp_030.jpg
  ./clipchamp_031.jpg
  ./clipchamp_032.jpg
  ./clipchamp_033.jpg
  ./clipchamp_034.jpg
  ./clipchamp_035.jpg
  ./clipchamp_036.jpg
  ./clipchamp_037.jpg
  ./clipchamp_038.jpg
  ./clipchamp_039.jpg
  ./clipchamp_040.jpg
  ./clipchamp_041.jpg
  ./clipchamp_042.jpg
  ./clipchamp_043.jpg
  ./clipchamp_044.jpg
  ./clipchamp_045.jpg
  ./clipchamp_046.jpg
  ./clipchamp_047.jpg
  ./clipchamp_048.jpg
  ./clipchamp_049.jpg
  ./clipchamp_050.jpg
  ./clipchamp_051.jpg
  ./clipchamp_052.jpg
  ./clipchamp_053.jpg
  ./clipchamp_054.jpg
  ./clipchamp_055.jpg
  ./clipchamp_056.jpg
  ./clipchamp_057.jpg
  ./clipchamp_058.jpg
  ./clipchamp_059.jpg
  ./clipchamp_060.jpg
  ./clipchamp_061.jpg
  ./clipchamp_062.jpg
  ./clipchamp_063.jpg
  ./clipchamp_064.jpg
  ./clipchamp_065.jpg
  ./clipchamp_066.jpg
  ./clipchamp_067.jpg
  ./clipchamp_068.jpg
  ./clipchamp_069.jpg
  ./clipchamp_070.jpg
  ./clipchamp_071.jpg
  ./clipchamp_072.jpg
  ./clipchamp_073.jpg
  ./clipchamp_074.jpg
  ./clipchamp_075.jpg
  ./clipchamp_076.jpg
  ./clipchamp_077.jpg
  ./clipchamp_078.jpg
  ./clipchamp_079.jpg
  ./clipchamp_080.jpg
  ./clipchamp_081.jpg
  ./clipchamp_082.jpg
  ./clipchamp_083.jpg
  ./clipchamp_084.jpg
  ./clipchamp_085.jpg
  ./clipchamp_086.jpg
  ./clipchamp_087.jpg
  ./clipchamp_088.jpg
  ./clipchamp_089.jpg
  ./clipchamp_090.jpg
  ./clipchamp_091.jpg
  ./clipchamp_092.jpg
  ./clipchamp_093.jpg
  `
  return data.split("\n")[index];
  }
  
  const frameCount = 93;
  
  const images = [];
  const imageSeq = {
  frame: 1,
  };
  
  for (let i = 0; i < frameCount; i++) {
  const img = new Image();
  img.src = files(i);
  images.push(img);
  }
  
  gsap.to(imageSeq, {
  frame: frameCount - 1,
  snap: "frame",
  ease: `none`,
  scrollTrigger: {
    scrub: .5,
    trigger: `.page6`,
    start: `top top`,
    end: `250% top`,
    scroller: `.main`,
  },
  onUpdate: render,
  });
  
  images[1].onload = render;
  
  function render() {
  scaleImage(images[imageSeq.frame], context);
  }
  
  function scaleImage(img, ctx) {
  var canvas = ctx.canvas;
  var hRatio = canvas.width / img.width;
  var vRatio = canvas.height / img.height;
  var ratio = Math.max(hRatio, vRatio);
  var centerShift_x = (canvas.width - img.width * ratio) / 2;
  var centerShift_y = (canvas.height - img.height * ratio) / 2;
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.drawImage(
    img,
    0,
    0,
    img.width,
    img.height,
    centerShift_x,
    centerShift_y,
    img.width * ratio,
    img.height * ratio
  );
  }
  ScrollTrigger.create({
  
  trigger: ".page6",
  pin: true,
  scroller: `.main`,
  start: `top top`,
  end: `250% top`,
  });




}
canvas()










