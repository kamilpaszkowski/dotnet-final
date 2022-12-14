import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { TrainingListItem } from 'src/app/models/api/models';
import { AttendeeProfile } from 'src/app/models/api/attendeeProfile';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable()
export class AttendeeProfileService {
  url: string = 'attendees';
  profile = new Subject<AttendeeProfile>();

  constructor(private http: HttpClient) {}

  getProfile() {
    this.http
      .get<AttendeeProfile>(`${this.url}/me/profile`)
      .subscribe((profile) => {
        this.profile.next(profile);
      });
  }
}
