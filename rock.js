if (Meteor.isClient) {
  // counter starts at 0
  Session.setDefault('counter', 'none');

  Template.submit.helpers({
    counter: function () {
      return Session.get('counter');
    }
  });

  Template.submit.events({
    'click button': function () {
      // increment the counter when button is clicked
      //Session.set('counter', 'clear');   
    }
  });
    
  Template.rock.events({
    'click button': function () {
      // increment the counter when button is clicked
      Session.set('counter', 'rock');   
    }
  });

   Template.paper.events({
    'click button': function () {
      // increment the counter when button is clicked
      Session.set('counter', 'paper');   
    }
  });

    Template.scissors.events({
    'click button': function () {
      // increment the counter when button is clicked
      Session.set('counter', 'scissors');   
    }
  });
}

if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
  });
}
