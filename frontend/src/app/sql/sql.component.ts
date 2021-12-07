import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import {HttpHeaders, HttpParams} from '@angular/common/http';
import { FormatService} from '../format.service';
import {first, map, tap} from 'rxjs/operators';

@Component({
  selector: 'app-sql',
  templateUrl: './sql.component.html',
  styleUrls: ['./sql.component.scss']
})


export class SqlComponent implements OnInit {

  // ViewChild references html element
  // ElementRef references ts property
  @ViewChild('sqlIndentCheckBox') sqlIndentCheckBox: ElementRef;
  @ViewChild('addQuotesReformat') addQuotesReformat: ElementRef;
  @ViewChild('addQuotesOnly') addQuotesOnly: ElementRef;
  @ViewChild('removeQuotesReformat') removeQuotesReformat: ElementRef;
  @ViewChild('removeQuotesOnly') removeQuotesOnly: ElementRef;

  inputSQL: string;
  styleRadio: string;
  selectedStyle: string;
  indent: boolean;
  indentAmount = 3;
  tempIndentAmount = 0;
  isDisabled: boolean;
  addQuotesAndReformat: boolean;
  removeQuotesAndReformat: boolean;
  outputSQL: string;


  constructor(private formatService: FormatService) { }

  ngOnInit(): void {
    // console.log('SQL app started');
  }

  checkSqlIndentAmountEnabled(): void {
    if (this.sqlIndentCheckBox.nativeElement.checked) {
      console.log('XML indent is checked');
      this.isDisabled = false;
      this.indentAmount = this.tempIndentAmount;
    }
    else {
      console.log('XML indent is not checked');
      this.tempIndentAmount = this.indentAmount;
      this.indentAmount = 0;
      this.isDisabled = true;
    }
  }

  setAddQuotesReformat(): void {
    this.addQuotesOnly.nativeElement.checked = false;
    this.removeQuotesReformat.nativeElement.checked = false;
    this.removeQuotesOnly.nativeElement.checked = false;
  }

  setAddQuotesOnly(): void {
    this.addQuotesReformat.nativeElement.checked = false;
    this.removeQuotesReformat.nativeElement.checked = false;
    this.removeQuotesOnly.nativeElement.checked = false;
  }

  setRemoveQuotesReformat(): void {
    this.addQuotesOnly.nativeElement.checked = false;
    this.addQuotesReformat.nativeElement.checked = false;
    this.removeQuotesOnly.nativeElement.checked = false;
  }

  setRemoveQuotesOnly(): void {
    this.addQuotesOnly.nativeElement.checked = false;
    this.addQuotesReformat.nativeElement.checked = false;
    this.removeQuotesReformat.nativeElement.checked = false;
  }


  getFormattedSql(): void {

    const params: HttpParams = new HttpParams({
      fromObject: {
        inputSQL: this.inputSQL,
        indent: true,
        indentAmount: this.indentAmount,
        selectedStyle: 'block',
        addQuotesAndReformat: false,
        addQuotesOnly: false,
        removeQuotesAndReformat: false,
        removeQuotesOnly: false
      }
    });

    this.formatService.getSql(params).subscribe(
      response => {
        // console.log(response.result);
        this.outputSQL = response.result;
      },
      error => {
        console.log(error);
      });

    // this.formatService.getSql(sqlParameters).subscribe (data => {
    //   this.outputSQL = data.toString();
    //   console.log('response: ' + this.outputSQL);
    // });
  }

  /*
   * This is the about information for the SQL formatter.
   */
  getSqlAbout(): void {

    alert('This SQL formatter will format most generic sql commands but may not include all the '
      + 'most common commands at this point.'
      + '\n\nThis formatter is not a validator, it will format generic sql statements that are '
      + 'properly structured.'
      + '\n\nThis formatter will format a single line command: \n\t select this as '
      + 'that from something where you = me\nor a multi line command: \n\t select this as that'
      + '\n\t from something \n\t where you = me'
      + '\n\nThe \'Indent options\' are self evident: \n\t indent or not. \n\t indent amount. '
      + '\n\nThe Java String \'Quote\' options can be used when you need to paste the results into a Java '
      + 'program as a String:'
      + '\n\t The first option will format the input sql and add quotes for use as a Java String. '
      + '\n\t The second option will quote any data you paste into the input box, without '
      + 'formatting. '
      + '\n\nThe Java String \'Remove Quote\' options can be used when you need to cut a string from a '
      + 'java program and \nremove the quotes for use elsewhere, as follows: '
      + '\n\t The first option will remove quotes and reformat the input sql. '
      + '\n\t The second option will remove quotes only (any input), without formatting. '
      + '\n\n**NOTE - For the remove quotes to work please note things like:'
      + '\n\t For java Strings on multiple lines the \' and + should be on the same line.'
      + '\n\t All java Strings end with a semi-colon, so the last line should end with \' and ;.'
      + '\n\nIf you have suggestions for enhancements or encounter errors send an email '
      + 'to keelerpl@gmail.com and I\'ll look into it. ');
  }

}
