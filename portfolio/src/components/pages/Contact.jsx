import React from "react";

export default function Contact() {
  return (
    <form class="was-validated text-center">
      <div class="mb-3">
        <label for="exampleFormControlInput1" class="form-label">
          Name
        </label>
        <input
          type="name"
          class="form-control"
          id="exampleFormControlInput1"
          placeholder=""
        ></input>
      </div>
      <div class="mb-3">
        <label for="exampleFormControlInput1" class="form-label">
          Email address
        </label>
        <input
          type="email"
          class="form-control"
          id="exampleFormControlInput1"
          placeholder="name@example.com"
        ></input>
      </div>
      <div class="mb-3">
        <label for="exampleFormControlTextarea1" class="form-label">
          Message
        </label>
        <textarea
          class="form-control"
          id="exampleFormControlTextarea1"
          rows="3"
        ></textarea>
      </div>

      <div class="mb-3">
        <button class="btn btn-primary" type="submit">
          Submit form
        </button>
      </div>
    </form>
  );
}
