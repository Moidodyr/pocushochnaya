import styled from 'styled-components'


export const Flex = styled.div`
    margin: ${props => props.mn || '0'};
    margin-top: ${props => props.mt || '0'};
    margin-right: ${props => props.mr || '0'};
    margin-bottom: ${props => props.mb || '0'};
    margin-left: ${props => props.ml || '0'};

    padding: ${props => props.pd || '0'};
    padding-top: ${props => props.pt || '0'};
    padding-right: ${props => props.pr || '0'};
    padding-bottom: ${props => props.pb || '0'};
    padding-left: ${props => props.pl || '0'};
    
    display: ${props => props.display};
    flex-direction: ${props => props.direction || 'row'};
    flex-wrap: ${props => props.wrap || 'no-wrap'};
    justify-content: ${props => props.justify || 'stretch'};
    align-items: ${props => props.align || 'stretch'};
`