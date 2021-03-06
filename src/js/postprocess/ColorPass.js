import fs from "shaders/postprocess.fs"

export default class ColorPass extends WAGNER.Pass {

	constructor() {
		super()

		this.shader = WAGNER.processShader( WAGNER.basicVs, fs )
		
		this.mapUniforms( this.shader.uniforms )
		this.params.gamma = .3
		this.params.contrast = 2
		this.params.brightness = 0
		this.params.vignetteFallOff = .18;
		this.params.vignetteAmount = 1.17;
		this.params.invertRatio = 0;
		this.params.bw = 0;
	}

	createGui(gui){
		const f = gui.addFolder('vj_classic')
		f.add(this.params,'brightness',-2,2)
		f.add(this.params,'gamma',0,2)
		f.add(this.params,'contrast',0,2)
		f.add(this.params,'invertRatio',0,1).step(1)
		f.add(this.params,'bw',0,1).step(1)
		f.add(this.params,'vignetteFallOff',0,2).step(0.001)
		f.add(this.params,'vignetteAmount',0,2).step(0.001)
		f.open()
	}

	run( c ) {
		if(!this.shader){
			return
		}
		this.shader.uniforms.gamma.value = this.params.gamma
		this.shader.uniforms.contrast.value = this.params.contrast
		this.shader.uniforms.brightness.value = this.params.brightness
		this.shader.uniforms.vignetteFallOff.value = this.params.vignetteFallOff
		this.shader.uniforms.vignetteAmount.value = this.params.vignetteAmount
		this.shader.uniforms.invertRatio.value = this.params.invertRatio
		this.shader.uniforms.bw.value = this.params.bw
		c.pass( this.shader )
	}

}
