import { Component, OnInit } from '@angular/core';
import { TestService } from '../test.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  data: any = {};

  constructor(
    private testService: TestService
  ) { }

  async ngOnInit() {
    this.data = await this.testService.getTestData();
  }

}
