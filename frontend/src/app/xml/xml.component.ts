import { Component, OnInit } from '@angular/core';
import { HttpParams } from '@angular/common/http';
import { FormatService} from '../format.service';


@Component({
  selector: 'app-xml',
  templateUrl: './xml.component.html',
  styleUrls: ['./xml.component.scss']
})

export class XmlComponent implements OnInit {

  outputXML: string;

  constructor(private formatService: FormatService) { }


  ngOnInit(): void {
  }

  getFormattedXml(): void {

    const xmlString = '<note><to>Pat</to><from>JoAnn</from><heading>Reminder</heading>' +
      '<body>Don\'t forget me this weekend!</body></note>';

    const xmlParameters = new HttpParams()
      .set('inputXML', xmlString)
      .set('indent', true)
      .set('indentAmount', '2');

    this.formatService.getXml(xmlParameters)
      .subscribe ((data) => {
        this.outputXML = data;
        console.log('response: ' + this.outputXML);
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
