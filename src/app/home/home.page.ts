import { Component } from '@angular/core';
import { Geolocation } from '@ionic-native/geolocation/ngx'
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';

@Component({
	selector: 'app-home',
	templateUrl: 'home.page.html',
	styleUrls: ['home.page.scss'],
})
export class HomePage {

	latitude	
	longitude
	img
	constructor(private geolocation:Geolocation, private camera:Camera){}

	getLocation(){
		this.geolocation.getCurrentPosition().then((resp) => {
			this.latitude = resp.coords.latitude
			this.longitude= resp.coords.longitude

		}).catch((error) => {
			console.log('Error getting location', error);
		});
	}

	cameraPressed(){
		const options: CameraOptions = {
			quality: 100,
			destinationType: this.camera.DestinationType.FILE_URI,
			encodingType: this.camera.EncodingType.JPEG,
			mediaType: this.camera.MediaType.PICTURE
		}

		this.camera.getPicture(options).then((imageData) => {
			// imageData is either a base64 encoded string or a file URI
			// If it's base64 (DATA_URL):
			let base64Image = 'data:image/jpeg;base64,' + imageData;
		}, (err) => {
			console.log(err)
		});

	}

}