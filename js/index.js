const siteContent = {
  nav: {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  cta: {
    h1: "DOM Is Awesome",
    button: "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4": "Features",
    "features-content":
      "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4": "About",
    "about-content":
      "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4": "Services",
    "services-content":
      "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4": "Product",
    "product-content":
      "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4": "Vision",
    "vision-content":
      "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis."
  },
  contact: {
    "contact-h4": "Contact",
    address: "123 Way 456 Street Somewhere, USA",
    phone: "1 (888) 888-8888",
    email: "sales@greatidea.io"
  },
  footer: {
    copyright: "Copyright Great Idea! 2018"
  }
};

// Example: Update the img src for the logo
const logo = document.getElementById("logo-img");
logo.setAttribute("src", siteContent["nav"]["img-src"]);

const headerImg = document.getElementById("cta-img");
headerImg.setAttribute("src", siteContent["cta"]["img-src"]);

const midImg = document.getElementById("middle-img");
midImg.setAttribute("src", siteContent["main-content"]["middle-img-src"]);

const navContent = document.querySelectorAll("a");
navContent[0].textContent = siteContent["nav"]["nav-item-1"];
navContent[1].textContent = siteContent["nav"]["nav-item-2"];
navContent[2].textContent = siteContent["nav"]["nav-item-3"];
navContent[3].textContent = siteContent["nav"]["nav-item-4"];
navContent[4].textContent = siteContent["nav"]["nav-item-5"];
navContent[5].textContent = siteContent["nav"]["nav-item-6"];

navContent.forEach(el => (el.style.color = "green"));

const item1 = document.createElement("h1");
const item1text = document.createTextNode("this is item 1");
item1.appendChild(item1text);
item1.style.color = "green";
document.querySelector("nav").prepend(item1);
const item2 = document.createElement("h1");
const item2text = document.createTextNode("this is item 2");
item2.appendChild(item2text);
item2.style.color = "green";
document.querySelector("nav").appendChild(item2);

const ctaH1 = document.querySelector(".cta-text h1");
ctaH1.textContent = siteContent["cta"]["h1"];

const ctaButton = document.querySelector(".cta-text button");
ctaButton.textContent = siteContent["cta"]["button"];

const mainTitles = document.querySelectorAll(".main-content h4");
mainTitles[0].textContent = siteContent["main-content"]["features-h4"];
mainTitles[1].textContent = siteContent["main-content"]["about-h4"];
mainTitles[2].textContent = siteContent["main-content"]["services-h4"];
mainTitles[3].textContent = siteContent["main-content"]["product-h4"];
mainTitles[4].textContent = siteContent["main-content"]["vision-h4"];

const mainPara = document.querySelectorAll(".main-content p");
mainPara[0].textContent = siteContent["main-content"]["features-content"];
mainPara[1].textContent = siteContent["main-content"]["about-content"];
mainPara[2].textContent = siteContent["main-content"]["services-content"];
mainPara[3].textContent = siteContent["main-content"]["product-content"];
mainPara[4].textContent = siteContent["main-content"]["vision-content"];

const contactSec = document.querySelector(".contact h4");
contactSec.textContent = siteContent["contact"]["contact-h4"];

const contactPar = document.querySelectorAll(".contact p");
contactPar[0].textContent = siteContent["contact"]["address"];
contactPar[1].textContent = siteContent["contact"]["phone"];
contactPar[2].textContent = siteContent["contact"]["email"];

const footerSec = document.querySelector("footer p");
footerSec.textContent = siteContent["footer"]["copyright"];
