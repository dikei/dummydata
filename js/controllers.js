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

    $scope.datas = {};

    $scope.addColumn = function() {
        var count = 0;
        while(count < $scope.addMore) {
            ++count;
            $scope.columns.push({
                name: "",
                type: ""
            });
        }
    }

    $scope.deleteColumn = function(index) {
        $scope.columns.remove(index);
    }

    var funcMap = {
        'type-first-name': [Faker.Name.firstName, Faker.Name],
        'type-last-name': [Faker.Name.lastName, Faker.Name],
        'type-name': [Faker.Name.findName, Faker.Name],
        'type-phone': [Faker.PhoneNumber.phoneNumber, Faker.PhoneNumber],
        'type-zipcode': [Faker.Address.zipCode, Faker.Address],
        'type-city': [Faker.Address.city, Faker.Address],
        'type-street-name': [Faker.Address.streetName, Faker.Address],
        'type-street-address': [Faker.Address.streetAddress, Faker.Address],
        'type-secondary-address': [Faker.Address.secondaryAddress, Faker.Address],
        'type-state': [Faker.Address.usState, Faker.Address],
        'type-county': [Faker.Address.ukCounty, Faker.Address],
        'type-country': [Faker.Address.ukCountry, Faker.Address],
        'type-email': [Faker.Internet.email, Faker.Internet],
        'type-user-name': [Faker.Internet.userName, Faker.Internet],
        'type-domain-name': [Faker.Internet.domainName, Faker.Internet],
        'type-domain-word': [Faker.Internet.domainWord, Faker.Internet],
        'type-ip': [Faker.Internet.ip, Faker.Internet],
        'type-company-name': [Faker.Company.companyName, Faker.Company],
        'type-company-suffix': [Faker.Company.companySuffix, Faker.Company],
        'type-catch-phrase': [Faker.Company.catchPhrase, Faker.Company],
        'type-paragraph': [Faker.Lorem.paragraph, Faker.Lorem],
        'type-paragraphs': [Faker.Lorem.paragraphs, Faker.Lorem],
        'type-sentence': [Faker.Lorem.sentence, Faker.Lorem],
        'type-sentences': [Faker.Lorem.sentences, Faker.Lorem],
        'type-number': [Faker.Helpers.randomNumber, Faker.Helpers, [100000]]
    };

    $scope.generate = function() {
        var datas = {};
        for(var i = 0; i < $scope.columns.length; i++) {
            var column = $scope.columns[i];
            var func = funcMap[column.type][0];
            var functhis = funcMap[column.type][1];
            var funcargs = [];
            if(funcMap[column.type].length == 3) {
                funcargs = funcMap[column.type][2]
            }
            datas[column.name] = func.apply(functhis, funcargs);
        }
        $scope.datas = datas;
    }
}