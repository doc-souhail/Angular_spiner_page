import {AfterViewInit, ChangeDetectorRef, Component, OnInit, ViewChild} from '@angular/core';
import {UserService} from "./Services/UsersService/user.service";
import {SpinerComponent} from "./Components/spiner/spiner.component";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit{

  @ViewChild(SpinerComponent) loader?: SpinerComponent;
  data: any;

  constructor(private userService: UserService,
              private cd : ChangeDetectorRef) { }

    ngAfterViewInit(): void {
    setTimeout(()=>{
      this.loader?.showSpinner(true);
      this.userService.fetchUsers().subscribe(
        {
          next: data => {
            console.log('Users loaded', data);
            this.loader?.showSpinner(false);
            this.data = data;
          },
          error: err => {
            console.log('Error fetching users...', err);
            this.loader?.showSpinner(false);
          }
        }
        )
    },0)
    }
}
