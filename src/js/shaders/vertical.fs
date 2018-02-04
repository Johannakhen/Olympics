precision highp float;

uniform vec3 color;
uniform sampler2D tex;
uniform sampler2D tex2;
uniform float percent;

varying vec2 vUv;


void main() {
	vec2 uv = vUv;
	uv.y = smoothstep( percent, 1., uv.y);
	vec2 uv2 = vUv;
	uv2.y = smoothstep( 0., percent, uv2.y);

	vec4 colorTex = texture2D( tex, uv ) * step(percent,vUv.y);
	colorTex += texture2D( tex2, uv2 ) * (1. - step(percent,vUv.y));

	gl_FragColor = vec4( colorTex );
}
