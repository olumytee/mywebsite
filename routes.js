Router.configure({
  	layoutTemplate: 'layout',
    notFoundTemplate: '404',
    trackPageView: true
});



Router.route('/',  {
  action: function( ){this.render('home');},
  fastRender: true
});
Router.route('/contact', {
  action: function( ){
      this.render('contact'); },
  fastRender: true
});
Router.route('/work',{
  action: function( ){
  this.render('work');},
  fastRender: true
});
Router.route('/about', {
  action: function( ){
  this.render('about');},
  fastRender: true
});
Router.route('/login', function () {
  this.render('login');
});
