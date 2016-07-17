
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
                        Session.set("sendButton", undefined);
                } else {
                        event.target.name.value = "";
                        event.target.email.value = "";
                        event.target.text.value = "";
                        Materialize.toast('Message sent, thanks! I will get back to you shortly ;-)' , 6000) // 4000 is the duration of the toast
                        Session.set("sendButton", undefined);
                }

                });



        }


})


Template.registerHelper("formatDate", function(datetime){
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
