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
}