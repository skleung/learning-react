var HelloUser = React.createClass({
  getInitialState: function(){
    return {
      username: 'World!'
    }
  },
  handleChange: function(e){
    this.setState({
      username: e.target.value
    });
  },
  render: function(){
    return (
      <div>
        <h1 class="page-header">Hello {this.props.username}</h1>
        Change Name: <input class="form-control" type="text" value={this.state.username} onChange={this.handleChange} />
      </div>
    )
  }
});

React.render(<HelloUser username="there!"/>, document.getElementById('app'));