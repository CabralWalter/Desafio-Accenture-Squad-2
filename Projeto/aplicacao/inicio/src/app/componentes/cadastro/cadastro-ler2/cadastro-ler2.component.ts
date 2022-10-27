import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTable } from '@angular/material/table';
import { CadastroLer2DataSource, CadastroLer2Item } from './cadastro-ler2-datasource';

@Component({
  selector: 'app-cadastro-ler2',
  templateUrl: './cadastro-ler2.component.html',
  styleUrls: ['./cadastro-ler2.component.css']
})
export class CadastroLer2Component implements AfterViewInit {
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatTable) table!: MatTable<CadastroLer2Item>;
  dataSource: CadastroLer2DataSource;

  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = ['id', 'name'];

  constructor() {
    this.dataSource = new CadastroLer2DataSource();
  }

  ngAfterViewInit(): void {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
    this.table.dataSource = this.dataSource;
  }
}
