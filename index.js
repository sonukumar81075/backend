const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());

const githubData = {
  login: "sonu",
  id: 150217,
  node_id: "MDQ6VXNlcjE1MDIxNw==",
  avatar_url: "https://avatars.githubusercontent.com/u/150217?v=4",
  gravatar_id: "",
  url: "https://api.github.com/users/sonu",
  html_url: "https://github.com/sonu",
  followers_url: "https://api.github.com/users/sonu/followers",
  following_url: "https://api.github.com/users/sonu/following{/other_user}",
  gists_url: "https://api.github.com/users/sonu/gists{/gist_id}",
  starred_url: "https://api.github.com/users/sonu/starred{/owner}{/repo}",
  subscriptions_url: "https://api.github.com/users/sonu/subscriptions",
  organizations_url: "https://api.github.com/users/sonu/orgs",
  repos_url: "https://api.github.com/users/sonu/repos",
  events_url: "https://api.github.com/users/sonu/events{/privacy}",
  received_events_url: "https://api.github.com/users/sonu/received_events",
  type: "User",
  user_view_type: "public",
  site_admin: false,
  name: null,
  company: null,
  blog: "",
  location: null,
  email: null,
  hireable: null,
  bio: null,
  twitter_username: null,
  public_repos: 0,
  public_gists: 0,
  followers: 5,
  following: 0,
  created_at: "2009-11-07T20:15:47Z",
  updated_at: "2020-07-27T21:25:56Z",
};

app.get("/", (req, res) => {
  res.send("Hello world!");
});

app.get("/login", (req, res) => {
  res.send("login successfull!");
});
app.get("/api/v1/github", (req, res) => {
  res.json(githubData);
});

const PORT = 4000;

app.listen(PORT, () => {
  console.log("server is runing on port 4000");
});
