import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { HttpParams } from '@angular/common/http';
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
  @ViewChild('indentCheckBox') indentCheckBox: ElementRef;
  @ViewChild('addQuotesReformat') addQuotesReformat: ElementRef;
  @ViewChild('addQuotesOnly') addQuotesOnly: ElementRef;
  @ViewChild('removeQuotesReformat') removeQuotesReformat: ElementRef;
  @ViewChild('removeQuotesOnly') removeQuotesOnly: ElementRef;

  inputSQL: string;
  outputSQL: string;
  indentAmount: string;
  styleRadio: string;

  constructor(private formatService: FormatService) { }

  ngOnInit(): void {
    // this.http.get('/api/formatSql').pipe(
    //   first(),
    //   tap(result => console.log('Message from server: ', result)),
    //   map(result => this.message = (result as any).message)
    // ).subscribe();
  }

  // public getHeaders(): HttpHeaders {
  //   const headers = new HttpHeaders({
  //     'Content-Type':  'application/json',
  //     'Access-Control-Allow-Origin': `http://localhost/ReformatSql`
  //   });
  //   return headers;
  // }

  checkIndentAmountEnabled(): void {
    if (this.indentCheckBox.nativeElement.checked) {
      // Add code here
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

    const sqlString = 'select this as dis, that as dat where you != me';
    const sqlParameters = new HttpParams()
      .set('inputSQL', sqlString)
      .set('indent', true)
      .set('indentAmount', '2')
      .set('selectedStyle', 'block')
      .set('addQuotesAndReformat', true)
      .set('addQuotesOnly', false)
      .set('removeQuotesAndReformat', false)
      .set('removeQuotesOnly', false);

    this.formatService.getSql(sqlParameters).subscribe(
      response => {
        console.log(response);
        this.outputSQL = response;
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
