var HelloUser = React.createClass({displayName: "HelloUser",

  render: function(){
    return (
      React.createElement("div", null, 
        React.createElement("h1", {class: "page-header"}, "Hello ", this.props.username), 
        "Change Name: ", React.createElement("input", {class: "form-control", type: "text", value: this.state.username, onChange: this.handleChange})
      )
    )
  }
});

React.render(React.createElement(HelloUser, {username: "there!"}), document.getElementById('app'));