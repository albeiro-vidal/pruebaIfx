import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { UsersServices } from '../services/users.service';
import { MatDialog } from '@angular/material/dialog';
import { UserInfoModalComponentComponent } from './user-info-modal-component/user-info-modal-component.component';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.scss']
})
export class UsuariosComponent implements OnInit {

  dataSource: MatTableDataSource<any> = new MatTableDataSource<any>();
  displayedColumns: string[] = ['id', 'nombre', 'email', 'ver'];
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(private usersService: UsersServices, private dialog: MatDialog) { }

  ngOnInit(): void {

    this.usersService.getUsers().subscribe({
      next: (response: any[]) => {
        this.dataSource = new MatTableDataSource(response);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
      },
      error: (res: any) => {
        console.log(res.error);
      },
    });

  }

  openUserInfoModal(usuario: any) {
    const dialogRef = this.dialog.open(UserInfoModalComponentComponent, {
      data: usuario,
      width: '80%',
    });
  
    dialogRef.afterClosed().subscribe(result => {
      console.log('El modal ha sido cerrado');
    });
  }

}






