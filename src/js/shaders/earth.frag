uniform sampler2D texture;
// varying vec3 vNormal;
varying vec2 vUv;
uniform vec3 color;
uniform float percent;

void main() {
	vec2 uv = vUv;
	//uv.y = smoothstep( percent, 1., uv.y);
	// uv = uv * percent;
	vec4 colorTex = texture2D( texture, uv );
	gl_FragColor = vec4( colorTex.rgb, 1. );
}