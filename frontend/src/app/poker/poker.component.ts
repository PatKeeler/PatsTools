import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { SelectionModel } from '@angular/cdk/collections';
import { MatTable } from '@angular/material/table';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { JavaService } from '../java.service';
import { HttpParams } from '@angular/common/http';
import {async} from 'rxjs/internal/scheduler/async';


export interface PlayerData {
  name: string;
  buyIn: string;
  bounty: string;
  fee: string;
  lastMan: string;
  addOn: string;
}

export interface WinnerData {
  position: number;
  amount: string;
}

export interface IcmData {
  icmPosition: number;
  icmChips: string;
  icmPayout: string;
}

export interface RoundedWinnerData {
  amount: string;
}

@Component({
  selector: 'app-poker',
  templateUrl: './poker.component.html',
  styleUrls: ['./poker.component.scss']
})

export class PokerComponent implements OnInit {

  playerData: PlayerData[] = [];
  winnerData: WinnerData[] = [];
  icmData:    IcmData[] = [];
  winnerPayouts: string [] = [];
  icmPayouts: string [] = [];
  roundedWinnerData: RoundedWinnerData[] = [];

  winners3 = '50.0 30.0 20.0';
  winners4 = '42.5 27.0 17.5 13.0';
  winners5 = '37.0 25.0 15.0 12.0 11.0';
  winners6 = '35.0 22.0 15.0 11.0 9.0 8.0';
  winners7 = '33.0 20.0 13.5 11.0 9.0 7.5 6.0';
  winners8 = '32.0 18.0 12.5 10.5 8.3 7.3 6.2 5.2';
  winners9 = '30.0 17.5 12.2 10.2 8.1 7.1 6.1 5.1 3.7';
  winners10 = '29.0 17.0 12.0 10.0 8.0 6.9 5.9 4.9 3.5 2.8';

