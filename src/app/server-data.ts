import { Server } from './server';

export const SERVERS: Server[] = [
  { id: 1, hostname: 'bork-router', ip: '10.0.0.1', description: 'pfsense router', ports: 22 },
  { id: 2, hostname: 'bork-switch', ip: '10.0.0.2', description: 'unify switch', ports: 8443 },
  { id: 3, hostname: 'bork-wifi', ip: '10.0.0.5', description: 'unify ap', ports: 8443 },
  { id: 4, hostname: 'borknuc', ip: '10.0.0.10', description: 'proxmox node1', ports: 8006 },
  { id: 5, hostname: 'borkli', ip: '10.0.0.11', description: 'proxmox node2', ports: 8006 },
  { id: 6, hostname: 'jbox', ip: '10.0.0.12', description: 'proxmox node3', ports: 8006 },
  { id: 7, hostname: 'stacktop', ip: '10.0.0.13', description: 'proxmox node4', ports: 8006 },
  { id: 8, hostname: 'borkjet', ip: '10.0.0.14', description: 'proxmox node5', ports: 8006 },
  { id: 9, hostname: 'bork-ldap', ip: '10.0.0.20', description: 'open ldap server', ports: 80 },
  { id: 10, hostname: 'borknas', ip: '10.0.0.50', description: 'truenas server', ports: 80 },
  { id: 11, hostname: 'borkhost-docker', ip: '10.0.0.68', description: 'docker for bork.host', ports: 9000 },
  { id: 12, hostname: 'homelab-docker', ip: '10.0.0.69', description: 'docker for homelab', ports: 9000 },
  { id: 13, hostname: 'borkhost', ip: '10.0.0.80', description: 'webserver', ports: 80 },
 
];