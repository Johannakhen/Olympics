uniform sampler2D texture;
// varying vec3 vNormal;
varying vec2 vUv;
uniform vec3 color;

void main() {
	vec4 colorTex = texture2D( texture, vUv );
	gl_FragColor = vec4( colorTex.rgb, 1.0 );
}