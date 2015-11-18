if (Meteor.isClient) {

  // counter starts at 0
  Session.setDefault('counter', 'none');
  Session.setDefault('needsToRegister', true);
  Session.setDefault('email', 'email');

  Template.submit.helpers({
    counter: function () {
      return Session.get('counter');
    }
  });

  Template.navigation.helpers({
  	email: function(){
  		return Session.get('email');
  	}
  });

  Template.register.helpers({
  	needsToRegister: function(){
  		Session.set('needsToRegister', false);
  		return Session.get('needsToRegister');
  	}
  })

 /*Template.register.needsToRegister = function(){
 	return Session.get("needsToRegister");
 }*/

  Template.submit.events({
    'click button': function () {

    	 console.log(Meteor.users.find().fetch());
    	 console.log(Meteor.user());
      // increment the counter when button is clicked
        alert(Session.get('email'));   
    }
  });
    
  Template.register.events({
    'click Register': function () {
      // increment the counter when button is clicked
      alert("registered");
      Session.set('needsToRegister', false);
    }
  });

  Template.navigation.events({
    'click .logout': function(event){
        event.preventDefault();
        Meteor.logout();

        Session.set('needsToRegister', true);
        alert(Session.get('needsToRegister'));
        //Router.go('#');
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

 Template.register.events({
   'submit form': function(event){
        event.preventDefault();
        var email = $('[name=email]').val();
        var password = $('[name=password]').val();
        var points = 0;
        Session.set('email', email);

        Accounts.createUser({
            email: email,
            password: password,
            points: points
        });

        Session.set('needsToRegister', false);
     	alert(Session.get('needsToRegister'));
	}

});

}

if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
  });

}

