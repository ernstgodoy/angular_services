export class LoggingService {
  logStatusChange(status: string) {
    console.log('server status changed, new status: ' + status )
  }
}