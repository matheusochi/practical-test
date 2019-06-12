// tslint:disable variable-name
export class User {
  public id: number;
  public avatar_url: string;
  public bio: string;
  public blog: string;
  public company: string;
  public created_at: string;
  public email: string;
  public events_url: string;
  public followers: number;
  public followers_url: string;
  public following: number;
  public following_url: string;
  public gists_url: string;
  public gravatar_id: string;
  public hireable: string;
  public html_url: string;
  public location: string;
  public login: string;
  public name: string;
  public node_id: string;
  public organizations_url: string;
  public public_gists: number;
  public public_repos: number;
  public received_events_url: string;
  public repos_url: string;
  public site_admin: boolean;
  public starred_url: string;
  public subscriptions_url: string;
  public type: string;
  public updated_at: string;
  public url: string;

  constructor(response?) {
    if (response) {
      this.id = response.id;
      this.avatar_url = response.avatar_url;
      this.bio = response.bio;
      this.blog = response.blog;
      this.company = response.company;
      this.email = response.email;
      this.events_url = response.events_url;
      this.followers = response.followers;
      this.followers_url = response.followers_url;
      this.following = response.following;
      this.following_url = response.following_url;
      this.gists_url = response.gists_url;
      this.gravatar_id = response.gravatar_id;
      this.hireable = response.hireable;
      this.html_url = response.html_url;
      this.location = response.location;
      this.login = response.login;
      this.name = response.name;
      this.node_id = response.node_id;
      this.organizations_url = response.organizations_url;
      this.public_gists = response.public_gists;
      this.public_repos = response.public_repos;
      this.received_events_url = response.received_events_url;
      this.repos_url = response.repos_url;
      this.site_admin = response.site_admin;
      this.starred_url = response.starred_url;
      this.subscriptions_url = response.subscriptions_url;
      this.type = response.type;
      this.url = response.url;
      this.created_at = response.created_at;
      this.updated_at = response.updated_at;
    }
  }
}
