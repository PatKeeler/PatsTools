import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import { HttpParams } from '@angular/common/http';
import { FormatService} from '../format.service';


@Component({
  selector: 'app-xml',
  templateUrl: './xml.component.html',
  styleUrls: ['./xml.component.scss']
})

export class XmlComponent implements OnInit {

  // ViewChild references html element
  // ElementRef references ts property
  @ViewChild('xmlIndentCheckBox') xmlIndentCheckBox: ElementRef;

  inputXML: string;
  outputXML: string;
  indentAmount = 3;
  tempIndentAmount = 0;
  isDisabled: boolean;

  constructor(private formatService: FormatService) { }


  ngOnInit(): void { }

  checkXmlIndentAmountEnabled(): void {
    if (this.xmlIndentCheckBox.nativeElement.checked) {
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

  getFormattedXml(): void {

    const params: HttpParams = new HttpParams({
      fromObject: {
        inputSQL: this.inputXML,
        indent: true,
        indentAmount: this.indentAmount
      }
    });

    this.formatService.getXml(params).subscribe(
      response => {
        // console.log(response.result);
        this.outputXML = response.result;
      },
      error => {
        console.log(error);
      });
  }

  /*
   * This is the about information for the XML formatter.
   */
  getXmlAbout(): void {

    alert('This XML formatter was created to remove invalid character errors during SoapUI '
      + 'processing that normally \noccur when you cut a SOAP message from a log and try '
      + 'to run it in SOAP UI (or any SOAP tool).\n\nThis formatter takes in an XML string, '
      + 'removes all white space and special characters and re-formats the XML.'
      + '\nThe output should run in SoapUI, error free.'
      + '\n\nThe \'Indent options\' are self evident: \n    indent or not. \n    indent amount. '
      + '\n\nIf you have suggestions for enhancements or encounter errors send an email '
      + 'to keelerpl@gmail.com and I\'ll \nlook into it.');
  }

}
