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
    <ProfileSkillsSection>
      <div className="container">
        <ProfileSection>
          <ProfileTitle>
            <ProfileTitleSpan>My </ProfileTitleSpan>Profile
          </ProfileTitle>
          <ProfileList>
            <ProfileListItem>
              <ProfileListSpan>Name</ProfileListSpan>
              Hamza Nabil
            </ProfileListItem>
            <ProfileListItem>
              <ProfileListSpan>Birthday</ProfileListSpan>
              21/1/1996
            </ProfileListItem>
            <ProfileListItem>
              <ProfileListSpan>Address</ProfileListSpan>
              Ain shams
            </ProfileListItem>
            <ProfileListItem>
              <ProfileListSpan>Phone</ProfileListSpan>
              4444 5555 6666
            </ProfileListItem>
            <ProfileListItem>
              <ProfileListSpan>Email</ProfileListSpan>
              hamza@hamza.com
            </ProfileListItem>
            <ProfileListItem>
              <ProfileListSpan>Website</ProfileListSpan>
              <ProfileListWeb class="web">www.google.com</ProfileListWeb>
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
            <BarTitle>Bootstrap</BarTitle>
            <BarPerc>100%</BarPerc>
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
            <BarTitle>Photoshop</BarTitle>
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
