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

//money add+ decrease money

const maintag = document.getElementById("main-tag");

//handling button style
const submitbtn = maintag.querySelectorAll("button[type='submit']");

const histry = document.querySelector(".history-sec");

//modal
function showmodal() {
  document.getElementById("confirmationModal").classList.remove("hidden");
  document.getElementById("confirmationModal").classList.add("flex");
  document.body.classList.add("overflow-hidden"); // scroll বন্ধ
}

function closeModal() {
  document.getElementById("confirmationModal").classList.remove("flex");
  document.getElementById("confirmationModal").classList.add("hidden");
  document.body.classList.remove("overflow-hidden");
}

document
  .getElementById("confirmationModal")
  .addEventListener("click", function (event) {
    if (event.target === this) {
      closeModal();
    }
  });
//cursor controled buttons
const allbuttons = document.querySelectorAll(".btn");

//submiited function
maintag.addEventListener("submit", function (event) {
  event.preventDefault();
  const formm = event.target;
  if (formm.tagName !== "FORM") {
    return;
  }

  //value increased

  //get the input current value
  const inputfieldd = formm.querySelector("input[name='donation_amount']");
  const inputvalue = inputfieldd.value;

  //get the total amount
  const total = document.getElementById("total-amnt").innerText;
  const totalamnt = parseFloat(total);

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

    //history section
    histry.classList.add("flex", "flex-col", "gap-4");
    const histryw = document.createElement("div");
    histryw.classList.add(
      "border",
      "border-[#111111]/10",
      "p-5",
      "rounded-2xl",
      "w-full",
      "flex",
      "flex-col",
      "gap-3"
    );

    const cardt = parentSec.querySelector("h2").innerText;

    const historyt = document.createElement("h2");
    const dateP = document.createElement("p");
    dateP.classList.add("text-gray-500");

    historyt.classList.add("font-bold", "text-xl");
    historyt.innerText = `${inputvalue} Taka is donated for ${cardt}`;

    const currentDatetime = new Date();
    dateP.innerText = currentDatetime;
    histryw.appendChild(historyt);
    histryw.appendChild(dateP);

    histry.appendChild(histryw);

    showmodal();
  } else {
    alert("please enter a valid amount");
    inputfieldd.value = "";
  }
});

//tabing
const hstryBtn = document.getElementById("history-btn");
const donateBtn = document.getElementById("donate-btn");
const wrapper = document.getElementById("historywrapper");

//cursor controled buttons
// const allbuttons = document.querySelectorAll(".btn");

function cursorControl(button) {
  button.addEventListener("mouseenter", function () {
    button.classList.remove("cursor-auto");
    button.classList.add("cursor-pointer");
  });

  button.addEventListener("click", function () {
    button.dataset.clicked = "true";
    button.classList.add("cursor-auto");
    button.classList.remove("cursor-pointer");
  });

  button.addEventListener("mouseleave", function () {
    if (button.dataset.clicked === "true") {
      button.classList.add("cursor-auto");
      button.classList.remove("cursor-pointer");
    }
  });
}

allbuttons.forEach(function (button) {
  cursorControl(button);
  button.classList.add(
    "transition",
    "ease-in-out",
    "duration-200",
    "active:scale-95"
  );
});

hstryBtn.addEventListener("click", function () {
  hstryBtn.classList.add("bg-[#B4F461]", "font-semibold");
  hstryBtn.classList.remove("border", "border-[#111111]/30");
  donateBtn.classList.add("border", "border-[#111111]/30");
  donateBtn.classList.remove("bg-[#B4F461]", "font-semibold");

  wrapper.classList.remove("hidden");
  maintag.classList.add("hidden");
});

donateBtn.addEventListener("click", function () {
  hstryBtn.classList.remove("bg-[#B4F461]", "font-semibold");
  hstryBtn.classList.add("border", "border-[#111111]/30");
  donateBtn.classList.remove("border", "border-[#111111]/30");
  donateBtn.classList.add("bg-[#B4F461]", "font-semibold");

  wrapper.classList.add("hidden");
  maintag.classList.remove("hidden");
});
