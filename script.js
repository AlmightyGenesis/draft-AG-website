 function hideAll() {

    document.getElementById("home").classList.remove("active");

    document.getElementById("contentPage").classList.remove("active");

}


/* SHOW SECTION */
function showSection(id) {

    /* HOME HIDE*/
    document.getElementById("home").classList.remove("active");

    /* CONTENT PAGE HIDE */
    document.getElementById("contentPage").classList.remove("active");


    document.getElementById("contactPage").classList.remove("active");

    document.getElementById("mainHomePage").style.display = "block";

    /* SHOW SELECTED PAGE */
    document.getElementById(id).classList.add("active");

    /* NAVBAR SHOW */
    document.getElementById("navbar").style.display = "flex";

}

/* OPEN PAGE */
function openPage (type) {

    const page = 
    document.getElementById("contentPage");

    page.classList.remove(
        "overview-theme",
        "mission-theme",
        "vission-theme"
    );

    document.getElementById("whyChooseContent").style.display = "none";

    document.getElementById("contactPage").classList.remove("active");

    document.getElementById("mainHomePage").style.display = "none";
    
    /* HOME PAGE HIDE */
    document.getElementById("home").classList.remove("active");

    /* CONTENT PAGE SHOW */
    document.getElementById("contentPage").classList.add("active");


    /* HIDE EXTRA SECTIONS */

document.getElementById("overviewProcess").style.display = "none";
document.getElementById("overviewWhat").style.display = "none";
document.getElementById("missionBoxes").style.display = "none";
document.getElementById("missionFlow").style.display = "none";
document.getElementById("visionSection").style.display = "none";
document.querySelector(".vision-flow-section").style.display = "none";
document.getElementById("whyChooseSection").style.display = "none";

/* WHY CHOOSE US PAGE */
if(type === "whychoose") {

    document.getElementById("videoSource").src = "whychoose.mp4";
    document.getElementById("contentVideo").load();

    document.getElementById("pageTitle").innerText = "WHY CHOOSE US";
    
    document.getElementById("pageQuestion").innerText =
    "Why businesses and professionals trust Almighty Genesis?";

    document.getElementById("detailTitle").innerText =
    "Building Trust Through Innovation";

    document.getElementById("detailText").innerText =
    "We provide smart business strategies, technology solutions, and professional guidance to help businesses grow successfully.";

    /* SHOW WHY CHOOSE SECTION */
    document.getElementById("whyChooseSection").style.display = "flex";
}



    let title = "";
    let question = "";
    let text = "";
    let bgVideo = "";
    let detailHeading = "";
    
    switch(type) {

        /* ABOUT */

    case "overview":
        title = "COMPANY OVERVIEW";
        question = "Who Are We And What Drives our Innovaton?";
        detailHeading = "Empowering Businesses Through Exceptional Outsourcing Solutions"
        text = "At ALMIGHTY GENESIS, we help organizations streamline operations, enhance customer experiences, and achieve sustainable growth through reliable and cost-effective Business Process Outsourcing (BPO) services. \n\nFounded with a commitment to excellence, innovation, and customer success, we partner with businesses across diverse industries to manage critical business functions while allowing them to focus on their core objectives. Our experienced professionals, advanced technology, and customer-centric approach enable us to deliver high-quality solutions tailored to each client's unique requirements.";
        bgVideo = "overview.mp4";
        page.classList.add("overview-theme");
        break;

    case "mission":
        title = "OUR MISSION";
        question = "What Inspires Our Journey Toward Excellence?";
        detailHeading = "MAKING IMPOSSIBLE, POSSIBLE...";
        text = "To provide innovative, scalable, and reliable outsourcing solutions that drive business success, improve operational efficiency, and create lasting value for our clients.";
        bgVideo = "mission.mp4";
        page.classList.add("mission-theme");
        break;

    case "vision":
        title = "OUR VISION";
        question = "Ready For Future WithUs...!!!";
        detailHeading = "BUILDING LONG-TERM SUCCESS...!";
        text = "To become a trusted global outsourcing partner recognized for service excellence, technological innovation, and long-term client relationships.";
        bgVideo = "vision.mp4";
        document.getElementById("visionSection").style.display = "flex";
        document.querySelector(".vision-flow-section").style.display = "block";
        page.classList.add("vission-theme");
        break;

    case "why":
        title = "WHY CHOOSE US";
        question = "Why DO Businesses Trust Almighty Genesis?";
        detailHeading = "Who We Are";
        text = "We are a team of dedicated outsourcing specialists providing end-to-end business support services to companies worldwide. From customer support and technical assistance to back-office operations and data management, we serve as an extension of our clients' teams, ensuring efficiency, accuracy, and exceptional service delivery. \n\n Our goal is simple: to help businesses reduce operational costs, improve productivity, and deliver superior customer experiences.";

        bgVideo = "why.mp4";
        document.getElementById("whyChooseSection").style.display = "block";
        document.getElementById("whyChooseContent").style.display = "block";
        page.classList.add("why-theme");
        break;


    /* SERVICES */
    case "lead":
        title = "LEAD GENERATION AND SALES SUPPORT";
        text = "work remotely with flexible timings and professional growth opportunities.";
        bgVideo = "LG-2.mp4";
        break;
        
    case "hr":
        title = "HR & RECRUITMENT PROCESS OUTSOURCING";
        text = "work remotely with flexible timings and professional growth opportunities.";
        bgVideo = "hrteam.mp4";
        break;
        
    case "office":
        title = "BACK OFFICE ADMINISTRATION";
        text = "work remotely with flexible timings and professional growth opportunities. Improve your skills and build your future from home.";
        bgVideo = "administrate.mp4";
        break; 
        
    case "customer":
        title = "CUSTOMER SUPPORT SERVICE";
        text = "work remotely with flexible timings and professional growth opportunities.";
        bgVideo = "customer.mp4";
        break;
        
    case "inbond":
        title = "INBOND & OUTBOND CALL CENTER OPERATIONS";
        text = "Work remotely with flexible timings and professional growth opportunities";
        bgVideo = "call.mp4";
        break;
        
    case "technical":
        title: "TECHNICAL SUPPORT";
        text = "Work remotely with flexible timings and professional growth opportunities. Improve your skills and build your future from home.";
        bgVideo = "technical.mp4";
        break;
    
    case "data":
        title = "Data Processing";
        text = "Work remotely with flexible timingd and professional growth opportunities. Improve your skills and build your future from home.";
        bgVideo = "processing.mp4";
        break;
        
    /* BUSINESS MODEL */
    case "startup":
        title = "STARTUP PARTNERSHIP";
        text = "A franchise business offers many advantage to entrepreneurs who want to start a business with lower risk.";
        bgVideo = "startup.mp4";
        break; 

    case "business":
        title = "BUSINESS COLLABORATION";
        text = "A franchise business offers many advantage to enterpreneurs who want to start a business with lower risk.";
        bgVideo = "bcollaboration.mp4";
        break;    
        
    case "revenue":
        title = "REVENUE STRUCTURE";
        text = "At our oraganisaton revenue is not judst about earning - It is build around creating sustainable careers, business opportunities and long - Term growth for both candidates and partner.";
        bgVideo = "revenue.mp4";
        break;  
        
    case "training":
        title = "TRAINING & SUPPORT";
        text = "A Franchise business offers many advantage to entrepreneurs who want to start a business with lower risk.";
        bgVideo = "training.mp4";
        break;
        
    case "industry":
        tile = "INDUSTRIES WE SERVE";
        text = "Work remotely with flexible timings and professional growth opportunities. Improve your skills and build your future from home.";
        bgVideo = "industry.mp4";
        break;
            
    /* BUSINESS OPPORTUNITIES */    
    case "work":
        title = "WORK WITH US";
        text = "A franchise business offers many advantages to entrepreneurs who want to start a business with lower risk.";
        bgVideo = "work.mp4";
        break; 

    case "start-up":
        title = "STARTUP COLLABORATION"; 
        text = "A franchise business offers many advantage to entrepreneurs who want to start a business with lower risk.";
        bgVideo = "collaboration.mp4";
        break;

    case "b2b":
        title = "B2B SERVICES";
        text = "A Franchise business offers many advantages to entrepreneurs who want to start a business with lower risk.";
        bgVideo = "b2b.mp4";
        break;
        
    case "Entrepreneurship":
        title = "ENTREPRENEURSHIP PROGRAM";
        text = "A Franchise business offers many advantages to entrepreneurs who want to start a business with lower risk";
        bgVideo = "program.mp4";
        break;

    /* CAREERS */
    case "Work":
        title = "WORK";
        text = "A Franchise business offers many advantages to entrepreneurs who want to start a business with lower risk";
        bgVideo = "office.mp4";
        break;

    case "internship":
        title = "INTERNSHIP PROGRAM";
        text = "A Franchise business offers many advantages to enterpreneurs who want to start a business with lower risk";
        bgVideo = "internship.mp4";
        break;    
    
    }          

    document.getElementById("pageTitle").innerText = title;
    document.getElementById("pageQuestion").innerText = question;
    document.getElementById("detailTitle").innerText = detailHeading;
    document.getElementById("detailText").innerText = text;

    document.getElementById("videoSource").src = bgVideo;
    document.getElementById("contentVideo").load();

    
    /* SHOW ONLY FOR OVERVIEW PAGE */

if(type === "overview") {

    document.getElementById("overviewProcess").style.display = "block";

} else {

    document.getElementById("overviewProcess").style.display = "none";
}

if(type === "overview") {

    document.getElementById("overviewWhat").style.display = "block";

} else {

    document.getElementById("overviewWhat").style.display = "none";
}

/* SHOW ONLY FOR MISSION PAGE */

if(type === "mission") {

    document.getElementById("missionBoxes").style.display = "block";

} else {

    document.getElementById("missionBoxes").style.display = "none";
}

/* SHOW ONLY FOR MISSION PAGE */

if(type === "mission") {

    document.getElementById("missionFlow").style.display = "block";

} else {

    document.getElementById("missionFlow").style.display = "none";
}

/* SHOW ONLY FOR VISSION PAGE */
if(type === "vision") {
    document.getElementById("visionFlow").style.display = "block";

} else {
    document.getElementById("visionFlow").style.display = "none";
}

/* SHOW ONLY FOR WHY CHOOSE US PAGE */
if(type === "why") {
    document.getElementById("whyChooseSection").style.display = "block";

} else {
    document.getElementById("whyChooseSection").style.display = "none";
}

}

