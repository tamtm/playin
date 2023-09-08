

function saveToken() {
    var token = document.getElementById("token").value
    localStorage.setItem("token", token);
    console.log("token saved!")

    window.octokit = new window.Octokit({
      auth: localStorage.getItem("token")
    })
}
window.onload = function() {
  if (localStorage.getItem("token")) {
    window.octokit = new window.Octokit({
      auth: localStorage.getItem("token")
    })
  }
}
function upload() {
  let filename = document.getElementById("filename").value
  let post = btoa(document.getElementById("post").value)
  window.octokit.request('PUT /repos/tamtm/playin/contents/' + filename, {
      owner: 'tamtm',
      repo: 'playin',
      path: filename,
      message: 'my commit message',
      committer: {
        name: 'tamtm',
        email: 'tamtm.dev@gmail.com'
      },
      content: post,
      headers: {
        'X-GitHub-Api-Version': '2022-11-28'
      }
  }).then(function() {
    console.log("posted")
  }).catch(function(){
    console.log("error")
  })
}

  // var gg = octokit.request('PUT /repos/tamtm/playin/contents/test-3.txt', {
  //     owner: 'OWNER',
  //     repo: 'REPO',
  //     path: 'PATH',
  //     message: 'my commit message',
  //     committer: {
  //       name: 'tamtm',
  //       email: 'tamtm.dev@gmail.com'
  //     },
  //     content: 'bXkgbmV3IGZpbGUgY29udGVudHM=',
  //     headers: {
  //       'X-GitHub-Api-Version': '2022-11-28'
  //     }
  //   })

