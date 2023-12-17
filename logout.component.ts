import { Component } from '@angular/core';
import { ApiService } from 'src/app/sidebar/api.service';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent {
  dashboardData:any;
  data:any;


  constructor(private apiService: ApiService) {}
  ngOnInit(): void {
    this.getALLData();
}
   getALLData() {

    this.apiService
      .getDetail()
      .subscribe((response: any) => {
        this.data = response.dashboardData.userData[0].reminders;

      });
  }

}
