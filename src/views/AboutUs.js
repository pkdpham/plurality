import React from "react";


function App() {
  return <AboutUsPage {...aboutUsPageData} />;
}

export default App;

function AboutUsPage(props) {
  const {
    spanText1,
    spanText2,
    spanText3,
    learnAboutTheImpa,
    deviceMacbookPro1,
    ourPurpose,
    theDivisionOfOur,
    deviceMacbookPro2,
    publicProfileMockup1,
    spanText4,
    spanText5,
    spanText6,
    spanText7,
    spanText8,
    spanText9,
    shareStoryMockup1,
    demo,
    deviceMacbookPro3,
    ourTeam,
    maskGroup1,
    maskGroup2,
    maskGroup3,
    maskGroup4,
    group441Props,
    group442Props,
    group443Props,
    group444Props,
  } = props;

  return (
    <div className="container-center-horizontal">
      <div className="about-us-pagescreen">
        <div className="flex-col">
          <div className="flex-row">
            <div className="learn-container">
              <h1 className="learn-communicate-empathizevalign-text-middle">
                <span>
                  <span className="span0">{spanText1}</span>
                  <span className="span1">{spanText2}</span>
                  <span className="span2">{spanText3}</span>
                </span>
              </h1>
              <div className="learn-about-the-impapoppins-semi-bold-black-18px">
                {learnAboutTheImpa}
              </div>
            </div>
            <div className="overlap-group5">
              <img className="vector-1" src="vector-1-1.svg" />
              <img className="vector-3" src="vector-3.svg" />
              <img className="vector" src="vector-2-1.svg" />
              <img className="vector" src="vector-4.svg" />
              <img className="vector-5" src="vector-5.svg" />
              <div className="ellipse-2"></div>
              <img className="device-macbook-pro-1" src={deviceMacbookPro1} />
            </div>
          </div>
          <div className="flex-col-1">
            <div className="our-purposepoppins-semi-bold-eerie-black-36px">
              {ourPurpose}
            </div>
            <div className="flex-row-1">
              <img className="undraw_voting_nvu7-1" src="undraw-voting-nvu7-1.svg" />
              <p className="the-division-of-ourpoppins-medium-silver-chalice-16px">
                {theDivisionOfOur}
              </p>
            </div>
            <div className="overlap-group6poppins-bold-black-36px">
              <img className="vector-8" src="vector-8.svg" />
              <img className="vector-6" src="vector-6.svg" />
              <img className="vector-7" src="vector-7.svg" />
              <div className="ellipse-3"></div>
              <div className="ellipse-4"></div>
              <img className="device-macbook-pro-2" src={deviceMacbookPro2} />
              <img className="public-profile-mockup-1" src={publicProfileMockup1} />
              <div className="help-others-gain-a-n">
                <span className="poppins-bold-black-36px">{spanText4}</span>
                <span className="poppins-normal-black-18px">{spanText5}</span>
              </div>
              <div className="learn-to-empathize">
                <span className="poppins-bold-black-36px">{spanText6}</span>
                <span className="poppins-normal-black-18px">{spanText7}</span>
              </div>
              <div className="become-well-versed">
                <span className="poppins-bold-black-36px">{spanText8}</span>
                <span className="poppins-normal-black-18px">{spanText9}</span>
              </div>
              <img className="share-story-mockup-1" src={shareStoryMockup1} />
              <div className="overlap-group1">
                <img className="line-10" src="line-10.svg" />
                <div className="ellipse-5"></div>
              </div>
              <div className="overlap-group2">
                <img className="line-11" src="line-11.svg" />
                <div className="ellipse-6"></div>
              </div>
            </div>
            <div className="demopoppins-semi-bold-eerie-black-36px">
              {demo}
            </div>
            <div className="overlap-group3">
              <img className="device-macbook-pro-3" src={deviceMacbookPro3} />
              <img className="polygon-3" src="polygon-3.svg" />
            </div>
            <div className="our-teampoppins-bold-black-36px">
              {ourTeam}
            </div>
            <div className="group-container">
              <div className="overlap-group7">
                <div className="ellipse-6-1"></div>
                <div className="mask-group" style={{ backgroundImage: `url(${maskGroup1})` }}></div>
              </div>
              <Group44
                spanText1={group441Props.spanText1}
                spanText2={group441Props.spanText2}
                name={group441Props.name}
              />
            </div>
            <div className="group-container-1">
              <div className="mask-group-1" style={{ backgroundImage: `url(${maskGroup2})` }}></div>
              <Group44
                spanText1={group442Props.spanText1}
                spanText2={group442Props.spanText2}
                name={group442Props.name}
                className={group442Props.className}
              />
            </div>
          </div>
        </div>
        <div className="flex-row-2">
          <div className="overlap-group4">
            <div className="ellipse-5-1"></div>
            <div className="mask-group-2" style={{ backgroundImage: `url(${maskGroup3})` }}></div>
            <div className="mask-group-3" style={{ backgroundImage: `url(${maskGroup4})` }}></div>
          </div>
          <div className="group-container-2">
            <Group44
              spanText1={group443Props.spanText1}
              spanText2={group443Props.spanText2}
              name={group443Props.name}
              className={group443Props.className}
            />
            <Group44
              spanText1={group444Props.spanText1}
              spanText2={group444Props.spanText2}
              name={group444Props.name}
              className={group444Props.className}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

function Group44(props) {
  const { spanText1, spanText2, name, className } = props;

  return (
    <div className={`group-44 ${className || ""}`}>
      <div className="namepoppins-semi-bold-white-18px">
        <span className="span-1poppins-semi-bold-black-18px">{spanText1}</span>
        <span className="span-1poppins-semi-bold-silver-chalice-16px">{spanText2}</span>
      </div>
      <p className="name-1poppins-normal-black-16px">
        {name}
      </p>
    </div>
  );
}

const alanData = {
  spanText1: (
    <React.Fragment>
      Alan Tran
      <br />
    </React.Fragment>
  ),
  spanText2: "Project Manager",
  name: "Alan is from Newcastle, Washington. He is a senior studying Informatics with a concentration in Human Computer Interaction at the University of Washington. Alan wants to work on digital products in the future that promote inclusivity and helps society progress. Alan is passionate about Plurality because the political divide is something that has affected him for a long time. Hearing so many opinions from multiple places made him realize how important this topic is.",
};

const audreyData = {
  spanText1: (
    <React.Fragment>
      Audrey Chen
      <br />
    </React.Fragment>
  ),
  spanText2: "Front-end Developer",
  name: "Audrey is from Eugene, Oregon and is a senior at the University of Washington studying both Law, Society, & Justice and Informatics. Audrey is planning on working in company external relations with non-profit organizations as she is passionate about building community while working to create greater impact. Audrey notes that polarization has made having civil political conversations with the people around her increasing difficult, so by working on Plurality, she hopes to address the overall lack of political education.",
  className: "group-45",
};

const brendanData = {
  spanText1: (
    <React.Fragment>
      Brendan Tran
      <br />
    </React.Fragment>
  ),
  spanText2: "User Experience Designer",
  name: "Brendan is from Puyallup, Washington and is a senior at the University of Washington studying Informatics with a concentration in Human Computer Interaction. As an user experience designer, Brendan is aspiring to creating equitable products to bridge the current information gap. Brendan says that conversations about politics have become more difficult so he strives to create a platform where people are more willing to understand diverse perspectives and can be more informed when voting.",
  className: "group-46",
};

const paulData = {
  spanText1: (
    <React.Fragment>
      Paul Pham
      <br />
    </React.Fragment>
  ),
  spanText2: "Back-end Developer",
  name: "Paul is from Bellevue, Washington and is a senior at the University of Washington studying both Informatics and Education, Communities, and Organizations. He is passionate about increasing equitable access to computing education through research and non-profit work. Paul believes that Plurality has the unique ability to help us learn and practice empathy by sharing stories, listening to other perspectives, and hopefully finding common ground in an increasingly diverse society.",
  className: "group-47",
};

const aboutUsPageData = {
  spanText1: (
    <React.Fragment>
      Learn.
      <br />
    </React.Fragment>
  ),
  spanText2: (
    <React.Fragment>
      Communicate.
      <br />
    </React.Fragment>
  ),
  spanText3: "Empathize.",
  learnAboutTheImpa: "Learn about the impact of American policies by reading and sharing individual stories.",
  deviceMacbookPro1: "device-macbook-pro-1.png",
  ourPurpose: "Our Purpose",
  theDivisionOfOur: (
    <React.Fragment>
      The division of our country has been consistently growing. This increased polarization has contributed to two-sided political beliefs.
      People are more likely to vote based on party rather than policies themselves, stymieing constructive conversation. Without
      conversation, the possibility of bridging the current polarization is minimal. With the lack of current solutions, the political
      atmosphere is likely to become more polarized and gridlocked.
      <br />
      <br />
      Our team aims to create a safe and welcoming platform where users can come to share and learn about diverse perspectives through first
      hand experiences. Our research displayed that political stories are more likely to elicit empathy in comparision to hard facts or
      statistics. This platform prioritizes empathy from users through finding common ground and seeing opposing political parties as people
      rather than an enemy or party.
    </React.Fragment>
  ),
  deviceMacbookPro2: "device-macbook-pro-2.png",
  publicProfileMockup1: "public-profile-mockup-1.png",
  spanText4: (
    <React.Fragment>
      Help others gain a new perspective.
      <br />
    </React.Fragment>
  ),
  spanText5: (
    <React.Fragment>
      <br />
      Share stories your personal experiences that have been affected by United States policy.
    </React.Fragment>
  ),
  spanText6: (
    <React.Fragment>
      Learn to empathize.
      <br />
    </React.Fragment>
  ),
  spanText7: (
    <React.Fragment>
      <br />
      Read about others stories to gain a perspective on life with United States policy outside of your community
    </React.Fragment>
  ),
  spanText8: (
    <React.Fragment>
      Become well-versed.
      <br />
    </React.Fragment>
  ),
  spanText9: (
    <React.Fragment>
      <br />
      Further your understanding in politics to become
      <br />a more educated voter.
    </React.Fragment>
  ),
  shareStoryMockup1: "share-story-mockup-1.png",
  demo: "Demo",
  deviceMacbookPro3: "device-macbook-pro-3.png",
  ourTeam: "Our Team",
  maskGroup1: "image-7.png",
  maskGroup2: "dsc-0189-original-1.png",
  maskGroup3: "me-1.png",
  maskGroup4: "3f0a9162-edit-1.png",
  group441Props: alanData,
  group442Props: audreyData,
  group443Props: brendanData,
  group444Props: paulData,
};