/* WHY CHOOSE US ACCORDION */

const chooseItems = document.querySelectorAll(".choose-item");

chooseItems.forEach(item => {

    const question = item.querySelector(".choose-question");

    question.addEventListener("click", () => {

        chooseItems.forEach(otherItem => {
            if(otherItem !== item) {

                otherItem.classList.remove("active");
            }
        });

        item.classList.toggle("active");

    });

});

/* SCROLL ANIMATION */

const scrollElements = document.querySelectorAll(
".scroll-box, .scroll-img, .footer"
);

function scrollAnimation() {

    scrollElements.forEach((el) => {

        const elementTop = el.getBoundingClientRect().top;

        const screenHeight = window.innerHeight;

        if(elementTop < screenHeight - 100){

            el.classList.add("show");

        }

    });

}

window.addEventListener("scroll", scrollAnimation);

scrollAnimation();

function openContact() {

    /* HOME HIDE */
    document.getElementById("mainHomePage").style.display = "none";

    /* CONTENT PAGE HIDE */
    document.getElementById("contentPage").classList.remove("active");

    /* CONTACT SHOW */
    document.getElementById("contactPage").classList.add("active");

    setTimeout(() => {
        initCompanyMap();
    }, 300);

    /* NAVBAR */
    document.getElementById("navbar").style.display = "flex";

    window.scrollTo(0,0);
}

