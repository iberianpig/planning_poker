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
var ScoreBoard = React.createClass({
  render: function(){
    var headerUsers = users.map(function(user){
        return (
          <th>{user.name}</th>
        );
    });
    var taskNodes = tasks.map(function(row) {
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

