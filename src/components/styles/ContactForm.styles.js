import styled from "styled-components";
export const ContactFormContentContainer = styled.div`
display: flex;
& form {
    box-sizing: border-box;
flex: 0 0 40%;
margin-right: 2rem;
}
`;
export const ContactFormGroup = styled.div`
display: flex;
flex-direction: column;
transition: all 0.3s ease-in-out;

& input {
     line-height: 1.3rem;
 }
& input, & textarea {
    padding: 1.3rem;
    outline: none;
    background: none;
    border-bottom: 1px solid green;
    margin: 1rem 0;
}
& input:focus, & textarea:focus {
    border-bottom: 1px solid white;
}
`;
export const ContactBox = styled.div`
display: flex;
flex: 0 0 30%;
flex-direction: column;

`;
export const ContactBoxItem = styled.div`
text-align: center;
background-color: #222;
border-radius: 0.7rem;
padding: 2rem;
border: 1px solid #2DC653;
margin-top: 1rem;
:hover {
    transform: scale(1.2);
}
& i {
    color: #2DC653;
    font-size: 3rem;
    margin-bottom: 0.7rem;
}

}
`;