import React from "react";

export default function Contact() {
  return (
    <form
      className="was-validated text-center"
      action="mailto:callan57hunter@gmail.com"
      method="POST"
      encType="multipart/form-data"
    >
      <div className="mb-3">
        <label for="exampleFormControlInput1" className="form-label">
          Name
        </label>
        <input
          type="name"
          className="form-control"
          id="exampleFormControlInput1"
          placeholder=""
        ></input>
      </div>
      <div className="mb-3">
        <label for="exampleFormControlInput1" className="form-label">
          Email address
        </label>
        <input
          type="email"
          className="form-control"
          id="exampleFormControlInput1"
          placeholder="name@example.com"
        ></input>
      </div>
      <div className="mb-3">
        <label for="exampleFormControlTextarea1" className="form-label">
          Message
        </label>
        <textarea
          className="form-control"
          id="exampleFormControlTextarea1"
          rows="3"
        ></textarea>
      </div>

      <div className="mb-3">
        <button className="btn btn-primary" type="submit" value="Submit">
          Submit form
        </button>
      </div>
    </form>
  );
}

{
  /* <form action="mailto:contact@yourdomain.com"
method="POST"
enctype="multipart/form-data"
name="EmailForm">
    Name:<br>
    <input type="text" size="19" name="Contact-Name"><br><br>
    Email:<br>
    <input type="email" name="Contact-Email"><br><br> 
    Message:<br> 
    <textarea name="Contact-Message" rows="6″ cols="20″>
    </textarea><br><br> 
    <button type="submit" value="Submit">Send</button>
</form>   */
}
