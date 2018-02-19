import * as THREE from 'three';
const texture = new THREE.TextureLoader().load('./texture/background.png')

export default class Background {
	constructor(config){

		this.config = config;
		this.group = new THREE.Group();
		this.planeLeft;
		this.planeRight;

		texture.magFilter = THREE.NearestMipMapNearestFilter;
		texture.minFilter = THREE.NearestMipMapNearestFilter;

		var geometry = new THREE.PlaneGeometry( config.width, config.height, config.detail );
		var material = new THREE.MeshBasicMaterial( {map: texture, color: 0xffffff, transparent: true, side: THREE.DoubleSide} );

		material.depthTest = false;
		material.depthWrite = false;

		this.planeLeft = new THREE.Mesh( geometry, material );
		this.group.add( this.planeLeft );

		this.planeRight = new THREE.Mesh( geometry, material );
		this.group.add( this.planeRight );

		if(config.style == "front")
		{
			material.blending = THREE.AdditiveBlending;
			material.opacity = 1;


		}else
		{
			material.opacity = 1;
		}

		var randomOffset = Math.random() * config.width * 0.6;

		this.planeLeft.position.x = -config.width*0.5 + randomOffset;
		this.planeRight.position.x = config.width*0.5 + randomOffset;

		return this;
	}

	setOpacity(opacity){
		var color = 0.1 + opacity * 0.9;

		this.planeLeft.material.color = new THREE.Color(color,color,color);	
		this.planeRight.material.color = new THREE.Color(color,color,color);	
	}

	move(){
		this.planeLeft.position.x += this.config.speed;
		this.planeRight.position.x += this.config.speed;

		if(this.planeRight.position.x < 0)
		{
			this.planeLeft.position.x += this.config.width;
			this.planeRight.position.x += this.config.width;

		}else if(this.planeLeft.position.x > 0)
		{
			this.planeLeft.position.x -= this.config.width;
			this.planeRight.position.x -= this.config.width;
		}	
	}
}