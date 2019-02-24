import React from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";
import axios from "axios";
const FORM_URI = "https://hooks.zapier.com/hooks/catch/4565057/pkmi9d/";

class ContactPage extends React.Component {

  constructor(props) {
    super(props);
    this.handleChangeEmail = this.handleChangeEmail.bind(this);
    this.handleChangeMessage = this.handleChangeMessage.bind(this);
    this.handleChangeName = this.handleChangeName.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

    this.state = {
      email: '',
      name: '',
      message: '',
    };
  }

  handleChangeEmail(event) {
    this.setState({email: event.target.value});
  }

  handleChangeName(event) {
    this.setState({name: event.target.value});
  }

  handleChangeMessage(event) {
    this.setState({message: event.target.value});
  }

  handleSubmit(event) {
    let { email, name, message } = this.state;

    const options = {
      method: 'POST',
      data: JSON.stringify({
        contact: {
          email,
          name,
          message,
        },
      }),
      url: FORM_URI,
    };
    axios(options)
    .then((response) => {
      console.log(response);
      this.setState({
        email: '',
        name: '',
        message: '',
      });
    })
    .catch((error) => {
      console.log(error);
    });
  }

  render() {
    return (
      <Layout>
        <SEO
          title="Contact"
          keywords={[`artificial`, `intelligence`, `user`, `centric`, `design`]}
        />

        <div className="mx-auto md:w-1/2">
          <p className="leading-loose mb-8">
              Wanna know more about AI centric human design?
          </p>

          <label
            className="block font-bold mb-2 text-xs uppercase"
            htmlFor="name"
          >
            Name
        </label>

          <input
            className="appearance-none block bg-grey-lighter mb-6 p-3 rounded-md text-grey-darker w-full"
            id="name"
            type="text"
            value={this.state.name}
            onChange={this.handleChangeName}
            placeholder="Bill Blaze"
          />

          <label
            className="block font-bold mb-2 text-xs uppercase"
            htmlFor="email"
          >
            Email
        </label>

          <input
            className="appearance-none block bg-grey-lighter mb-6 p-3 rounded-md text-grey-darker w-full"
            id="email"
            type="text"
            value={this.state.email}
            onChange={this.handleChangeEmail}
            placeholder="bill.blaze@xandar.com"
          />

          <label
            className="block font-bold mb-2 text-xs uppercase"
            htmlFor="message"
          >
            Message
        </label>

          <textarea
            className="appearance-none bg-grey-lighter mb-6 p-3 rounded-md text-grey-darker w-full"
            value={this.state.message}
            onChange={this.handleChangeMessage}
            placeholder="Say something..."
            rows="8"
          />

        <button onClick={this.handleSubmit} className="border-b-4 border-grey-darker hover:border-grey-dark bg-grey-dark hover:bg-grey font-bold px-6 py-3 rounded text-sm text-white">
            Submit
        </button>
        </div>
      </Layout>
    )
  }
}

export default ContactPage;
