
Template.contact.helpers({
  isLoading: function(){
     if (Session.get("sendButton") == true) {
       return true;
     } else {
       return false;
     }
  }
});




Template.contact.events({
        'submit form': function(event, template){
                event.preventDefault();
                  Session.set("sendButton", true);
                var name = event.target.name.value;
                var email = event.target.email.value;
                var text = event.target.text.value;
                Meteor.call('contactMessage', email, name, text, function(error, result){

                if (error){
                        Materialize.toast('Message not sent :( Please try again', 6000)
                        // 4000 is the duration of the toast
                          Session.set("sendButton", undefined);
                } else {

                        Materialize.toast('Message sent! :D', 6000) // 4000 is the duration of the toast
                        Session.set("sendButton", undefined);
                }

                });



        }


})


Handlebars.registerHelper("formatDate", function(datetime){
    if (moment) {

         return moment(datetime).format("Do MMMM, YYYY");


    }
    else {
    return datetime;
    }



});

Template.myShowBlogTemplate.helpers({
  shareData: function() {
    return {
      title: this.title,
      author: "LohdLippi",
      summary: this.excerpt
  }
}

});
