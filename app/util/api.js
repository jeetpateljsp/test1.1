export function fetchRepos(user) {

    let data = [{name: "jeet", username: "jeetpatel123", email: "jeetpatel123@gmail.com"}, {name:"jaydeep", username: "jaydeep16", email:"jaydeep16@gmail.com"}];
    return data.filter(function (data) {
        return data.username.includes(user)
    })
}