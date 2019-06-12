// tslint:disable variable-name
export class Repository {
  public id: number;
  public name: string;
  public stargazers_count: number;
  public forks_count: number;
  public full_name: string;
  public html_url: string;
  public description: string;
  public language: string;

  constructor(response?) {
    if (response) {
      this.id = response.id;
      this.name = response.name;
      this.stargazers_count = response.stargazers_count;
      this.forks_count = response.forks_count;
      this.full_name = response.full_name;
      this.html_url = response.html_url;
      this.description = response.description;
      this.language = response.language;
    }
  }
}
