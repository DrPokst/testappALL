import { Injectable } from '@angular/core';
import * as XLSX from 'xlsx';

@Injectable({
  providedIn: 'root'
})
export class BOMService {

constructor() { }

public importFromFile(bstr: string): XLSX.AOA2SheetOpts {
  /* read workbook */
  const wb: XLSX.WorkBook = XLSX.read(bstr, { type: 'binary' });

  /* grab first sheet */
  const wsname: string = wb.SheetNames[0];
  const ws: XLSX.WorkSheet = wb.Sheets[wsname];

  /* save data */
  const data = (XLSX.utils.sheet_to_json(ws, { header: 1 })) as XLSX.AOA2SheetOpts;

  return data;
}

}
