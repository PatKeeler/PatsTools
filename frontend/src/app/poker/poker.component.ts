import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { SelectionModel } from '@angular/cdk/collections';
import { MatTable } from '@angular/material/table';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';

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

@Component({
  selector: 'app-poker',
  templateUrl: './poker.component.html',
  styleUrls: ['./poker.component.scss']
})

export class PokerComponent implements OnInit {

  playerData: PlayerData[] = [ ];
  winnerData: WinnerData[] = [];

  winners3 = '50 30 20';
  winners4 = '40 30 20 10';
  winners5 = '40 23 16 12 9';
  winners6 = '36 22 16 11 9 6';
  winners7 = '33 20 15 11 8 7 6';
  winners8 = '31 20 13 10 8 7 6 5';
  winners9 = '29 18 13 10 8 7 6 5 4';
  winners10 = '27 16 13 10 9 7 6 5 4 3';

  // ViewChild references html element
  // ElementRef references ts property
  @ViewChild('playerTextEl') playerText: ElementRef;
  @ViewChild('winnerTextEl') winnerText: ElementRef;
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatTable) table: MatTable<PlayerData>;

  playersHide: boolean;
  winnersHide: boolean;

  playerName: string;
  buyInAmount: string;
  bountyAmount: string;
  feeAmount: string;
  lastManAmount: string;
  addOnAmount: string;

  totalPlayers: number;
  buyInTotal: string;
  bountyTotal: string;
  feeTotal: string;
  lastManTotal: string;
  addOnTotal: string;

  chopPlayers: number;
  chopAmount: string;
  lastManPlayers: number;
  lastManChopAmount: string;

  percentages: string;
  position: number;
  amount: string;

  displayedColumns: string[] = ['select', 'name', 'buyIn', 'bounty', 'fee', 'lastMan', 'addOn'];
  dataSource: MatTableDataSource<PlayerData>;
  selection = new SelectionModel<PlayerData>(true, []);

  winnerColumns: string[] = ['position', 'amount'];

  // private platformId: object;

  constructor() {
  }

  ngOnInit(): void {
    this.loadData();
    this.dataSource.sort = this.sort;
    this.winnerData = [];
    this.setFocus();
  }


  loadData(): void {
    this.dataSource = new MatTableDataSource(this.playerData);
    if (this.playerData.length === 0) {
      this.playersHide = true;
    }
    if (this.winnerData.length === 0) {
      this.winnersHide = true;
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
    else {
      this.computeTotals();
    }
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

    this.showWinnerTable(each);
  }

  // Compute Winners + LastMan amounts
  computeWinnerLastManBtn(): void {
    this.winnerData = [];
    const buyInTotal = this.buyInTotal;
    const addOnTotal = this.addOnTotal;
    const lastManTotal = this.lastManTotal;
    const total = Number(buyInTotal) + Number(addOnTotal) + Number(lastManTotal);
    const each  = Number(total / 100);

    this.showWinnerTable(each);
  }

  // Show winner table
  showWinnerTable(each): void {
    const str1 = this.percentages.replace(/\D+/, ' ').trim();
    if (str1 === null || str1 === '' || str1.split(/\D+/).length === 0) {
        alert('You must add percentages for each winner, i.e. for 3 winners 50 33 17.');
        this.winnersHide = true;
        this.percentages = '';
        this.setWinnerFocus();
      }
    else {
      const str2 = this.percentages.replace(/\D+/, ' ').trim();
      const percentArray: string[] = str2.split(/\D+/);
      const count: number = percentArray.length;
      for (let i = 0; i < count; i++) {
        this.winnerData.push(
          {position: i + 1, amount: (Number(percentArray[i]) * each).toFixed(2)}
        );
      }
      this.winnersHide = false;
    }
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
