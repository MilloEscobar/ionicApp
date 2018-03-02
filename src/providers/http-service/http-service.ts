import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the HttpServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class HttpServiceProvider {

	pageInfo: any;
	icons: string[] = ['flask', 'wifi', 'beer', 'football', 'basketball', 'paper-plane',
    'american-football', 'boat', 'bluetooth', 'build'];;
	items: Array<{title: string, note: string, icon: string}>;
	myItems: Array<{title: string, note: string, icon: string}>;

  constructor(public http: HttpClient) {
    console.log('Hello HttpServiceProvider Provider');
  }
  //Courses
  getCourses () {
    return this.http.get("http://macrobible.fr.openode.io/api/course");
  }

  getLastCourses () {
    return this.http.get("http://macrobible.fr.openode.io/api/course/last/8");
  }

  getCourse ()  {
  	return {title: "string", note: "string", icon: "string"};
  }

  getMyCourses () {

  }

  getMyCourse (): {title: string, note: string, icon: string} {
  	return {title: "string", note: "string", icon: "string"};
  }

  //user

  updateUser() {
    return this.http.get("http://192.168.0.115:3000/logout");
  }
}
