var columns = ['task', 'user1', 'user2']
var tasks = [
  {id: 1, task: "機能", user1: "Aさん", user2: "Bさん"},
  {id: 2, task: "テーブルを作る", user1: "2", user2: "3"},
  {id: 3, task: "タスクを作る", user1: "1", user2: "4"},
];
var TaskRow = React.createClass({
  render: function() {
    return (
      <tr><td>{this.props.score.task}</td><td>{this.props.score.user1}</td><td>{this.props.score.user2}</td></tr>
    );
  }
});
var ScoreBoard = React.createClass({
  render: function(){
    var taskHeaders = columns.map(function(column){
        return (
          <th>{column}</th>
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
            {taskHeaders}
          </tr>
        </thead>
        <tbody>
          {taskNodes}
        </tbody>
      </table>
    );
  }
});

