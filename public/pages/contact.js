"use strict";
let datafire = require('datafire');

var google_gmail = require('@datafire/google_gmail').actions;
module.exports = new datafire.Action({
  inputs: [{
    title: "firstName",
    type: "string",
    maxLength: 5000
  }, {
    title: "lastName",
    type: "string",
    maxLength: 5000
  }, {
    type: "string",
    title: "emailAddress",
    pattern: ".*@.*\\..*",
    maxLength: 241
  }, {
    type: "string",
    title: "subject",
    maxLength: 5000
  }, {
    type: "string",
    title: "message"
  }],
  handler: async (input, context) => {
    let user = await google_gmail.users.getProfile({
      userId: 'me',
    }, context);
    let message = await google_gmail.buildMessage({
      to: user.emailAddress,
      from: user.emailAddress,
      subject: input.subject,
      body: "from: " + input.firstName + " " + input.lastName + "\n" + "message: " + input.message,
    }, context);
    let sent = await google_gmail.users.messages.send({
      userId: "me",
      body: {
        raw: message,
      },
    }, context);
    return "Success";
  },
});

// let successPage = document.getElementsByClassName('submit_button').addEventListener('click', openSuccessPage);
// function openSuccessPage(){
//   window.open('../../pages/success.html')

// }