/* Start Dark mode*/

var themeToggleDarkIcon = document.getElementById("theme-toggle-dark-icon");
var themeToggleLightIcon = document.getElementById("theme-toggle-light-icon");

if (
  localStorage.getItem("color-theme") === "dark" ||
  (!("color-theme" in localStorage) &&
    window.matchMedia("(prefers-color-scheme: dark)").matches)
) {
  themeToggleLightIcon.classList.remove("hidden");
} else {
  themeToggleDarkIcon.classList.remove("hidden");
}

var themeToggleBtn = document.getElementById("theme-toggle");

themeToggleBtn.addEventListener("click", function () {
  // toggle icons inside button
  themeToggleDarkIcon.classList.toggle("hidden");
  themeToggleLightIcon.classList.toggle("hidden");

  // if set via local storage previously
  if (localStorage.getItem("color-theme")) {
    if (localStorage.getItem("color-theme") === "light") {
      document.documentElement.classList.add("dark");
      localStorage.setItem("color-theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("color-theme", "light");
    }

    // if NOT set via local storage previously
  } else {
    if (document.documentElement.classList.contains("dark")) {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("color-theme", "light");
    } else {
      document.documentElement.classList.add("dark");
      localStorage.setItem("color-theme", "dark");
    }
  }
});

/* End Dark mode*/


/* toogle cards */

function myFunction() {
  var x = document.querySelectorAll('.annual');
  var y = document.querySelectorAll('.month');
  for (var i = 0; i < x.length; i++) {
    if (document.getElementById("toggle").checked == true) {
      x[i].classList.add('hidden');
      y[i].classList.remove('hidden');
    } else {
      x[i].classList.remove('hidden');
      y[i].classList.add('hidden');
    }
  }
}

// 



function gallery(){
  this.index=0;
  this.load=function(){
    this.rootEl = document.querySelector(".gallery");
    this.platform = this.rootEl.querySelector(".platform");
    this.frames = this.platform.querySelectorAll(".each-frame");
    this.contentArea = this.rootEl.querySelector(".content-area");      
    this.width = parseInt(this.rootEl.style.width);
    this.limit = {start:0,end:this.frames.length-1};
    this.frames.forEach(each=>{each.style.width=this.width+"px";});   
    this.goto(this.index);      
  }
  this.set_title = function(){this.rootEl.querySelector(".heading").innerText=this.frames[this.index].getAttribute("title");}
  this.next = function(){this.platform.style.right=this.width * ++this.index + "px";this.set_title();}
  this.prev = function(){this.platform.style.right=this.width * --this.index + "px";this.set_title();}
  this.goto = function(index){this.platform.style.right = this.width * index + "px";this.index=index;this.set_title();}
  this.load();
}
var G = new gallery();
G.rootEl.addEventListener("click",function(t){
    var val = t.target.getAttribute("action");
    if(val == "next" && G.index != G.limit.end){G.next();}
    if(val == "prev" && G.index != G.limit.start){G.prev();}
    if(val == "goto"){
        let rv = t.target.getAttribute("goto");
        rv = rv == "end" ? G.limit.end:rv;
        G.goto(parseInt(rv));
    }
});
document.addEventListener("keyup",function(t){
    var val = t.keyCode;
    if(val == 39 && G.index != G.limit.end){G.next();}
    if(val == 37 && G.index != G.limit.start){G.prev();}
});





/* card slider start */ 

tailwind.config = {
  theme: {
      extend: {
          fontFamily: {
              inter: ['Inter', 'sans-serif'],
          },
      },
  },
};

/* card slider end */