  // ViewChild references html element
  // ElementRef references ts property
  @ViewChild('playerTextEl') playerText: ElementRef;
  @ViewChild('winnerTextEl') winnerText: ElementRef;
  @ViewChild('icmTextEl') icmText: ElementRef;
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatTable) table: MatTable<PlayerData>;
  @ViewChild('window') window;

  playersHide: boolean;
  winnersHide: boolean;
  icmHide: boolean;

  playerName: string;
  buyInAmount: string;
  bountyAmount: string;
  feeAmount: string;
  lastManAmount: string;
  addOnAmount: string;

  totalPlayers: number;
  buyInTotal: string = '';
  bountyTotal: string = '';
  feeTotal: string = '';
  lastManTotal: string = '';
  addOnTotal: string = '';

  chopPlayers: number;
  chopAmount: string;
  lastManPlayers: number;
  lastManChopAmount: string;

  payoutRadio: string;
  selectedPayout: string;
  percentages: string;
  position: number;
  amount: string;

  displayedColumns: string[] = ['select', 'name', 'buyIn', 'bounty', 'fee', 'lastMan', 'addOn'];
  dataSource: MatTableDataSource<PlayerData>;
  selection = new SelectionModel<PlayerData>(true, []);

  winnerColumns: string[] = ['position', 'amount'];

  icmPayoutResults: string[] = [];
  icmColumns: string[] = ['icmPosition', 'icmChips', 'icmPayout'];
  chipCounts: string = '';
  icmPayoutArray: string[];


  constructor(public javaService: JavaService) { }

  payoutRadioHandler(event): void {
    this.selectedPayout = event.target.value;
    if (this.selectedPayout === 'icmPayout') {
      this.icmHide = false;
      this.winnersHide = true;
      this.setIcmFocus();
    }
    else {
      this.icmHide = true;
      this.winnersHide = false;
      this.setWinnerFocus();
    }
    setTimeout(() => { window.scrollTo(0,document.body.scrollHeight); }, 100);
  }

  ngOnInit(): void {
    this.loadData();
    this.dataSource.sort = this.sort;
    this.winnerData = [];
    this.icmData = [];
    this.setFocus();
    setTimeout(() => { window.scrollTo(0,document.body.scrollHeight); }, 100);
  }


  loadData(): void {
    //Player data for both winner payouts and ICM chops
    this.dataSource = new MatTableDataSource(this.playerData);
    if (this.playerData.length === 0) {
      this.playersHide = true;
      this.icmHide = true;
    }
    if (this.winnerData.length === 0) {
      this.winnersHide = true;
      this.icmHide = true;
    }
  }

  setAmountsToFixed(): void {
    const buyIn = parseFloat(this.buyInAmount);
    const bounty = parseFloat(this.bountyAmount);
    const fee = parseFloat(this.feeAmount);
    const lastMan = parseFloat(this.lastManAmount);
    const addOn = parseFloat(this.addOnAmount);
    this.buyInAmount = (buyIn ? buyIn.toFixed(2) : '0.00');
    this.bountyAmount = (bounty ? bounty.toFixed(2) : '0.00');
    this.feeAmount = (fee ? fee.toFixed(2) : '0.00');
    this.lastManAmount = (lastMan ? lastMan.toFixed(2) : '0.00');
    this.addOnAmount = (addOn ? addOn.toFixed(2) : '0.00');
  }

  /** Whether the number of selected elements matches the total number of rows. */
  isAllSelected(): boolean {
    const numSelected = this.selection.selected.length;
    const numRows = !!this.dataSource && this.dataSource.data.length;
    return numSelected === numRows;
  }

  /** Selects all rows if they are not all selected; otherwise clear selection. */
  masterToggle(): void {
    this.isAllSelected() ? this.selection.clear() : this.dataSource.data.forEach(r => this.selection.select(r));
  }

  /** The label for the checkbox on the passed row */
  checkboxLabel(row: PlayerData): string {
    if (!row) {
      return `${this.isAllSelected() ? 'select' : 'deselect'} all`;
    }
    // alert(row.name);
    return `${this.selection.isSelected(row) ? 'deselect' : 'select'} row ${row}`;
  }

  /**
   * Set focus on the desired input field.
   */
  setFocus(): void {
    setTimeout(() => { this.playerText.nativeElement.focus(); }, 500);
  }

  /**
   * Set focus on the desired input field.
   */
  setWinnerFocus(): void {
    setTimeout(() => { this.winnerText.nativeElement.focus(); }, 500);
  }

  /**
   * Set focus on the desired input field.
   */
  setIcmFocus(): void {
    setTimeout(() => { this.icmText.nativeElement.focus(); }, 500);
  }

  setPercents(percents): void {
    this.percentages = percents;
  }

  savePlayer(): void {
    this.playersHide = false;
    this.setAmountsToFixed();
    this.dataSource.data.push(
      {name: this.playerName, buyIn: this.buyInAmount, bounty: this.bountyAmount,
        fee: this.feeAmount, lastMan: this.lastManAmount, addOn: '0.00'}
    );
    this.dataSource = new MatTableDataSource<PlayerData>(this.playerData);
    this.dataSource.sort = this.sort;
    this.playerName = '';
    this.computeTotals();
    this.setFocus();
  }

  // Accumulate table columns
  computeTotals(): void {
    let playerTotals = 0;
    let totalBuyIn = 0;
    let totalBounty = 0;
    let totalFee = 0;
    let totalLastMan = 0;
    let totalAddOn = 0;

    this.dataSource.data.forEach(item => {
      playerTotals += 1;
      totalBuyIn += parseFloat(item.buyIn);
      totalBounty += parseFloat(item.bounty);
      totalFee += parseFloat(item.fee);
      totalLastMan += parseFloat(item.lastMan);
      totalAddOn += parseFloat(item.addOn);
    });
    this.totalPlayers = playerTotals;
    this.buyInTotal = totalBuyIn.toFixed(2);
    this.bountyTotal = totalBounty.toFixed(2);
    this.feeTotal = totalFee.toFixed(2);
    this.lastManTotal = totalLastMan.toFixed(2);
    this.addOnTotal = totalAddOn.toFixed(2);
  }

  selectAll(): void {
    this.dataSource.data.forEach(r => this.selection.select(r));
  }

  unSelectAll(): void {
    this.dataSource.data.forEach(r => this.selection.deselect(r));
  }

  addRebuy(): void {
    this.selection.selected.forEach(item => {
      item.buyIn = (parseFloat(item.buyIn) + parseFloat(this.buyInAmount)).toFixed(2);
      this.dataSource = new MatTableDataSource<PlayerData>(this.playerData);
      this.dataSource.sort = this.sort;
    });
    this.selection = new SelectionModel<PlayerData>(true, []);
    this.computeTotals();
  }

  addAddOn(): void {
    this.selection.selected.forEach(item => {
      if (parseFloat(item.addOn) >= parseFloat(this.addOnAmount)) {
        alert('Add On Rejected - ' + item.name + ' has already done an Add On.');
      }
      else {
        item.addOn = parseFloat(this.addOnAmount).toFixed(2);
      }
      this.dataSource = new MatTableDataSource<PlayerData>(this.playerData);
      this.dataSource.sort = this.sort;
    });
    this.selection = new SelectionModel<PlayerData>(true, []);
    this.computeTotals();
  }

  minusRebuy(): void {
    this.selection.selected.forEach(item => {
      if (item.buyIn <= this.buyInAmount) {
        alert('Minus Rebuy Rejected - ' + item.name + ' has not done a ReBuy!');
      }
      else {
        item.buyIn = (parseFloat(item.buyIn) - parseFloat(this.buyInAmount)).toFixed(2);
      }
      this.dataSource = new MatTableDataSource<PlayerData>(this.playerData);
      this.dataSource.sort = this.sort;
    });
    this.selection = new SelectionModel<PlayerData>(true, []);
    this.computeTotals();
  }

  minusAddOn(): void {
    this.selection.selected.forEach(item => {
      if (parseFloat(item.addOn) < parseFloat(this.addOnAmount)) {
        alert('Minus AddOn Rejected - ' + item.name + ' has not done an AddOn!');
      }
      else {
        item.addOn = (parseFloat(item.addOn) - parseFloat(this.addOnAmount)).toFixed(2);
      }
      this.dataSource = new MatTableDataSource<PlayerData>(this.playerData);
      this.dataSource.sort = this.sort;
    });
    this.selection = new SelectionModel<PlayerData>(true, []);
    this.computeTotals();
  }

  deletePlayer(): void {
    this.selection.selected.forEach(item => {
      const index: number = this.playerData.findIndex(d => d === item);
      this.playerData.splice(index, 1);
      this.dataSource = new MatTableDataSource<PlayerData>(this.playerData);
      this.dataSource.sort = this.sort;
    });
    this.selection = new SelectionModel<PlayerData>(true, []);
    if (this.playerData.length < 1) {
      this.playersHide = true;
    }
    this.computeTotals();
  }

  // Compute chop amount
  chopBtn(): void {
    const players = this.chopPlayers;
    const buyInAmount = this.buyInTotal;
    const addOnAmount = this.addOnTotal;
    const total = parseFloat(buyInAmount) + parseFloat(addOnAmount);
    const each  = total / players;
    this.chopAmount = each.toFixed(2);
  }


  // Compute BuyIn AddOn and LastMan amount
  chopAllBtn(): void {
    const players = this.chopPlayers;
    const buyInAmount = this.buyInTotal;
    const addOnAmount = this.addOnTotal;
    const lastManAmount = this.lastManTotal;
    const total = parseFloat(buyInAmount) +
      parseFloat(addOnAmount) +
      parseFloat(lastManAmount);
    const each  = total / players;
    this.chopAmount = each.toFixed(2);
  }


  // Compute last man chop amount
  chopLastManBtn(): void {
    const players = this.lastManPlayers;
    if (players > 0) {
      const lastManAmount = this.lastManTotal;
      const total = parseFloat(lastManAmount);
      const each  = total / players;
      this.lastManChopAmount = each.toFixed(2);
    }
    else {
      this.lastManChopAmount = (0.00.toFixed(2));
    }
  }


  // Compute winner amounts
  computeWinnerBtn(): void {
    this.winnerData = [];
    const buyInTotal = this.buyInTotal;
    const addOnTotal = this.addOnTotal;
    const total = Number(buyInTotal) + Number(addOnTotal);
    const each  = Number(total / 100);

    this.showWinnerTable(each, total);
  }

  // Compute Winners + LastMan amounts
  computeWinnerLastManBtn(): void {
    this.winnerData = [];
    const buyInTotal = this.buyInTotal;
    const addOnTotal = this.addOnTotal;
    const lastManTotal = this.lastManTotal;
    const total = Number(buyInTotal) + Number(addOnTotal) + Number(lastManTotal);
    const each  = Number(total / 100);

    this.showWinnerTable(each, total);
  }


  // Compute winner amounts

  // Compute Winners + LastMan amounts
  roundDownBtn(): void {
    alert('Currently under construction');
    // this.roundedWinnerData = [];
    // const buyInTotal = this.buyInTotal;
    // const addOnTotal = this.addOnTotal;
    // const lastManTotal = this.lastManTotal;
    // const total = Number(buyInTotal) + Number(addOnTotal) + Number(lastManTotal);
    // const each  = Number(total / 100);
    //
    // this.showWinnerTable(each);
  }

  // Show winner table
  showWinnerTable(each, total): void {

    const str1 = this.percentages.replace(/[^0-9.]/g, ' ').trim();
    if (str1 === null || str1 === '' || str1.split(/[^0-9.]/g).length === 0) {
        alert('You must add percentages for each winner, i.e. for 3 winners 50 30 20.');
        this.icmHide = true;
        this.winnersHide = true;
        this.playersHide = true;
        this.percentages = '';
        this.setWinnerFocus();
      }
    else {
      const percentArray: string[] = str1.split(/[^0-9.]/g);
      const count: number = percentArray.length;
      for (let i = 0; i < count; i++) {
        this.winnerData.push(
          {
            position: i + 1,
            amount: (Number(percentArray[i]) * each).toFixed(2)
          }
        );
      }

      //Save the payout amounts for the ICM calculations
      this.winnerPayouts = [];
      for (let i = 0; i < this.winnerData.length; i++) {
        this.winnerPayouts.push(this.winnerData[i].amount);
      }

      if (this.selectedPayout === "icmPayout") {
        this.getIcmPayout(count, total);
      }
      else {
        this.winnersHide = false;
        this.icmHide = true;

        setTimeout(() => { window.scrollTo(0,document.body.scrollHeight); }, 100);
      }
    }
  }


  getIcmPayout(percentCount, total): void {

    const chipStr = this.chipCounts.replace(/[^0-9.]/g, ' ').trim();
    const tempStr = chipStr.replace(/[, ]+/g, ' ').trim();
    const chipsArray: string[] = tempStr.split(' ');
    const chipCount: number = chipsArray.length;
    if (chipStr === null || chipStr === '' || chipStr.split(/[^0-9.]/g).length === 0) {
      alert('You must add chip counts for each player, in any order.');
      this.icmHide = true;
      this.winnersHide = true;
      this.playersHide = true;
      this.chipCounts = '';
      this.setIcmFocus();
    }
    else {
      if (chipCount != percentCount) {
        alert('The chip count does not match the percentages count!  Please correct and try again.')
        this.setIcmFocus();
      }

      this.icmPayoutArray = ['--chips'];
      for(let i = 0; i < chipsArray.length; i++) {
        this.icmPayoutArray.push(chipsArray[i]);
      }
      this.icmPayoutArray.push('--prizes');
      for (let i = 0; i < chipsArray.length; i++) {
        const prize: string[] = this.winnerPayouts[i].split('.');
        this.icmPayoutArray.push(prize[0])
      }
      console.log("icmPayoutArray 477: " + this.icmPayoutArray);
    }

    const params: HttpParams = new HttpParams({
      fromObject: {
        inputParms: this.icmPayoutArray,
        count: chipCount
      }
    });

    this.javaService.getIcmPayouts(params).subscribe(
      response => {
        this.icmPayoutResults = response;
        console.log('Payout results 496: ' + this.icmPayoutResults);
        this.icmData = [];
        for (let i = 0; i < percentCount; i++) {
          let payouts: string[] = this.icmPayoutResults[i].split(' ---> ');
          this.icmData.push(
            {
              icmPosition: i + 1,
              icmChips: chipsArray[i],
              icmPayout: payouts[1]
            }
          )
        }
        this.winnersHide = true;
        this.icmHide = false;
        setTimeout(() => { window.scrollTo(0,document.body.scrollHeight); }, 100);
      },
      error => {
        this.handleError(error);
        alert("icmPayouts failed: " + error);
      });
  }


  private handleError(error: any) {
    // In a real world app, we might use a remote logging infrastructure
    // We'd also dig deeper into the error to get a better message
    let errMsg = (error.message) ? error.message :
      error.status ? `${error.status} - ${error.statusText}` : 'Server error';
    // console.error(errMsg); // log to console instead
    alert("errorMsg: " + errMsg); // log to app
  }

  /**
   * This is user information for the Poker app.
   */
  getPokerAbout(): boolean {

    alert('This Poker app was written to help keep up with the numbers for poker tournaments. '
      + 'It is generic and will be useful for most tournaments, hopefully yours.'
      + '\n\n\tFollow these steps to get started:'
      + '\n\t1. The cursor will be focused on the name textbox, type in the first player\'s name.'
      + '\n\t2. Tab to each amount box and enter the amount for that column, or leave at 0.00.'
      + '\n\t3. Tab one more time to the \'Save Player\' button and hit enter, the first player is saved.'
      + '\n\t4. Now for each entrant type in the players name, change amounts if needed, and hit enter. '
      + 'The amounts you entered last will be the defaults for the next player. '
      + '\n\n\tThe app will keep totals of rebuys and addons as you play by using the buttons for rebuys and addons.'
      + '\n\tPlay around with the Chop and Winner sections to view the different results '
      + 'depending on the default amounts, totals and number of chops or winners. '
      + '\n\tFor winners, add rows and enter the percentage for each winning position. '
      + 'The percentages should be entered without decimals, i.e. 50, 33, 17 or 40, 30, 20, 10, etc, totaling 100.'
      + '\n\nHave Fun!');

    return true;
  }

}
