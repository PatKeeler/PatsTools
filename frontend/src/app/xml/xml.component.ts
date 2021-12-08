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

  inputXml: string;
  indentXmlAmount = 3;
  tempIndentXmlAmount = 0;
  isXmlDisabled: boolean;
  outputXml: string;

  constructor(private formatService: FormatService) { }


  ngOnInit(): void { }

  checkXmlIndentEnabled(): void {
    if (this.xmlIndentCheckBox.nativeElement.checked) {
      console.log('Xml indent is checked');
      this.isXmlDisabled = false;
      this.indentXmlAmount = this.tempIndentXmlAmount;
    }
    else {
      console.log('Xml indent is not checked');
      this.tempIndentXmlAmount = this.indentXmlAmount;
      this.indentXmlAmount = 0;
      this.isXmlDisabled = true;
    }
  }

  getFormattedXml(): void {

    const params: HttpParams = new HttpParams({
      fromObject: {
        inputXml: this.inputXml,
        indentXml: true,
        indentXmlAmount: this.indentXmlAmount
      }
    });

    this.formatService.getXml(params).subscribe(
      response => {
        // console.log(response.result);
        this.outputXml = response.result;
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
