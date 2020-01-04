import { Component, OnInit } from '@angular/core';
import { UserProfileService } from '../services/user-profile.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  constructor( private profileService: UserProfileService) { }

  ngOnInit() {
    this.profileService.getProfile()
      .subscribe((res)=> {
        console.log('Profile data----', res);
      })
  }

}
