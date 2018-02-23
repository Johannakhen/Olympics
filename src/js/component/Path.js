import React, { Component } from 'react'
import data from '../data'
console.log(data.cityPosition)

export default class Path extends Component {

    constructor (){
        super()
        this.cities = data.cityPosition
        this.showCountry = this.showCountry.bind(this)
      }

    showCountry(e){
        this.pane = document.querySelector('#panel')
        this.paneText = this.pane.querySelector('.align__right')
        console.log(this.pane,this.paneText)

        var el = e.target.parentElement
        el.classList.add('clicked')
        var city = el.getAttribute('id')
        var i = el.classList.contains('second') ? 'text2': 'text'; // text index
        var text  
        var rightCity = this.cities.map( (c,index) => {
            var g = c[0]

            if( g.city == city) {
                this.props.globe.center(g)
                text = g[i]
                this.paneText.innerHTML = text
                console.log(g,text)
                this.pane.classList.add('show')
            }
        })
    }
    render(){
        return(
            <svg width="160px" height="584px" viewBox="0 0 160 584" version="1.1" xmlns="http://www.w3.org/2000/svg">
            <defs>
                <circle id="path-1" cx="8" cy="4" r="4"></circle>
                <circle id="path-2" cx="8" cy="73" r="5"></circle>
                <circle id="path-3" cx="42" cy="137" r="4"></circle>
                <circle id="path-4" cx="20" cy="210" r="4"></circle>
                <circle id="path-5" cx="9" cy="284" r="4"></circle>
                <circle id="path-6" cx="42" cy="352" r="4"></circle>
                <circle id="path-7" cx="55" cy="413" r="4"></circle>
                <circle id="path-8" cx="39" cy="487" r="4"></circle>
                <circle id="path-9" cx="53" cy="563" r="4"></circle>
            </defs>
            <g id="Introduction" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd" transform="translate(-1050.000000, -108.000000)">
                <g id="Group-4" transform="translate(1049.000000, 109.000000)">
                    <g id="Group-2" transform="translate(102.000000, 1.000000)">
                        <path d="M7.73931492,5 C-2.57977164,32.1715987 -2.57977164,54.5429259 7.73931492,72.1139818 C23.2179448,98.4705655 39.5621055,114.440177 42.1346068,140.141113 C44.7071082,165.842048 27.8488299,181.884511 21.0673034,205.26912 C14.2857769,228.653728 12.4236309,237.586228 11.3344081,259.154235 C10.8424218,268.896195 8.75034504,278.987221 7.98455628,289.111285 C7.0549431,301.401179 8.07977932,313.739758 16.2939888,325.561681 C31.2748292,347.122166 47.245756,348.526293 55.8917256,371.147426 C64.5376952,393.768559 48.215185,429.417681 42.1346068,469.508387 C36.0540287,509.599094 42.9261569,548.308535 55.8917256,567.155693" id="Path-2" stroke="#FFFFFF" opacity="0.200000003" strokeDasharray="3"></path>
                        <path d="M7.73931492,5 C-2.57977164,32.1715987 -2.57977164,54.5429259 7.73931492,72.1139818" id="Path-2" stroke="#FFFFFF" opacity="0.4" strokeDasharray="3"></path>
                        <g id="Oval">
                            <circle stroke="#FFFFFF" strokeWidth="4" cx="8" cy="4" r="2"></circle>
                            <circle stroke="#000000" strokeWidth="2" cx="8" cy="4" r="3"></circle>
                            <circle stroke="#FFFFFF" strokeWidth="1" cx="8" cy="4" r="3.5"></circle>
                        </g>
                        <g id="Oval" opacity="0.4">
                            <circle stroke="#FFFFFF" strokeWidth="4" cx="8" cy="73" r="3"></circle>
                            <circle stroke="#000000" strokeWidth="2" cx="8" cy="73" r="4"></circle>
                            <circle stroke="#FFFFFF" strokeWidth="1" cx="8" cy="73" r="4.5"></circle>
                        </g>
                        <g id="Oval">
                            <use fill="#121212" fillRule="evenodd"></use>
                            <circle stroke="#414141" strokeWidth="1" cx="42" cy="137" r="3.5"></circle>
                        </g>
                        <g id="Oval">
                            <use fill="#121212" fillRule="evenodd"></use>
                            <circle stroke="#414141" strokeWidth="1" cx="20" cy="210" r="3.5"></circle>
                        </g>
                        <g id="Oval">
                            <use fill="#121212" fillRule="evenodd"></use>
                            <circle stroke="#414141" strokeWidth="1" cx="9" cy="284" r="3.5"></circle>
                        </g>
                        <g id="Oval">
                            <use fill="#121212" fillRule="evenodd"></use>
                            <circle stroke="#414141" strokeWidth="1" cx="42" cy="352" r="3.5"></circle>
                        </g>
                        <g id="Oval">
                            <use fill="#121212" fillRule="evenodd"></use>
                            <circle stroke="#414141" strokeWidth="1" cx="55" cy="413" r="3.5"></circle>
                        </g>
                        <g id="Oval">
                            <use fill="#121212" fillRule="evenodd"></use>
                            <circle stroke="#414141" strokeWidth="1" cx="39" cy="487" r="3.5"></circle>
                        </g>
                        <g id="Oval">
                            <use fill="#121212" fillRule="evenodd"></use>
                            <circle stroke="#414141" strokeWidth="1" cx="53" cy="563" r="3.5"></circle>
                        </g>
                    </g>
                    <g id="Group-3" transform="translate(13.000000, 0.000000)" fill="#FFFFFF" fontFamily="CM, Calibre" fontSize="12" fontWeight="400">
                        <text id="Anvers" className="path" cursor="pointer" onClick={(event) => this.showCountry(event)}>
                            <tspan x="0.268" y="8">Post-war Climate</tspan>
                        </text>
                    </g>
                    <g id="Group-3" transform="translate(45.000000, 69.000000)" fill="#FFFFFF" fontFamily="CM, Calibre" fontSize="12" fontWeight="400">
                        <text id="Berlin" className="path" cursor="pointer" onClick={(event) => this.showCountry(event)}>
                            <tspan x="2.784" y="8">Confusion </tspan>
                        </text>
                    </g>
                    <g id="Group-3" transform="translate(0.000000, 206.000000)" fill="#FFFFFF" fontFamily="CM, Calibre" fontSize="12" fontWeight="400">
                        <text id="Melbourne" className="path" cursor="pointer" onClick={(event) => this.showCountry(event)}>
                            <tspan x="0.432" y="8">Endangered Neutrality</tspan>
                        </text>
                    </g>
                    <g id="Group-3" transform="translate(59.000000, 350.000000)" fill="#FFFFFF" fontFamily="CM, Calibre" fontSize="12" fontWeight="400">
                        <text id="Moscou" className="path" cursor="pointer" onClick={(event) => this.showCountry(event)}>
                            <tspan x="0.236" y="8">Values Flouted</tspan>
                        </text>
                    </g>
                    <g id="Group-3" transform="translate(89.000000, 483.000000)" fill="#FFFFFF" fontFamily="CM, Calibre" fontSize="12" fontWeight="400">
                        <text id="Anvers" className="path second" cursor="pointer" onClick={(event) => this.showCountry(event)}>
                            <tspan x="0.608" y="8">Boycott</tspan>
                        </text>
                    </g>
                    <g id="Group-3" transform="translate(67.000000, 560.000000)" fill="#FFFFFF" fontFamily="CM, Calibre" fontSize="12" fontWeight="400">
                        <text id="Berlin" className="path second" cursor="pointer" onClick={(event) => this.showCountry(event)}>
                            <tspan x="28.628" y="8">Breach of </tspan>
                            <tspan x="6.872" y="20">Human Rights</tspan>
                        </text>
                    </g>
                    <g id="Group-3" transform="translate(60.000000, 133.000000)" fill="#FFFFFF" fontFamily="CM, Calibre" fontSize="12" fontWeight="400">
                        <text id="Mexico" className="path" cursor="pointer" onClick={(event) => this.showCountry(event)}>
                            <tspan x="0.628" y="8">A Violent Turn</tspan>
                        </text>
                    </g>
                    <g id="Group-3" transform="translate(12.000000, 280.000000)" fill="#FFFFFF" fontFamily="CM, Calibre" fontSize="12" fontWeight="400">
                        <text id="Montreal" className="path" cursor="pointer" onClick={(event) => this.showCountry(event)}>
                            <tspan x="0.964" y="8">Oath’s Instigation</tspan>
                        </text>
                    </g>
                    <g id="Group-3" transform="translate(72.000000, 409.000000)" fill="#FFFFFF" fontFamily="CM, Calibre" fontSize="12" fontWeight="400">
                        <text id="Rio" className="path" cursor="pointer" onClick={(event) => this.showCountry(event)}>
                            <tspan x="0.752" y="8">Struggle shout</tspan>
                        </text>
                    </g>
                </g>
            </g>
        </svg>
        )
    }
}