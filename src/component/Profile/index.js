import React from "react";
import {
  ProfileSkillsSection,
  ProfileTitle,
  ProfileTitleSpan,
  ProfileList,
  ProfileListItem,
  ProfileListSpan,
  ProfileListWeb,
  ProfileSection,
  SkillsSection,
  SkillsTitle,
  SkillsTitlespan,
  SkillsDesc,
  SkillsBar,
  BarTitle,
  BarPerc,
  BarParentSpan1,
  BarParent,
  BarParentSpan2,
  BarParentSpan3,
} from "./style.js";
const Profile = () => {
  return (
    <ProfileSkillsSection id="Profile">
      <div className="container">
        <ProfileSection>
          <ProfileTitle>
            <ProfileTitleSpan>My </ProfileTitleSpan>Profile
          </ProfileTitle>
          <ProfileList>
            <ProfileListItem>
              <ProfileListSpan>Name</ProfileListSpan>
              AbdEl-Rahman Rizq
            </ProfileListItem>
            <ProfileListItem>
              <ProfileListSpan>Birthday</ProfileListSpan>
              28/03/1999
            </ProfileListItem>
            <ProfileListItem>
              <ProfileListSpan>Address</ProfileListSpan>
              El-Qanater EL-Khairia
            </ProfileListItem>
            <ProfileListItem>
              <ProfileListSpan>Phone</ProfileListSpan>
             01145812766
            </ProfileListItem>
            <ProfileListItem>
              <ProfileListSpan>Email</ProfileListSpan>
              a.rezk453@gmail.com
            </ProfileListItem>
            <ProfileListItem>
              <ProfileListSpan>github</ProfileListSpan>
              <ProfileListWeb >https://github.com/AbdElRahman-Rizq</ProfileListWeb>
            </ProfileListItem>
          </ProfileList>
        </ProfileSection>

        <SkillsSection>
          <SkillsTitle>
            Some <SkillsTitlespan>skills</SkillsTitlespan>
          </SkillsTitle>
          <SkillsDesc>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos
            praesentium blanditiis esse cupiditate, omnis similique.
          </SkillsDesc>
          <SkillsBar>
            <BarTitle>HTML5</BarTitle>
            <BarPerc>90%</BarPerc>
            <BarParent>
              <BarParentSpan1></BarParentSpan1>
            </BarParent>
          </SkillsBar>

          <SkillsBar>
            <BarTitle>CSS3</BarTitle>
            <BarPerc>90%</BarPerc>
            <BarParent>
              <BarParentSpan2></BarParentSpan2>
            </BarParent>
          </SkillsBar>

          <SkillsBar>
            <BarTitle>ReactJS</BarTitle>
            <BarPerc>80%</BarPerc>
            <BarParent>
              <BarParentSpan3></BarParentSpan3>
            </BarParent>
          </SkillsBar>
        </SkillsSection>
      </div>
    </ProfileSkillsSection>
  );
};

export default Profile;
