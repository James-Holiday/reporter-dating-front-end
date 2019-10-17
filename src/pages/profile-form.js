import React, { Component } from "react";
// import axios from "axios";

// https://powerful-garden-14138.herokuapp.com/userdatas

const ProfileForm = () => {
  const handleSubmit = e => {
    console.log("Submitting");
  };

  const handleChange = e => {
    console.log("Changing");
  };

  return (
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
  );
};

export default ProfileForm;
