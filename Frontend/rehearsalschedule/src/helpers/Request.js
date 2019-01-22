// const Request = function (url) {
//     this.url = url;
// };
//
// Request.prototype.get = function () {
//     return fetch(this.url)
//         .then((response) => response.json());
// };
//
// Request.prototype.post = function (payload) {
//     return fetch(this.url, {
//         method: 'POST',
//         body: JSON.stringify(payload),
//         headers: { 'Content-Type': 'application/json' }
//     })
//         .then((response) => response.json());
// };
//
// Request.prototype.delete = function (id) {
//     return fetch(`${this.url}/${id}`, {
//         method: 'DELETE'
//     })
//         .then((response) => response.json());
// };
//
// Request.prototype.put = function (id, payload) {
//     return fetch(`${this.url}/${id}`, {
//         method: 'PUT',
//         body: JSON.stringify(payload),
//         headers: { 'Content-Type': 'application/json' }
//     })
//         .then((response) => response.json());
// };
//
// export default Request;

class Request{

  get(url){
    return fetch(url)
    .then((response) => response.json());
  }

  delete(url){
    return fetch(url, {
      method: "DELETE",
      headers: {'Content-Type': 'application/json'}
    })
  }

  post(url, payload){
    return fetch(url, {
      method: "POST",
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(payload)
    })
  }

}


export default Request;
