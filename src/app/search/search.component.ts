import { SearchModel } from './../models/SearchModel';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { SearchServiceService } from '../search-service.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  constructor(private fb: FormBuilder, private searchService: SearchServiceService) { }
  searchForm: FormGroup;
  searchResults: any;
  ngOnInit() {
    this.searchForm = this.fb.group({
      birthDate:"",
      firstName:"",
      gender:"",
      interests:"",
      lastName:"",
      meetGoal:"",
      isOnline:"",
      other:""
    });
  }
  onSubmit() {
    let obj = new SearchModel();
    obj.firstName = this.searchForm.get("firstName").value;
    obj.gender = this.searchForm.get("gender").value;
    obj.interests = this.searchForm.get("interests").value;
    obj.lastName = this.searchForm.get("lastName").value;
    obj.meetGoal = this.searchForm.get("meetGoal").value;
    obj.isOnline = this.searchForm.get("isOnline").value;
    obj.other = this.searchForm.get("other").value;
    this.searchService.search(obj).subscribe(data => {
      this.searchResults = data;
    });
  }
}
