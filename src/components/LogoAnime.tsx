// Imports
import React, { useEffect, useRef } from "react";
import styled from "styled-components";
import gsap from "gsap";
import LogoCisco from "./LogoCisco";

// Component
const LogoAnime = () => {

	// Variables
	const logoRef = useRef<SVGSVGElement>(null);
	const tlLogo = useRef<GSAPTimeline|null>(null);

	// Animation du logo
	useEffect(() => {
		if (logoRef.current){
			// Variables
			const barres = logoRef.current.querySelectorAll('.barre');
			const lettres = logoRef.current.querySelectorAll('.lettre');
			// Settings
			gsap.set(barres, { alpha:0, scale:0.5, transformOrigin:'center center' });
			gsap.set(lettres, { alpha:0, scale:0.5, y:100, transformOrigin:'center center' });
			// Timeline
			tlLogo.current = gsap.timeline({ repeat:-1, repeatDelay:0.7 });
			tlLogo.current
			.to(barres, { duration:0.2, scale:1.3, alpha:1, stagger:{ each:0.1 }, ease:'power1.out' })
			.to(lettres, { duration:0.3, scale:1, alpha:1, y:0, stagger:{ each:0.1 }, ease:'power1.out' })
			.to(lettres, { duration:0.16, scale:1.3, stagger:{ each:0.05 }, ease:'power2.out' },'+=0.7')
			.to(lettres, { duration:0.3, scale:0.5, alpha:0, stagger:{ each:0.1 }, ease:'power1.out' },'-=0.2')
			.to(barres, { duration:0.3, scale:0.5, alpha:0, y:100, stagger:{ each:0.1 }, ease:'power1.out' })
		}
		return () => {
			if (tlLogo.current){
				tlLogo.current.kill();
			}
		};
	},[]);

	// Return
	return(
		<Wrapper>
			<LogoCisco ref={ logoRef }/>
		</Wrapper>
	);

};

// Styled
const Wrapper = styled.div`
	overflow: hidden;
`;

// Export
export default LogoAnime;