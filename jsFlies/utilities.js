//changing title for different cards
function forTitle(id, innertext) {
  const title = document.getElementById(id);
  title.innerText = innertext;
}

//changing description for different cards
function forDes(id, p) {
  const description = document.getElementById(id);
  description.innerText = p;
}

// traslucent header
function handlescroll() {
  if (window.scrollY > 1) {
    header.classList.add(
      "backdrop-blur-md",
      "bg-white/50"
      // "transition-all",
      // "duration-900",
      // "ease-in-out"
    );
    navb.classList.remove("bg-[#F9F7F3]");
    navb.classList.add("bg-[#F9F7F3]/70");
  } else {
    header.classList.remove(
      "backdrop-blur-md",
      "bg-white/50",
      "transition-all",
      "duration-300"
    );
    navb.classList.add("bg-[#F9F7F3]");
    navb.classList.remove("bg-[#F9F7F3]/70");
  }
}

//get the total amount
const total = document.getElementById("total-amnt").innerText;
const totalamnt = parseFloat(total);

//money add+ decrease money

const maintag = document.getElementById("main-tag");

//handling button style
const submitbtn = maintag.querySelectorAll("button[type='submit']");
submitbtn.forEach(function (btn) {
  btn.classList.add("cursor-pointer");
});

//submiited function
maintag.addEventListener("submit", function (event) {
  event.preventDefault();
  const formm = event.target;
  if (formm.tagName !== "FORM") {
    return;
  }

  //handling button style
  // submitbtn.forEach(function (btn) {
  //   btn.addEventListener("click",function(event){
  //   btn.classList.remove("cursor-pointer");
  //   })
  // });

  //value increased

  //get the input current value
  const inputfieldd = formm.querySelector("input[name='donation_amount']");
  const inputvalue = inputfieldd.value;

  if (!isNaN(inputvalue) && inputvalue > 0 && inputvalue <= totalamnt) {
    const valuee = parseFloat(inputvalue);

    //get the past value
    const parentSec = formm.parentElement.parentElement;
    const addelement = parentSec.querySelector("span .add-amnt");
    const addvalue = addelement.innerText;
    const pastvalue = parseFloat(addvalue);

    //adding current and past values
    const naddvalue = pastvalue + valuee;
    const fvaluee = parseFloat(naddvalue);

    //set increased value
    formm.parentElement.parentElement.querySelector(
      "span .add-amnt"
    ).innerText = fvaluee;

    inputfieldd.value = "";

    //value decreased

    const currenttotalamnt = totalamnt - valuee;
    document.getElementById("total-amnt").innerText = currenttotalamnt;
  } else {
    alert("please enter a valid amount");
  }
});
