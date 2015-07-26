module.exports = function(){
    var faker = require("faker");
    var _ =require("lodash");
    return {
        people: _.times(3000, function(n){
            return {
                id:n,
                name: faker.name.findName(),
                job_title: faker.name.jobTitle(),
                email:faker.internet.email(),
                location:faker.address.city(),
                phone: faker.phone.phoneNumber(),
                avatar: faker.internet.avatar()
            }
        })
    }
}