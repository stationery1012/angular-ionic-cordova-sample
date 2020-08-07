import { Component } from '@angular/core'

declare var device

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  deviceInfo: string
  constructor() {
    document.addEventListener('deviceready', this.onDeviceReady, false)
  }
  onDeviceReady() {
    // Deviceプラグインで取得した情報をalertで表示
    this.deviceInfo = 'cordova:' + device.cordova + '\n'
    this.deviceInfo += 'model:' + device.model + '\n'
    this.deviceInfo += 'platform:' + device.platform + '\n'
    this.deviceInfo += 'uuid:' + device.uuid + '\n'
    this.deviceInfo += 'version:' + device.version + '\n'
    alert(this.deviceInfo)
  }
}
