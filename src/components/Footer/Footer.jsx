import React from 'react';
import {
    FooterContainer,
    FooterContent,
    FooterText,
    FooterLinks,
    FooterLink,
} from './styleComponents';

export default function Footer() {
    return (
        <FooterContainer>
            <FooterContent>
                <FooterText>© {new Date().getFullYear()} Interview Insights. All rights reserved.</FooterText>
                <FooterLinks>
                    <FooterLink href="/">About Us</FooterLink>
                    <FooterLink href="/">Contact</FooterLink>
                    <FooterLink href="/">Privacy Policy</FooterLink>
                </FooterLinks>
            </FooterContent>
        </FooterContainer>
    );
}
