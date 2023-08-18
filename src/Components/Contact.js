function Contact() {
  const formFields = {
    marginBottom: "1em",
  };
  const containerStyle = {
    marginTop: "1.5em",
  };
  const textArea = {
    height: "150px",
  };
  const handleSubmit = () => {
    alert(
      "Thank you for reaching out. Someone from our team will contact you regarding your queries!"
    );
  };
  return (
    <div className="container" style={containerStyle}>
      <h4 style={formFields}>Contact Us</h4>
      <form onSubmit={handleSubmit}>
        <div class="form-group row" style={formFields}>
          <label for="name" class="col-sm-2 col-form-label">
            Name
          </label>
          <div class="col-sm-10">
            <input
              type="text"
              class="form-control"
              id="Name"
              placeholder="Name"
              required
            />
          </div>
        </div>

        <div class="form-group row" style={formFields}>
          <label for="email" class="col-sm-2 col-form-label">
            Email
          </label>
          <div class="col-sm-10">
            <input
              type="email"
              class="form-control"
              id="email"
              placeholder="Email Address"
              required
            />
          </div>
        </div>
        <div class="form-group row" style={formFields}>
          <label for="message" class="col-sm-2 col-form-label">
            Message
          </label>
          <div class="col-sm-10">
            <textarea
              type="email"
              class="form-control"
              id="message"
              placeholder="Enter your message to our team!"
              required
              style={textArea}
            />
          </div>
        </div>
        <button class="btn btn-primary" type="submit" style={formFields}>
          Submit form
        </button>
      </form>
    </div>
  );
}
export default Contact;
