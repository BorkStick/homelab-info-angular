import { Component, OnInit } from '@angular/core';
import { Server } from '../server';
import { SERVERS } from '../server-data';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {

  servers = SERVERS;

  selectedServer?: Server;

  constructor() { }

  ngOnInit(): void {
  }
  onSelect(server: Server): void {
    this.selectedServer = server;
  }

}
