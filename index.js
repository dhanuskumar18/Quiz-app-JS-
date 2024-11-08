let i = 0;//to access array(questions)
let score = 0;//score 

let sec = 10;//timer of 10 secs
let timer;
function start() {
  if (i < choose.length) {
    timer = setInterval(() => {
      document.querySelector(".timer").style.display = "block";
      document.querySelector(".timer").innerHTML = sec;
      sec = sec - 1;
      if (sec < 0) {
        clearInterval(timer);
        sub();
      }
    }, 1000);
    let h = document.querySelector("h1");
    let b = document.querySelector("button");
    let f = document.querySelector("form");
    f.style.display = "block";
    h.style.display = "none";
    b.style.display = "none";
    let q = choose[i].ques;
    let ques = document.querySelector(".ques");
    ques.style.fontWeight="bold"
    ques.style.fontSize="larger"
    ques.innerHTML = (i + 1) + "." + q;
    console.log(choose[i].opt.length);
    for (let j = 0; j < choose[i].opt.length; j++) {
      let c = document.querySelector(`.o${j + 1}`);
      let id = document.querySelector(`#o${j + 1}`);
      id.setAttribute("value", choose[i].opt[j]);
      c.style.fontStyle="italic"  
      c.innerHTML = choose[i].opt[j];
    }
  } else {
    let h = document.querySelector("h1");
    h.style.display = "block";
    let f = document.querySelector("form");
    f.style.display = "none";
    let ques = document.querySelector(".ques");
    ques.style.display = "none";
    let t = document.querySelector(".timer");
    t.style.display = "none";
if(score > 3){
    h.innerHTML = "You are strong in technical 😎" + "<br>" + "score:" + score+"/5";
    
}
else{
    h.innerHTML = "Focus in technical 🙂 " + "<br>" + "score:" + score+"/5";

}
  }
}

function sub() {
  let ans;

  try {
    ans = document.querySelector('input[name="opt"]:checked').value;
    console.log(ans);
    document.querySelector('input[name="opt"]:checked').checked= false;


  } catch (error) {
    console.log(error);
    ans = null;
    console.log(ans);
    
  }
  if (ans == choose[i].ans) {
    score = score + 1;
  }

  // setInterval(sub,t);
  console.log(score);
  i++;
  sec = 10;
  clearInterval(timer);
  start();
}

let choose = [
  {
    ques: "What does HTML stand for?",
    opt: [
      "Hyper Text Markup Language",
      "Home Tool Markup Language",
      "Hyperlinks and Text Markup Language",
    ],
    ans: "Hyper Text Markup Language",
  },
  {
    ques: "Does the tag < bdo > change the direction of text?",
    opt: ["yes", "no", "none"],
    ans: "yes",
  },
  {
    ques: "In JavaScript, 'this' refers to the object that ____ the object.",
    opt: ["Receives", "Depends", "Owns"],
    ans: "Owns",
  },
  {
    ques: "Which of the following is an instruction to the web browser about what version of the markup language the page is written in?",
    opt: ["Meta tag", "Doctype", "Markup"],
    ans: "Doctype",
  },
  {
    ques: "What are the two methods of forms transfer?",
    opt: ["get and post", "get and receive", "recieve and post"],
    ans: "get and post",
  },
];
