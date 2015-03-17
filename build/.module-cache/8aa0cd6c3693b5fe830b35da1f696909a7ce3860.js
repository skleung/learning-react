var HelloUser = React.createClass({displayName: "HelloUser",
  getInitialState: function(){
    return {
      username: '@tylermcginnis33'
    }
  },
  handleChange: function(e){
    this.setState({
      username: e.target.value
    });
  },
  render: function(){
    return (
      React.createElement("div", null, 
        "Hello ", this.state.username, " ", React.createElement("br", null), 
        "Change Name: ", React.createElement("input", {type: "text", value: this.state.username, onChange: this.handleChange})
      )
    )
  }
});