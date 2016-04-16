Blog.config({
  blogIndexTemplate: 'blog', // '/blog' route
  blogShowTemplate: 'myShowBlogTemplate', // '/blog/:slug' route
  rss: {
    title: 'BitsBox',
    description: 'Olumide' },
  syntaxHighlighting: false, // default is false
  syntaxHighlightingTheme: 'atelier-dune.dark', // default is 'github'
  excerptFunction: function(body) { //excerpt
    return body.split('.')[0] + '.';
  },
  comments: {
    useSideComments: false, // default is false
    allowAnonymous: false   // default is false
  }
});


if (Meteor.isClient) {
  ShareIt.init({
    siteOrder: ['twitter'],
    sites: {
      'facebook': {
        'appId': 'YOUR_APPLICATION_ID',
        'version': 'v2.3'
      }
    },
    iconOnly: false,
    applyColors: true
  });
}
