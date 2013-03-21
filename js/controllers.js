// Array Remove - By John Resig (MIT Licensed)
Array.prototype.remove = function(from, to) {
    var rest = this.slice((to || from) + 1 || this.length);
    this.length = from < 0 ? this.length + from : from;
    return this.push.apply(this, rest);
};

function InputController($scope) {
    $scope.addMore = 1;
    $scope.columns = [
        {
            name: "",
            type: ""
        }
    ];

    $scope.addRow = function() {
        var count = 0;
        while(count < $scope.addMore) {
            ++count;
            $scope.columns.push({
                name: "",
                type: ""
            });
        }
    }

    $scope.deleteRow = function(index) {
        $scope.columns.remove(index);
    }
}