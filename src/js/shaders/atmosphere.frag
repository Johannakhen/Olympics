varying vec3 vNormal;
void main() {
    float intensity = pow( 0.8 - dot( vNormal, vec3( 0, 0, 1.0 ) ), 12.0 );
    gl_FragColor = vec4( 0.5, 0.5, 1.0, .3 ) * intensity;
}