angular
  .module('todos')
  .controller('ListShowController', ListShowController)

function ListShowController($reactive, $scope) {
  var vm = this;
  $reactive(vm).attach($scope);

  // Exported to view
  /****************************************************************************/
  vm.helpers({
    todos () { return Todos.find({}) }
  })

  vm.insertTodo = insertTodo;
  vm.saveTodo = saveTodo;
  vm.deleteTodo = deleteTodo;

  function insertTodo(title) {
    Todos.insert({ title });
    vm.newTodo = null;
  }

  function saveTodo(todo) {
    Todos.update({ _id: todo._id }, {
      $set: {
        title: todo.title,
        completed: todo.completed
      }
    });
  }

  function deleteTodo(todo) {
    Todos.remove({ _id: todo._id });
  }
}
