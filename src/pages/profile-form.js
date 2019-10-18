import React, { Component } from "react";
import axios from "axios";

const ProfileForm = props => {
  const [firstName, setFirstName] = React.useState("");
  const [lastName, setLastName] = React.useState("");
  const [age, setAge] = React.useState("");
  const [shortDescription, setShortDescription] = React.useState("");
  const [subHeading, setSubHeading] = React.useState("");
  const [headline, setHeadline] = React.useState("");
  const [descriptionOne, setDescriptionOne] = React.useState("");
  const [descriptionTwo, setDescriptionTwo] = React.useState("");
  const [profileImage, setProfileImage] = React.useState("");
  const [articleImage, setArticleImage] = React.useState("");
  const [bodyImageOne, setBodyImageOne] = React.useState("");
  const [bodyImageTwo, setBodyImageTwo] = React.useState("");
  const [facebook, setFacebook] = React.useState("");
  const [instagram, setInstagram] = React.useState("");
  const [twitter, setTwitter] = React.useState("");
  const [jobSite, setJobSite] = React.useState("");

  const handleSubmit = event => {
    event.preventDefault();
    if (firstName === "" && lastName === "" && profileImage === "") {
      return console.log(
        "UNSUCCESSFUL SUBMIT:\nNO FIRST NAME\nNO LAST NAME\nNO PROFILE IMAGE"
      );
    }
    axios
      .post(`https://stormy-coast-00785.herokuapp.com/userdata`, {
        first_name: firstName,
        last_name: lastName,
        age: age,
        short_description: shortDescription,
        sub_heading: subHeading,
        headline: headline,
        description_one: descriptionOne,
        description_two: descriptionTwo,
        profile_image: profileImage,
        article_image: articleImage,
        body_image_one: bodyImageOne,
        body_image_two: bodyImageTwo,
        facebook: facebook,
        instagram: instagram,
        twitter: twitter,
        job_site: jobSite
      })
      .then(function(response) {
        console.log("SUCCESSFUL POST");
      })
      .catch(function(error) {
        console.log(error);
      });
  };

  const handleChange = e => {
    console.log("Changing");
  };

  const determineService = () => {
    if (props.loggedIn) {
      return (
        <div>
          <form onSubmit={handleSubmit} className="portfolio-form-wrapper">
            <div className="two-column">
              <input
                type="text"
                name="first_name"
                placeholder="First Name"
                value={firstName}
                onChange={e => setFirstName(e.target.value)}
              />

              <input
                type="text"
                name="last_name"
                placeholder="Last Name"
                value={lastName}
                onChange={e => setLastName(e.target.value)}
              />
            </div>

            <div className="two-column">
              <input
                type="text"
                name="age"
                placeholder="Age"
                value={age}
                onChange={e => setAge(e.target.value)}
              />

              <input
                type="text"
                name="sub_heading"
                placeholder="Sub Heading"
                value={subHeading}
                onChange={e => setSubHeading(e.target.value)}
              />
            </div>

            <div className="one-column">
              <input
                type="text"
                name="headline"
                placeholder="Headline"
                value={headline}
                onChange={e => setHeadline(e.target.value)}
              />
            </div>

            <div className="four-column">
              <input
                type="text"
                name="profile_image"
                placeholder="Profile Image (URL)"
                value={profileImage}
                onChange={e => setProfileImage(e.target.value)}
              />
              <input
                type="text"
                name="article_image"
                placeholder="Article Image (URL)"
                value={articleImage}
                onChange={e => setArticleImage(e.target.value)}
              />
              <input
                type="text"
                name="body_image_one"
                placeholder="Body Image 1 (URL)"
                value={bodyImageOne}
                onChange={e => setBodyImageOne(e.target.value)}
              />
              <input
                type="text"
                name="body_image_two"
                placeholder="Body Image 2 (URL)"
                value={bodyImageTwo}
                onChange={e => setBodyImageTwo(e.target.value)}
              />
            </div>

            <div className="four-column">
              <input
                type="text"
                name="facebook"
                placeholder="Facebook (URL)"
                value={facebook}
                onChange={e => setFacebook(e.target.value)}
              />
              <input
                type="text"
                name="instagram"
                placeholder="Instagram (URL)"
                value={instagram}
                onChange={e => setInstagram(e.target.value)}
              />
              <input
                type="text"
                name="twitter"
                placeholder="Twitter (URL)"
                value={twitter}
                onChange={e => setTwitter(e.target.value)}
              />
              <input
                type="text"
                name="job_site (URL)"
                placeholder="Job Site"
                value={jobSite}
                onChange={e => setJobSite(e.target.value)}
              />
            </div>

            <div className="one-column">
              <input
                type="text"
                name="short_description"
                placeholder="Short Description"
                value={shortDescription}
                onChange={e => setShortDescription(e.target.value)}
              />
            </div>

            <div className="two-column">
              <textarea
                type="text"
                name="description"
                placeholder="Description 1"
                value={descriptionOne}
                onChange={e => setDescriptionOne(e.target.value)}
              />
              <textarea
                type="text"
                name="description"
                placeholder="Description 2"
                value={descriptionTwo}
                onChange={e => setDescriptionTwo(e.target.value)}
              />
            </div>

            <div className="save-btn">
              <button className="btn" type="submit">
                Save
              </button>
            </div>
          </form>
        </div>
      );
    } else {
      return (
        <div>
          <h1>Not Available</h1>
        </div>
      );
    }
  };

  return <div>{determineService()}</div>;
};

export default ProfileForm;
