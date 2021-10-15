import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-xml',
  templateUrl: './xml.component.html',
  styleUrls: ['./xml.component.scss']
})
export class XmlComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
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
