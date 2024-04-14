import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import { HttpParams } from '@angular/common/http';
import { JavaService} from '../java.service';


@Component({
  selector: 'app-xml',
  templateUrl: './xml.component.html',
  styleUrls: ['./xml.component.scss']
})

export class XmlComponent {

  // ViewChild references html element
  // ElementRef references ts property
  @ViewChild('xmlIndentCheckBox') xmlIndentCheckBox: ElementRef;

  inputXml: string;
  indentXmlAmount = 3;
  tempIndentXmlAmount = 0;
  isXmlDisabled: boolean;
  outputXml: string;

  constructor(private javaService: JavaService) { }


  checkXmlIndentEnabled(): void {
    if (this.xmlIndentCheckBox.nativeElement.checked) {
      this.isXmlDisabled = false;
      this.indentXmlAmount = this.tempIndentXmlAmount;
    }
    else {
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

    this.javaService.getXml(params).subscribe(
      response => {
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