function initCompanyMap() {

   const mapContainer = 
   document.getElementById("companyMap");
      
   if(mapContainer._leaflet_id){
    return;
   }

    const map = L.map('companyMap', {
        zoomControl: true
    }).setView([16.5, 80.6], 6);

    map.attributionControl.remove();

    /* DARK MAP */
    L.tileLayer(
    'https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png',
    {
        attribution: '© OpenStreetMap contributors'
    }).addTo(map);

    /* HYDERABAD */
    const hyderabad = L.marker([17.3850, 78.4867]).addTo(map);

    hyderabad.bindPopup(
        "<b>Hyderabad Office</b><br>Telangana"
    );

    /* ANDHRA PRADESH */
    const ap =  L.marker([16.9891,82.2475]).addTo(map);

    ap.bindPopup(
        "<b>Andhra Pradesh Office</b><br>Kakinada"
    );

    /* AUTO ZOOM ON CLICK */
    hyderabad.on("click", function() {
        map.setView([17.2850, 78.4867], 12);
    });

    ap.on("click", function() {
        map.setView([16.9891, 82.2475], 12);
    });

    if(type === "why") {
        document.getElementById("whyChooseContent").style.display = "block";
    }else {

        document.getElementById("whyChooseContent").style.display = "none";
    }

    
}

