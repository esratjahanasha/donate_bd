//calling fun for changing title
forTitle("card2-t", "Donate for Flood Relief in Feni,Bangladesh");
forTitle("card3-t", "Aid for Injured in the Quota Movement");
//calling function for changing description
forDes(
  "description",
  "The recent floods in Feni have devastated local communities, leading to severe disruption and loss. Your generous donation will help provide immediate aid, including food, clean water, and medical supplies, to those affected by this calamity. Together, we can offer crucial support and help rebuild lives in the aftermath of this disaster. Every contribution counts towards making a real difference. Please consider donating today to assist those in urgent need."
);
forDes(
  "description2",
  "The recent Quota movement has resulted in numerous injuries and significant hardship for many individuals. Your support is crucial in providing medical assistance, rehabilitation, and necessary supplies to those affected. By contributing, you help ensure that injured individuals receive the care and support they need during this challenging time. Every donation plays a vital role in alleviating their suffering and aiding in their recovery. Please consider making a donation to support these brave individuals in their time of need."
);

//fade out header
const header = document.getElementById("head");
const navb = document.getElementById("navbar");

document.addEventListener("DOMContentLoaded", function () {
  handlescroll();
});
window.addEventListener("load", handlescroll);

window.addEventListener("scroll", handlescroll);
//  window.addEventListener("load", handlescroll);
