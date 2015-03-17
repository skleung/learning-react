var CommentBox = React.createClass({displayName: "CommentBox",
  render: function() {
    return (
      React.createElement("div", {className: "comment jumbotron"}, 
        React.createElement("h1", null, "Hello, world!"), 
        React.createElement("p", null, " I am a CommentBox.")
      )
    );
  }
});
React.render(
  React.createElement(CommentBox, null),
  document.getElementById('content')
);