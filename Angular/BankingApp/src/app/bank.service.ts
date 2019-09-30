import { Injectable } from '@angular/core';
import { HttpClient } from '../../node_modules/@angular/common/http';
import { Observable } from '../../node_modules/rxjs';
import { Account } from '../Account';

@Injectable({
  providedIn: 'root'
})
export class BankService {

  account: Account;
  accounts: Account[];

  constructor(private http: HttpClient) {
    this.populateAccounts().subscribe( data => this.accounts = data, error => console.log(error) );
      
   }

   populateAccounts(): Observable<Account[]> {
    return this.http.get<Account[]>("http://localhost:5400/accounts");
  }

   populateAccount(): Observable<Account> {
     return this.http.get<Account>("http://localhost:5400/accounts/1001");
   }

   getAccount() : Account {
     return this.account;
   }

   getAccounts(): Account[] {
     return this.accounts;
   }

}
