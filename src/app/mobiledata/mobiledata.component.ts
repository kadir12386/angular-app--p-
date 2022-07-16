import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
// import { provideRoutes } from '@angular/router';

import { MobiledataService } from '../shared/mobiledata.service';
import { Mobiledata } from '../shared/mobiledata.model';
declare let M: any;

@Component({
  selector: 'app-mobiledata',
  templateUrl: './mobiledata.component.html',
  styleUrls: ['./mobiledata.component.css'],
  providers: [MobiledataService],
})
export class MobiledataComponent implements OnInit {
  constructor(public mobiledataService: MobiledataService) {}

  ngOnInit(): void {
    this.resetForm();
    this.refreshMobileList();
  }

  resetForm(form?: NgForm) {
    if (form) form.reset();
    this.mobiledataService.selectedMobiledata = {
      _id: '',
      brand: '',
      phone_name: '',
      phone_img_url: '',
      phone_color: '',
      phone_price: '',
    };
  }
  onSubmit(form: NgForm) {
    if (form.value._id == '') {
      this.mobiledataService.postMobileData(form.value).subscribe((res) => {
        this.resetForm(form);
        this.refreshMobileList();
        M.toast({ html: 'Saved successfully', classes: 'rounded' });
        alert('Data Added successfully');
      });
    } else {
      this.mobiledataService.putMobileData(form.value).subscribe((res) => {
        this.resetForm(form);
        this.refreshMobileList();
        M.toast({ html: 'Updated successfully', classes: 'rounded' });
      });
    }
  }

  refreshMobileList() {
    this.mobiledataService.getMobileList().subscribe((res) => {
      this.mobiledataService.mobiledatas = res as Mobiledata[];
    });
  }

  onEdit(mobile: Mobiledata) {
    this.mobiledataService.selectedMobiledata = mobile;
  }

  onDelete(_id: string, form: NgForm) {
    if (confirm('Are you sure to delete this record ?') == true) {
      this.mobiledataService.deleteMobileData(_id).subscribe((res) => {
        this.refreshMobileList();
        this.resetForm(form);
        M.toast({ html: 'Deleted successfully', classes: 'rounded' });
      });
    }
  }
}
