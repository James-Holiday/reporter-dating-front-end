import React, { Component } from "react";
<<<<<<< HEAD
// import axios from "axios";

// https://powerful-garden-14138.herokuapp.com/userdatas

const ProfileForm = () => {
  const handleSubmit = e => {
    console.log("Submitting");
=======
import axios from "axios";

const ProfileForm = props => {
  const [firstName, setFirstName] = React.useState("");
  const [lastName, setLastName] = React.useState("");
  const [age, setAge] = React.useState(0);
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

  // const buildForm = () => {
  //   let formData = new FormData();

  //   formData.append("portfolio_item[name]", this.state.name);
  //   formData.append("portfolio_item[description]", this.state.description);
  //   formData.append("portfolio_item[url]", this.state.url);
  //   formData.append("portfolio_item[category]", this.state.category);
  //   formData.append("portfolio_item[position]", this.state.position);

  //   if (this.state.thumb_image) {
  //     formData.append("portfolio_item[thumb_image]", this.state.thumb_image);
  //   }
  //   if (this.state.banner_image) {
  //     formData.append("portfolio_item[banner_image]", this.state.banner_image);
  //   }
  //   if (this.state.logo) {
  //     formData.append("portfolio_item[logo]", this.state.logo);
  //   }

  //   return formData;
  // }

  const handleSubmit = event => {
    axios({
      method: this.state.apiAction,
      url: this.state.apiUrl,
      data: this.buildForm(),
      withCredentials: true
    })
      .then(response => {
        if (this.state.editMode) {
          this.props.handleEditFormSubmission();
        } else {
          this.props.handleNewFormSubmission(response.data.portfolio_item);
        }

        this.setState({
          name: "",
          description: "",
          category: "PC",
          position: "",
          url: "",
          thumb_image: "",
          banner_image: "",
          logo: "",
          editMode: false,
          apiUrl: "https://powerful-garden-14138.herokuapp.com/userdata",
          apiAction: "post"
        });

        [this.thumbRef, this.bannerRef, this.logoRef].forEach(ref => {
          ref.current.dropzone.removeAllFiles();
        });
      })
      .catch(error => {
        console.log("portfolio form handleSubmit error", error);
      });

    event.preventDefault();
>>>>>>> 19c4bbf9a4baf0e182a17fef86dd3bbd351551a2
  };

  const handleChange = e => {
    console.log("Changing");
  };

  return (
<<<<<<< HEAD
    <form onSubmit={handleSubmit} className="portfolio-form-wrapper">
      <div className="two-column">
        <input
          type="text"
          name="first_name"
          placeholder="First Name"
          // value={}
          onChange={handleChange}
        />

        <input
          type="text"
          name="last_name"
          placeholder="Last Name"
          // value={}
          onChange={handleChange}
        />
      </div>

      <div className="two-column">
        <input
          type="text"
          name="age"
          placeholder="Age"
          // value={}
          onChange={handleChange}
        />

        <input
          type="text"
          name="sub_heading"
          placeholder="Sub Heading"
          // value={}
          onChange={handleChange}
        />
      </div>

      <div className="one-column">
        <input
          type="text"
          name="headline"
          placeholder="Headline"
          // value={}
          onChange={handleChange}
        />
      </div>

      <div className="four-column">
        <input
          type="text"
          name="profile_image"
          placeholder="Profile Image (URL)"
          // value={}
          onChange={handleChange}
        />
        <input
          type="text"
          name="article_image"
          placeholder="Article Image (URL)"
          // value={}
          onChange={handleChange}
        />
        <input
          type="text"
          name="body_image_one"
          placeholder="Body Image 1 (URL)"
          // value={}
          onChange={handleChange}
        />
        <input
          type="text"
          name="body_image_two"
          placeholder="Body Image 2 (URL)"
          // value={}
          onChange={handleChange}
        />
      </div>

      <div className="four-column">
        <input
          type="text"
          name="facebook"
          placeholder="Facebook"
          // value={}
          onChange={handleChange}
        />
        <input
          type="text"
          name="instagram"
          placeholder="Instagram"
          // value={}
          onChange={handleChange}
        />
        <input
          type="text"
          name="twitter"
          placeholder="Twitter"
          // value={}
          onChange={handleChange}
        />
        <input
          type="text"
          name="job_site"
          placeholder="Job Site"
          // value={}
          onChange={handleChange}
        />
      </div>

      <div className="one-column">
        <input
          type="text"
          name="short_description"
          placeholder="Short Description"
          // value={}
          onChange={handleChange}
        />
      </div>

      <div className="two-column">
        <textarea
          type="text"
          name="description"
          placeholder="Description 1"
          // value={}
          onChange={handleChange}
        />
        <textarea
          type="text"
          name="description"
          placeholder="Description 2"
          // value={}
          onChange={handleChange}
        />
      </div>

      <div>
        <button className="btn" type="submit">
          Save
        </button>
      </div>
    </form>
=======
    <div>
      {props.loggedIn ? (
        <form
          onSubmit={e => handleSubmit(e)}
          className="portfolio-form-wrapper"
        >
          <div className="two-column">
            <input
              type="text"
              name="first_name"
              placeholder="First Name"
              // value={}
              onChange={handleChange}
            />

            <input
              type="text"
              name="last_name"
              placeholder="Last Name"
              // value={}
              onChange={handleChange}
            />
          </div>

          <div className="two-column">
            <input
              type="text"
              name="age"
              placeholder="Age"
              // value={}
              onChange={handleChange}
            />

            <input
              type="text"
              name="sub_heading"
              placeholder="Sub Heading"
              // value={}
              onChange={handleChange}
            />
          </div>

          <div className="one-column">
            <input
              type="text"
              name="headline"
              placeholder="Headline"
              // value={}
              onChange={handleChange}
            />
          </div>

          <div className="four-column">
            <input
              type="text"
              name="profile_image"
              placeholder="Profile Image (URL)"
              // value={}
              onChange={handleChange}
            />
            <input
              type="text"
              name="article_image"
              placeholder="Article Image (URL)"
              // value={}
              onChange={handleChange}
            />
            <input
              type="text"
              name="body_image_one"
              placeholder="Body Image 1 (URL)"
              // value={}
              onChange={handleChange}
            />
            <input
              type="text"
              name="body_image_two"
              placeholder="Body Image 2 (URL)"
              // value={}
              onChange={handleChange}
            />
          </div>

          <div className="four-column">
            <input
              type="text"
              name="facebook"
              placeholder="Facebook"
              // value={}
              onChange={handleChange}
            />
            <input
              type="text"
              name="instagram"
              placeholder="Instagram"
              // value={}
              onChange={handleChange}
            />
            <input
              type="text"
              name="twitter"
              placeholder="Twitter"
              // value={}
              onChange={handleChange}
            />
            <input
              type="text"
              name="job_site"
              placeholder="Job Site"
              // value={}
              onChange={handleChange}
            />
          </div>

          <div className="one-column">
            <input
              type="text"
              name="short_description"
              placeholder="Short Description"
              // value={}
              onChange={handleChange}
            />
          </div>

          <div className="two-column">
            <textarea
              type="text"
              name="description"
              placeholder="Description 1"
              // value={}
              onChange={handleChange}
            />
            <textarea
              type="text"
              name="description"
              placeholder="Description 2"
              // value={}
              onChange={handleChange}
            />
          </div>

          <div>
            <button className="btn" type="submit">
              Save
            </button>
          </div>
        </form>
      ) : (
        <h1>Not Available</h1>
      )}
    </div>
>>>>>>> 19c4bbf9a4baf0e182a17fef86dd3bbd351551a2
  );
};

export default ProfileForm;
