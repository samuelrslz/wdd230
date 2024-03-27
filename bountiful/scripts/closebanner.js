const bannerButton = document.querySelector("#bannerButton");
const invitationBanner = document.querySelector("#invitation-banner");

bannerButton.addEventListener("click", () => {
  invitationBanner.classList.toggle("hide");
});

const dayToday = new Date();
dayNumber = dayToday.getDay();
console.log(dayNumber);

// Only show the banner Mondays, Tuesdays, and Wednesdays

notAllowedDays = [0, 4, 5, 6];

if (notAllowedDays.includes(dayNumber)) {
  invitationBanner.classList.toggle("hide");
}
