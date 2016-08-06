var users = [{id: 1, name: "山田"}, {id: 2, name: "三浦"}];
var tasks = [
  {id: 1, task: "テーブルを作成する", users: [
    {id: 1, name: "山田", score: 1},
    {id: 2, name: "三浦", score: 3},
  ]},
  {id: 2, task: "スタイルを当てる", users: [
    {id: 1, name: "山田", score: 1},
    {id: 2, name: "三浦", score: 2},
  ]},
  {id: 3, task: "Reactのコンポーネントを作る", users: [
    {id: 1, name: "山田", score: 3},
    {id: 2, name: "三浦", score: 4},
  ]},
];
var TaskRow = React.createClass({
  render: function() {
    var userScores = this.props.score.users.map(function(user) {
      return (
        <td>{user.score}</td>
      );
    });
    return (
      <tr>
        <td>{this.props.score.task}</td>
        {userScores}
      </tr>
    );
  }
});
var Tasks = React.createClass({
  render: function(){
    var headerUsers = this.props.data.users.map(function(user){
        return (
          <th>{user.name}</th>
        );
    });
    var taskNodes = this.props.data.tasks.map(function(row) {
      return (
        <TaskRow score={row} key={row.id} />
      );
    });
    return (
      <table className='table table-striped table-hover'>
        <thead>
          <tr>
            <th>タスク</th>
            {headerUsers}
          </tr>
        </thead>
        <tbody>
          {taskNodes}
        </tbody>
      </table>
    );
  }
});

var ScoreBoard = React.createClass({
  loadTasksFromServer: function() {
    var url = 'http://localhost:8000/sprints/1/tasks';
    $.ajax({
      url: url,
      dataType: 'json',
      cache: false,
      success: function(data) {
        console.log(data);
        this.setState({data: data});
      }.bind(this),
      error: function(xhr, status, err) {
        console.error(url, status, err.toString());
      }.bind(this)
    });
  },
  getInitialState: function() {
    return {data: {users: [], tasks: []}};
  },
  componentDidMount: function() {
    this.loadTasksFromServer();
    setInterval(this.loadTasksFromServer, 3000);
  },
  render: function(){
    return (
      <Tasks data={this.state.data} />
    );
  }
});
