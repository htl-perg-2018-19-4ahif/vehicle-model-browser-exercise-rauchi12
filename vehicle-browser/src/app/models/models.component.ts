import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

interface IVehicle {
  id: number;
  year: number;
  make: string;
  model: string;
  hasDetails: number;
}

interface IMake {
  names: string[];
}

interface IYear {
  year: number[];
}
@Component({
  selector: 'app-models',
  templateUrl: './models.component.html',
  styleUrls: ['./models.component.css']
})

export class ModelsComponent implements OnInit {
  vehicles: IVehicle[];
  makes: IMake[];
  years: IYear[];

  yearFilter = '';
  makeFilter = '';

  offset = 0;

  constructor(private http: HttpClient) {
  }

  ngOnInit() {
    this.loadVehicles();
    this.loadMakes();
    this.loadYears();
  }


  async loadVehicles() {
      this.offset = 0;
      // tslint:disable-next-line:max-line-length
      this.vehicles = await this.http.get<IVehicle[]>('https://vehicle-data.azurewebsites.net/api/models?make=' + this.makeFilter + '&year=' + this.yearFilter + '&offset=' + this.offset).toPromise();
  }

  async loadMakes() {
    this.makes = await this.http.get<IMake[]>('https://vehicle-data.azurewebsites.net/api/makes').toPromise();
  }

  async loadYears() {
    this.years = await this.http.get<IYear[]>('https://vehicle-data.azurewebsites.net/api/years').toPromise();
  }

  async previous() {
    this.offset = this.offset + 10;
// tslint:disable-next-line: max-line-length
    this.vehicles = await this.http.get<IVehicle[]>('https://vehicle-data.azurewebsites.net/api/models?make=' + this.makeFilter + '&year=' + this.yearFilter + '&offset=' + this.offset).toPromise();
  }

  async next() {
    if (this.offset > 9 ) {
      this.offset = this.offset - 10;
    }
// tslint:disable-next-line: max-line-length
    this.vehicles = await this.http.get<IVehicle[]>('https://vehicle-data.azurewebsites.net/api/models?make=' + this.makeFilter + '&year=' + this.yearFilter + '&offset=' + this.offset).toPromise();
  }
}
