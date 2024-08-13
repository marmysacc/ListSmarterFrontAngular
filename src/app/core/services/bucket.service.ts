import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { AddBucketModel } from 'src/app/buckets/models/addbucket-model';
import { BucketModel } from 'src/app/buckets/models/bucket-model';
import { EditBucketModel } from 'src/app/buckets/models/edit-bucket-model';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class BucketService {
private url: string = environment.baseUrlApi;

constructor(private http: HttpClient) { }

  getBuckets(): Observable <BucketModel[]> {
      return this.http .get<BucketModel[]>(`${this.url}/Bucket`)
  };

  getBucketById(bucketId: number ): Observable <BucketModel> {
      return this.http .get<BucketModel>(`${this.url}/Bucket/${bucketId}`)
  };

  deleteBucket(bucket: BucketModel) {
      return this.http .delete(`${this.url}/Bucket/${bucket.id}`);
  };

  addBucket(addBucket: AddBucketModel): Observable<BucketModel>{
      return this.http .post<BucketModel>(`${this.url}/Bucket`, addBucket);
  }

  editBucket(editBucket: EditBucketModel): Observable<BucketModel>{
      return this.http .put<BucketModel>(`${this.url}/Bucket`, editBucket);
  }

  form: FormGroup = new FormGroup({
    $key: new FormControl(null),
    fullName: new FormControl('', Validators.required),
    email: new FormControl('', Validators.email),
    mobile: new FormControl('', [Validators.required, Validators.minLength(8)]),
    city: new FormControl(''),
    gender: new FormControl('1'),
    department: new FormControl(0),
    hireDate: new FormControl(''),
    isPermanent: new FormControl(false)
  });

  initializeFormGroup() {
    this.form.setValue({
      $key: null,
      fullName: '',
      email: '',
      mobile: '',
      city: '',
      gender: '1',
      department: 0,
      hireDate: '',
      isPermanent: false
    });
  }

}
