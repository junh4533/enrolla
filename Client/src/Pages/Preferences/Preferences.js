import React, { Component, useState, useEffect } from "react";
import Axios from "axios";
import Cookies from "js-cookie";
import "./Preferences.scss";

const Preferences = () => {
  return (
    <div className="preferences-page">
      {/* ***********START CODING HERE***********  */}
      <h1>Preferences Page</h1>
      <div className="container">
        <div className="form-group">
          <label>
            Select all the courses you’d like to take for the semester:
          </label>
          <select id="major" name="major" multiple>
            <option value="CIS">Computer Information Systems</option>
            <option value="PAF">Public Affairs</option>
            <option value="ECO">Economics</option>
          </select>
        </div>
        <div className="form-group">
          <label>How many credits do you have?</label>
          <input
            type="number"
            className="form-control"
            id="credits"
            name="credits"
            // onChange={(e) => {
            //   setPassword(e.target.value);
            // }}
          />
        </div>

        <div class="form-check">
          <label class="form-check-label">
            <input type="checkbox" class="form-check-input" value="" />
            Mondays
            <div class="form-group">
              <label for="usr">From:</label>
              <input type="time" name="appt" />
            </div>
            <div class="form-group">
              <label for="usr">To:</label>
              <input type="time" name="appt" />
            </div>
          </label>
        </div>
        <div class="form-check">
          <label class="form-check-label">
            <input type="checkbox" class="form-check-input" value="" />
            Tuesday
            <div class="form-group">
              <label for="usr">From:</label>
              <input type="time" name="appt" />
            </div>
            <div class="form-group">
              <label for="usr">To:</label>
              <input type="time" name="appt" />
            </div>
          </label>
        </div>
        <div class="form-check">
          <label class="form-check-label">
            <input type="checkbox" class="form-check-input" value="" />
            Wednesday
            <div class="form-group">
              <label for="usr">From:</label>
              <input type="time" name="appt" />
            </div>
            <div class="form-group">
              <label for="usr">To:</label>
              <input type="time" name="appt" />
            </div>
          </label>
        </div>
        <div class="form-check">
          <label class="form-check-label">
            <input type="checkbox" class="form-check-input" value="" />
            Thursday
            <div class="form-group">
              <label for="usr">From:</label>
              <input type="time" name="appt" />
            </div>
            <div class="form-group">
              <label for="usr">To:</label>
              <input type="time" name="appt" />
            </div>
          </label>
        </div>
        <div class="form-check">
          <label class="form-check-label">
            <input type="checkbox" class="form-check-input" value="" />
            Friday
            <div class="form-group">
              <label for="usr">From:</label>
              <input type="time" name="appt" />
            </div>
            <div class="form-group">
              <label for="usr">To:</label>
              <input type="time" name="appt" />
            </div>
          </label>
        </div>
        <div class="form-check">
          <label class="form-check-label">
            <input type="checkbox" class="form-check-input" value="" />
            Saturday
            <div class="form-group">
              <label for="usr">From:</label>
              <input type="time" name="appt" />
            </div>
            <div class="form-group">
              <label for="usr">To:</label>
              <input type="time" name="appt" />
            </div>
          </label>
        </div>
        <div class="form-check">
          <label class="form-check-label">
            <input type="checkbox" class="form-check-input" value="" />
            Sunday
            <div class="form-group">
              <label for="usr">From:</label>
              <input type="time" name="appt" />
            </div>
            <div class="form-group">
              <label for="usr">To:</label>
              <input type="time" name="appt" />
            </div>
          </label>
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </div>
      {/* ***********stop CODING HERE***********  */}
    </div>
  );
};

export default Preferences;
