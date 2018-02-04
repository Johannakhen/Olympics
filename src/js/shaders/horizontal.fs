precision highp float;

uniform vec3 color;
uniform sampler2D tex;
uniform sampler2D tex2;
uniform float percent;

varying vec2 vUv;


void main() {
	vec2 uv = vUv;
	uv.x = smoothstep( percent, 1., uv.x);
	vec2 uv2 = vUv;
	uv2.x = smoothstep( 0., percent, uv2.x);

	vec4 colorTex = texture2D( tex, uv ) * step(percent,vUv.x);
	colorTex += texture2D( tex2, uv2 ) * (1. - step(percent,vUv.x));

	gl_FragColor = vec4( colorTex );
}
